"use client";
import { teal } from "@/Constant/Custom-Color";
import Chart from "react-apexcharts";
import "react-circular-progressbar/dist/styles.css";
import { LiaHandPointRight } from "react-icons/lia";

type IQuizReportSummary = {
  total_quiz: number;
  total_attempts: number;
  correct_answers: number;
  total_questions: number;
  obtained_marks: number;
  total_marks: number;
};

type IQuizReportSummaryProps = {
  data: IQuizReportSummary;
};

const AssignmentReportSummary = ({ data }: IQuizReportSummaryProps) => {
  return (
    <section className="h-full bg-white dark:bg-transparent p-5  rounded-lg shadow-md border text-sm">
      <div className="h-full flex flex-col-reverse md:flex-col-reverse justify-center items-center">
        {/* quiz marks related summary part */}
        <div className="text-gray-600 dark:text-white">
          <div className="flex items-center gap-2 my-1">
            <LiaHandPointRight color={teal} />
            <p>
              অংশগ্রহণ - {data.total_attempts}টি / {data.total_quiz}টি
            </p>
          </div>
          <div className="flex items-center gap-2 my-1">
            <LiaHandPointRight color={teal} />
            <p>
              সঠিক উত্তর - {data.correct_answers}টি / {data.total_questions}টি
            </p>
          </div>
          <div className="flex items-center gap-2 my-1">
            <LiaHandPointRight color={teal} />
            <p>
              প্রাপ্ত নাম্বার - {data.obtained_marks} /{data.total_marks}
            </p>
          </div>
        </div>
        {/* visualize  marks percentage */}
        <div>
          <Chart
            options={{
              chart: {
                height: 180,
                type: "radialBar",
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "50%",
                  },
                  dataLabels: {
                    value: {
                      show: true,
                    },
                  },
                },
              },
              labels: ["গড় মার্ক"],
            }}
            series={[(data.obtained_marks / data.total_marks) * 100]}
            labels={["Progress"]}
            type="radialBar"
            width="250"
          />
        </div>
      </div>
    </section>
  );
};

export default AssignmentReportSummary;