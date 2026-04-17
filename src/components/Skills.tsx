"use client";
import { motion } from "framer-motion";
import { PenTool, Server, Smartphone, Brain } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 18 } },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/* ── Decorative SVG ornaments ── */
const BezierCurve = () => (
  <svg viewBox="0 0 160 80" className="w-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 70 C 40 10, 120 10, 150 70" strokeLinecap="round" className="text-zinc-300" />
    <circle cx="10" cy="70" r="4" fill="currentColor" className="text-zinc-400" />
    <circle cx="150" cy="70" r="4" fill="currentColor" className="text-zinc-400" />
    <circle cx="40" cy="14" r="3" fill="none" stroke="currentColor" strokeDasharray="2 2" className="text-zinc-500" />
    <circle cx="120" cy="14" r="3" fill="none" stroke="currentColor" strokeDasharray="2 2" className="text-zinc-500" />
    <line x1="10" y1="70" x2="40" y2="14" strokeDasharray="3 3" className="text-zinc-600" />
    <line x1="150" y1="70" x2="120" y2="14" strokeDasharray="3 3" className="text-zinc-600" />
    <path d="M30 60 C 50 40, 90 40, 130 60" strokeLinecap="round" className="text-zinc-500" opacity="0.5" />
  </svg>
);

const ColorPalette = () => (
  <div className="flex gap-1.5">
    {["#e879f9", "#818cf8", "#38bdf8", "#34d399", "#fbbf24"].map((c, i) => (
      <motion.div
        key={i}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: "backOut" }}
        style={{ backgroundColor: c, originY: 1 }}
        className="w-5 rounded-t-full"
        title={c}
      >
        <div style={{ height: `${28 + i * 8}px` }} />
      </motion.div>
    ))}
  </div>
);

const CodeSnippet = () => (
  <div className="font-mono text-[11px] leading-relaxed select-none">
    <div className="flex items-center gap-2 mb-1">
      <span className="text-purple-400/70">Route</span>
      <span className="text-zinc-600">::</span>
      <span className="text-sky-400/70">get</span>
      <span className="text-zinc-500">(</span>
      <span className="text-amber-400/60">&apos;/api&apos;</span>
      <span className="text-zinc-500">)</span>
    </div>
    <div className="flex items-center gap-2 mb-1">
      <span className="text-green-400/60">→ 200 OK</span>
      <span className="text-zinc-600 text-[10px]">12ms</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-purple-400/70">POST</span>
      <span className="text-amber-400/60">&apos;/auth&apos;</span>
      <span className="text-green-400/60">✓</span>
    </div>
  </div>
);

const MobileFrame = () => (
  <svg viewBox="0 0 64 90" className="w-12 opacity-30 group-hover:opacity-60 transition-opacity duration-500" fill="none">
    <rect x="4" y="2" width="56" height="86" rx="10" stroke="currentColor" strokeWidth="2" className="text-zinc-400" />
    <rect x="10" y="14" width="44" height="60" rx="4" fill="currentColor" className="text-zinc-700" />
    <circle cx="32" cy="83" r="3" stroke="currentColor" strokeWidth="1.5" className="text-zinc-500" />
    <rect x="22" y="6" width="20" height="3" rx="1.5" fill="currentColor" className="text-zinc-600" />
    {/* Mini UI inside screen */}
    <rect x="13" y="18" width="38" height="5" rx="2" fill="currentColor" className="text-zinc-600" opacity="0.6" />
    <rect x="13" y="27" width="24" height="3" rx="1.5" fill="currentColor" className="text-zinc-600" opacity="0.4" />
    <rect x="13" y="34" width="38" height="16" rx="3" fill="currentColor" className="text-zinc-600" opacity="0.3" />
    <rect x="13" y="54" width="18" height="3" rx="1.5" fill="currentColor" className="text-zinc-600" opacity="0.4" />
    <rect x="33" y="54" width="18" height="3" rx="1.5" fill="currentColor" className="text-zinc-600" opacity="0.4" />
  </svg>
);

