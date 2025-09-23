import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from  '../assets/logo.png'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

   const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
    { name: "Vision", path: "#vision" },
     { name: "CEODesk", path: "#ceodesk" },
    { name: "Team", path: "#team" },
    { name: "Contact", path: "#contact" },
   
  ];


    const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <nav className="relative px-4 md:px-20 py-4 flex justify-between items-center">
          {/* Logo */}

          <div className="w-[120px]">
 <NavLink to="/">
            <img src={Logo} alt="Logo" className="w-full" />
          </NavLink>
          </div>
         

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
               <a
                  href={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="text-sm font-semibold text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  {link.name}
                </a>
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
  <div className="fixed inset-0 z-50 flex">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      onClick={() => setMenuOpen(false)}
    ></div>

    {/* Sidebar */}
    <nav className="relative flex flex-col w-4/5 max-w-xs h-full bg-white shadow-2xl rounded-r-3xl p-6 overflow-y-auto animate-slide-in-left">
      
      {/* Logo & Close */}
      <div className="flex items-center justify-between mb-8">
        <NavLink to="/" className="w-[120px]">
          <img src={Logo} alt="Logo" className="w-full" />
        </NavLink>
        <button
          onClick={() => setMenuOpen(false)}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <svg
            className="h-6 w-6 text-gray-500"
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

      {/* Nav Links */}
      <ul className="flex flex-col gap-4 mb-6">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.path}
              onClick={(e) => {
                handleScroll(e, link.path);
                setMenuOpen(false);
              }}
              className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div className="mt-auto flex flex-col gap-3">
        <NavLink
          to="/signin"
          className="block w-full text-center px-4 py-3 text-sm font-semibold bg-gray-100 rounded-xl hover:bg-gray-200 transition"
        >
          Sign In
        </NavLink>
        <NavLink
          to="/signup"
          className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition"
        >
          Sign Up
        </NavLink>
        <p className="text-xs text-center text-gray-400 mt-6">
   © 2025 by SSI. Powered and secured by SATSON INNOVATION PVT LTD
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
