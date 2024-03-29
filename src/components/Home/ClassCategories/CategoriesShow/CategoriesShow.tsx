"use client";

import { CButton, OffCanvus } from "@/Shared";
import React, { useState } from "react";
import CategoriesLeftFilterUI from "./CategoriesLeftFilterUI/CategoriesLeftFilterUI";
import CategoriesRightDataUI from "./CategoriesRightDataUI/CategoriesRightDataUI";
import { teal } from "@/Constant/Custom-Color";
import { BiFilterAlt } from "react-icons/bi";

const CategoriesShow = () => {
  const [showLeftSection, setShowLeftSection] = useState<boolean>(false);

  return (
    <main className="relative">
      <section
        className={`container mx-auto lg:px-8 px-4 text-black
        min-h-screen
        ${showLeftSection ? "bg-gray-800/20" : "opacity-100"}`}
      >
        <section
          className={`flex justify-between gap-2
          lg:flex-row flex-col h-[56.25rem] `}
        >
          <div
            className={`border-r dark:border-gray-200/10 max-w-xs px-2 hidden lg:block  
          
            ${showLeftSection ? "block" : "hidden"}`}
          >
            <CategoriesLeftFilterUI />
          </div>

          <CButton
            customClass=" rounded mt-3 lg:hidden block justify-self-start w-24"
            variant="outline"
            color={teal}
            onClick={() => {
              setShowLeftSection(!showLeftSection);
            }}
          >
            <BiFilterAlt className="inline-block mr-1" />
            Filter
          </CButton>

          <div
            className=" rounded w-full lg:w-[120%] px-1 overflow-y-auto overflow-x-hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* //mobile device button click to show left section as backdrop left drawer  */}

            <CategoriesRightDataUI />
          </div>

          {/* //show left section as backdrop left drawer */}
        </section>
        <OffCanvus
          open={showLeftSection}
          setOpen={setShowLeftSection}
          title="Categories"
        >
          <CategoriesLeftFilterUI />
        </OffCanvus>
      </section>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 0.5em;
            background-color: transparent;
          }
          
          ::-webkit-scrollbar-thumb {
            background-color: transparent;
          }
        `}
      </style>
    </main>
  );
};

export default CategoriesShow;
