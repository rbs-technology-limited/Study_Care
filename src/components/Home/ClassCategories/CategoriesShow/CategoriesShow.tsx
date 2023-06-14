"use client";

import { OffCanvus } from "@/Shared";
import React, { useState } from "react";
import CategoriesLeftFilterUI from "./CategoriesLeftFilterUI/CategoriesLeftFilterUI";
import CategoriesRightDataUI from "./CategoriesRightDataUI/CategoriesRightDataUI";

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
        
        `}
        >
          <div
            className={`border rounded max-w-xs px-2 hidden lg:block 
          
            ${showLeftSection ? "block" : "hidden"}`}
          >
            <CategoriesLeftFilterUI />
          </div>
          <div className="border rounded w-full lg:w-[120%] px-1">
            {/* //mobile device button click to show left section as backdrop left drawer  */}
            <button
              className="border lg:hidden block"
              onClick={() => {
                // console.log("clicked");
                setShowLeftSection(!showLeftSection);
              }}
            >
              filter
            </button>
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
    </main>
  );
};

export default CategoriesShow;
