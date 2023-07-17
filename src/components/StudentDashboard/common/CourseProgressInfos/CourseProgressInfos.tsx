import { teal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import React from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

type ICourseProgressInfos = {
  id: number;
  title: string;
  total_modules: number;
  incomplete_module: number;
  progress: number;
};

type ICourseProgress = {
  data: ICourseProgressInfos[];
  showAccess?: boolean;
};

const CourseProgressInfos = ({ data, showAccess }: ICourseProgress) => {
  const contents = data.map((item: ICourseProgressInfos, index) => {
    const firstElement = index === 0;
    const lastIndex = index === data.length - 1;
    const conditions = !lastIndex
      ? "border-[0.0625rem] border-b-0 md:border-b-[0.0625rem] md:border-r-0"
      : "border-[0.0625rem] rounded-bl-lg md:rounded-bl-none rounded-br-lg  md:rounded-r-lg";

    const firstElementLeftBorderRadius = firstElement
      ? "rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-l-lg"
      : "";
    return (
      <React.Fragment key={item.id}>
        <div
          className={`${conditions} ${firstElementLeftBorderRadius} border-gray-200 bg-white px-2 py-4 shadow-md`}
        >
          <h1 className="text-md font-bold text-gray-600">{item.title}</h1>
          <div className="flex justify-between items-center my-2">
            <h1 className="text-gray-600 flex items-center">
              <span className="text-md font-bold text-button-teal mr-[0.0625rem]">
                {item?.total_modules} টি
              </span>
              <span className="ml-[0.0625rem] font-semibold text-sm">
                (বাকি আছে {item.incomplete_module} টি)
              </span>
            </h1>
            <div className="flex items-center gap-1 rounded-full bg-[#DFF4D7] text-[#51933E] p-2">
              <HiOutlineArrowUp />
              <span className="rounded-lg">{item?.progress}%</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <section className="mt-24 dark:text-white">
      <div className="flex justify-between items-center my-5">
        <h1 className="text-xl font-bold text-gray-600">
          কোর্স অগ্রগতি - Batch-2
        </h1>
        {showAccess && (
          <CButton variant="outline" color={teal} btnTitle="কোর্স এক্সেস" />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">{contents}</div>
    </section>
  );
};

export default CourseProgressInfos;
