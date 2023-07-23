import { specificCourseSummaryStaticData } from "@/Content";

type AssignmentMarksTableProps = {
  tableData: {
    id: number;
    assignment_name: string;
    obtained_marks: number;
    assignment_total_marks: number;
    submission_time: string;
    deadline: string;
  }[];
};

const AssignmentMarksTable = ({ tableData }: AssignmentMarksTableProps) => {
  return (
    <section className="border rounded-lg p-3 shadow-md">
      <h1 className="text-sm text-gray-600/50 dark:text-white mb-5 flex justify-end">
        {specificCourseSummaryStaticData?.key_note2}
      </h1>
      <div className="overflow-auto w-full">
        <table className="w-full">
          <thead>
            <tr>
              {specificCourseSummaryStaticData.assignment_table.map((data) => (
                <th
                  key={data.id}
                  className="text-sm text-gray-600 dark:text-white border p-1"
                >
                  {data.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={data.id}
                className={`${
                  index % 2 === 0 ? "bg-custom-teal dark:bg-dark-teal" : ""
                } text-sm`}
              >
                <td className="border p-1 text-[0.6875rem] text-purple-400">
                  {data.assignment_name}
                </td>
                <td className="border p-1 text-[0.6875rem]">
                  {data.obtained_marks} / {data.assignment_total_marks}
                </td>
                <td
                  className={`${
                    data.submission_time <= data.deadline
                      ? "text-green-400"
                      : "text-red-300"
                  } text-[0.6875rem] p-1 border`}
                >
                  {data.submission_time}
                </td>
                <td className="border p-1 text-[0.6875rem] text-red-300">
                  {data.deadline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AssignmentMarksTable;
