// import ArrowLeft from '../../../../public/Asset/svg/ArrowLeft';
// import ArrowRight from '../../../../public/Asset/svg/ArrowRight';
"use client";
import Image from "next/image";

import { workflowContent, workflowData } from "@/Content";
import line from "../../../../public/Asset/image/line.svg";

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
        {/* className="flex flex-wrap gap-4  justify-center items-center px-4" */}
        <section>
          <div className="py-6 flex flex-col justify-center sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                {/* <!-- Vertical bar running through middle --> */}
                <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                {/* <!-- Timeline --> */}
                {workflowData?.map((item: workflowData, index: number) =>
                  index % 2 === 0 ? (
                    <div
                      className="mt-6 sm:mt-0 sm:mb-12"
                      key={index}
                      data-aos="fade-right"
                    >
                      <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-start w-full mx-auto items-center">
                          <div className="w-full sm:w-1/2 sm:pr-8">
                            <div className="p-4 bg-white rounded shadow">
                              {item?.title}
                            </div>
                          </div>
                        </div>
                        <div className="rounded-full bg-cyan-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="mt-6 sm:mt-0 sm:mb-12"
                      key={index}
                      data-aos="fade-left"
                    >
                      <div className="flex flex-col sm:flex-row items-center">
                        <div className="flex justify-end w-full mx-auto items-center">
                          <div className="w-full sm:w-1/2 sm:pl-8">
                            <div className="p-4 bg-white rounded shadow">
                              {item?.title}
                            </div>
                          </div>
                        </div>
                        <div className="rounded-full bg-orange-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* left blur */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-button-teal opacity-40 blur-[100px]   z-10"></div>
      {/* right blur */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-custom-orange opacity-40 blur-[100px]  z-10"></div>
    </section>
  );
}
