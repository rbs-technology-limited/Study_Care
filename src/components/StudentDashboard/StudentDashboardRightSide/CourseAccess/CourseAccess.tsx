import { CInput } from "@/Shared";
import LessonTasksSummary from "./LessonTasksSummary/LessonTasksSummary";
import ModuleProgressSlider from "./LessonTasksSummary/ModuleProgressSlider/ModuleProgressSlider";

const CourseAccess = () => {
  return (
    <section className="container mx-auto px-8">
      <div className="flex flex-col-reverse lg:flex-row gap-3">
        {/* description */}
        <div className="w-full lg:w-3/5">
          <LessonTasksSummary />
        </div>
        {/* lesson part */}
        <div className="w-full lg:w-2/5">
          <div className="border p-3 shadow-md">
            <CInput type="text" placeholder="কোর্স লেসন সার্চ করুন" />
            <ModuleProgressSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseAccess;
