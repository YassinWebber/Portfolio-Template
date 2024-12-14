
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Servicies from "@/sections/Servicies";
import Skills from "@/sections/Skills";

export default function Home() {


  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Servicies />
      <Contact />

    </main>
  );
}
