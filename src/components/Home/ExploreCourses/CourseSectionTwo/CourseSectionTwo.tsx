import { lightTeal } from "@/Constant/Custom-Color";
import { exploreCoursesContent, exploreCoursesData2 } from "@/Content";
import { CButton } from "@/Shared";
import ArrowRight from "public/Asset/svg/ArrowRight";
import React from "react";
import CourseSectionSlider from "../CourseSectionSlider/CourseSectionSlider";

const CourseSectionTwo = () => {
  return (
    <main>
      <section className="container mx-auto px-4 lg:px-8 mt-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-sm font-bold text-black dark:text-white pr-2">
          {exploreCoursesContent?.course2?.title}
          </h1>
          <div className="flex justify-center items-center" data-aos="zoom-in">
            <CButton variant="text" color={lightTeal}>
              {exploreCoursesContent?.course2?.button}
            </CButton>
            <ArrowRight color={lightTeal} width={20} height={20} />
          </div>
        </div>
      </section>
      <section>
        <CourseSectionSlider exploreCoursesData={exploreCoursesData2} />
      </section>
    </main>
  );
};

export default CourseSectionTwo;
