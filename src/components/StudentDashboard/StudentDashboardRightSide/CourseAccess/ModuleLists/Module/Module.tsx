import { teal } from "@/Constant/Custom-Color";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import ModuleLesson from "../ModuleLesson/ModuleLesson";

type IModule = {
  id: number;
  title: string;
  contents: {
    id: number;
    title: string;
  }[];
};

type IModuleProps = {
  moduleData: IModule;
  lastIndex: boolean;
};

const Module = ({ moduleData, lastIndex }: IModuleProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleAccordion = (moduleId: number) => {
    setOpen(!open);
  };

  const stylesConditions = lastIndex
    ? "border-b-[0.0625rem] border-t-0"
    : "border-t-[0.0625rem]";

  return (
    <div className={`border-x-[0.0625rem] ${stylesConditions}`} key={module.id}>
      <div
        className="flex gap-2 items-center text-gray-600 dark:text-white border-b-[0.0625rem] cursor-pointer"
        onClick={() => handleAccordion(moduleData.id)}
      >
        <HiChevronDown color={teal} className="pl-2 text-4xl" />
        <h1 className="py-3 font-bold text-sm">{moduleData.title}</h1>
      </div>
      {open && (
        <>
          {moduleData.contents.map((lesson) => (
            <ModuleLesson data={lesson} key={lesson.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default Module;
