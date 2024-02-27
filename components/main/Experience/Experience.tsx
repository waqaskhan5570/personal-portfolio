"use client";
import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience as ExperienceData } from "@/constants";

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="experience"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Experience
      </h1>
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
          {ExperienceData?.map((experience, index) => (
            <ExperienceCard key={index} index={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
