import { lightTeal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import Image from "next/image";
import React from "react";
import line from "public/Asset/image/line.svg";
import CourseSlides from "./CourseSlides/CourseSlides";

const PopularCourses = () => {
  return (
    <main className="relative pb-20 pt-12">
      <div
        className="absolute top-0 left-0 w-[95%] lg:h-[500px] h-full bg-custom-teal dark:bg-dark-teal
      rounded-r-[60px] z-[-5]"
      ></div>
      <section className="container mx-auto px-4 lg:px-8 py-8">
        {/* //top  */}
        <section className="flex flex-col md:flex-row md:justify-between flex-col-reverse ">
          <div className="flex flex-col justify-center">
            <h1
              className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600 font-bold pr-2
              dark:from-orange-300 dark:to-purple-400"
            >
              Popular Courses
            </h1>
            <Image src={line} alt="line" width={250} height={1} />
            <small className="text-center md:text-left text-sm text-stone-500 my-4 dark:text-stone-300 ">
              Choose from many options of popular courses at a breakthrough
              price.
            </small>
          </div>

          <div className="flex justify-center items-center" data-aos="zoom-in">
            <CButton variant="text" color={lightTeal}>
              See All{" "}
            </CButton>
            <span>
              {/* //right arrow svg here */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={lightTeal}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row lg:justify-between items-center">
          <CourseSlides />
        </section>
      </section>
    </main>
  );
};

export default PopularCourses;
