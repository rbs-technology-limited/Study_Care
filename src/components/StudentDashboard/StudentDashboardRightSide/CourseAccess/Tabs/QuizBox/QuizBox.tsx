"use client";
import { CButton } from "@/Shared";
import Link from "next/link";
import { useParams } from "next/navigation";

type IQuizBoxProps = {
  data: {
    id: number;
    label: string;
    videoDescription?: any;
    referenceData?: any;
    quiz?: any;
    assignmentDetails?: any;
    content?: any;
    quiz_attempted?: boolean;
  };
};

const QuizBox = ({ data }: IQuizBoxProps) => {
  const courseId = useParams();
  return (
    <>
      {data?.quiz_attempted ? (
        <div className="bg-white dark:bg-dark-teal shadow-lg rounded-lg w-full md:w-2/4 p-3 border">
          <h1 className="text-xl font-bold text-gray-600 dark:text-white mb-6">
            Quiz Title
          </h1>
          <p className="text-sm text-gray-500 dark:text-white mb-6 flex justify-between items-center">
            <span> প্রাপ্ত নাম্বার</span>
            <span>
              {data?.quiz?.obtainedMarks}/{data?.quiz?.totalMarks}
            </span>
          </p>
          <div className="flex justify-center items-center">
            <CButton variant="outline" color="red">
              Show Answer
            </CButton>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-dark-teal shadow-lg rounded-lg w-full md:w-2/4 p-3 border">
          <h1 className="text-xl font-bold text-gray-600 dark:text-white mb-6">
            Quiz Title
          </h1>
          <p className="text-sm text-gray-500 dark:text-white my-3 flex justify-between items-center mb-6">
            <span> প্রাপ্ত নাম্বার </span>
            <span>
              {data?.quiz?.obtainedMarks}/{data?.quiz?.totalMarks}
            </span>
          </p>
          <div className="flex justify-center items-center">
            <Link href={`/course_access/${courseId.id}/quiz`}>
              <CButton variant="outline" color="green">
                কুইজ দিন
              </CButton>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizBox;
