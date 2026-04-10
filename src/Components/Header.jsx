import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi"; // import the icon
import TopNav from "./TopNav";

const Header = ({ openModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* NAVBAR */}
      <TopNav />
      <nav className="w-full flex justify-between items-center px-6 md:px-[80px] py-[10px] bg-blue-100 sticky top-0 z-50">

        {/* Logo */}
        <div className="w-[60%] md:w-[18%]">
          <img src="/Sarixra-logo-2.png" alt="logo" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex justify-between items-center gap-10">

          <ul className="flex gap-8 font-semibold">

            {["Home", "About", "Services", "Our Projects", "Contact Us"].map((item, index) => (
              <li key={index} className="relative group cursor-pointer">
                <a
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="transition-colors duration-300"
                >
                  {item}
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}

          </ul>

          {/* Button */}
          <button
            onClick={openModal}
            className="flex items-center gap-2 bg-black text-white py-2 px-6 rounded-lg hover:bg-white hover:text-black border border-black transition"
          >
            Get Start
            <FiArrowRight className="w-5 h-5" />
          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button onClick={toggleMenu} className="md:hidden text-4xl">
          ☰
        </button>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-blue-100 font-semibold">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/ourprojects">Our Projects</a>
          <a href="/contactus">Contact Us</a>
        </div>
      )}
    </>
  );
};

export default Header;