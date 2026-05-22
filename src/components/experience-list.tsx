import experience from "../contents/experience.json";

interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
}

const items: ExperienceItem[] = experience;

export function ExperienceList() {
  return (
    <section
      className="mt-10 w-full text-left"
      aria-labelledby="experience-title"
    >
      <h2
        id="experience-title"
        className="text-sm font-medium text-foreground/60"
      >
        EXPERIENCE
      </h2>

      <div className="mt-4">
        {items.map(({ company, role, startDate, endDate }) => (
          <article
            key={`${company}-${role}-${startDate}`}
            className="relative py-2 pl-8"
          >
            <span
              className="absolute top-0 bottom-0 left-4 w-px bg-muted-foreground/60"
              aria-hidden="true"
            />
            <span
              className="absolute top-1/2 left-4 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/90"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-sm font-medium text-foreground">
                  {company}
                </h3>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>

              <p className="shrink-0 text-xs text-muted-foreground">
                {startDate} - {endDate}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
