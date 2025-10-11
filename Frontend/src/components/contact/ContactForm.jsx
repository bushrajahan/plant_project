import React, { useState } from "react";

export default function ContactForm({
  address = "123 Main Street\nDhaka, Bangladesh\n+880 1XXX-XXXXXX",
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    return e;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate();
    if (Object.keys(eObj).length) {
      setErrors(eObj);
      return;
    }

    try {
      setStatus("sending");
      await new Promise((r) => setTimeout(r, 700)); // mock API
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Contact Us
      </h2>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-green-800">
        {/* Left: Contact Form */}
        <div className="bg-white rounded-2xl shadow p-6">
          <form onSubmit={handleSubmit} noValidate>
            <label className="block mb-3">
              <span className="text-sm font-medium">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  errors.name ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </label>

            <label className="block mb-3">
              <span className="text-sm font-medium">Email</span>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="you@example.com"
                type="email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </label>

            <label className="block mb-4">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  errors.message ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Write your message..."
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 bg-green-800 text-white font-medium shadow hover:bg-indigo-700 focus:outline-none"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-green-600 text-sm">
                  Message sent. We'll contact you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Try again later.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Right: Address and Map */}
        <div className="bg-gray-50 rounded-2xl shadow-inner p-6 flex flex-col justify-between">
          <div>
            <strong className="block text-base mb-2">Our Address</strong>
            <div className="text-sm text-gray-700 whitespace-pre-line">
              {address}
            </div>
          </div>

          <div className="mt-6 w-full h-64">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930571616!2d90.2548753111914!3d23.781067237059982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1759685417711!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
