import Image from "next/image";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import { Toaster } from "sonner";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Toaster />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
