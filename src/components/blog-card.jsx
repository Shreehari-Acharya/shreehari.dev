import { motion } from "framer-motion";

export default function BlogCard({ title, brief, url, readTime }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
      className="block outline outline-slate-400/35 rounded-lg overflow-hidden mt-4 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)] w-full relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="p-3 md:p-4 space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xs md:text-sm text-cyan-300 hover:text-blue-400 transition-colors flex-1">{title}</h3>
          <span className="text-[9px] md:text-[10px] text-emerald-400 bg-emerald-700/20 rounded-full px-2 py-0.5 shrink-0">
            {readTime} min
          </span>
        </div>
        <p className="text-[10px] md:text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">{brief}</p>
      </div>
    </motion.a>
  );
}
