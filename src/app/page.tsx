import ContactUs from "@/components/Home/ContactUs/ContactUs";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import MainFeature from "@/components/Home/MainFeature/MainFeature";
import About from "@/components/Home/About/About";
import FreeNotes from "@/components/Home/freeNotes/FreeNotes";
import Gallery from "@/components/Home/gallery/Gallery";
import Workflow from "@/components/Home/workflow/Workflow";
import PopularCourses from "@/components/Home/PopularCourses/PopularCourses";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PopularCourses />
      <About />
      <MainFeature />
      <Gallery />
      <ContactUs />
      <Workflow />
      <FreeNotes />
    </main>
  );
}
