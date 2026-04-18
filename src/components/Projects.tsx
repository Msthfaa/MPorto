"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useRef, useState, useCallback, MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ALL_FILTERS = ["All", "Backend", "Web Dev", "UI/UX", "Flutter", "Figma", "AI Integration", "PHP", "MySQL", "Fullstack"];

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  colSpan: string;
  year: string;
  type: string;
};

const projects: Project[] = [
  {
    title: "Localist",
    description: "Responsive web-based directory developed during the Student Union Minicode. Helps students find local community spots in Surabaya with efficient location-based search.",
    image: "localist.png",
    tags: ["Backend", "Web Dev"],
    colSpan: "md:col-span-2",
    year: "2024",
    type: "Web App",
  },
  {
    title: "SELA",
    description: "Mobile app for automated student group management. Built with Flutter + Generative AI for intelligent sorting, designed in Figma.",
    image: "sela.png",
    tags: ["Flutter", "UI/UX", "Figma"],
    colSpan: "md:col-span-1",
    year: "2024",
    type: "Mobile App",
  },
  {
    title: "Barrier App",
    description: "AI-powered job-seeking platform for a UI/UX Competition at UNESA. Features intelligent interest-based career recommendations and intuitive flows.",
    image: "barrier.png",
    tags: ["UI/UX", "Figma", "AI Integration"],
    colSpan: "md:col-span-1",
    year: "2023",
    type: "UI/UX · Competition",
  },
  {
    title: "Digital Library",
    description: "Comprehensive digital library management system for SMKN 1 Surabaya. Streamlines book circulation and data management using PHP and MySQL.",
    image: "perpus.png",
    tags: ["PHP", "MySQL", "Fullstack"],
    colSpan: "md:col-span-2",
    year: "2023",
    type: "Fullstack Web",
  },
];

const ACTIVE_FILTERS = ["All", "Backend", "UI/UX", "Fullstack"];

/* ── Spotlight card with tilt on mouse move ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const spot = spotRef.current;
    if (!card || !spot) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;

    gsap.to(card, {
      rotateX: rotX,
      rotateY: rotY,
      transformPerspective: 800,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(spot, {
      x: x - 100,
      y: y - 100,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const spot = spotRef.current;
    if (!card || !spot) return;
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
    gsap.to(spot, { opacity: 0, duration: 0.4 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] }}
      className={`${project.colSpan}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="project-card bento-card group flex flex-col h-full cursor-pointer relative overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Spotlight overlay */}
        <div
          ref={spotRef}
          className="pointer-events-none absolute z-30 w-[200px] h-[200px] rounded-full opacity-0"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Image area */}
        <div className="w-full h-56 overflow-hidden relative border-b border-zinc-800/50 flex-shrink-0">
          {/* Grayscale-to-color reveal */}
          <div className="absolute inset-0 bg-zinc-950 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-700" />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent z-20" />
          {/* Type badge */}
          <div className="absolute top-3 left-3 z-30 px-2.5 py-1 rounded-full bg-zinc-900/70 backdrop-blur-sm border border-zinc-700/50 text-[10px] text-zinc-400 font-medium">
            {project.type}
          </div>
          {/* Year badge */}
          <div className="absolute top-3 right-3 z-30 px-2.5 py-1 rounded-full bg-zinc-900/70 backdrop-blur-sm border border-zinc-700/50 text-[10px] text-zinc-500 font-mono">
            {project.year}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="project-img w-full h-[120%] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow bg-zinc-900/10 relative">
          {/* Title row */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold font-poppins text-zinc-100 group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4, type: "spring", stiffness: 120 }}
              className="ml-3 flex-shrink-0 p-1.5 bg-zinc-800/60 rounded-full border border-zinc-700/40 group-hover:bg-zinc-700/60 group-hover:border-zinc-600/60 transition-all duration-300 group-hover:rotate-45"
            >
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-grow">
            {project.description}
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-4" />

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 + i * 0.06, type: "spring", stiffness: 160 }}
                className="px-3 py-1 text-[11px] font-medium rounded-full bg-zinc-800/70 text-zinc-400 border border-zinc-700/40 group-hover:border-zinc-600/60 transition-colors duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  // GSAP: parallax scrub on images
  useGSAP(() => {
    const imgs = document.querySelectorAll<HTMLElement>(".project-img");
    imgs.forEach((img) => {
      gsap.to(img, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-3 text-zinc-100">
                Selected Works.
              </h2>
              <p className="text-zinc-400 max-w-lg text-sm">
                Curated case studies — interface design, backend infrastructure, and AI integration.
              </p>
            </div>
            {/* Project counter */}
            <div className="flex items-center gap-2 text-zinc-600 text-sm font-mono flex-shrink-0">
              <span className="text-2xl font-bold text-zinc-300">0{projects.length}</span>
              <span>projects</span>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {ACTIVE_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-zinc-100 text-zinc-950 border-zinc-100"
                    : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-zinc-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {filtered.length > 0 ? (
              filtered.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="md:col-span-3 py-20 text-center text-zinc-600"
              >
                No projects for this filter yet.
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
