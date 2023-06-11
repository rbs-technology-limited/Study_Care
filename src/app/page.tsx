import HeroSection from "@/components/Home/HeroSection/HeroSection";
import MainFeature from "@/components/Home/MainFeature/MainFeature";
import Faq from "@/components/Home/faq/Faq";
import About from "@/components/Home/About/About";
import FreeNotes from "@/components/Home/freeNotes/FreeNotes";
import Gallery from "@/components/Home/gallery/Gallery";
import Workflow from "@/components/Home/workflow/Workflow";
import PopularCourses from "@/components/Home/PopularCourses/PopularCourses";
import Instructor from "@/components/Home/instructor/Instructor";
import ExploreCourses from "@/components/Home/ExploreCourses/ExploreCourses";
import ContactUs from "@/components/Home/ContactUs/ContactUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MainFeature />
      <PopularCourses />
      <ExploreCourses />
      <About />
      <Instructor />
      <Faq />
      <Gallery />
      <ContactUs />
      <Workflow />
      <FreeNotes />
    </main>
  );
}
