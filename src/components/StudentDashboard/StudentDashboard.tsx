"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton, OffCanvus } from "@/Shared";
import { useState } from "react";
import StudentDashboardLeftSide from "./StudentDashboardLeftSide/StudentDashboardLeftSide";
import StudentDashboardRightSide from "./StudentDashboardRightSide/StudentDashboardRightSide";

const StudentDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("MY COURSES");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section
      className="container mx-auto lg:px-8 px-4 text-black
  min-h-screen relative"
    >
      <div
        className="flex lg:justify-between gap-2
          lg:flex-row flex-col"
      >
        <div className="dark:border-gray-200/10 hidden lg:block md:w-1/4">
          {/* left side */}
          <StudentDashboardLeftSide
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
          />
        </div>
        <div className="lg:hidden">
          {/* left side */}
          <CButton
            variant="solid"
            color={teal}
            onClick={() => setShowMenu(!showMenu)}
          >
            Show Menu
          </CButton>
          <OffCanvus open={showMenu} setOpen={setShowMenu} title="Menu">
            <StudentDashboardLeftSide
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
            />
          </OffCanvus>
        </div>
        <div className=" rounded w-full px-1 overflow-y-auto overflow-x-hidden">
          {/* right side */}
          <StudentDashboardRightSide selectedOption={selectedOption} />
        </div>
      </div>
    </section>
  );
};

export default StudentDashboard;
