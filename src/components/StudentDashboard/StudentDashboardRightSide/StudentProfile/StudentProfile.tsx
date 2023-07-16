import { profileData } from "@/Content";
import AssignmentReportSummary from "./AssignmentReportSummary/AssignmentReportSummary";
import CourseProgressInfos from "./CourseProgressInfos/CourseProgressInfos";
import OverAllCourseProgress from "./OverAllCourseProgress/OverAllCourseProgress";
import QuizReportSummary from "./QuizReportSummary/QuizReportSummary";
import UserInfo from "./UserInfo/UserInfo";

const StudentProfile = () => {
  return (
    <div>
      <UserInfo data={profileData} />
      <CourseProgressInfos data={profileData.courseProgressData} />
      <QuizReportSummary data={profileData.quizReportSummary}/>
      <OverAllCourseProgress />
      <AssignmentReportSummary />
    </div>
  );
};

export default StudentProfile;
