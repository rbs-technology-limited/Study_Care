import React from "react";
import { coursePageData } from "@/Content";

const TitleAndDescription = () => {
  return (
    <section>
      <h1 className="md:text-3xl text-2xl font-semibold">
        {coursePageData?.title}
      </h1>
      <p className="text-md my-4">{coursePageData?.description}</p>
    </section>
  );
};

export default TitleAndDescription;
