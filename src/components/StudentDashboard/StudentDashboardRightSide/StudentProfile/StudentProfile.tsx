import { profileData } from "@/Content";
import CourseProgressInfos from "../../common/CourseProgressInfos/CourseProgressInfos";
import AssignmentReportSummary from "./AssignmentReportSummary/AssignmentReportSummary";
import OverAllCourseProgress from "./OverAllCourseProgress/OverAllCourseProgress";
import QuizReportSummary from "./QuizReportSummary/QuizReportSummary";
import UserInfo from "./UserInfo/UserInfo";
import { useAppSelector } from "@/Redux/store";

const StudentProfile = () => {
  // console.log("profileData");
  const getUserData = useAppSelector((state) => state.authSlice.usersInfo);
  console.log(getUserData);
  return (
    <main>
      <UserInfo data={getUserData} />
      <CourseProgressInfos data={profileData.courseProgressData} />
      <QuizReportSummary data={profileData.quizReportSummary} />
      <OverAllCourseProgress />
      <AssignmentReportSummary />
    </main>
  );
};

export default StudentProfile;
