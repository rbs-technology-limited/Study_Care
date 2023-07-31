"use client";
import {
  removeQuizQA,
  saveQuizQAs,
} from "@/Redux/features/courseAccess/courseAccessSlice";
import { useAppDispatch } from "@/Redux/store";
import { useState } from "react";

type IMultipleChoiceQuestionsProps = {
  questions: string;
  options: string[];
};

const MultipleChoiceQuestions = ({
  questions,
  options,
}: IMultipleChoiceQuestionsProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      // Remove the option from the selectedOptions state
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => selectedOption !== option)
      );

      // Update the store to remove the option from the corresponding question
      dispatch(
        removeQuizQA({
          question: questions,
          option,
        })
      );
    } else {
      // Add the option to the selectedOptions state
      setSelectedOptions([...selectedOptions, option]);

      // Update the store to add the option to the corresponding question
      dispatch(
        saveQuizQAs({
          question: questions,
          options: [...selectedOptions, option],
        })
      );
    }
  };

  return (
    <div>
      <h1 className="text-md font-bold text-gray-600 dark:text-white mb-2">
        {questions}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => handleOptionChange(option)}
            className={`p-4 border border-gray-300 dark:border-gray-500 rounded-md cursor-pointer ${
              selectedOptions.includes(option)
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-transparent dark:text-white"
            }`}
          >
            <h5 className="text-sm break-words text-justify">{option}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestions;
