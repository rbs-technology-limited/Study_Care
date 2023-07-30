"use client";
import { useAppSelector } from "@/Redux/store";
import { Fragment } from "react";
import CourseCard from "../../CourseCard/CourseCard";

const CategoriesRightDataUI = () => {
  const { categories } = useAppSelector((state) => state.category);

  console.log("categories right side", categories);

  return (
    <section className="break-all text-black dark:text-white">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {categories?.map((courseCardData) => (
          <Fragment key={Math.random() * 100}>
            <CourseCard courseCardData={courseCardData} />
          </Fragment>
        ))}
      </section>
    </section>
  );
};

export default CategoriesRightDataUI;
