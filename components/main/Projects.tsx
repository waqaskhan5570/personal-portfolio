"use client";
import React from "react";
import { ProjectParallax } from "../ui/project-parallax";
import { ProjectsList } from "@/constants";

export function Projects() {
  return (
    <section id="projects">
      <ProjectParallax products={ProjectsList} />
    </section>
  );
}
