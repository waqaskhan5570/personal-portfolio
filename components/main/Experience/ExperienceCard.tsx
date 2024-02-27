import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

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
}

const ExperienceCard = (props: Props) => {
  const { index, designation, company, duration, jobType, description } = props;
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className="relative group  block p-2 h-full w-full "
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
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
              <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-500 to-cyan-500 font-bold tracking-wide mt-4">
                {company}
              </h2>
              <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
