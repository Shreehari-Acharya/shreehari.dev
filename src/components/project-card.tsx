import { motion } from "framer-motion";

export default function ProjectCard({
  name,
  description,
  type,
  liveLink,
  githubLink,
  stack
}) {
  return (
    <motion.div
      className="outline outline-slate-400/35 rounded-lg hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)] relative overflow-hidden group"
      whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="flex justify-between items-start border-slate-400/30 px-3 pt-3 mb-2">
        <div>
          <h2 className="text-xs md:text-sm text-cyan-300 hover:text-blue-400 transition-colors">
            {liveLink ? (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ) : (
              name
            )}
          </h2>
          <p className="text-[9px] md:text-[10px] text-slate-400 mt-1 font-light">{type}</p>
        </div>
        <div className="flex gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-xs text-slate-400 hover:text-white underline transition-colors"
            >
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white underline transition-colors"
            >
              Live
            </a>
          )}
        </div>
      </div>

      <div className="px-3 pb-3">
        <p className="text-[11px] md:text-[12px] text-slate-200 mb-3 leading-relaxed">{description}</p>

        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {stack.slice(0, 6).map((tech: string, idx: number) => (
              <span
                key={idx}
                className="bg-slate-800/60 border border-slate-700/50 px-2 py-0.5 rounded text-[9px] text-slate-400"
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
