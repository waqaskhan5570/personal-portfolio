import Experience from "@/components/main/Experience/Experience";
import Hero from "@/components/main/Hero";
import { MacBookScrollView } from "@/components/main/MacBookScrollView";
import { Projects } from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import UnderConstructionModal from "@/components/sub/UnderConstructionModal";

export default function Home() {
  return (
    <main className="h-full w-full">
      <UnderConstructionModal />
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <MacBookScrollView />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
