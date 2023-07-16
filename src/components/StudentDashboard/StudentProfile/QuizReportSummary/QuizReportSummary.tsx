import { teal } from "@/Constant/Custom-Color";
import { LiaHandPointRight } from "react-icons/lia";

const QuizReportSummary = () => {
  return (
    <section className="mt-28 bg-white py-11 px-3 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-gray-600 my-3">
        কুইজ রিপোর্ট সামারি
      </h1>

      <div className="flex ">
        {/* quiz marks related summary part */}
        <div>
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
        <div></div>
      </div>
    </section>
  );
};

export default QuizReportSummary;
