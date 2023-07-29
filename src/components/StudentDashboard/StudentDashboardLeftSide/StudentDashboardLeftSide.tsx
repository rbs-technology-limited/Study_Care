"use client";
import { dashboardLeftSideStaticData } from "@/Content";

type IStudentDashboardLeftSide = {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
};

const StudentDashboardLeftSide = ({
  setSelectedOption,
  selectedOption,
}: IStudentDashboardLeftSide) => {
  const { title1, title2, title3, title4 } = dashboardLeftSideStaticData;
  const titles = [title1, title2, title3, title4];
  return (
    <section className="p-3 bg-gray-50 dark:bg-transparent rounded">
      {titles?.map((title) => (
        <h1
          key={title}
          className={`rounded p-2 border border-button-teal my-4 cursor-pointer text-sm
          ${
            selectedOption === title
              ? "bg-button-teal text-white"
              : "bg-button-teal/10 dark:text-white"
          }
            `}
          onClick={() => setSelectedOption(title)}
        >
          {title}
        </h1>
      ))}
    </section>
  );
};

export default StudentDashboardLeftSide;
