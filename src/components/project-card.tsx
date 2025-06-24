import { motion } from "framer-motion";

export default function ProjectCard({
  name,
  description,
  type,
  responsibilities,
  liveLink,
  githubLink,
  stack
}) {
  return (
    <motion.div
      className="outline outline-slate-400/35 rounded-lg mt-4 hover:shadow-lg/25 mx-3 md:mx-3"
      whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
    >
      <div className="flex justify-between items-start border-b border-slate-400/30 px-4 py-3 mb-3.5">
        <div>
          <h2 className="text-base md:text-xl text-cyan-300 hover:text-blue-400">
            {liveLink ? (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ) : (
              name
            )}
          </h2>
          <p className="text-xs text-slate-300 mt-1">{type}</p>
        </div>
        <div className="flex gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-slate-400 hover:text-white underline"
            >
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-slate-400 hover:text-white underline"
            >
              Live
            </a>
          )}
        </div>
      </div>

      <div className="px-3">
        <p className="text-xs md:text-sm text-slate-200 mb-2">{description}</p>

        <ul className="text-xs md:text-sm list-disc list-inside mt-2 font-light space-y-2">
          {responsibilities?.length > 0 ? (
            responsibilities.map((item: string, idx: number) => <li key={idx}>{item}</li>)
          ) : (
            <li className="text-slate-300">No responsibilities listed.</li>
          )}
        </ul>

        {stack && stack.length > 0 && (
          <div className="mt-4 text-sm space-x-2 text-slate-300 flex flex-wrap">
            {stack.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="bg-slate-700/40 px-2 py-0.5 rounded text-xs mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
