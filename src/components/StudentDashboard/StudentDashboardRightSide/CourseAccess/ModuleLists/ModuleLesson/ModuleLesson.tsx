import { teal } from "@/Constant/Custom-Color";
import { FiPlayCircle } from "react-icons/fi";

type IModuleLessonProps = {
  data: {
    id: number;
    title: string;
  };
};

const ModuleLesson = ({ data }: IModuleLessonProps) => {
  return (
    <div className="text-gray-600 dark:text-white" key={data.id}>
      <div className="flex gap-2 items-center border-b-[0.0625rem]">
        <FiPlayCircle color={teal} className="pl-3 text-3xl" />
        <p className="py-2 text-sm"> {data.title} </p>
      </div>
      {/* <div className="flex gap-2 items-center border-b-2">
          <FiPlayCircle color={teal} className="pl-3 text-3xl" />
          <p className="py-2"> গ.সা.গু</p>
        </div>
        <div className="flex gap-2 items-center border-b-2">
          <FiPlayCircle color={teal} className="pl-3 text-3xl" />
          <p className="py-2"> ল.সা.গু </p>
        </div> */}
    </div>
  );
};

export default ModuleLesson;
