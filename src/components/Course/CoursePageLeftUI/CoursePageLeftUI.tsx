import React from "react";
import CarouselMedia from "./CarouselMedia/CarouselMedia";
import { coursePageData } from "@/Content";

const CoursePageLeftUI = () => {
  return (
    <section>
      <CarouselMedia />
      {/* //description  */}
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-gray-800">
          {coursePageData?.title}
        </h1>
        <p className="mt-4 text-gray-600">{coursePageData?.description}</p>
      </div>
    </section>
  );
};

export default CoursePageLeftUI;
