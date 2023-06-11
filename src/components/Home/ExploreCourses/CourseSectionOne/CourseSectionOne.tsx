import { lightTeal } from "@/Constant/Custom-Color";
import { exploreCoursesContent, exploreCoursesData1 } from "@/Content";
import { CButton } from "@/Shared";
import ArrowRight from "public/Asset/svg/ArrowRight";
import React from "react";
import CourseSectionSlider from "../CourseSectionSlider/CourseSectionSlider";

const CourseSectionOne = () => {
  return (
    <main data-aos="fade-up">
      <section className="container mx-auto px-4 lg:px-8 mt-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-sm font-bold text-black dark:text-white pr-2">
            {exploreCoursesContent?.course1?.title}
          </h1>
          <div className="flex justify-center items-center" data-aos="zoom-in">
            <CButton variant="text" color={lightTeal}>
              {exploreCoursesContent?.course1?.button}
            </CButton>
            <ArrowRight color={lightTeal} width={20} height={20} />
          </div>
        </div>
      </section>
      <section>
        <CourseSectionSlider
          exploreCoursesData={exploreCoursesData1}
          bgColor="border-cyan-400"
          delayTime={3000}
        />
      </section>
    </main>
  );
};

export default CourseSectionOne;
