import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo-black.webp" className="h-8" alt="Logo" />
        </Link>

        {/* Right Side: Cart + Auth Buttons */}
        <div className="flex items-center space-x-3 md:order-2">
          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative">
            <span role="img" aria-label="cart" className="text-2xl">
              🛒
            </span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Auth Buttons */}
          <button
            onClick={handleLogin}
            className="hidden md:block text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
          >
            Login
          </button>
          <button
            onClick={handleRegister}
            className="hidden md:block text-green-800 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-150"
          >
            Register
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M2 2L15 12M15 2L2 12" : "M1 1h15M1 7h15M1 13h15"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1 transition-all duration-300`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/category"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700"
              >
                Shop All
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700"
              >
                Contact
              </Link>
            </li>
            {/* Show Login/Register inside mobile menu */}
            <li className="md:hidden flex gap-2 mt-3">
              <button
                onClick={handleLogin}
                className="text-white bg-green-800 hover:bg-green-900 font-medium rounded-lg text-sm px-4 py-2"
              >
                Login
              </button>
              <button
                onClick={handleRegister}
                className="text-green-800 border border-green-700 hover:bg-green-700 hover:text-white font-medium rounded-lg text-sm px-4 py-2"
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
