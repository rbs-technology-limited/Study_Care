"use client";
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

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selectedOptions) => selectedOptions !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h1 className="text-md font-bold text-gray-600">{questions}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => handleOptionChange(option)}
            className={`p-4 border border-gray-300 rounded-md cursor-pointer ${
              selectedOptions.includes(option)
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            <h5 className="text-sm">{option}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestions;
