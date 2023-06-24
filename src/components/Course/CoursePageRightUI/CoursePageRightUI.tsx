import React from "react";
import RelatedCourses from "./RelatedCourses/RelatedCourses";
import { relatedCoursesStaticData } from "@/Content";

const CoursePageRightUI = () => {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-3">
        {relatedCoursesStaticData?.title}
      </h1>
      <RelatedCourses />
    </section>
  );
};

export default CoursePageRightUI;
