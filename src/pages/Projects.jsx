import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const [openModal, setOpenModal] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Sarang Portfolio",
      img: "sp.jpg",
      shortDesc: "Showcase of skills, projects, and experience as a full-stack developer.",
      longDesc: "Sarang Portfolio is a personal portfolio website that highlights technical expertise and professional projects. Designed with a modern UI/UX, it includes detailed sections for skills, projects, and contact information. The platform is built using React for a dynamic front-end experience and Tailwind CSS for responsive design. It features interactive Components and smooth transitions to provide visitors with an engaging experience. Technologies: React, Tailwind CSS, JavaScript, Vite.",
      techStack: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    },
    {
      id: 2,
      title: "KissanMart",
      img: "km.png",
      shortDesc: "Agriculture e-commerce platform connecting farmers to buyers.",
      longDesc: "KissanMart is an innovative e-commerce platform connecting farmers directly with buyers to streamline agricultural commerce. It allows farmers to list and sell products efficiently, ensuring better market access and fair pricing. Built with React, Redux, Node.js, Express, and MongoDB. Tailwind CSS ensures clean UI/UX for desktop and mobile users. This platform empowers farmers and buyers with a fast and transparent marketplace. Technologies: React, Redux, Node.js, MongoDB, Tailwind CSS.",
      techStack: ["React", "Redux", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Data Mosaic Tool",
      img: "dmt.jpg",
      shortDesc: "Data management and visualization tool.",
      longDesc: "Data Mosaic Tool is a comprehensive platform for organizing, analyzing, and visualizing complex datasets. Interactive dashboards, real-time analytics, and customizable reports help data-driven decision-making. Developed using React, D3.js, Node.js, PostgreSQL, and Tailwind CSS. The tool ensures smooth performance, responsive UI, and professional analytics capabilities. Technologies: React, D3.js, Node.js, PostgreSQL, Tailwind CSS.",
      techStack: ["React", "D3.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      id: 4,
      title: "Secure Bank",
      img: "sb.png",
      shortDesc: "Secure digital banking platform.",
      longDesc: "Secure Bank is a professional banking web app providing account management, fund transfers, and enhanced authentication. Developed with React, Node.js, Express, MongoDB, JWT, and Tailwind CSS. Security best practices ensure safe digital banking experience. Responsive design and interactive features create a professional user experience. Technologies: React, Node.js, Express, MongoDB, JWT, Tailwind CSS.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    },
    {
      id: 5,
      title: "TechCon Website",
      img: "tc.png",
      shortDesc: "Modern technology conference website.",
      longDesc: "TechCon Website is a responsive platform providing schedules, speakers, registration, and venue info for a tech conference. Built with React, Tailwind CSS, and JavaScript. Smooth scrolling, interactive Components, and clean design enhance user experience. Technologies: React, Tailwind CSS, JavaScript, React Router.",
      techStack: ["React", "Tailwind CSS", "JavaScript", "React Router"],
    },
    {
      id: 6,
      title: "Sarixra Website",
      img: "ss.png",
      shortDesc: "Professional IT company website.",
      longDesc: "Sarixra Website is a corporate IT services website showcasing services, industries, and technologies. Developed with React and Tailwind CSS, featuring responsive design, SEO optimization, and professional UI for client acquisition. Technologies: React, Tailwind CSS, JavaScript, SEO.",
      techStack: ["React", "Tailwind CSS", "JavaScript", "SEO Optimized"],
    },
    {
      id: 7,
      title: "QuickCounter",
      img: "qq.png",
      shortDesc: "Real-time counter and number generator app.",
      longDesc: "QuickCounter is a simple yet efficient web application that allows users to generate and track numbers in real-time. Built with React, JavaScript, and Tailwind CSS. It features a clean interface with interactive buttons, smooth transitions, and instant updates. This tool is ideal for tracking counts or generating unique numbers quickly. Technologies: React, JavaScript, Tailwind CSS.",
      techStack: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      id: 8,
      title: "CabsOnline",
      img: "Cabs.png",
      shortDesc: "Online cab booking platform.",
      longDesc: "CabsOnline is a full-featured cab booking platform allowing users to book rides, track drivers, and manage payments. Built with React, Spring Boot, Java, and MySQL. Includes real-time booking, secure authentication, and admin dashboard for management. Technologies: React, Java, Spring Boot, MySQL, Tailwind CSS.",
      techStack: ["React", "Java", "Spring Boot", "MySQL", "Tailwind CSS"],
    },
    {
      id: 9,
      title: "ImgWorld",
      img: "iw.png",
      shortDesc: "Image management and gallery platform.",
      longDesc: "ImgWorld is a professional image management platform allowing users to upload, organize, and share images. Features include albums, search, filters, and responsive UI. Built using React, Node.js, Express, and MongoDB with Tailwind CSS for styling. Technologies: React, Node.js, Express, MongoDB, Tailwind CSS.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
    {
      id: 10,
      title: "NotifyNotes Web App",
      img: "nn.png",
      shortDesc: "A smart notes app with notifications and reminders.",
      longDesc: "NotifyNotes Web App is a productivity-focused application that allows users to create, manage, and organize notes with built-in notification and reminder features. It helps users stay on track by sending timely alerts for important tasks and deadlines. The app includes a clean and user-friendly interface, real-time updates, and secure data handling. Built using modern web technologies, it ensures a fast and responsive experience across devices. Technologies: React, Tailwind CSS, JavaScript, Firebase.",
      techStack: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
    }
  ];

  return (
    <>
      {/* Header Section */}
      <div
        className="bg-cover h-[250px] flex flex-col justify-center"
        style={{ backgroundImage: "url('/about-head.jpg')" }}
      >
        <div class="relative flex flex-col justify-center items-left  p-10 m-10 absolute inset-0 bg-black/30">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100">
            Our Projects
          </h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto py-20 px-6">
        {/* Top Heading */}
        <div className="text-center mb-20 relative">
          {/* Decorative Gradient Lines */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-24 h-1 bg-gradient-to-r from-[#0166CC] to-blue-400 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-16 h-1 bg-gradient-to-r from-blue-300 to-[#0166CC] rounded-full opacity-50"></div>

          {/* Small Label */}
          <p className="uppercase tracking-widest text-sm text-[#0166CC] mb-5 font-semibold relative z-10">
            Our Projects
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-6 w-[90%] mx-auto text-gray-900 leading-tight relative z-10">
            Transforming Ideas Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0166CC] to-blue-500">
              Professional Digital Projects
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed relative z-10">
            Discover the innovative solutions we’ve developed for clients and businesses, showcasing modern technologies, scalable architectures, and sleek digital experiences crafted with precision and care.
          </p>

          {/* Optional Glow */}
          <div className="absolute -z-10 left-1/2 transform -translate-x-1/2 top-1/2 w-[400px] h-[400px] bg-[#0166CC]/20 blur-3xl rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-[#0166CC]/20 to-blue-300/20 hover:from-[#0166CC] hover:to-blue-500 transition duration-500 shadow-lg"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 text-center h-full flex flex-col justify-between transition duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-56 w-full object-cover rounded-lg mb-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.shortDesc}</p>
                </div>
                <button
                  onClick={() => setOpenModal(project.id)}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg text-white bg-gradient-to-r from-[#0166CC] to-blue-600 hover:from-blue-600 hover:to-[#0166CC] shadow-lg transition duration-300 transform hover:scale-105"
                >
                  View Project <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 relative shadow-2xl animate-fadeIn overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setOpenModal(null)}
            >
              &times;
            </button>

            {projects
              .filter((p) => p.id === openModal)
              .map((project) => (
                <div key={project.id} className="flex flex-col gap-6">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                  <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                  <p className="text-gray-700">{project.longDesc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-[#0166CC]/20 text-[#0166CC] px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;