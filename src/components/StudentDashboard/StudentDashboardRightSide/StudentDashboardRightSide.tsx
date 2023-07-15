"use client";
import { dashboardCardData } from "@/Content";
import DashboardCard from "../DashboardCard/DashboardCard";

type IDashboardRightSide = {
  selectedOption: string;
};

const StudentDashboardRightSide = ({ selectedOption }: IDashboardRightSide) => {
  let contents = null;

  switch (selectedOption) {
    case "MY COURSES":
      contents = (
        <div className="grid grid-cols-3 gap-2">
          {dashboardCardData.map((cardData) => (
            <DashboardCard key={cardData.id} data={cardData} />
          ))}
        </div>
      );
      break;
    case "PROFILE":
      contents = <div>Profile</div>;
      break;
    case "CHANGE PASSWORD":
      contents = <div>Change Password</div>;
      break;
    default:
      contents = (
        <div className="grid grid-cols-3 gap-2">
          {dashboardCardData.map((cardData) => (
            <DashboardCard key={cardData.id} data={cardData} />
          ))}
        </div>
      );
      break;
  }

  return <section>{contents}</section>;
};

export default StudentDashboardRightSide;
