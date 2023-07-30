import { useAppSelector } from "@/Redux/store";
import AnyQuestionSection from "./AnyQuestionSection/AnyQuestionSection";
import CarouselMedia from "./CarouselMedia/CarouselMedia";
import ClassRequirements from "./ClassRequirements/ClassRequirements";
import ClassRoutine from "./ClassRoutine/ClassRoutine";
import ClassTeacherInfo from "./ClassTeacherInfo/ClassTeacherInfo";
import CourseSyllabus from "./CourseSyllabus/CourseSyllabus";
import PriceAndEnroll from "./PriceAndEnroll/PriceAndEnroll";
import QAAboutCourse from "./QAAboutCourse/QAAboutCourse";
import TitleAndDescription from "./TitleAndDescription/TitleAndDescription";

const CoursePageLeftUI = () => {
  const { courseDetails } = useAppSelector((state) => state.category);
  const { sliders, syllabuses, class_routines, highlights, faqs, teachers } =
    courseDetails;
  return (
    <section>
      <CarouselMedia />
      <PriceAndEnroll />
      <TitleAndDescription />
      <ClassRoutine />
      <CourseSyllabus />
      <ClassTeacherInfo />
      <QAAboutCourse />
      <ClassRequirements />
      <AnyQuestionSection />
    </section>
  );
};

export default CoursePageLeftUI;
