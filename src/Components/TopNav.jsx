import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const TopNav = () => {
  return (
    <div className="w-full bg-blue-400 shadow-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12 text-gray-700 text-sm md:text-base">

        {/* LEFT - Location */}
        <div className="flex items-center gap-2 hover:text-white transition-colors">
          <MapPin className="w-4 h-4 text-blue-600 " />
          <span>Nagpur, Maharashtra, India</span>
        </div>

        {/* RIGHT - Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+918999294108"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 89992 94108
          </a>
          <a
            href="mailto:connect.sarixra@gmail.com"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            connect.sarixra@gmail.com
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopNav;