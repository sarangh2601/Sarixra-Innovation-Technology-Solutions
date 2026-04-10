import React from "react";
import {
  Code2,
  Database,
  Server,
  Cpu,
  GitBranch,
  Globe,
  Layers,
  Cloud,
  ShieldCheck,
  Workflow
} from "lucide-react";

const TechStack = () => {
  const techStack = [
    { name: "Java", icon: Code2 },
    { name: "Spring Boot", icon: Server },
    { name: "Spring MVC", icon: Layers },
    { name: "REST APIs", icon: Globe },
    { name: "Microservices", icon: Workflow },
    { name: "MySQL", icon: Database },
    { name: "React", icon: Code2 },
    { name: "JavaScript", icon: Cpu }
  ];

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">

      {/* 🔥 Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(#1f2937_1px,transparent_1px),linear-gradient(90deg,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] animate-[moveGrid_20s_linear_infinite]"></div>
      </div>

      {/* 🌌 Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl bottom-[-100px] right-[-100px]"></div>

      {/* ✨ Floating Particles */}
      <div className="absolute inset-0">
        <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-10 left-20 animate-ping"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full absolute bottom-20 right-20 animate-ping"></div>
        <div className="w-2 h-2 bg-blue-300 rounded-full absolute top-1/2 left-1/3 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm text-blue-400 font-semibold mb-4">
            Technology We Use
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Powering Innovation With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Modern Tech Stack
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure,
            and high-performance applications tailored for modern businesses.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

          {techStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 hover:from-blue-500 hover:to-purple-500 transition duration-500"
              >
                <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full">

                  {/* ICON */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                    bg-white/10 mb-4 
                    group-hover:bg-blue-600 transition duration-300"
                  >
                    <Icon 
                      size={28} 
                      className="text-white group-hover:scale-110 transition duration-300"
                    />
                  </div>

                  {/* TEXT */}
                  <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                    {tech.name}
                  </h3>

                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* 🔥 Custom Tailwind Animation */}
      <style jsx>{`
        @keyframes moveGrid {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(40px);
          }
        }
      `}</style>

    </section>
  );
};

export default TechStack;