import { profileData } from "@/Content";
import CourseProgressInfos from "./CourseProgressInfos/CourseProgressInfos";
import UserInfo from "./UserInfo/UserInfo";

const StudentProfile = () => {
  return (
    <div>
      <UserInfo data={profileData} />
      <CourseProgressInfos data={profileData.courseProgressData} />
    </div>
  );
};

export default StudentProfile;
