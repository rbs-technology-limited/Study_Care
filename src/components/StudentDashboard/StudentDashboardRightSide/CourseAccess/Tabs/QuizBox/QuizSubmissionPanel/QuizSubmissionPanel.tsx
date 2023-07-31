import { teal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import MultipleChoiceQuestions from "./MultipleChoiceQuestions/MultipleChoiceQuestions";

const QuizSubmissionPanel = () => {
  const quizData = [
    {
      id: 1,
      questions: "what is a debounce function in javascript?",
      options: [
        " A debounce function delays the execution of a function until a specified time has passed since the last invocation.",
        "It prevents a function from being called repeatedly in quick succession, allowing for smoother and more controlled execution.",
        "A debounce function is commonly used to improve performance and optimize resource usage when handling events that may trigger frequent updates.",
        "It is particularly useful for handling events like keystrokes, mouse movements, or scroll events, where immediate execution of the associated functions could cause performance issues.",
      ],
    },
    {
      id: 2,
      questions: "what is closure in javascript?",
      options: [
        " what is closure in javascriptA closure is a built-in object in JavaScript that provides access to the DOM elements.",
        "A closure is a way to prevent memory leaks in JavaScript by automatically garbage collecting unused variables.",
        "A closure is a function that is automatically called when an event occurs in JavaScript.",
        "A closure is a function that retains access to variables from its outer scope even after the outer function has finished executing.",
      ],
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-8 py-8 bg-gray-50">
        {quizData.map((data) => (
          <div
            key={data.id}
            className="border rounded-lg p-2 text-gray-600 w-full my-3"
          >
            <MultipleChoiceQuestions
              questions={data?.questions}
              options={data?.options}
            />
          </div>
        ))}

        <div className="flex justify-end my-5">
          <CButton variant="outline" color={teal}>
            Submit
          </CButton>
        </div>
      </div>
    </section>
  );
};

export default QuizSubmissionPanel;
