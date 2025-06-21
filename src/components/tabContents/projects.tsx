import { projects } from "../../contents/project.json"
import ProjectCard from "../project-card.tsx"; 


export default function Projects() {
    return (
        <div className={`grid ${projects.length > 1 ? "grid-cols-2" : ""} gap-5 place-items-center`}

        >
            {projects.map((item, idx) => (
                <ProjectCard
                    key={idx}
                    name={item.name}
                    description={item.description}
                    type={item.type}
                    responsibilities={item.responsibilities}
                    liveLink={item.liveLink}
                    githubLink={item.githubLink}
                    stack={item.stack}
                />
            ))}
        </div>
    )
}
