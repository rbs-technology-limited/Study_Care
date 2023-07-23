import { courseProgressContent, courseProgressData } from "@/Content";
import { Tooltip } from "react-tooltip";

const OverAllCourseProgress = () => {
  const getCellColor = (courseProgressData: number) => {
    if (courseProgressData < 30) {
      return "bg-red-500"; // Light gray for low contribution
    } else if (courseProgressData < 70) {
      return "bg-yellow-300"; // Yellow for medium contribution
    } else {
      return "bg-green-600"; // Green for high contribution
    }
  };

  return (
    <main className="mt-16">
      <section className="my-5">
        <h1 className="text-xl font-bold text-gray-600 dark:text-white">
          {courseProgressContent?.title}
        </h1>
      </section>
      <section className="border p-5 rounded-lg bg-white dark:bg-transparent shadow-md">
        <div className="flex flex-wrap w-full">
          {courseProgressData.map((contribution: any) => (
            <>
              <a
                key={contribution.id}
                data-tooltip-id="my-tooltip-data-html"
                data-tooltip-html={`
                <div class="flex flex-col">
                  <p class="text-sm text-white">কোর্স - ${contribution.courseName}</p>
                  <p class="text-sm text-white">কোর্স সম্পূর্ণ - ${contribution.completePercentage}%</p>
                </div>
              `}
              >
                <div
                  className={`w-4 rounded h-4 ${getCellColor(
                    contribution.completePercentage
                  )} m-1`}
                ></div>
              </a>
              <Tooltip id="my-tooltip-data-html" />
            </>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OverAllCourseProgress;
