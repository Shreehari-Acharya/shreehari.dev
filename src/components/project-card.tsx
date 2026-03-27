type ProjectCardProps = {
  name: string;
  description: string;
  type: string;
  liveLink: string | null;
  githubLink: string | null;
  stack: string[];
};

export default function ProjectCard({
  name,
  description,
  type,
  liveLink,
  githubLink,
  stack
}: ProjectCardProps) {
  return (
    <article className="card-shell">
      <div className="flex h-full flex-col gap-5 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="font-JetBrainsMono text-[0.65rem] uppercase tracking-[0.24em] text-cyan-100/55">
              {type}
            </p>
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-100 md:text-xl">
              {liveLink ? (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-cyan-200"
                >
                  {name}
                </a>
              ) : (
                name
              )}
            </h3>
          </div>

          <div className="flex shrink-0 flex-wrap gap-x-4 gap-y-2 sm:justify-end">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="status-chip"
              >
                GitHub
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="status-chip"
              >
                Live
              </a>
            )}
          </div>
        </div>

        <p className="max-w-[62ch] text-sm leading-7 text-slate-300/84">
          {description}
        </p>

        {stack.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-x-3 gap-y-2">
            {stack.slice(0, 7).map((tech) => (
              <span
                key={tech}
                className="font-JetBrainsMono text-[0.64rem] uppercase tracking-[0.12em] text-slate-400/78"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
