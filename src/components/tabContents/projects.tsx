import { startTransition, useState } from "react";
import { projects } from "../../contents/project.json";
import ProjectCard from "../project-card";

const ITEMS_PER_PAGE = 4;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const loadMore = () => {
    startTransition(() => {
      setVisibleCount((current) =>
        Math.min(current + ITEMS_PER_PAGE, projects.length)
      );
    });
  };

  return (
    <section id="projects" className="section-panel mt-20">
      <div className="flex flex-col gap-4">
        <h2 className="section-heading text-lg">
          <span className="section-heading-accent">/</span>
          projects
        </h2>

        <div className="grid grid-cols-1 gap-x-12 gap-y-1 lg:grid-cols-2">
          {visibleProjects.map((item) => (
            <ProjectCard
              key={item.name}
              name={item.name}
              description={item.description}
              type={item.type}
              liveLink={item.liveLink}
              githubLink={item.githubLink}
              stack={item.stack}
            />
          ))}
        </div>

        {hasMore && (
          <div>
            <button onClick={loadMore} type="button" className="subtle-button">
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
