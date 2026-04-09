"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Localist",
      description: "Responsive web-based directory developed during the Student Union Minicode. It helps students find local community spots in Surabaya featuring an efficient location-based search functionality.",
      image: "localist.png",
      tags: ["Backend", "Web Dev"],
      colSpan: "md:col-span-2"
    },
   {
      title: "SELA",
      description: "Mobile application for automated student group management (Sistem Kelola Anggota). Built with Flutter and integrates Generative AI for intelligent sorting, featuring a user-centric interface designed in Figma.",
      image: "sela.png",
      tags: ["Flutter", "UI/UX", "Figma"],
      colSpan: "md:col-span-1"
    },
    {
      title: "Barrier App",
      description: "AI-powered job-seeking platform designed for a UI/UX Competition at UNESA. Features intelligent interest-based career recommendations and intuitive user flows.",
      image: "barrier.png",
      tags: ["UI/UX", "Figma", "AI Integration"],
      colSpan: "md:col-span-1"
    },
    {
      title: "Digital Library",
      description: "Comprehensive digital library management system built for SMKN 1 Surabaya. Developed to streamline book circulation and data management using PHP and MySQL.",
      image: "perpus.png",
      tags: ["PHP", "MySQL", "Fullstack"],
      colSpan: "md:col-span-2"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-zinc-100">
              Selected Works.
            </h2>
            <p className="text-zinc-400 max-w-xl">Curated case studies demonstrating interface design, robust backend infrastructure, and AI integration.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bento-card group flex flex-col ${project.colSpan}`}
            >
              {/* Image Slot inside the card */}
              <div className="w-full h-64 overflow-hidden relative border-b border-zinc-800/50">
                <div className="absolute inset-0 bg-zinc-950 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-zinc-900/40 z-20 group-hover:opacity-0 transition-opacity duration-500" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Box */}
              <div className="p-8 flex flex-col flex-grow bg-zinc-900/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-poppins text-zinc-100">{project.title}</h3>
                  <div className="p-2 bg-zinc-800/50 rounded-full opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-zinc-300" />
                  </div>
                </div>
                
                <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-4 py-1.5 text-xs font-medium rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
