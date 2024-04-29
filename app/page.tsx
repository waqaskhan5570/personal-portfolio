import Encryption from "@/components/main/Encryption";
import Experience from "@/components/main/Experience/Experience";
import Hero from "@/components/main/Hero";
import { MacBookScrollView } from "@/components/main/MacBookScrollView";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <MacBookScrollView/>
        <Experience />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
