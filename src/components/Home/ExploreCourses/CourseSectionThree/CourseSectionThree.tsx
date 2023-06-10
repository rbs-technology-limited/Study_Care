import { lightTeal } from "@/Constant/Custom-Color";
import { exploreCoursesContent, exploreCoursesData3 } from "@/Content";
import { CButton } from "@/Shared";
import ArrowRight from "public/Asset/svg/ArrowRight";
import React from "react";
import CourseSectionSlider from "../CourseSectionSlider/CourseSectionSlider";

const CourseSectionThree = () => {
  return (
    <main data-aos="fade-left">
      <section className="container mx-auto px-4 lg:px-8 mt-6">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-sm font-bold text-black dark:text-white pr-2">
            {exploreCoursesContent?.course3?.title}
          </h1>
          <div className="flex justify-center items-center" data-aos="zoom-in">
            <CButton variant="text" color={lightTeal}>
              {exploreCoursesContent?.course3?.button}
            </CButton>
            <ArrowRight color={lightTeal} width={20} height={20} />
          </div>
        </div>
      </section>
      <section>
        <CourseSectionSlider
          exploreCoursesData={exploreCoursesData3}
          bgColor="border-rose-400"
          delayTime={2600}
        />
      </section>
    </main>
  );
};

export default CourseSectionThree;
