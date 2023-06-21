import React from "react";
import { courseDetailsData, courseDetailsStaticData } from "@/Content";
import { Accordion } from "@/Shared";

const DetailsAboutCourse = () => {
  return (
    <section className="mt-12">
      <h1 className="text-xl font-bold dark:text-white text-gray-800">
        {courseDetailsStaticData?.title}
      </h1>
      <Accordion contents={courseDetailsData}></Accordion>
    </section>
  );
};

export default DetailsAboutCourse;
