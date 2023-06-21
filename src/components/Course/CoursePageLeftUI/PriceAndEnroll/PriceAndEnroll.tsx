import React from "react";
import { coursePageData } from "@/Content";
import { coursePageStaticData } from "@/Content";
import { CButton } from "@/Shared";
import { teal } from "@/Constant/Custom-Color";

const PriceAndEnroll = () => {
  return (
    <section>
      <div className="flex justify-between gap-4 my-8">
        <CButton
          variant="outline"
          color={teal}
          btnTitle={coursePageStaticData?.button1}
        />
        <p className="md:text-3xl text-2xl font-semibold">
          ট {coursePageData?.course_price}
        </p>
      </div>
    </section>
  );
};

export default PriceAndEnroll;
