import HeroSection from "@/components/Home/HeroSection/HeroSection";
import MainFeature from "@/components/Home/MainFeature/MainFeature";
import About from "@/components/Home/about/About";
import FreeNotes from "@/components/Home/freeNotes/FreeNotes";
import Gallery from "@/components/Home/gallery/Gallery";
import Workflow from "@/components/Home/workflow/Workflow";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <MainFeature />
      <Gallery />
      <Workflow />
      <FreeNotes />
    </main>
  );
}
