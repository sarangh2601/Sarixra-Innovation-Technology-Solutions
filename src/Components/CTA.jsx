import React from "react";

const CTA = ({ openModal }) => {

  return (
    <section
      className="relative my-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/calltoaction-1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col gap-8 p-6 md:p-10 items-center text-center">

        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
          Ready to Transform Your Business with Smart Technology?
        </h1>

        <p className="text-sm md:text-md font-semibold text-white max-w-2xl">
          Discover powerful, scalable digital products built to accelerate growth,
          improve efficiency, and deliver measurable results.
        </p>

        <button
          onClick={openModal}
          className="px-10 md:px-16 py-3 mt-6 bg-white text-black rounded-xl 
          hover:bg-black hover:text-white border border-white transition duration-300"
        >
          Contact Us
        </button>

      </div>
    </section>
  );
};

export default CTA;