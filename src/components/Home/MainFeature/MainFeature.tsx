import { mainFeature, mainFeatureContent } from "@/Content";
import Image from "next/image";
import line from "public/Asset/image/line.svg";
import SingleCard from "./SingleCard";

const MainFeature = () => {
  interface mainFeature {
    id: number;
    title: string;
    description: string;
    image: string;
  }

  return (
    <section className="relative z-10 overflow-hidden  py-12 ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="dark:text-[#E4E4E7] text-gray-900 md:text-3xl text-2xl  font-bold text-center">
            {mainFeatureContent?.section_title}
          </h2>
          <Image src={line} alt="line" width={152} height={13} />
        </div>
        <p className="dark:text-[#DFDFDF] text-[#363636] text-center text-base font-normal py-4">
          {mainFeatureContent?.section_description}
        </p>

        <div className="w-[60%] mx-auto py-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            {mainFeature?.map((item: mainFeature) => (
              <SingleCard key={item.id} featureData={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeature;
