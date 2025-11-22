// app/page.jsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1020]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="py-24 md:py-32">
          <About />
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 md:py-32">
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 md:py-32">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 md:py-32">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  );
}
