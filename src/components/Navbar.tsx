"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "skills", "projects"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className={`pointer-events-auto flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${
        scrolled ? "bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-2xl shadow-black/50" : "bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50"
      }`}>
        <div 
          className="font-poppins font-bold text-lg tracking-tighter cursor-pointer mr-6 sm:mr-8" 
          onClick={() => scrollToSection("home")}
        >
          <span className="text-zinc-100">
            Msthfaa
          </span>
        </div>

        <ul className="flex space-x-1 sm:space-x-2">
          {["Home", "Skills", "Projects"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase() ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-zinc-100 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
