"use client";
import { qAStaticData } from "@/Content";
import { useAppSelector } from "@/Redux/store";
import { Accordion } from "@/Shared";

const QAAboutCourse = () => {
  const { courseDetails } = useAppSelector((state) => state.category);
  return (
    <section className="mt-12">
      <h1 className="text-xl font-bold dark:text-white text-gray-800">
        {qAStaticData?.title}
      </h1>
      <Accordion
        contents={courseDetails?.faqs}
        btnExpand={qAStaticData?.btn_expand}
        btnCollapse={qAStaticData?.btn_collapse}
      />
    </section>
  );
};

export default QAAboutCourse;
