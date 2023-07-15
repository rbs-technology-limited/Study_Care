"use client";
import { dashboardLeftSideStaticData } from "@/Content";

type IStudentDashboardLeftSide = {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
};

const StudentDashboardLeftSide = ({
  setSelectedOption,
}: IStudentDashboardLeftSide) => {
  const { title1, title2, title3 } = dashboardLeftSideStaticData;
  const titles = [title1, title2, title3];
  return (
    <section className="p-3 bg-gray-50 min-h-screen rounded">
      {titles.map((title) => (
        <h1
          key={title}
          className="bg-button-teal/10 rounded p-2 border border-button-teal my-4 cursor-pointer text-md"
          onClick={() => setSelectedOption(title)}
        >
          {title}
        </h1>
      ))}
    </section>
  );
};

export default StudentDashboardLeftSide;
