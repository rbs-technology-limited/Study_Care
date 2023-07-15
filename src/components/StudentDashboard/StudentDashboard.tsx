"use client";
import { useState } from "react";
import StudentDashboardLeftSide from "./StudentDashboardLeftSide/StudentDashboardLeftSide";
import StudentDashboardRightSide from "./StudentDashboardRightSide/StudentDashboardRightSide";
import { CButton, OffCanvus } from "@/Shared";
import { teal } from "@/Constant/Custom-Color";

const StudentDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("MY COURSES");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section
      className="container mx-auto lg:px-8 px-4 text-black
  min-h-screen relative"
    >
      <div
        className="flex justify-between gap-2
          lg:flex-row flex-col h-[56.25rem] "
      >
        <div className="dark:border-gray-200/10 max-w-xs hidden md:block">
          {/* left side */}
          <StudentDashboardLeftSide setSelectedOption={setSelectedOption} />
        </div>
        <div className="md:hidden">
          {/* left side */}
          <CButton
            variant="solid"
            color={teal}
            onClick={() => setShowMenu(!showMenu)}
          >
            Show Menu
          </CButton>
          <OffCanvus open={showMenu} setOpen={setShowMenu} title="Menu">
            <StudentDashboardLeftSide setSelectedOption={setSelectedOption} />
          </OffCanvus>
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
