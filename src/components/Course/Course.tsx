import React from "react";
import CoursePageLeftUI from "./CoursePageLeftUI/CoursePageLeftUI";
import CoursePageRightUI from "./CoursePageRightUI/CoursePageRightUI";

const Course = () => {
  return (
    <section className="container mx-auto px-8 py-8">
      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-3 lg:col-span-2">
          <CoursePageLeftUI />
        </div>
        <div className="lg:col-span-1 hidden lg:block">
          <CoursePageRightUI />
        </div>
      </div>
    </section>
  );
};

export default Course;
