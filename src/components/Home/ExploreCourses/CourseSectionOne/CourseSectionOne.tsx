import { lightTeal } from "@/Constant/Custom-Color";
import { exploreCoursesContent } from "@/Content";
import { CButton } from "@/Shared";
import ArrowRight from "public/Asset/svg/ArrowRight";
import React from "react";

const CourseSectionOne = () => {
  return (
    <main>
      <section className="container mx-auto px-4 lg:px-8 mt-6">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          <h1 className="text-sm font-bold text-black dark:text-white pr-2">
            Explore Courses
          </h1>
          <div className="flex justify-center items-center" data-aos="zoom-in">
            <CButton variant="text" color={lightTeal}>
              {exploreCoursesContent?.course1?.button}
            </CButton>
            <ArrowRight color={lightTeal} width={20} height={20} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseSectionOne;
