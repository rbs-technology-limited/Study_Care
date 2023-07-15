"use client";
import { dashboardCardData } from "@/Content";
import React from "react";
import DashboardCard from "../DashboardCard/DashboardCard";

type IDashboardRightSide = {
  selectedOption: string;
};

const StudentDashboardRightSide = ({ selectedOption }: IDashboardRightSide) => {
  const contents = React.useMemo(() => {
    switch (selectedOption) {
      case "MY COURSES":
        return (
          <div className="grid grid-cols-3 gap-2">
            {dashboardCardData.map((cardData) => (
              <DashboardCard key={cardData.id} data={cardData} />
            ))}
          </div>
        );

      case "PROFILE":
        return <div>Profile</div>;

      case "CHANGE PASSWORD":
        return <div>Change Password</div>;

      default:
        return (
          <div className="grid grid-cols-3 gap-2">
            {dashboardCardData.map((cardData) => (
              <DashboardCard key={cardData.id} data={cardData} />
            ))}
          </div>
        );
    }
  }, [selectedOption]);

  return <section>{contents}</section>;
};

export default StudentDashboardRightSide;
