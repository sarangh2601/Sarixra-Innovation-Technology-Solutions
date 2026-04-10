import React from "react";
import { HeartPulse, Landmark, GraduationCap, ShoppingCart } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      desc: "Secure and reliable healthcare software solutions for hospitals, clinics, and medical startups.",
      icon: HeartPulse
    },
    {
      title: "Finance",
      desc: "Robust fintech and banking applications with high security and seamless user experience.",
      icon: Landmark
    },
    {
      title: "Education",
      desc: "E-learning platforms and digital classroom solutions that enhance student engagement.",
      icon: GraduationCap
    },
    {
      title: "E-Commerce",
      desc: "Scalable online store solutions with secure payment integration and smooth checkout experience.",
      icon: ShoppingCart
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="industries">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row gap-14">

          {/* RIGHT CONTENT (FIRST ON MOBILE) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 order-1 lg:order-2 text-center lg:text-left">
            <div>
              <p className="text-blue-600 font-semibold uppercase tracking-wider">
                Industries We Serve
              </p>
              <div className="w-20 h-[2px] bg-blue-600 mt-2 mx-auto lg:mx-0"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Industries We Empower With Smart Technology
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
              We deliver secure, scalable and innovative IT solutions tailored to
              industry-specific challenges.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2 order-2 lg:order-1">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-black to-gray-600 p-6 rounded-2xl shadow-lg 
                  hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-300"
                >

                  {/* ICON */}
                  <div className="w-14 h-14 flex items-center justify-center 
                    bg-white/10 backdrop-blur-md rounded-xl mb-4 
                    group-hover:bg-blue-600 transition-all duration-300"
                  >
                    <Icon 
                      size={26} 
                      className="text-white group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-white/80 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;