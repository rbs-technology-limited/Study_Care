// import ArrowLeft from '../../../../public/Asset/svg/ArrowLeft';
// import ArrowRight from '../../../../public/Asset/svg/ArrowRight';
import Image from "next/image";

import line from "../../../../public/Asset/image/line.svg";
import { workflowContent, workflowData } from "@/Content";

export default function Workflow() {
  interface workflowData {
    id: number;
    title: string;
  }
  return (
    <section className="relative z-10 overflow-hidden bg-[#F3FCFD] dark:bg-[#141414] py-12 ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="dark:text-stone-200 text-gray-900 md:text-3xl text-2xl font-bold text-center">
            {workflowContent?.content1}
          </h2>
          <Image src={line} alt="line" width={152} height={13} />
        </div>
        <p className="dark:text-[#DFDFDF] text-[#363636] text-center text-sm md:text-xl font-normal py-4">
          {workflowContent?.content2}
          <br />
          {workflowContent?.content3}
          <br />
          {workflowContent?.content4}
        </p>
        <div className="flex flex-wrap gap-4  justify-center items-center px-4">
          {workflowData?.map((item: workflowData, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center py-4"
            >
              <div className="flex justify-center items-center dark:bg-[#1D1D1D] bg-white rounded-lg p-4 border-solid border-2 border-sky-500 hover:border-green-400 hover:cursor-pointer">
                <h1 className="dark:text-[#E4E4E7] text-[#181818] text-[1.1rem] font-semibold text-center px-4 py-2">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* left blur */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-button-teal opacity-40 blur-[100px]   z-10"></div>
      {/* right blur */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-custom-orange opacity-40 blur-[100px]  z-10"></div>
    </section>
  );
}
