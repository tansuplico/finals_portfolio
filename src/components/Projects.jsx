import ProjectCard from "./ProjectCard";
import { projects } from "../lib/projects";

export default function Projects() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Projects
          </h1>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
