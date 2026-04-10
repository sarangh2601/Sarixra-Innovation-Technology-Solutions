import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactUs from "@/Components/ContactUs";
import { FaWhatsapp } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setStatus("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Contact card data
  const contactCards = [
    {
      id: 1,
      title: "Call Us",
      description: "Available 24/7 for support",
      info: "+91 89992 94108",
      icon: <Phone className="text-white w-6 h-6" />,
      bgColor: "bg-blue-500",
      link: "tel:+918999294108", // tel link
    },
    {
      id: 2,
      title: "Email Us",
      description: "We reply within 2 hours",
      info: "connect.sarixra@gmail.com",
      icon: <Mail className="text-white w-6 h-6" />,
      bgColor: "bg-orange-400",
      link: "mailto:connect.sarixra@gmail.com", // email link
    },
    {
      id: 3,
      title: "Live Chat",
      description: "Chat with our team instantly",
      info: "Chat on WhatsApp",
      icon: <FaWhatsapp className="text-white w-6 h-6" />,
      bgColor: "bg-green-500",
      link: "https://wa.me/918999294108", // WhatsApp link
    },
    {
      id: 4,
      title: "Our Location",
      description: "Visit our office anytime",
      info: "Nagpur, Maharashtra, India",
      icon: <MapPin className="text-white w-6 h-6" />,
      bgColor: "bg-red-500",
      link: "https://www.google.com/maps/place/Nagpur,+Maharashtra,+India", // Google Maps
    },
  ];


  return (
    <div className="relative overflow-hidden">
      {/* Header Section */}
      <div
        className="bg-cover h-[250px] flex flex-col justify-center"
        style={{ backgroundImage: "url('/about-head.jpg')" }}
      >
        <div className="relative flex flex-col justify-center items-left p-10 m-10 absolute inset-0 bg-black/30">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Floating Icons */}
      <Phone className="absolute top-100 left-10 w-8 h-8 text-blue-400 animate-bounce-slow opacity-70" />
      <Mail className="absolute top-1/3 right-20 w-10 h-10 text-pink-400 animate-bounce-slow opacity-60" />
      <MapPin className="absolute bottom-20 left-1/4 w-12 h-12 text-green-400 animate-bounce-slow opacity-50" />

      {/* Contact Info Cards */}
      <section
        className="py-20 bg-cover bg-fixed relative z-10"
        style={{ backgroundImage: "url('/loc-back.jpg')" }}
      >        <div className="max-w-7xl mx-auto text-center mb-24 px-4">
          {/* Subtitle with accent line */}
          <div className="flex flex-col items-center mb-4">
            <p className="uppercase tracking-widest text-sm text-blue-600 font-semibold mb-2">
              Contact Us
            </p>
            <div className="w-16 h-0.5 bg-blue-600 rounded-full"></div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Let’s Build Something Great Together
          </h2>

          {/* Description */}
          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Have a project in mind or need technical support? Our team at Sarixra is here to help you turn your ideas into reliable, professional, and high-quality digital solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 justify-center w-[85%] mx-auto">
          {contactCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 w-72 items-start p-8 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:scale-105 transform"
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-lg`}
                style={{
                  background: `linear-gradient(135deg, #0166CC, #00AEEF)`, // logo colors
                  boxShadow: "0 4px 20px rgba(0, 102, 204, 0.4)",
                }}
              >
                {React.cloneElement(card.icon, {
                  className: "w-5 h-5 text-white drop-shadow-lg",
                })}
              </div>
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
              <p className="text-md font-semibold">{card.info}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="text-black relative z-10" id="contactus">
        <ContactUs />
        {/* Google Map */}
        <div className="w-full py-5">
          <iframe
            className="w-full h-[400px] border-0 rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119064.9002762622!2d78.99010820058606!3d21.161225996613556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1772685126088!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Nagpur Location"
          ></iframe>
        </div>
      </section>

      {/* Tailwind Custom Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s infinite;
        }
      `}</style>


    </div>
  );
};

export default Contact;