import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { RxCalendar } from "react-icons/rx";
import { FaMap, FaArrowRight } from "react-icons/fa";

interface duration {
  start: string;
  end: string;
}

interface Props {
  index: number;
  designation: string;
  description: string;
  company: string;
  duration: duration;
  jobType: string;
  location?: string;
  details?: string[];
}

const ExperienceCard = (props: Props) => {
  const {
    index,
    designation,
    company,
    duration,
    jobType,
    description,
    details,
    location,
  } = props;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div
        className="relative group  block p-2 h-full w-full "
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => setExpand(!expand)}
      >
        <AnimatePresence>
          {hoveredIndex === index && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
              layoutId="hoverBackground" // required for the background to follow
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
          <div className="relative z-50">
            <div className="p-4">
              <h4 className="text-zinc-100 font-bold tracking-wide mt-4 ">
                {designation}
              </h4>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-cyan-500 font-bold tracking-wide mt-2">
                {company} - <span>{jobType}</span>
              </h2>
              {/* duration */}
              <p className="flex items-center text-zinc-400 tracking-wide leading-relaxed text-sm">
                <RxCalendar className="mr-1" />
                <span>{duration.start}</span>
                <span className="mx-1">-</span>
                <span>{duration.end}</span>
              </p>
              {/* location */}
              <p className="flex items-center  text-zinc-400 tracking-wide leading-relaxed text-sm">
                <FaMap className="mr-1" />
                {location}
              </p>
              {/* description */}
              {!expand && (
                <p className="truncate mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  {description} . . .
                </p>
              )}
              {expand && (
                <ul className="list-disc mt-4 text-sm text-zinc-400">
                  {details?.map((detail, idx) => (
                    <li key={idx} className="py-1 mx-4 items-center">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => setExpand(!expand)}
                type="button"
                className="mt-2 text-slate-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:text-blue-500"
              >
                {expand ? "see less" : "...see more"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
