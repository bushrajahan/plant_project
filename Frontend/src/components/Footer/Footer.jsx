import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:items-start">
          {/* Logo and Brand */}
          <div className="mb-6 md:mb-0">
            <img
              src="/logo-black.webp"
              alt="Plant & Seed Logo"
              className="w-36"
            />
         
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Shop</h2>
              <ul className="text-white-300 font-medium">
                <li className="mb-4">
                  <a href="/shop" className="hover:underline">
                    All Products
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/category" className="hover:underline">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="/plants" className="hover:underline">
                    Plants
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
              <ul className="text-white-300 font-medium">
                <li className="mb-4">
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/care-tips" className="hover:underline">
                    Plant Care Tips
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Connect</h2>
              <ul className="text-white-300 font-medium">
                <li className="mb-4">
                  <a href="https://www.facebook.com" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.instagram.com" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white-300 sm:text-center">
            © 2025{" "}
            <a href="/" className="hover:underline">
              Plant & Seed Co.
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
            <a
              href="https://www.facebook.com"
              className="hover:text-gray-200"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12.07c0-5.51-4.49-10-10-10S2 6.56 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.77c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.19 22 17.06 22 12.07z"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com"
              className="hover:text-gray-200"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.96.24 2.42.402a4.92 4.92 0 0 1 1.71 1.01 4.92 4.92 0 0 1 1.01 1.71c.163.46.348 1.25.402 2.42.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.402 2.42a4.92 4.92 0 0 1-1.01 1.71 4.92 4.92 0 0 1-1.71 1.01c-.46.163-1.25.348-2.42.402-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.42-.402a4.92 4.92 0 0 1-1.71-1.01 4.92 4.92 0 0 1-1.01-1.71c-.163-.46-.348-1.25-.402-2.42C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.054-1.17.24-1.96.402-2.42a4.92 4.92 0 0 1 1.01-1.71 4.92 4.92 0 0 1 1.71-1.01c.46-.163 1.25-.348 2.42-.402C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.735 0 8.332.012 7.052.07 5.78.127 4.838.31 4.067.57a7.092 7.092 0 0 0-2.55 1.68A7.092 7.092 0 0 0 .57 4.067C.31 4.838.127 5.78.07 7.052.012 8.332 0 8.735 0 12c0 3.265.012 3.668.07 4.948.057 1.272.24 2.214.5 2.985a7.092 7.092 0 0 0 1.68 2.55 7.092 7.092 0 0 0 2.55 1.68c.771.26 1.713.443 2.985.5C8.332 23.988 8.735 24 12 24s3.668-.012 4.948-.07c1.272-.057 2.214-.24 2.985-.5a7.092 7.092 0 0 0 2.55-1.68 7.092 7.092 0 0 0 1.68-2.55c.26-.771.443-1.713.5-2.985.058-1.28.07-1.683.07-4.948s-.012-3.668-.07-4.948c-.057-1.272-.24-2.214-.5-2.985a7.092 7.092 0 0 0-1.68-2.55 7.092 7.092 0 0 0-2.55-1.68c-.771-.26-1.713-.443-2.985-.5C15.668.012 15.265 0 12 0z"/>
              </svg>
            </a>

            <a
              href="https://www.twitter.com"
              className="hover:text-gray-200"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.38 4.482A13.957 13.957 0 0 1 1.671 3.15 4.918 4.918 0 0 0 3.195 9.722 4.902 4.902 0 0 1 .964 9.1v.062a4.918 4.918 0 0 0 3.946 4.816 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.414A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.03 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
