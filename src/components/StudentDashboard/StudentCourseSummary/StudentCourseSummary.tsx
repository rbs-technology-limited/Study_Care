import { specificCourseSummary } from "@/Content";
import CourseProgressInfos from "../common/CourseProgressInfos/CourseProgressInfos";

const StudentCourseSummary = () => {
  return (
    <section className="container mx-auto px-8 py-8">
      <CourseProgressInfos
        data={specificCourseSummary.courseProgressData}
        showAccess
      />
    </section>
  );
};

export default StudentCourseSummary;
