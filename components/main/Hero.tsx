import React from "react";
import HeroContent from "../sub/HeroContent";
import { ComputersCanvas } from "../Canvas";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
        >
          <source
            className="bg-white"
            src="/blackhole.webm"
            type="video/webm"
          />
        </video>
        <HeroContent />
      </div>
      <section className="relative w-full h-[80vh] mx-auto cursor-pointer">
        <ComputersCanvas />
      </section>
    </>
  );
};

export default Hero;
