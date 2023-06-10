import About from "@/components/Home/About/About";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import MainFeature from "@/components/Home/MainFeature/MainFeature";
import Faq from "@/components/Home/faq/Faq";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import FreeNotes from "@/components/Home/freeNotes/FreeNotes";
import Gallery from "@/components/Home/gallery/Gallery";
import Workflow from "@/components/Home/workflow/Workflow";
import PopularCourses from "@/components/Home/PopularCourses/PopularCourses";
import ExploreCourses from "@/components/Home/ExploreCourses/ExploreCourses";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MainFeature />
      <PopularCourses />
      <ExploreCourses />
      <About />
      <Faq />
      <Gallery />
      <ContactUs />
      <Workflow />
      <FreeNotes />
    </main>
  );
}
