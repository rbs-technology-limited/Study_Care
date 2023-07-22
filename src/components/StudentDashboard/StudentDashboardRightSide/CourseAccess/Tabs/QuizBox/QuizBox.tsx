import { CButton } from "@/Shared";

type IQuizBoxProps = {
  data: {
    id: number;
    label: string;
    content: string;
  };
};

const QuizBox = ({ data }: IQuizBoxProps) => {
  return (
    <div className="bg-white dark:bg-dark-teal shadow-lg rounded-lg w-2/4 p-3 border">
      <h1 className="text-2xl font-bold text-gray-600 dark:text-white">
        Quiz Title
      </h1>
      <p className="text-sm text-gray-500 dark:text-white my-3">
        {data?.content}
      </p>
      <CButton variant="outline" color="red">
        Show Answer
      </CButton>
    </div>
  );
};

export default QuizBox;
