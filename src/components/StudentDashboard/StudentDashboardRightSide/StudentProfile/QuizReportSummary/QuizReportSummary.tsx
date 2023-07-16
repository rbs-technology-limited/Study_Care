"use client"
import { teal } from "@/Constant/Custom-Color";
import { useState } from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LiaHandPointRight } from "react-icons/lia";

const QuizReportSummary = () => {
  const [averageMark,selectAverageMark] = useState(60)

  return (
    <section className="mt-16">
      <h1 className="text-xl font-bold text-gray-600 my-3">
        কুইজ রিপোর্ট সামারি
      </h1>
      <div className="bg-white py-11 px-12 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* quiz marks related summary part */}
        <div className="flex-1">
          <div className="flex items-center gap-2 my-1">
            <LiaHandPointRight color={teal} />
            <p>অংশগ্রহণ - 52টি / 52 টি</p>
          </div>
          <div className="flex items-center gap-2 my-1">
            <LiaHandPointRight color={teal} />
            <p>সঠিক উত্তর - 91টি / 136টি</p>
          </div>
          <div className="flex items-center gap-2 my-1">
            <LiaHandPointRight color={teal} />
            <p>প্রাপ্ত নাম্বার - 455 /680</p>
          </div>
        </div>
        {/* visualize  marks percentage */}
        <div className="w-44">
        <CircularProgressbarWithChildren value={averageMark} >
          <p>{averageMark}%</p>
          <p>গড় মার্ক</p>
          </CircularProgressbarWithChildren>;
        </div>
      </div>
      </div>
    </section>
  );
};

export default QuizReportSummary;
