import React, { useState } from "react";
import { User, Mail, Phone, MessageCircle, HelpCircle, X } from "lucide-react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "918999294108"; // WhatsApp number
    const text = `Hello Sarixra Team,

My name is ${formData.name}, and I would like to get in touch regarding ${formData.reason}. 

Here are my details:
- Email: ${formData.email}
- Mobile: ${formData.mobile}

Message:
${formData.message}

Looking forward to your response. 

Thank you,
${formData.name}`;

    const encodedText = encodeURIComponent(text);

    // Detect if user is on mobile
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}` // Mobile WhatsApp app
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`; // Desktop Web

    window.open(url, "_blank");

    // Reset form and close modal
    setFormData({ name: "", email: "", mobile: "", reason: "", message: "" });
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 flex flex-col md:flex-row overflow-hidden relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={24} />
        </button>

        {/* Right Side - Illustration + Info + Tags + Description */}
        <div className="hidden md:flex md:w-1/2 p-10 bg-blue-50 flex-col justify-center items-center text-gray-700 rounded-xl shadow-lg">
          {/* Illustration */}
          <img
            src="/Sarixra-logo-2.png"
            alt="Company Illustration"
            className="mb-6 w-[100%] h-auto"
          />

          {/* Company Description */}
          <p className="text-center text-gray-800 mb-6 text-sm md:text-base leading-relaxed">
            Sarixra delivers innovative tech solutions, empowering businesses with seamless, growth-driven digital experiences.
          </p>

          {/* Tags / Skills */}
          <div className="mt-4 mb-4 flex flex-wrap gap-2">
            {["Technology", "Innovation", "Solutions"].map((tag) => (
              <span
                key={tag}
                className="bg-white/80 text-blue-600 px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Social Icons - Premium */}
          <div className="flex gap-4 mt-6">
            <a
              href="#linkedin"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-blue-700 hover:bg-blue-50 hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#github"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 hover:scale-110 transition-transform duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#instagram"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-pink-500 hover:bg-pink-50 hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#twitter"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-blue-400 hover:bg-blue-50 hover:scale-110 transition-transform duration-300"
            >
              <FaTwitter size={20} />
            </a>
          </div>

        </div>

        {/* Left Side - Premium Form */}
        <div className="md:w-1/2 p-10 bg-white rounded-xl shadow-lg flex flex-col justify-center">
          <img
            src="/Sarixra-logo-2.png"
            alt="Company Illustration"
            className="mb-6 w-[80%] h-auto block md:hidden items-center mx-auto"
          />

          <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-3 drop-shadow-md">
            Get in Touch
          </h3>
          <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed tracking-wide">
            Our expert team provides seamless, tailored solutions with dedicated support.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Name Field */}
            <div className="relative w-full">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <User size={20} />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 shadow-sm text-gray-900 placeholder-gray-400 transition-all"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative w-full">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 shadow-sm text-gray-900 placeholder-gray-400 transition-all"
                required
              />
            </div>

            {/* Mobile Field */}
            <div className="relative w-full">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Phone size={20} />
              </div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 shadow-sm text-gray-900 placeholder-gray-400 transition-all"
                required
              />
            </div>

            {/* Reason to Contact - Select */}
            <div className="relative w-full">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <HelpCircle size={20} />
              </div>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 shadow-sm text-gray-900 placeholder-gray-400 transition-all"
                required
              >
                <option value="" disabled>
                  Select Reason to Contact
                </option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="relative w-full">
              <div className="absolute left-3 top-3 text-gray-400">
                <MessageCircle size={20} />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 shadow-sm text-gray-900 placeholder-gray-400 transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:from-blue-500 hover:to-blue-400 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}