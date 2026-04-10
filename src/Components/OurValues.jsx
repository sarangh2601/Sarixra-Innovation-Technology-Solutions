import React from "react";
import { Wrench, Handshake, Star, ShieldCheck } from "lucide-react";

const OurValues = () => {
  const values = [
    {
      title: "Innovation",
      desc: "Continuously pushing boundaries to create cutting-edge solutions",
      icon: Wrench
    },
    {
      title: "Partnership",
      desc: "Building strong relationships with our clients and team",
      icon: Handshake
    },
    {
      title: "Excellence",
      desc: "Delivering exceptional quality in everything we do",
      icon: Star
    },
    {
      title: "Integrity",
      desc: "Operating with transparency and ethical principles",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-[#0166CC] font-semibold mb-3">
            Our Values
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Built on Strong{" "}
            <span className="text-[#0166CC]">Core Principles</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our foundation is driven by innovation, trust, and excellence — ensuring long-term success
            for our clients and partners.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 text-center
                hover:shadow-lg transition duration-300 hover:-translate-y-2"
              >
                {/* ICON */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-lg 
                  bg-[#0166CC]/10 mb-5
                  group-hover:bg-[#0166CC] transition duration-300"
                >
                  <Icon
                    size={26}
                    className="text-[#0166CC] group-hover:text-white transition duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
    </section>
  );
};

export default OurValues;