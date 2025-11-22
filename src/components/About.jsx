export const metadata = {
  title: "About — Tristan",
  description:
    "About Tristan — frontend engineer, developer, and builder of accessible web apps.",
};

import Image from "next/image";
import profile from "@/assets/profile.png";

export default function AboutPage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-start">
        <div className="md:col-span-2 space-y-6 lg:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            About me
          </h1>

          <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p className="max-w-3xl">
              I’m a dedicated web developer focused on building practical,
              accessible web applications. Currently, I work on projects that
              blend robust engineering with thoughtful user experience. I enjoy
              taking an idea from concept to production, ensuring it performs
              well and is easy to maintain.
            </p>

            <p className="max-w-3xl">
              My journey into web development began with curiosity and small
              projects—tinkering with HTML/CSS before moving into JavaScript and
              modern frameworks. Along the way I completed courses in web
              development and built several personal projects that strengthened
              my understanding of frontend and backend technologies.
            </p>

            <p className="max-w-3xl">
              I believe in pragmatic engineering: favoring clarity and
              simplicity, writing tests where they matter, and automating
              repetitive tasks. I’m comfortable with React/Next.js on the
              frontend and Node.js-based stacks on the backend. I’m continuously
              learning and enjoy improving both UX and technical foundations.
            </p>

            <p className="max-w-3xl">
              Outside of coding, I enjoy creative hobbies that help me stay
              balanced—photography, sketching UI ideas, and exploring new design
              systems. These activities keep my visual sensibilities sharp and
              inform how I approach product interfaces.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="/projects"
              className="px-6 py-3.5 bg-[#8000FF] hover:bg-[#9600ff] text-white font-medium rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-center"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3.5 border border-slate-600 text-slate-200 hover:bg-white/5 rounded-lg font-medium text-centertransition-all duration-300 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        <aside className="md:sticky md:top-24 surface p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl shadow-purple-900/10">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-[#8000FF]/20 shadow-2xl">
              <Image
                src={profile}
                alt="Tristan Suplico"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 ring-4 ring-[#8000FF]/10 rounded-full" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">Tristan</h3>
              <p className="text-sm sm:text-base text-slate-400 mt-1">
                Frontend Engineer
              </p>
            </div>

            <div className="w-full space-y-3 text-sm sm:text-base">
              <div className="flex justify-between py-3 border-b border-slate-700/50">
                <span className="text-slate-500">Location</span>
                <span className="text-slate-300">Iloilo City, Philippines</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-700/50">
                <span className="text-slate-500">Experience</span>
                <span className="text-slate-300">3+ years</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-slate-500">Primary Stack</span>
                <span className="text-slate-300 font-medium">
                  Next.js · React · Tailwind
                </span>
              </div>
            </div>

            <div className="w-full space-y-4">
              <a
                href="mailto:you@example.com"
                className="block w-full py-3.5 bg-[#8000FF] hover:bg-[#9600ff] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Email Me
              </a>

              <div className="flex justify-center gap-6 text-slate-400">
                <a
                  href="https://github.com/yourname"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourname"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
