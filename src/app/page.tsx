import About from "@/components/Home/About/About";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import MainFeature from "@/components/Home/MainFeature/MainFeature";
import Faq from "@/components/Home/faq/Faq";
import FreeNotes from "@/components/Home/freeNotes/FreeNotes";
import Gallery from "@/components/Home/gallery/Gallery";
import Workflow from "@/components/Home/workflow/Workflow";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Faq />
      <MainFeature />
      <Gallery />
      <Workflow />
      <FreeNotes />
    </main>
  );
}
