import CategoriesShow from "@/components/Home/ClassCategories/CategoriesShow/CategoriesShow";
import React from "react";

const page = async ({ params }: any) => {
  // console.log(params);
  return (
    <main className=" min-h-screen mt-[4.4rem] ">
      <CategoriesShow />
    </main>
  );
};

export default page;
