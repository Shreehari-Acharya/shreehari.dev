import { motion } from "framer-motion";

export default function BlogCard({ title, brief, url, readTime }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
      className="outline outline-slate-400/35 rounded-lg overflow-hidden mt-4 hover:shadow-lg/25"
    >
      {/* Text Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg text-cyan-300 hover:text-blue-400">{title}</h3>
        <p className="text-sm text-slate-300 font-light line-clamp-3">{brief}</p>
        <span className="text-xs text-emerald-400 bg-emerald-700/20 rounded-full px-3 py-0.5 inline-block">
          {readTime} min read
        </span>
      </div>
    </motion.a>
  );
}