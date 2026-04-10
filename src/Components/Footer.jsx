import React from "react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover py-10 flex flex-col text-left items-start text-black"
      style={{ backgroundImage: "url('/footer-back.jpg')" }}
    >
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-6 w-full items-start">

        {/* LEFT */}
        <div className="w-full md:w-2/3 flex flex-col gap-5 md:gap-8z items-start text-left">

          <div className="w-[100%] md:w-[55%]">
            <img src="Sarixra-logo-2.png" alt="logo" />
          </div>

          <p className="w-full md:w-2/3 text-sm md:text-base text-gray-700 text-justify">
            Sarixra is a technology-driven company focused on delivering scalable,
            secure, and high-performance software solutions. We help startups,
            enterprises, and growing businesses transform their ideas into powerful
            digital products.
          </p>

          <hr className="w-[67%] border-gray-500" />

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 justify-start">
            {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-black/10 hover:bg-blue-500 transition duration-300 hover:scale-105"
              >
                <Icon className="w-5 h-5 text-black hover:text-white transition" />
              </a>
            ))}
          </div>


        </div>

        {/* QUICK LINKS */}
        <div className="w-full md:w-1/3 text-left">
          <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>

          <ul className="space-y-3 text-gray-700">
            <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="/ourprojects" className="hover:text-blue-500 transition">Our Projects</a></li>
            <li><a href="/contactus" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="w-full md:w-1/3 text-left">
          <h3 className="text-lg font-semibold mb-4 text-black">Contact Us</h3>

          <ul className="space-y-4 text-md text-gray-700">

            {/* EMAIL */}
            <li>
              <a
                href="mailto:connect.sarixra@gmail.com"
                className="flex items-center gap-2 hover:text-blue-500 transition"
              >
                <Mail className="w-4 h-4" />
                connect.sarixra@gmail.com
              </a>
            </li>

            {/* PHONE */}
            <li>
              <a
                href="tel:+918999294108"
                className="flex items-center gap-2 hover:text-blue-500 transition"
              >
                <Phone className="w-4 h-4" />
                +91 89992 94108
              </a>
            </li>

            {/* LOCATION */}
            <li>
              <a
                href="https://www.google.com/maps?q=Nagpur,Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500 transition"
              >
                <MapPin className="w-4 h-4" />
                Nagpur, Maharashtra, India
              </a>
            </li>

          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 text-black">Our Location</h3>

          <div className="w-full h-[200px]">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=Nagpur,Maharashtra&output=embed"
              className="w-full h-[70%] border-0 rounded-lg shadow-md"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>

      <hr className="w-full border-gray-300" />

      {/* COPYRIGHT */}
      <div className="pt-5 text-left text-sm text-gray-800 max-w-7xl font-md mx-auto px-6">
        © 2026 <span className="text-blue-800">Sarixra</span>. Design by Sarang Harode. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;