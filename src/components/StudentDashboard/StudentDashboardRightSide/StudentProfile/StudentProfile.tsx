import { profileData } from "@/Content";
import CourseProgressInfos from "./CourseProgressInfos/CourseProgressInfos";
import UserInfo from "./UserInfo/UserInfo";
import OverAllCourseProgress from "./OverAllCourseProgress/OverAllCourseProgress";
import AssignmentReportSummary from "./AssignmentReportSummary/AssignmentReportSummary";

const StudentProfile = () => {
  return (
    <div>
      <UserInfo data={profileData} />
      <CourseProgressInfos data={profileData.courseProgressData} />
      <OverAllCourseProgress />
      <AssignmentReportSummary />
    </div>
  );
};

export default StudentProfile;
