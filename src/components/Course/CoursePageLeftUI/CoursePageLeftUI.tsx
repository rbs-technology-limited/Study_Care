import React from "react";
import CarouselMedia from "./CarouselMedia/CarouselMedia";
import PriceAndEnroll from "./PriceAndEnroll/PriceAndEnroll";
import TitleAndDescription from "./TitleAndDescription/TitleAndDescription";
import ClassRoutine from "./ClassRoutine/ClassRoutine";
import QAAboutCourse from "./QAAboutCourse/QAAboutCourse";
import ClassRequirements from "./ClassRequirements/ClassRequirements";
import CourseSyllabus from "./CourseSyllabus/CourseSyllabus";
import AnyQuestionSection from "./AnyQuestionSection/AnyQuestionSection";

const CoursePageLeftUI = () => {
  return (
    <section>
      <CarouselMedia />
      <PriceAndEnroll />
      <TitleAndDescription />
      <ClassRoutine />
      <CourseSyllabus />
      <QAAboutCourse />
      <ClassRequirements />
      <AnyQuestionSection />
    </section>
  );
};

export default CoursePageLeftUI;
