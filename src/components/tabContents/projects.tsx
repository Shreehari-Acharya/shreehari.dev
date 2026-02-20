import { useState } from "react";
import { projects } from "../../contents/project.json";
import ProjectCard from "../project-card.tsx";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS_PER_PAGE = 4;

export default function Projects() {
  const sortedProjects = [...projects];
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const hasMore = visibleCount < sortedProjects.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, sortedProjects.length));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mt-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl text-slate-200 font-Sedan mb-6"
      >
        <span className="text-cyan-400">/</span>projects
      </motion.h2>

      <div
        className={`w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4`}
      >
        <AnimatePresence mode="popLayout">
          {sortedProjects.slice(0, visibleCount).map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <ProjectCard
                name={item.name}
                description={item.description}
                type={item.type}
                liveLink={item.liveLink}
                githubLink={item.githubLink}
                stack={item.stack}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <motion.button
          onClick={loadMore}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 px-6 py-2 text-sm text-slate-300 border border-slate-600/50 rounded-lg hover:border-cyan-400/50 hover:text-cyan-300 transition-colors duration-200"
        >
          View more
        </motion.button>
      )}
    </div>
  );
}
