import React from "react";
import { classCategoriesData } from "@/Content";
import ClassSlider from "./ClassSlider/ClassSlider";
import Image from "next/image";
import line from "public/Asset/image/line.svg";

const ClassCategories = () => {
  return (
    <section className="container mx-auto py-9 px-8">
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="md:text-3xl text-2xl font-bold">
          {classCategoriesData?.title}
        </h1>
        <Image src={line} alt="line" width={152} height={13} />
      </div>
      <div className="w-full">
        <ClassSlider data={classCategoriesData.categories} delayTime={3000} />
      </div>
    </section>
  );
};

export default ClassCategories;
