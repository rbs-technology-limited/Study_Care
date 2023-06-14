import React from "react";
import { coursesCardData } from "@/Content";
import CourseCard from "../../CourseCard/CourseCard";

const CategoriesRightDataUI = () => {
  return (
    <section className="break-all text-black dark:text-white">
      This is CategoriesRightDataUI
      {coursesCardData.map((courseCardData) => (
        <CourseCard courseCardData={courseCardData} key={courseCardData.id} />
      ))}
    </section>
  );
};

export default CategoriesRightDataUI;
