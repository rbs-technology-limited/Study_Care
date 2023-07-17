import { specificCourseSummary } from "@/Content";
import CourseProgressInfos from "../common/CourseProgressInfos/CourseProgressInfos";
import AllAssignmentMarks from "./AllAssignmentMarks/AllAssignmentMarks";
import CourseQuizReportSummary from "./CourseQuizReportSummary/CourseQuizReportSummary";
import QuizMarks from "./QuizMarks/QuizMarks";

const StudentCourseSummary = () => {
  return (
    <section className="container mx-auto px-8">
      <CourseProgressInfos
        data={specificCourseSummary.courseProgressData}
        showAccess
      />
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
        <div className="w-full lg:w-2/4">
          <CourseQuizReportSummary
            data={specificCourseSummary.quizReportSummary}
          />
        </div>
        <div className="w-full lg:w-2/4">
          <QuizMarks data={specificCourseSummary.quizMarksDetails} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <AllAssignmentMarks
          data={specificCourseSummary.assignmentMarksDetails}
        />
        <div></div>
      </div>
    </section>
  );
};

export default StudentCourseSummary;
