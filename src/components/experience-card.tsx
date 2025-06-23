import { motion } from "motion/react"

export default function ExperienceCard({
    companyName,
    companyLogo,
    companyUrl,
    startDate,
    endDate,
    role,
    employmentType,
    responsibilities,
    stack
}) {
    return (
        <motion.div 
            className="outline outline-slate-400/35 rounded-lg mt-4 hover:shadow-lg/25 mx-5"
            whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
        >
            <div
                className="flex justify-between items-center border-b border-slate-400/30 px-4 py-3 mb-3.5"
            >
                <div className="flex items-center gap-4">
                    <img
                        src={companyLogo || "https://placehold.co/50"}
                        alt=""
                        className="rounded-full bg-slate-200 object-cover"
                    />

                    <div>
                        <a href={companyUrl || "#"} target="_blank" rel="noopener noreferrer"
                        ><h2
                            className="text-xl text-cyan-300 hover:text-blue-400"
                        >
                                {companyName || "Not available"}
                            </h2></a
                        >
                        <p className="text-xs text-slate-300">
                            {startDate}' - {endDate + "'" || "Present"}
                        </p>
                    </div>
                </div>
                <h4
                    className="text-sm text-green-400 bg-emerald-700/20 rounded-xl px-3.5 py-0.5"
                >
                    {employmentType || ""}
                </h4>
            </div>
            <div className="px-3">
                <h4 className="text-base text-amber-400">{role}</h4>
                <ul
                    className="text-xs md:text-sm list-disc list-inside mt-2 font-light space-y-2"
                >
                    {responsibilities.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                    ))}
                    {responsibilities.length === 0 && (
                        <li className="text-slate-400">
                            No responsibilities listed.
                        </li>
                    )}
                </ul>
                {stack && stack.length > 0 && (
                    <div className="mt-4 text-xs md:text-sm space-x-2 flex flex-wrap">
                            {stack.map((item: string, idx: number) => (
                                <span
                                    key={idx}
                                    className="bg-slate-700/40 px-2 py-0.5 rounded text-xs mb-2"
                                >
                                    {item}
                                </span>
                            ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}