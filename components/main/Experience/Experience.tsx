"use client";
import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience as ExperienceData } from "@/constants";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="experience">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Experience
      </h1>
      <div className="w-full px-8">
        <div className="py-10">
          {ExperienceData?.map((experience, index) => (
            <ExperienceCard key={index} index={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
