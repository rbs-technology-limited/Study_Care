"use client";
import { dashboardLeftSideStaticData } from "@/Content";

type IStudentDashboardLeftSide = {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
};

const StudentDashboardLeftSide = ({
  setSelectedOption,
}: IStudentDashboardLeftSide) => {
  const { title1, title2, title3 } = dashboardLeftSideStaticData;
  return (
    <section className="p-3 bg-[#D9D9D9] min-h-screen">
      <h1
        className="bg-custom-teal px-2 py-1 my-4 cursor-pointer"
        onClick={() => setSelectedOption(title1)}
      >
        {title1}
      </h1>
      <h1
        className="bg-custom-teal px-2 py-1 my-4 cursor-pointer"
        onClick={() => setSelectedOption(title2)}
      >
        {title2}
      </h1>
      <h1
        className="bg-custom-teal px-2 py-1 my-4 cursor-pointer"
        onClick={() => setSelectedOption(title3)}
      >
        {title3}
      </h1>
    </section>
  );
};

export default StudentDashboardLeftSide;
