import React from "react";
import { courseSyllabusData, courseSyllabusStaticData } from "@/Content";
import { Accordion } from "@/Shared";

const CourseSyllabus = () => {
  return (
    <section className="mt-12">
      <h1 className="text-xl font-bold">{courseSyllabusStaticData?.title}</h1>
      <div>
        <Accordion
          contents={courseSyllabusData}
          btnExpand={courseSyllabusStaticData?.btn_expand}
          btnCollapse={courseSyllabusStaticData?.btn_collapse}
        />
      </div>
    </section>
  );
};

export default CourseSyllabus;
