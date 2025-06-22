import GitHubCalendar from 'react-github-calendar';
import {technologies} from "../../contents/techStack.json"

export default function Skills() {

    return (
        <div className="flex flex-col items-center pt-6 gap-8">
            <div className='w-11/12 items-center flex flex-col '>
              <GitHubCalendar username='Shreehari-Acharya' />
            </div>
            <div className='w-full items-center flex flex-col gap-4'>
                <p className="md:text-xl font-medium text-center mx-3">
                    This is a list of tools, technologies, and languages I have worked in.
                </p>
                <div className="mt-4 text-base w-2/3 text-slate-300 flex flex-wrap gap-2 mb-15">
            {technologies.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="bg-slate-700/40 px-2 py-0.5 rounded text-base"
              >
                {tech}
              </span>
            ))}
          </div>
            </div>
        </div>
    );
}