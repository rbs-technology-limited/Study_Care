import About from "@/components/Home/About/About";
import BecomeAnInstructor from "@/components/Home/BecomeAnInstructor/BecomeAnInstructor";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import ExploreCourses from "@/components/Home/ExploreCourses/ExploreCourses";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import MainFeature from "@/components/Home/MainFeature/MainFeature";
import PopularCourses from "@/components/Home/PopularCourses/PopularCourses";
import Faq from "@/components/Home/faq/Faq";
import FreeNotes from "@/components/Home/freeNotes/FreeNotes";
import Gallery from "@/components/Home/gallery/Gallery";
import Instructor from "@/components/Home/instructor/Instructor";
import Reviews from "@/components/Home/reviews/Reviews";
import Workflow from "@/components/Home/workflow/Workflow";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MainFeature />
      <Workflow />
      <PopularCourses />
      <ExploreCourses />
      <About />
      <Instructor />
      <Reviews />
      <Faq />
      <Gallery />
      <ContactUs />
      <BecomeAnInstructor />
      <FreeNotes />
    </main>
  );
}
