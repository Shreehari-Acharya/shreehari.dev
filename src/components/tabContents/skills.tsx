import GitHubCalendar from 'react-github-calendar';
import {technologies} from "../../contents/techStack.json"
import { motion } from "framer-motion";

export default function Skills() {

    return (
        <div className="flex flex-col items-center pt-12 gap-8">
            <h2 className="text-xl md:text-2xl text-slate-200 font-Sedan">
                <span className="text-cyan-400">/</span>skills
            </h2>
            <div className='w-11/12 items-center flex flex-col '>
              <GitHubCalendar username='Shreehari-Acharya' />
            </div>
            <div className='w-full items-center flex flex-col gap-4'>
                <div className="mt-4 px-3 md:p-0 md:text-xs md:w-2/3 text-slate-300 flex flex-wrap gap-2 mb-15 justify-center">
            {technologies.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="bg-slate-800/60 border border-slate-700/50 px-2.5 py-1 rounded text-xs text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
            </div>
        </div>
    );
}