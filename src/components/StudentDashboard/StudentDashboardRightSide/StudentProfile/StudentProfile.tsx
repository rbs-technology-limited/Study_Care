import { profileData } from "@/Content";
import CourseProgressInfos from "./CourseProgressInfos/CourseProgressInfos";
import UserInfo from "./UserInfo/UserInfo";
import OverAllCourseProgress from "./OverAllCourseProgress/OverAllCourseProgress";

const StudentProfile = () => {
  return (
    <div>
      <UserInfo data={profileData} />
      <CourseProgressInfos data={profileData.courseProgressData} />
      <OverAllCourseProgress/>
    </div>
  );
};

export default StudentProfile;
