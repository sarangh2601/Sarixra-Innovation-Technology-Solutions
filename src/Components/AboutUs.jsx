import React from "react";

const AboutUs = () => {
  const openModal = () => {
    alert("Modal Open Triggered"); // replace with actual modal logic
  };

  return (
    <section
      className="h-auto flex items-center w-full pt-[50px] pb-[50px] justify-center"
      id="about"
    >
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 items-center w-[85%] shadow-lg p-[20px]">
        
        {/* Left Content */}
        <div className="flex flex-col h-full w-full md:w-[60%] gap-8 p-5 md:p-10">
          
          <div>
            <p className="text-blue-500 text-xl">About us</p>
            <hr className="w-[80px] h-1 bg-blue-500 font-semibold mt-2" />
          </div>

          <div>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-semibold">
              Shaping Careers and Creating Bright Futures
            </h1>
          </div>

          <div>
            <p className="text-gray-700">
              Sarixra is a technology-driven company focused on delivering scalable,
              secure, and high-performance software solutions. We help startups,
              enterprises, and growing businesses transform their ideas into
              powerful digital products. With expertise in modern web technologies
              and enterprise-level backend systems, we ensure reliability, speed,
              and long-term scalability.
            </p>
          </div>

          <div>
            <button
              onClick={openModal}
              className="bg-black px-10 md:px-14 py-3 md:py-4 text-white text-[16px] md:text-[18px] rounded-2xl 
              hover:bg-white hover:text-black hover:border-2 hover:border-black transition"
            >
              Let's Start
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[50%] object-contain">
          <img
            src="about-us.jpg"
            alt="About us"
            className="h-[300px] md:h-[400px] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;