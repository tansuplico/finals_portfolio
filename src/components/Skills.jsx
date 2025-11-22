// components/Skills.jsx
import html from "@/assets/html-logo.svg";
import css from "@/assets/css-logo.svg";
import figma from "@/assets/fgma-logo.svg";
import fm from "@/assets/fm-logo.svg";
import git from "@/assets/git-logo.svg";
import js from "@/assets/js-logo.svg";
import mdb from "@/assets/mdb-logo.svg";
import node from "@/assets/node-logo.svg";
import post from "@/assets/post-logo.svg";
import py from "@/assets/py-logo.svg";
import query from "@/assets/query-logo.svg";
import rdx from "@/assets/rdx-logo.svg";
import react from "@/assets/react-logo.svg";
import ts from "@/assets/ts-logo.svg";
import tw from "@/assets/tw-logo.svg";
import xp from "@/assets/xp-logo.svg";
import zs from "@/assets/zs-logo.svg";

import Image from "next/image";

const skillGroups = [
  { skill: "HTML", img: html },
  { skill: "CSS", img: css },
  { skill: "JavaScript", img: js },
  { skill: "TypeScript", img: ts },
  { skill: "React", img: react },
  { skill: "Redux", img: rdx },
  { skill: "Node.js", img: node },
  { skill: "MongoDB", img: mdb },
  { skill: "PostgreSQL", img: post },
  { skill: "Python", img: py },
  { skill: "Git", img: git },
  { skill: "Figma", img: figma },
  { skill: "Tailwind CSS", img: tw },
  { skill: "React Query", img: query },
  { skill: "Framer Motion", img: fm },
  { skill: "Express", img: xp },
  { skill: "Zustand", img: zs },
];

export default function Skills() {
  return (
    <section className="py-16 md:py-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white pl-5 mb-12 md:mb-16">
        My Skills
      </h1>

      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 justify-center max-w-7xl mx-aut px-4
        "
      >
        {skillGroups.map(({ skill, img }) => (
          <div
            key={skill}
            className="group bg-[#1b1b1b]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/5 hover:border-white/20 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/10
            "
          >
            <Image
              src={img}
              alt={skill}
              width={80}
              height={80}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-125"
            />
            <span className="mt-3 text-xs sm:text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colorstext-center">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
