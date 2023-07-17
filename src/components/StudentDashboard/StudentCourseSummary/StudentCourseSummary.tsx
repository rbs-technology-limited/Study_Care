import {
  specificCourseSummary,
  specificCourseSummaryStaticData,
} from "@/Content";
import CourseProgressInfos from "../common/CourseProgressInfos/CourseProgressInfos";
import AllAssignmentMarks from "./AllAssignmentMarks/AllAssignmentMarks";
import AssignmentReportSummary from "./AssignmentReportSummary/AssignmentReportSummary";
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
        <div className="col-span-2">
          <AllAssignmentMarks
            data={specificCourseSummary.assignmentMarksDetails}
          />
        </div>
        <div className="col-span-1">
          <div className="h-full flex flex-col mt-16 md:mt-0">
            <h1 className="text-xl font-bold text-gray-600 dark:text-white mb-5">
              {specificCourseSummaryStaticData?.title4}
            </h1>
            <AssignmentReportSummary
              data={specificCourseSummary.quizReportSummary}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCourseSummary;
