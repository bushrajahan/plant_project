import React from "react";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from '../components/contact/ContactForm'
function Contact() {
  return (
   <div className="m-12">
    <ContactHeader></ContactHeader>
    <ContactForm></ContactForm>
   </div>
  );
}

export default Contact;
