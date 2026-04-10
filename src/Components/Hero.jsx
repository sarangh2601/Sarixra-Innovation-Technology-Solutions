import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden
             h-[65vh] md:h-[85vh] px-4 md:px-6 lg:px-12"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/back-hero.png')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80"></div>

      {/* Glass Box */}
      <div
        className="relative w-[90%] md:w-[80%] lg:w-[85%] 
        p-6 md:p-10 lg:p-16 rounded-3xl 
        bg-white/10 backdrop-blur-[2px] border border-white/20 
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        flex flex-col items-center text-center gap-8 animate-fadeIn"
      >
        {/* Heading */}
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight 
          bg-gradient-to-r from-white via-gray-200 to-gray-400 
          bg-clip-text text-transparent"
        >
          Building Powerful Digital Products for the Future
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm md:text-base lg:text-md max-w-2xl">
          We design, develop, and deliver high-performance web & software
          solutions
          <br className="hidden md:block" />
          that drive growth and innovation.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 justify-center">
          {/* Primary Button */}
          <button
            onClick={() => navigate("/about")}
            className="relative px-6 md:px-10 py-3 rounded-lg font-semibold text-black bg-white
               overflow-hidden group transition-all duration-300 shadow-md hover:shadow-xl"
          >
            <span className="relative z-10">About Us</span>
            {/* Glow Hover */}
            <span
              className="absolute inset-0 bg-black rounded-lg opacity-0 group-hover:opacity-20
                 transition-opacity duration-300"
            ></span>
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => navigate("/contactus")}
            className="relative px-6 md:px-10 py-3 rounded-lg font-semibold text-white border border-white/40 
               backdrop-blur-md hover:bg-white hover:text-black transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1.2s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;