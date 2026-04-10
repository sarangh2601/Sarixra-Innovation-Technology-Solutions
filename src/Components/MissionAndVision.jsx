import React from "react";

const MissionAndVision = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 md:px-8">

      {/* Top Heading */}
      <div className="text-center mb-16 px-2">
        <p className="uppercase tracking-widest text-sm text-blue-500 mb-5 font-semibold">
          Mission & Vision
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Driving Innovation and Digital Growth
        </h2>

        <p className="text-black max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
          Empowering businesses through innovative, scalable, and secure technology solutions while shaping a
          future driven by digital transformation and growth.
        </p>
      </div>

      {/* Mission and Vision Cards */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-2">

        {/* MISSION */}
        <div
          className="group relative flex flex-col gap-4 md:gap-6 p-8 md:p-12 text-left shadow-xl rounded-lg 
  bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/vision.jpg')" }}
        >

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition duration-300"></div>

          {/* Content */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl relative z-10 transition duration-300 group-hover:text-white">
            Our Mission
          </h2>

          <p className="w-full md:w-1/2 relative z-10 text-sm sm:text-base md:text-base transition duration-300 group-hover:text-white">
            Our mission is to empower businesses with smart, scalable, and secure technology
            solutions that drive growth, innovation, and digital transformation.
          </p>

        </div>

        {/* VISION */}
        <div
          className="group relative flex flex-col gap-4 md:gap-6 p-8 md:p-12 text-left shadow-xl rounded-lg 
  bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/vision-1.jpg')" }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition duration-300"></div>

          {/* Content */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl relative z-10 group-hover:text-white transition duration-300">
            Our Vision
          </h2>

          <p className="w-full md:w-1/2 relative z-10 text-sm sm:text-base md:text-base transition duration-300 group-hover:text-white">
            Our vision is to become a trusted global technology partner known for delivering
            high-quality digital solutions and exceptional customer experiences.
          </p>

        </div>

      </div>
    </section>
  );
};

export default MissionAndVision;