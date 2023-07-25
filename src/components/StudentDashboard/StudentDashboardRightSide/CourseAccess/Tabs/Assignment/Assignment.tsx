import { CButton } from "@/Shared";

type IAssignmentProps = {
  data: {
    id: number;
    label: string;
    videoDescription?: any;
    referenceData?: any;
    quiz?: any;
    assignmentDetails?: any;
    content?: any;
    instructor_comments?: any;
    requirements?: any;
    submit_methods?: any;
    marks_policy?: any;
  };
};

const Assignment = ({ data }: IAssignmentProps) => {
  const { instructor_comments, requirements, submit_methods, marks_policy } =
    data;

  return (
    <section>
      <h1 className="text-md font-bold my-2 text-gray-600">
        {data?.assignmentDetails?.title}
      </h1>
      <p className="text-sm text-justify mb-3">
        জমা দেয়ার শেষ সময় - {data?.assignmentDetails?.lastSubmissionDate}
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center p-3 my-3">
        <CButton
          variant="contained"
          color="bg-green-600 text-white cursor-not-allowed"
        >
          সর্বমোট নাম্বার - {data?.assignmentDetails?.totalMarks}
        </CButton>
        {data?.assignmentDetails?.assignment_attempted ? (
          <CButton
            variant="contained"
            color={
              data?.assignmentDetails?.submitted_date >
              data?.assignmentDetails?.lastSubmissionDate
                ? "bg-red-700 text-white"
                : "bg-cyan-800 text-white"
            }
          >
            আপনি যা জমা দিয়েছেন
          </CButton>
        ) : (
          <CButton variant="contained" color="bg-red-700 text-white">
            জমা দিন
          </CButton>
        )}
        {data?.assignmentDetails?.assignment_attempted && (
          <CButton
            variant="contained"
            color="bg-blue-800 text-white cursor-not-allowed"
          >
            প্রাপ্ত নাম্বার - {data?.assignmentDetails?.obtainedMarks}
          </CButton>
        )}
      </div>
      <div className="my-4 border p-4">
        <h1 className="text-gray-600 dark:text-white text-md font-bold">
          {instructor_comments?.title}
        </h1>
        <p className="text-sm text-justify mt-2">
          {instructor_comments?.content}
        </p>
      </div>
      <div className="my-4 border p-4">
        <h1 className="text-gray-600 dark:text-white text-md font-bold">
          {requirements?.title}
        </h1>
        <p className="text-sm text-justify mt-2">{requirements?.content}</p>
      </div>
      <div className="my-4 border p-4">
        <h1 className="text-gray-600 dark:text-white text-md font-bold">
          {submit_methods?.title}
        </h1>
        <p className="text-sm text-justify mt-2">{submit_methods?.content}</p>
      </div>
      <div className="my-4 border p-4">
        <h1 className="text-gray-600 dark:text-white text-md font-bold">
          {marks_policy?.title}
        </h1>
        <p className="text-sm text-justify mt-2">{marks_policy?.content}</p>
      </div>
    </section>
  );
};

export default Assignment;
