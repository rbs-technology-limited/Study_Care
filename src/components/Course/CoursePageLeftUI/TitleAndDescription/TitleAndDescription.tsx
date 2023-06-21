import React from "react";
import { coursePageData } from "@/Content";

const TitleAndDescription = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold dark:text-white text-gray-800">
        {coursePageData?.title}
      </h1>
      <p className="text-md dark:text-white my-4 text-gray-600">
        {coursePageData?.description}
      </p>
    </section>
  );
};

export default TitleAndDescription;
