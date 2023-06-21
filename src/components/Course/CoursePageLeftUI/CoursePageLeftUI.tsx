import React from "react";
import CarouselMedia from "./CarouselMedia/CarouselMedia";
import PriceAndEnroll from "./PriceAndEnroll/PriceAndEnroll";
import TitleAndDescription from "./TitleAndDescription/TitleAndDescription";
import ClassRoutine from "./ClassRoutine/ClassRoutine";
import DetailsAboutCourse from "./DetailsAboutCourse/DetailsAboutCourse";
import ClassRequirements from "./ClassRequirements/ClassRequirements";

const CoursePageLeftUI = () => {
  return (
    <section>
      <CarouselMedia />
      <PriceAndEnroll />
      <TitleAndDescription />
      <ClassRoutine />
      <DetailsAboutCourse />
      <ClassRequirements />
    </section>
  );
};

export default CoursePageLeftUI;
