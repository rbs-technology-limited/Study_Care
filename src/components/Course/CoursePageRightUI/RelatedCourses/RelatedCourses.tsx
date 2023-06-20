import React from "react";
import { relatedCoursesData } from "@/Content";
import RelatedCourseCard from "./RelatedCourseCard/RelatedCourseCard";

const RelatedCourses = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-2">
        {relatedCoursesData.map((relatedCourse) => (
          <RelatedCourseCard
            key={relatedCourse.id}
            relatedCourseCardData={relatedCourse}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedCourses;
