"use client";
import { moduleListsData } from "@/Content";
import Module from "./Module/Module";

const ModuleLists = () => {
  const renderContents = moduleListsData.map((module, index) => {
    const lastIndex = index === moduleListsData.length - 1;
    return <Module moduleData={module} lastIndex={lastIndex} key={module.id} />;
  });

  return (
    <section className="my-5 h-96 overflow-auto">{renderContents}</section>
  );
};

export default ModuleLists;

{
  /* <div className="border shadow-md">
<div
  className="flex gap-2 items-center border-b-2"
  onClick={() => handleAccordion()}
>
  <HiChevronDown color={teal} className="pl-2 text-4xl" />
  <h1 className="py-3 font-bold">অধ্যায়-৪: মৌলিক উৎপাদকের গাছ</h1>
</div>
{open && (
  <div className="text-gray-600">
    <div className="flex gap-2 items-center border-b-2">
      <FiPlayCircle color={teal} className="pl-3 text-3xl" />
      <p className="py-2"> গুণনীয়ক,গুণিতক,গ.সা.গু </p>
    </div>
    <div className="flex gap-2 items-center border-b-2">
      <FiPlayCircle color={teal} className="pl-3 text-3xl" />
      <p className="py-2"> গ.সা.গু</p>
    </div>
    <div className="flex gap-2 items-center border-b-2">
      <FiPlayCircle color={teal} className="pl-3 text-3xl" />
      <p className="py-2"> ল.সা.গু </p>
    </div>
  </div>
)}
</div> */
}
