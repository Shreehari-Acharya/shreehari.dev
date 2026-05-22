import { ChevronDown } from "lucide-react";
import { useState } from "react";
import projects from "../contents/projects.json";

const PER_PAGE = 3;

interface Project {
  name: string;
  description: string;
  liveLink: string | null;
  githubLink: string | null;
  stack: string[];
}

const items: Project[] = projects.projects;

export function ProjectList() {
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  function toggleExpand(index: number) {
    setExpandedIndex((current) => (current === index ? null : index));
  }

  function showMore() {
    setVisibleCount((current) => Math.min(current + PER_PAGE, items.length));
  }

  return (
    <section
      className="mt-10 w-full text-left"
      aria-labelledby="projects-title"
    >
      <h2
        id="projects-title"
        className="text-sm font-medium text-foreground/60"
      >
        PROJECTS
      </h2>

      <div className="mt-4 space-y-3">
        {visibleItems.map(
          ({ name, description, liveLink, githubLink, stack }, index) => {
            const isExpanded = expandedIndex === index;
            const hasLink = liveLink || githubLink;
            const href = liveLink || githubLink;

            return (
              <article
                key={name}
                className="rounded-lg border border-border p-4 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    {hasLink ? (
                      <a
                        href={href!}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-foreground underline-offset-2 hover:underline"
                      >
                        {name}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground">
                        {name}
                      </span>
                    )}

                    <p
                      className={`mt-1 text-sm leading-relaxed text-muted-foreground ${
                        isExpanded
                          ? ""
                          : "line-clamp-2 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
                      }`}
                    >
                      {description}
                    </p>

                    {isExpanded && stack.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(index)}
                    className="mt-0.5 shrink-0 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={isExpanded ? "Show less" : "Show more"}
                    aria-expanded={isExpanded}
                  >
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      aria-hidden={true}
                    />
                  </button>
                </div>
              </article>
            );
          },
        )}
      </div>

      {hasMore && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={showMore}
            className="cursor-pointer text-xs text-muted-foreground underline-offset-2 hover:underline"
          >
            View more
          </button>
        </div>
      )}
    </section>
  );
}
