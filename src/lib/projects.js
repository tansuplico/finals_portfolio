import furnistore from "@/assets/furnistore.png";
import dailydo from "@/assets/dailydo.png";
import xtrack from "@/assets/xtrack.png";

export const projects = [
  {
    id: "proj-1",
    title: "XTrack — Personal Finance Tracker",
    description:
      "A full-stack personal finance app built with the MERN stack. Features user authentication, expense/income tracking with categories, interactive charts, and persistent data storage using MongoDB.",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    img: xtrack,
    live: "https://xtrack-main.onrender.com/",
    github: "https://github.com/tansuplico/xtrack-main",
    role: "Full-stack Developer",
  },
  {
    id: "proj-2",
    title: "Furnistore — Modern Furniture Store",
    description:
      "A sleek, animated e-commerce frontend with smooth page transitions, cart functionality, product filtering, and responsive design. Built with modern React practices and styled using Tailwind and Framer Motion.",
    tech: ["React", "JavaScript", "Redux", "Tailwind CSS", "Framer Motion"],
    img: furnistore,
    live: "https://suplico-furnistore-site.netlify.app/collections",
    github: "https://github.com/tansuplico/furnistore-site",
    role: "Frontend Developer",
  },
  {
    id: "proj-3",
    title: "DailyDo — Task & Habit Tracker",
    description:
      "A minimalist full-stack productivity app for managing daily tasks and building habits. Features user accounts, real-time updates, task categorization, and a clean, intuitive interface powered by Zustand for state management.",
    tech: [
      "React",
      "JavaScript",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    img: dailydo,
    live: "https://dailydo-0bc4.onrender.com/",
    github: "https://github.com/tansuplico/dailydo-final",
    role: "Full-stack Developer",
  },
];
