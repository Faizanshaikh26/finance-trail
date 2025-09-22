import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Vision", path: "/vision" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <nav className="relative px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            Logo
          </NavLink>

          {/* Burger Icon (Mobile) */}
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-blue-600 p-3"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                className="block h-5 w-5 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>

          {/* Center Nav (Desktop) */}
          <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition ${
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-400 hover:text-gray-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Buttons */}
          <div className="hidden lg:flex lg:items-center">
            <NavLink
              to="/signin"
              className="lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            >
              Sign Up
            </NavLink>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="navbar-menu relative z-50">
            <div
              className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
              onClick={() => setMenuOpen(false)}
            ></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              {/* Logo & Close */}
              <div className="flex items-center mb-8">
                <NavLink
                  to="/"
                  className="mr-auto text-2xl font-bold text-blue-600"
                >
                  Logo
                </NavLink>
                <button
                  className="navbar-close"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Nav Links */}
              <ul>
                {navLinks.map((link, idx) => (
                  <li key={idx} className="mb-1">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block p-4 text-sm font-semibold rounded transition ${
                          isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                        }`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Bottom Buttons */}
              <div className="mt-auto pt-6">
                <NavLink
                  to="/signin"
                  className="block px-4 py-3 mb-3 text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block px-4 py-3 mb-2 text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                >
                  Sign Up
                </NavLink>
                <p className="my-4 text-xs text-center text-gray-400">
                  Copyright © 2025
                </p>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Spacer div so content doesn't hide behind fixed navbar */}
      <div className="pt-[77px] md:pt-[69px]"></div>
    </>
  );
};

export default Navbar;
