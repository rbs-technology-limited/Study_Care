import { exploreCoursesContent } from "@/Content";
import { CButton } from "@/Shared";
import Image from "next/image";
import React from "react";
import line from "public/Asset/image/line.svg";
import CourseSectionOne from "./CourseSectionOne/CourseSectionOne";

const ExploreCourses = () => {
  return (
    <main className="relative pb-20 pt-12">
      <div
        className="absolute top-0 left-0 w-[75%]  h-full bg-yellow-100 dark:bg-yellow-900
      rounded-br-[60px] z-[-5]"
      ></div>
      <section className="container mx-auto px-4 lg:px-8 ">
        {/* //top  */}
        <section className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col justify-center">
            <h1
              className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600 font-bold pr-2
              dark:from-orange-300 dark:to-purple-400"
            >
              {exploreCoursesContent?.content1}
            </h1>
            <Image src={line} alt="line" width={250} height={1} />
            <small className="text-center md:text-left text-sm text-stone-500 my-4 dark:text-stone-300 ">
              {exploreCoursesContent?.content2}
            </small>
          </div>
        </section>
          {/* //other couses section  */}
        <section>
          <CourseSectionOne />
        </section>

        <section className="flex flex-col lg:flex-row lg:justify-between items-center">
          {/* <CourseSlides /> */}
        </section>
      </section>
    </main>
  );
};

export default ExploreCourses;
