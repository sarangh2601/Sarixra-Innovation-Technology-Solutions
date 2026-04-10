import React from "react";
import { Zap, ShieldCheck, Clock, CheckCircle } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      title: "High Performance",
      desc: "Scalable and optimized solutions for modern businesses.",
      icon: Zap
    },
    {
      title: "Secure Architecture",
      desc: "Enterprise-level security with robust infrastructure.",
      icon: ShieldCheck
    },
    {
      title: "On-Time Delivery",
      desc: "We ensure timely project completion with quality.",
      icon: Clock
    },
    {
      title: "Client Satisfaction",
      desc: "Continuous improvement driven by measurable success.",
      icon: CheckCircle
    }
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/whychoose.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-6">
            <p className="uppercase tracking-widest text-sm text-gray-300">
              Why Choose Us?
            </p>

            <div className="w-20 h-[2px] bg-blue-500"></div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Delivering Innovation, Security, and Performance Excellence
            </h2>

            <p className="text-gray-300 text-md">
              We deliver scalable, secure, and high-performance IT solutions with
              transparent communication and client-focused innovation.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid sm:grid-cols-2 gap-8">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-md p-6 rounded-xl text-center 
                  shadow-lg hover:shadow-2xl transition-all duration-500 
                  transform hover:-translate-y-2 hover:scale-[1.02]"
                >

                  {/* ICON */}
                  <div className="w-14 h-14 flex items-center justify-center 
                    border border-gray-300 rounded-full mb-4 mx-auto
                    group-hover:bg-blue-600 group-hover:border-blue-600 transition duration-300"
                  >
                    <Icon
                      size={24}
                      className="text-black group-hover:text-white transition duration-300"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-600 text-sm leading-relaxed">
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

export default WhyChoose;