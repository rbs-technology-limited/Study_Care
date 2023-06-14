"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton, SelectField } from "@/Shared";
import { useSearchParams } from "next/navigation";
import React from "react";

const CategoriesLeftFilterUI = () => {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("category") || "";
  // console.log(categoryName);
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
        <CButton variant="outline" color={teal} height="h-[2rem]">
          অনুসন্ধান করুন
        </CButton>
      </section>
      <section className="my-5 text-black dark:text-white">
        <h2 className="text-sm font-semibold">Category</h2>
        {/* //checkbox */}
        <SelectField type="checkbox" name={categoryName} disabled checked />
      </section>
    </div>
  );
};

export default CategoriesLeftFilterUI;
