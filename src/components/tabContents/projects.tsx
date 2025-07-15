import { projects } from "../../contents/project.json"
import ProjectCard from "../project-card.tsx"; 


export default function Projects() {
    return (
        <div className={`grid ${projects.length > 1 ? "md:grid-cols-3" : ""}`}

        >
            {projects.map((item, idx) => (
                <ProjectCard
                    key={idx}
                    name={item.name}
                    description={item.description}
                    type={item.type}
                    liveLink={item.liveLink}
                    githubLink={item.githubLink}
                    stack={item.stack}
                />
            ))}
        </div>
    )
}
