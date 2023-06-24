import React from "react";
import { qAData, qAStaticData } from "@/Content";
import { Accordion } from "@/Shared";

const QAAboutCourse = () => {
  return (
    <section className="mt-12">
      <h1 className="text-xl font-bold dark:text-white text-gray-800">
        {qAStaticData?.title}
      </h1>
      <Accordion contents={qAData}></Accordion>
    </section>
  );
};

export default QAAboutCourse;
