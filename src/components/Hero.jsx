"use client";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      aria-label="Home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="w-full max-w-5xl mx-auto text-center">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Hi! I'm
          <strong className="text-[#8000FF] ml-2">Tristan Suplico</strong>
        </h4>

        <p className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold text-slate-200">
          A <span className="text-[#8000FF]">full-stack developer</span>
          <br className="hidden sm:block" /> with a focus on
          <br className="block sm:hidden" />
          <span className="text-[#8000FF]"> front-end development</span>
        </p>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-medium 
                       border border-slate-600 rounded-lg 
                       bg-white/5 backdrop-blur-sm 
                       hover:bg-[#8000FF] hover:border-[#8000FF] 
                       text-white transition-all duration-300 
                       shadow-lg hover:shadow-xl hover:shadow-purple-500/20"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-medium 
                       text-slate-200 border border-slate-600 rounded-lg 
                       bg-transparent hover:bg-[#8000FF] hover:border-[#8000FF] 
                       transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
