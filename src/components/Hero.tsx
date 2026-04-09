"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.div 
          custom={0} variants={textVariants} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8"
        >
          <Sparkles className="w-4 h-4 text-zinc-400" />
          <span className="text-zinc-300 text-xs font-semibold tracking-widest uppercase">Musthofa Agung Distyawan</span>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-8xl font-poppins font-bold leading-[1.1] mb-8 tracking-tight"
        >
          <motion.span custom={1} variants={textVariants} initial="hidden" animate="visible" className="block text-zinc-100">
            Informatics
          </motion.span>
          <motion.span custom={2} variants={textVariants} initial="hidden" animate="visible" className="block text-zinc-400">
            Engineering <span className="text-zinc-100">Student.</span>
          </motion.span>
        </motion.h1>
        
        <motion.p 
          custom={3} variants={textVariants} initial="hidden" animate="visible"
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Information Technology student at PENS blending robust Backend Development with intuitive UI/UX Design. Passionate about leveraging Generative AI and modern frameworks to build smart, scalable, and user-centric digital experiences.
        </motion.p>
        
        <motion.div custom={4} variants={textVariants} initial="hidden" animate="visible">
          <button
            onClick={scrollToProjects}
            className="group relative flex items-center gap-3 px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Check Out My Work</span>
            <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-zinc-950 rounded-full text-zinc-100 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
