import { specificCourseSummaryStaticData } from "@/Content";
import AssignmentMarksTable from "./AssignmentMarksTable/AssignmentMarksTable";

type IAllAssignmentMarks = {
  data: {
    id: number;
    assignment_name: string;
    obtained_marks: number;
    assignment_total_marks: number;
    submission_time: string;
    deadline: string;
  }[];
};

const AllAssignmentMarks = ({ data }: IAllAssignmentMarks) => {
  return (
    <section className="mt-16">
      <h1 className="text-xl font-bold text-gray-600 dark:text-white mb-5">
        {specificCourseSummaryStaticData?.title3}
      </h1>
      <AssignmentMarksTable tableData={data} />
    </section>
  );
};

export default AllAssignmentMarks;
