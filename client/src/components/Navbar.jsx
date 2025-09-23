import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ArrowDown } from "lucide-react";
import application from "../assets/Application form Loan - Bharath Kapital-2.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // for hover dropdown

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services", dropdown: true },
    { name: "Vision", path: "#vision" },
    { name: "CEODesk", path: "#ceodesk" },
    { name: "Team", path: "#team" },
    { name: "Contact", path: "#contact" },
  ];

  const serviceItems = [
    "Personal Loans",
    "Industrial Finance",
    "Private Finance",
    "Loan Against Property (LAP)",
    "Vehicle Loans",
    "Gold Loans",
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
          <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 relative">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="relative group"
                onMouseEnter={() => link.dropdown && setServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setServicesOpen(false)}
              >
                <a
                  href={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="text-sm font-semibold text-gray-600 hover:text-blue-600 cursor-pointer flex items-center gap-1"
                >
                  {link.name}
                  {link.dropdown && (
                    <ArrowDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown */}
                {link.dropdown && servicesOpen && (
                  <ul className="absolute top-full left-0  w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {serviceItems.map((service, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Right Buttons */}
          <div className="hidden lg:flex lg:items-center">
            <a
              href={application}
              download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3C50E9] to-[#00CFFF] text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              Application Form
              <ArrowDown className="h-4 w-4" />
            </a>
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

                    {/* Mobile dropdown for Services */}
                    {link.dropdown && (
                      <ul className="ml-4 mt-2 flex flex-col gap-2">
                        {serviceItems.map((service, i) => (
                          <li key={i}>
                            <a
                              href="#"
                              className="block text-sm text-gray-600 hover:text-blue-600 transition"
                            >
                              {service}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={application}
                  download
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3C50E9] to-[#00CFFF] text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                >
                  Application Form
                  <ArrowDown className="h-4 w-4" />
                </a>
                <p className="text-xs text-center text-gray-400 mt-6">
                  © 2025 by SSI. Powered and secured by SATSON INNOVATION PVT
                  LTD
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
