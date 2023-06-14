"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
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
        <div className="block min-h-6 pl-7 mt-2">
          <label>
            <input
              id="checkbox-1"
              type="checkbox"
              className="
              mr-2
              text-button-teal
              border-2
              border-button-teal
              rounded-full
              cursor-pointer
              focus:outline-none
              checked:text-button-teal
              disabled:text-gray-400
              disabled:border-gray-400
              disabled:cursor-not-allowed
              disabled:checked:text-gray-400
              disabled:checked:border-gray-400
              disabled:checked:cursor-not-allowed
              focus:ring-1
              focus:ring-button-teal
              focus:ring-opacity-50
              dark:bg-gray-800
              dark:border-custom-orange
              dark:checked:text-custom-orange
              dark:checked:border-custom-orange
              dark:focus:ring-custom-orange
              dark:focus:ring-opacity-50
              dark:disabled:text-gray-400
              dark:disabled:border-gray-400
              dark:disabled:cursor-not-allowed
              dark:disabled:checked:text-gray-400
              dark:disabled:checked:border-gray-400
              dark:disabled:checked:cursor-not-allowed
              "
              disabled
              checked
            />
            <label htmlFor="checkbox-1" className="cursor-pointer select-none">
              {categoryName}
            </label>
          </label>
        </div>
      </section>
    </div>
  );
};

export default CategoriesLeftFilterUI;
