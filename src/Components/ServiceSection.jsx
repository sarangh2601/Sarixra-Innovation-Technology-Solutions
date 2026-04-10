import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const ServiceSection = ({ openModalContact }) => {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    description: "",
    image: "",
  });

  const services = [
    {
      title: "Web Development",
      desc: "We design and develop responsive, secure, and scalable web applications tailored to your business needs using modern frameworks.",
      img: "/webdev.jpg",
      icon: "🌐",
      gradient: "from-[#0166CC] to-[#00BFFF]",
    },
    {
      title: "Software Development",
      desc: "We build powerful business software systems that automate workflows, increase efficiency, and improve operational performance.",
      img: "/soft.jpg",
      icon: "💻",
      gradient: "from-[#0166CC] to-[#00BFFF]",
    },
    {
      title: "Digital Marketing",
      desc: "Our digital marketing strategies help businesses improve visibility, generate leads and grow revenue through SEO and online campaigns.",
      img: "/digital-mar.jpg",
      icon: "📈",
      gradient: "from-[#0166CC] to-[#00BFFF]",
    },
    {
      title: "Cloud Solutions",
      desc: "We provide secure, scalable, and high-performance cloud infrastructure solutions including deployment, migration, and ongoing maintenance services.",
      img: "/cloud-soln.jpg",
      icon: "☁️",
      gradient: "from-[#0166CC] to-[#00BFFF]",
    },
  ];

  const openModal = (service) => {
    setModal({
      open: true,
      title: service.title,
      description: service.desc,
      image: service.img,
    });
  };

  const closeModal = () => {
    setModal({ ...modal, open: false });
  };

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="py-24 text-white bg-white" id="service">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.2em] text-sm text-[#00BFFF] font-semibold mb-4">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Our{" "}
              <span className="text-[#00BFFF] relative inline-block">
                Professional Services
                <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-[#00BFFF] rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-relaxed">
              Delivering innovative IT solutions that empower businesses with scalable, secure, and high-performance digital systems.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6">
            {/* LEFT CARDS */}
            <div className="grid gap-6 w-full lg:w-1/2">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => openModal(service)}
                  className={`flex items-center gap-6 px-6 py-4 rounded-3xl cursor-pointer shadow-2xl transition-transform duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-r ${service.gradient} backdrop-blur-md border border-white/20`}
                >
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 text-3xl shadow-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img
                src="/services.jpg"
                alt="services"
                className="w-full h-[400px] md:h-[500px] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modal.open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-gray-900 text-white w-[95%] md:w-[700px] rounded-3xl overflow-hidden shadow-2xl transform scale-100 animate-fadeIn relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-6 text-3xl font-bold text-white hover:text-red-500 transition-colors"
            >
              ×
            </button>

            <img
              src={modal.image}
              alt="service"
              className="w-full h-[250px] md:h-[450px] object-cover"
            />

            <div className="p-6 md:p-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{modal.title}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{modal.description}</p>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceSection;