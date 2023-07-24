"use client";
import { dashboardCardData } from "@/Content";
import React from "react";
import DashboardCard from "../DashboardCard/DashboardCard";
import StudentProfile from "./StudentProfile/StudentProfile";

type IDashboardRightSide = {
  selectedOption: string;
};

const StudentDashboardRightSide = ({ selectedOption }: IDashboardRightSide) => {
  
  const contents = React.useMemo(() => {
    switch (selectedOption) {
      case "MY COURSES":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {dashboardCardData.map((cardData) => (
              <DashboardCard key={cardData.id} data={cardData} />
            ))}
          </div>
        );

      case "PROFILE":
        return <StudentProfile />;

      case "CHANGE PASSWORD":
        return <div>Change Password</div>;

      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {dashboardCardData.map((cardData) => (
              <DashboardCard key={cardData.id} data={cardData} />
            ))}
          </div>
        );
    }
  }, [selectedOption]);

  return (
    <section className="p-3 bg-gray-50 dark:bg-transparent min-h-screen rounded">
      {contents}
    </section>
  );
};

export default StudentDashboardRightSide;
