import GitHubCalendar from "react-github-calendar";
import { technologies } from "../../contents/techStack.json";

const theme = {
  dark: ["#0f172a", "#0e3a4f", "#0f766e", "#06b6d4", "#67e8f9"]
};

export default function Skills() {
  return (
    <section id="skills" className="section-panel">
      <div className="flex flex-col gap-4">
        <h2 className="section-heading text-lg">
          <span className="section-heading-accent">/</span>
          skills
        </h2>

        <div className="overflow-x-auto py-1">
          <div className="min-w-[720px]">
            <GitHubCalendar
              username="Shreehari-Acharya"
              colorScheme="dark"
              blockSize={13}
              blockMargin={4}
              fontSize={12}
              theme={theme}
            />
          </div>
        </div>

        <div className="flex max-w-4xl flex-wrap gap-x-5 gap-y-3">
          {technologies.map((tech: string) => (
            <span
              key={tech}
              className="font-JetBrainsMono text-[0.64rem] uppercase tracking-[0.12em] text-slate-400/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
