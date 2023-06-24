import { anyQuestionData } from "@/Content";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const AnyQuestionSection = () => {
  return (
    <section>
      {/* class requirements */}
      <div className="mt-12">
        <h1 className="text-xl font-bold dark:text-white text-gray-800">
          {anyQuestionData?.title}
        </h1>

        <section className="border-[.0925rem] p-3 my-5 rounded-lg w-[260px]">
          <h1 className="text-lg font-semibold dark:text-white text-gray-800 flex justify-center items-center gap-2 text-[#4EBD7A]">
            {/* //call icon */}
            <BiPhoneCall />
            {anyQuestionData?.description}
          </h1>
        </section>
      </div>
    </section>
  );
};

export default AnyQuestionSection;
