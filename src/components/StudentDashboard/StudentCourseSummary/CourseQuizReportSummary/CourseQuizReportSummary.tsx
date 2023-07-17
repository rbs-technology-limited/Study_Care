"use client";
import { teal } from "@/Constant/Custom-Color";
import { specificCourseSummaryStaticData } from "@/Content";
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

const CourseQuizReportSummary = ({ data }: IQuizReportSummaryProps) => {
  return (
    <section className="mt-16">
      <h1 className="text-xl font-bold text-gray-600 my-5">
        {specificCourseSummaryStaticData?.title2}
      </h1>
      <div className="w-full md:h-56 bg-white p-5 rounded-lg shadow-md border text-sm">
        <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center items-center">
          {/* quiz marks related summary part */}
          <div className="md:w-2/4 text-gray-600">
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
          <div className="md:w-2/4">
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
      </div>
    </section>
  );
};

export default CourseQuizReportSummary;
