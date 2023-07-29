"use client";
import { teal } from "@/Constant/Custom-Color";
import { coursePageStaticData } from "@/Content";
import { useAppSelector } from "@/Redux/store";
import { CButton } from "@/Shared";

const PriceAndEnroll = () => {
  const { courseDetails } = useAppSelector((state) => state.category);
  return (
    <section>
      <div className="flex justify-between items-center gap-4 mt-5">
        <CButton
          variant="outline"
          color={teal}
          btnTitle={coursePageStaticData?.button1}
        />
        <p className="text-2xl font-bold text-gray-800 dark:text-white">
          ট {courseDetails?.price}
        </p>
      </div>
    </section>
  );
};

export default PriceAndEnroll;
