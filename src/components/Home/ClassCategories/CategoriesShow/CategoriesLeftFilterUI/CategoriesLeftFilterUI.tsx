import { teal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import React from "react";

const CategoriesLeftFilterUI = () => {
  return (
    <div className="break-all py-2">
      {/* //search field  */}
      <section>
        <input
          type="text"
          placeholder="আপনি কী খুঁজছেন?"
          className="border w-full px-2 py-1 rounded text-black bg-gradient-to-r from-yellow-100 to-cyan-100 
          border-cyan-100
           dark:border-gray-800 focus:outline-none focus:ring-1 focus:ring-button-teal focus:border-transparent placeholder-gray-400
         
           "
        />
        <CButton variant="outline"
        color={teal}
        height="h-[2rem]"
        >
          অনুসন্ধান করুন
        </CButton>
      </section>
    </div>
  );
};

export default CategoriesLeftFilterUI;
