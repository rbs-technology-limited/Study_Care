"use client";
import { teal } from "@/Constant/Custom-Color";
import React from "react";
import CButton from "../CButton/CButton";

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

  const [sliceNumber, setSliceNumber] = React.useState<number>(5);


  const renderContents = contents
    ?.slice(0, sliceNumber)
    ?.map((content, index) => {
      const isActive = index === activeIndex;
      const isLastItem = index === contents?.slice(0, sliceNumber).length - 1;
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
              <div className=" text-gray-800 dark:text-[#FFFFFF] text-lg font-semibold  py-4 cursor-pointer">
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
    <div className="border-[0.0845rem] p-5 rounded-lg my-4 bg-white relative dark:bg-stone-900 dark:border-gray-400">
      {renderContents}

      {/* /bottom center of the accordion add a button to show more contents */}
      {sliceNumber < contents?.length ? (
        <div className="absolute bottom-[-50] left-1/2 transform -translate-x-1/2">
          <CButton
            onClick={() => setSliceNumber(contents?.length)}
            customClass="bg-[#F6F6F6] text-gray-800 dark:text-black font-semibold px-3 py-2 rounded-lg"
          >
            আরও দেখুন
          </CButton>
        </div>
      ) : (
        <div className="absolute bottom-[-50] left-1/2 transform -translate-x-1/2">
          <CButton
            onClick={() => setSliceNumber(5)}
            customClass="bg-[#F6F6F6] text-gray-800 dark:text-black font-semibold px-4 py-2 rounded-lg"
          >
            কম দেখুন
          </CButton>
        </div>
      )}
    </div>
  );
};

export default Accordion;
