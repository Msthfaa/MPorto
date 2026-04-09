import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen antialiased selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
