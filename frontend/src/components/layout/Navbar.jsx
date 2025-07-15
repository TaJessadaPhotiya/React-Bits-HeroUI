import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu) => {
    setSelected(menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold tracking-wide">Real Estate</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("home")}
            className={`text-white px-4 py-2 transition-all duration-300 ease-in-out relative group ${
              selected === "home" ? "text-indigo-300" : "hover:text-indigo-300"
            }`}
          >
            Home
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-indigo-300 transition-transform duration-300 ease-in-out origin-left ${
                selected === "home"
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("about")}
            className={`text-white px-4 py-2 transition-all duration-300 ease-in-out relative group ${
              selected === "about" ? "text-indigo-300" : "hover:text-indigo-300"
            }`}
          >
            About
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-indigo-300 transition-transform duration-300 ease-in-out origin-left ${
                selected === "about"
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("services")}
            className={`text-white px-4 py-2 transition-all duration-300 ease-in-out relative group ${
              selected === "services"
                ? "text-indigo-300"
                : "hover:text-indigo-300"
            }`}
          >
            Services
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-indigo-300 transition-transform duration-300 ease-in-out origin-left ${
                selected === "services"
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </Link>
          <Link
            to="properties"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("properties")}
            className={`text-white px-4 py-2 transition-all duration-300 ease-in-out relative group ${
              selected === "properties"
                ? "text-indigo-300"
                : "hover:text-indigo-300"
            }`}
          >
            Properties
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-indigo-300 transition-transform duration-300 ease-in-out origin-left ${
                selected === "properties"
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("contact")}
            className={`text-white px-4 py-2 transition-all duration-300 ease-in-out relative group ${
              selected === "contact"
                ? "text-indigo-300"
                : "hover:text-indigo-300"
            }`}
          >
            Contact
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-indigo-300 transition-transform duration-300 ease-in-out origin-left ${
                selected === "contact"
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            ref={buttonRef}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden text-center overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <div className="py-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("home")}
            className={`block text-white py-2 px-4 transition-all duration-300 ease-in-out ${
              selected === "home" ? "text-indigo-300" : "hover:text-indigo-300"
            }`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("about")}
            className={`block text-white py-2 px-4 transition-all duration-300 ease-in-out ${
              selected === "about" ? "text-indigo-300" : "hover:text-indigo-300"
            }`}
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("services")}
            className={`block text-white py-2 px-4 transition-all duration-300 ease-in-out ${
              selected === "services"
                ? "text-indigo-300"
                : "hover:text-indigo-300"
            }`}
          >
            Services
          </Link>
          <Link
            to="properties"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("properties")}
            className={`block text-white py-2 px-4 transition-all duration-300 ease-in-out ${
              selected === "properties"
                ? "text-indigo-300"
                : "hover:text-indigo-300"
            }`}
          >
            Properties
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("contact")}
            className={`block text-white py-2 px-4 transition-all duration-300 ease-in-out ${
              selected === "contact"
                ? "text-indigo-300"
                : "hover:text-indigo-300"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
