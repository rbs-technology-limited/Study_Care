import { mainFeatureContent } from "@/Content";
import Image from "next/image";
import React from "react";
import line from "public/Asset/image/line.svg";

const MainFeature = () => {
  return (
    <main className=" pb-20 pt-12">
      <section className="container mx-auto px-4 lg:px-8 mt-6">
        <section className="flex flex-col items-center space-y-3">
          <h1
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600 font-bold pr-2
              dark:from-orange-300 dark:to-purple-400"
          >
            {mainFeatureContent?.content1}
          </h1>
          <Image src={line} alt="line" width={250} height={1} />
          <small className="text-center md:text-left text-sm text-stone-500 my-4 dark:text-stone-300 ">
            {mainFeatureContent?.content2}
          </small>
        </section>
      </section>
    </main>
  );
};

export default MainFeature;