const NeuralNet = () => (
  <svg viewBox="0 0 120 80" className="w-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" fill="none">
    {/* Connections */}
    {[[20,20,60,20],[20,20,60,40],[20,20,60,60],[20,40,60,20],[20,40,60,40],[20,40,60,60],[20,60,60,20],[20,60,60,40],[20,60,60,60]].map(([x1,y1,x2,y2],i)=>(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.8" className="text-zinc-500" />
    ))}
    {[[60,20,100,30],[60,20,100,50],[60,40,100,30],[60,40,100,50],[60,40,100,70],[60,60,100,50],[60,60,100,70]].map(([x1,y1,x2,y2],i)=>(
      <line key={`b${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.8" className="text-zinc-500" />
    ))}
    {/* Nodes layer 1 */}
    {[20,40,60].map((y,i)=><circle key={`l1${i}`} cx="20" cy={y} r="5" fill="currentColor" className="text-zinc-600" stroke="currentColor" strokeWidth="1" />)}
    {/* Nodes layer 2 */}
    {[20,40,60].map((y,i)=><circle key={`l2${i}`} cx="60" cy={y} r="5" fill="currentColor" className="text-zinc-600" />)}
    {/* Nodes layer 3 */}
    {[30,50,70].map((y,i)=><circle key={`l3${i}`} cx="100" cy={y} r="5" fill="currentColor" className="text-zinc-500" />)}
  </svg>
);

const DBRows = () => (
  <div className="font-mono text-[10px] space-y-1 opacity-40 group-hover:opacity-70 transition-opacity duration-500 select-none overflow-hidden">
    <div className="flex gap-3 text-zinc-500 border-b border-zinc-700/50 pb-1 mb-1">
      <span className="w-6">id</span><span className="w-16">name</span><span>value</span>
    </div>
    {[["01","user_data","active"],["02","model_v2","ready"],["03","ai_resp","cached"]].map(([id,name,val],i)=>(
      <div key={i} className="flex gap-3 text-zinc-400">
        <span className="w-6 text-zinc-600">{id}</span>
        <span className="w-16 text-sky-400/70">{name}</span>
        <span className="text-green-400/60">{val}</span>
      </div>
    ))}
  </div>
);

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to(".skills-icon-inner", {
      y: -4,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: { each: 0.4, from: "random" },
    });
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-zinc-100">
            Technical Arsenal.
          </h2>
          <p className="text-zinc-400 max-w-xl">
            A comprehensive toolkit spanning from high-fidelity interface design to robust backend architectures.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[560px]"
        >
          {/* ── CARD 1: UI/UX ── */}
          <motion.div
            variants={item}
            className="bento-card p-7 md:col-span-1 md:row-span-2 flex flex-col group overflow-hidden relative"
          >
            {/* Decorative bezier at top */}
            <div className="mb-4 text-zinc-300">
              <BezierCurve />
            </div>

            {/* Color palette swatches */}
            <div className="flex items-end gap-1.5 mb-5 h-12">
              <ColorPalette />
            </div>

            {/* Tool badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {["Figma","Wireframe","Prototype","Auto Layout"].map((t) => (
                <span key={t} className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/40">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-zinc-800/60 rounded-xl">
                  <PenTool className="skills-icon-inner w-6 h-6 text-zinc-300" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-zinc-100">UI/UX Design</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Crafting intuitive flows & high-fidelity prototypes — from sketch to pixel-perfect Figma screens.
              </p>
            </div>

            {/* Radial glow */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors duration-700" />
          </motion.div>

          {/* ── CARD 2: Backend ── */}
          <motion.div
            variants={item}
            className="bento-card p-7 md:col-span-2 md:row-span-1 flex items-stretch group overflow-hidden relative"
          >
            {/* Left: text */}
            <div className="flex flex-col justify-between flex-1 z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-zinc-800/60 rounded-xl">
                  <Server className="skills-icon-inner w-6 h-6 text-zinc-300" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-zinc-100">Backend Development</h3>
              </div>

              {/* Skills with mini progress bars */}
              <div className="space-y-2">
                {[["PHP / Laravel", 88], ["REST API", 82], ["MySQL", 78]].map(([label, pct]) => (
                  <div key={label as string}>
                    <div className="flex justify-between text-[11px] mb-0.5">
                      <span className="text-zinc-400 font-mono">{label}</span>
                      <span className="text-zinc-600">{pct}%</span>
                    </div>
                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                        className="h-full bg-zinc-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: code decoration */}
            <div className="hidden sm:flex flex-col justify-center pl-8 border-l border-zinc-800/60 ml-6 z-10">
              <div className="bg-zinc-950/60 rounded-xl p-3 border border-zinc-800/40">
                <CodeSnippet />
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-28 h-28 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors duration-700" />
          </motion.div>

          {/* ── CARD 3: Mobile & Web ── */}
          <motion.div
            variants={item}
            className="bento-card p-7 md:col-span-1 md:row-span-1 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-zinc-800/60 rounded-xl">
                  <Smartphone className="skills-icon-inner w-6 h-6 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-poppins text-zinc-100">Mobile &amp; Web</h3>
                  <p className="text-zinc-500 text-xs">Dart · Flutter · JS</p>
                </div>
              </div>
              <MobileFrame />
            </div>

            {/* Tech pills at bottom */}
            <div className="flex flex-wrap gap-1.5">
              {["Flutter","Dart","JavaScript","React"].map((t) => (
                <span key={t} className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/40">
                  {t}
                </span>
              ))}
            </div>

            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-700" />
          </motion.div>

          {/* ── CARD 4: Database & AI ── */}
          <motion.div
            variants={item}
            className="bento-card p-7 md:col-span-1 md:row-span-1 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 bg-zinc-800/60 rounded-xl">
                <Brain className="skills-icon-inner w-6 h-6 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-base font-bold font-poppins text-zinc-100">Database &amp; AI</h3>
                <p className="text-zinc-500 text-xs">MySQL · MongoDB · GenAI</p>
              </div>
            </div>

            <div className="flex items-end gap-3">
              {/* Neural net viz */}
              <div className="flex-1 text-zinc-400">
                <NeuralNet />
              </div>

              {/* DB table */}
              <div className="flex-1">
                <DBRows />
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors duration-700" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
