import React from "react";
import { coursePageStaticData } from "@/Content";
import { BsCheck2Square } from "react-icons/bs";
import { teal } from "@/Constant/Custom-Color";

const ClassRequirements = () => {
  return (
    <section>
      {/* class requirements */}
      <div className="mt-12">
        <h1 className="text-xl font-bold dark:text-white text-gray-800">
          {coursePageStaticData?.class_requirements?.title}
        </h1>

        <ul className="border-[.0925rem] p-3 my-5 rounded-lg">
          {coursePageStaticData?.class_requirements?.lists.map((list) => (
            <li
              className="my-4 flex gap-3 items-center dark:text-white"
              key={list?.id}
            >
              <BsCheck2Square color={teal} className="text-xl" /> {list.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClassRequirements;
