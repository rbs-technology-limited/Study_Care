"use client";
import { specificCourseSummaryStaticData } from "@/Content";
import { Tooltip } from "react-tooltip";

type IQuizMarks = {
  data: {
    id: number;
    quizNumber: number;
    obtained_marks: number;
  }[];
};

const QuizMarks = ({ data }: IQuizMarks) => {
  const getCellColor = (obtained_marks: number) => {
    if (obtained_marks < 70) {
      return "bg-red-300";
    } else {
      return "bg-green-400";
    }
  };
  return (
    <main className="mt-16">
      <section className="my-5 flex flex-col gap-3 md:flex-row justify-between items-center text-gray-600 dark:text-white">
        <h1 className="text-xl font-bold">
          {specificCourseSummaryStaticData?.title1}
        </h1>
        <h1 className="text-sm text-gray-600/75 dark:text-white">
          {specificCourseSummaryStaticData?.key_note}
        </h1>
      </section>
      <section className="h-56 border p-5 rounded-lg bg-white dark:bg-transparent shadow-md">
        <div className="flex flex-wrap w-full">
          {data.map((contribution: any) => (
            <>
              <a
                key={contribution.id}
                data-tooltip-id="my-tooltip-data-html"
                data-tooltip-html={`
                  <div class="flex flex-col">
                    <p class="text-sm text-white">কুইজ - ${contribution.quizNumber}</p>
                    <p class="text-sm text-white">কুইজ মার্কস - ${contribution.obtained_marks}%</p>
                  </div>
                `}
              >
                <div
                  className={`w-4 rounded h-4 ${getCellColor(
                    contribution.obtained_marks
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

export default QuizMarks;
