type ExperienceCardProps = {
  companyName: string;
  companyLogo?: string | null;
  companyUrl?: string | null;
  startDate: string;
  endDate: string;
  role: string;
  employmentType: string;
  responsibilities: string[];
  stack?: string[];
};

export default function ExperienceCard({
  companyName,
  companyLogo,
  companyUrl,
  startDate,
  endDate,
  role,
  employmentType,
  responsibilities,
  stack = []
}: ExperienceCardProps) {
  return (
    <article className="card-shell mt-4 w-full max-w-xl">
      <div className="flex h-full flex-col gap-5 p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={companyLogo || "https://placehold.co/50"}
              alt=""
              className="h-12 w-12 rounded-full bg-slate-200 object-cover"
            />

            <div className="space-y-1">
              <a
                href={companyUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-slate-100 transition-colors duration-200 hover:text-cyan-200"
              >
                {companyName || "Not available"}
              </a>
              <p className="font-JetBrainsMono text-[0.68rem] uppercase tracking-[0.14em] text-slate-400">
                {startDate}' - {endDate ? `${endDate}'` : "Present"}
              </p>
            </div>
          </div>

          <span className="status-chip">
            {employmentType || "Experience"}
          </span>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-medium text-cyan-200">
            {role}
          </h3>

          <ul className="space-y-2 text-sm leading-7 text-slate-300/82">
            {responsibilities.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"></span>
                <span>{item}</span>
              </li>
            ))}

            {responsibilities.length === 0 && (
              <li className="text-slate-400">No responsibilities listed.</li>
            )}
          </ul>

          {stack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-JetBrainsMono text-[0.64rem] uppercase tracking-[0.12em] text-slate-300/72"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
