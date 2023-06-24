"use client";
import { teal } from "@/Constant/Custom-Color";
import React from "react";

type CustomComponent = (content: string) => React.ReactNode;

type Accordion = {
  contents: {
    id: number;
    title: string;
    content: string;
  }[];
  customComponent?: CustomComponent;
};

const Accordion = ({ contents, customComponent, ...rest }: Accordion) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);
  const onContentClick = (index: any) => {
    setActiveIndex(index);
  };

  const renderContents = contents?.map((content, index) => {
    const isActive = index === activeIndex;
    const isLastItem = index === contents.length - 1;

    return (
      <>
        <div onClick={() => onContentClick(!isActive ? index : null)}>
          <div
            className={`${
              !isActive && !isLastItem
                ? "border-b-[0.10rem] border-dashed border-gray-300 "
                : "border-0"
            } flex justify-between items-center gap-4`}
          >
            <div className=" text-gray-800 dark:text-[#FFFFFF] text-md font-semibold  py-4 cursor-pointer">
              {content.title}
            </div>
            <div className="cursor-pointer">
              {!isActive ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`rotate-0 transition transform duration-300 ease-in-out ${
                    isActive ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M4.375 14H23.625"
                    stroke={teal}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 4.375V23.625"
                    stroke={teal}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="4"
                  viewBox="0 0 24 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`rotate-0 transition transform duration-300 ease-in-out ${
                    isActive ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M2.375 2H21.625"
                    stroke={teal}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>

          {isActive && (
            <div
              className={`${
                isActive &&
                !isLastItem &&
                "border-b-[0.10rem] border-gray-300 border-dashed "
              } pb-2 text-md text-gray-600 dark:text-white/90`}
            >
              {customComponent
                ? customComponent(content.content)
                : content.content}
            </div>
          )}
        </div>
      </>
    );
  });
  
  return (
    <div className="border-[0.0845rem] p-5 rounded-lg my-4">
      {renderContents}
    </div>
  );
};

export default Accordion;
