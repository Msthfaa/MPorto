"use client";
import { motion } from "framer-motion";
import { PenTool, Server, Smartphone, Brain } from "lucide-react";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-zinc-100">
            Technical Arsenal.
          </h2>
          <p className="text-zinc-400 max-w-xl">A comprehensive toolkit spanning from high-fidelity interface design to robust backend architectures.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[500px]"
        >
          {/* Bento Item 1: UI/UX - Spans 2 rows on desktop */}
          <motion.div variants={item} className="bento-card p-8 md:col-span-1 md:row-span-2 flex flex-col group">
            <div className="mb-6 p-4 bg-zinc-800/50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
              <PenTool className="w-8 h-8 text-zinc-300" />
            </div>
            <h3 className="text-2xl font-bold font-poppins mb-2 text-zinc-100 mt-auto">UI/UX Design</h3>
            <p className="text-zinc-400 text-sm">Figma, Wireframing, Prototyping</p>
          </motion.div>

          {/* Bento Item 2: Backend */}
          <motion.div variants={item} className="bento-card p-8 md:col-span-2 md:row-span-1 flex items-end justify-between group">
            <div>
              <div className="mb-4">
                <Server className="w-8 h-8 text-zinc-400 group-hover:scale-110 transition-transform origin-left" />
              </div>
              <h3 className="text-xl font-bold font-poppins mb-1 text-zinc-100">Backend Development</h3>
              <p className="text-zinc-400 text-sm">PHP, Laravel, API Integration</p>
            </div>
          </motion.div>

          {/* Bento Item 3: Mobile & Web */}
          <motion.div variants={item} className="bento-card p-8 md:col-span-1 md:row-span-1 flex flex-col justify-between group">
            <Smartphone className="w-7 h-7 text-zinc-400 mb-4 group-hover:-translate-y-1 transition-transform" />
            <div>
              <h3 className="text-xl font-bold font-poppins mb-1 text-zinc-100">Mobile & Web</h3>
              <p className="text-zinc-400 text-sm text-balance">Dart, Flutter, JavaScript</p>
            </div>
          </motion.div>

          {/* Bento Item 4: Database & AI */}
          <motion.div variants={item} className="bento-card p-8 md:col-span-1 md:row-span-1 flex flex-col justify-between group">
            <Brain className="w-7 h-7 text-zinc-400 mb-4 group-hover:rotate-12 transition-transform" />
            <div>
              <h3 className="text-xl font-bold font-poppins mb-1 text-zinc-100">Database & AI</h3>
              <p className="text-zinc-400 text-sm text-balance">MySQL, MongoDB, Generative AI</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
