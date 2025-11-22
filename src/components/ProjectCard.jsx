import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="surface rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
      {project.img ? (
        <Image
          src={project.img}
          alt={project.title}
          width={1200}
          height={630}
          className="w-full object-cover"
        />
      ) : (
        <div className="w-full h-44 bg-slate-900 flex items-center justify-center text-slate-500">
          No preview
        </div>
      )}

      <div className="p-4">
        <h3 className="font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-slate-800 rounded text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline text-slate-200"
            >
              Live
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline text-slate-200"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
