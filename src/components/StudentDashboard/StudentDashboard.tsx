"use client";
import { useState } from "react";
import StudentDashboardLeftSide from "./StudentDashboardLeftSide/StudentDashboardLeftSide";
import StudentDashboardRightSide from "./StudentDashboardRightSide/StudentDashboardRightSide";

const StudentDashboard = () => {
  const [selectedOption, setSelectedOption] = useState<string>("MY COURSES");

  return (
    <section
      className="container mx-auto lg:px-8 px-4 text-black
  min-h-screen"
    >
      <div
        className="flex justify-between gap-2
          lg:flex-row flex-col h-[56.25rem] "
      >
        <div className="dark:border-gray-200/10 max-w-xs w-full">
          {/* left side */}
          <StudentDashboardLeftSide setSelectedOption={setSelectedOption} />
        </div>
        <div className=" rounded w-full lg:w-[80%] px-1 overflow-y-auto overflow-x-hidden">
          {/* right side */}
          <StudentDashboardRightSide selectedOption={selectedOption} />
        </div>
      </div>
    </section>
  );
};

export default StudentDashboard;
