import { profileData } from "@/Content";
import CourseProgressInfos from "./CourseProgressInfos/CourseProgressInfos";
import QuizReportSummary from "./QuizReportSummary/QuizReportSummary";
import UserInfo from "./UserInfo/UserInfo";

const StudentProfile = () => {
  return (
    <div>
      <UserInfo data={profileData} />
      <CourseProgressInfos data={profileData.courseProgressData} />
      <QuizReportSummary />
    </div>
  );
};

export default StudentProfile;
