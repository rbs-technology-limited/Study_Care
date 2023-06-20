"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGenderless } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { relatedCoursesStaticData } from "@/Content";
import Image from "next/image";

interface IRelatedCardData {
  id: number;
  title: string;
  price: number;
  status?: string | null;
  rating?: number;
  sold?: number;
  category?: string;
  courseDetails: {
    id: number;
    title: string;
  }[];
  image_link: string;
}
interface IRelatedCourseCardData {
  relatedCourseCardData: IRelatedCardData;
}

const RelatedCourseCard = ({
  relatedCourseCardData,
}: IRelatedCourseCardData) => {
  const route = useRouter();
  const [isCardHovered, setIsCardHovered] = React.useState<boolean>(false);

  type BanglaDigit = string | number;

  // convert english digit to bangla digit
  const convertToBangla = (englishDigit: BanglaDigit) => {
    const updatedBangleNumber = Number(englishDigit).toLocaleString("bn-BD", {
      useGrouping: true,
    });
    const banglaDigit = `কোর্সটি করছেন ${updatedBangleNumber} জন`;
    return banglaDigit;
  };
  return (
    <section
      className={`p-1 relative`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div
        className={`
        flex max-w-lg shadow-lg rounded-lg overflow-hidden
      ${isCardHovered ? "bg-gray-800/20" : "bg-white dark:bg-gray-800"}
        `}
      >
        <div className="w-2/4 relative bg-no-repeat">
          <Image
            src={relatedCourseCardData?.image_link}
            alt="course thumbnail"
            width={300}
            height={280}
            className="rounded-l-lg h-full w-full object-cover object-left"
          />

          {/* course tags */}
          {relatedCourseCardData.status && (
            <div className="absolute left-0 top-0 z-100 ">
              <p className=" bg-red-800 px-2 flex items-center justify-center text-white text-sm">
                {relatedCourseCardData?.status}
              </p>
            </div>
          )}
        </div>
        <div className="w-2/3 p-2">
          <h1 className="text-gray-900 font-bold text-sm dark:text-white">
            {relatedCourseCardData?.title}
          </h1>
          <div className="h-16 my-1">
            <div className="my-1">
              {relatedCourseCardData?.courseDetails.map((courseDetail) => (
                <div className="flex items-center gap-1 " key={courseDetail.id}>
                  <FaGenderless className="text-sm" color={teal} />
                  <p className=" text-gray-600 dark:text-white text-[.625rem]">
                    {courseDetail.title}
                  </p>
                </div>
              ))}
            </div>
            {relatedCourseCardData?.sold && (
              <div className="flex gap-1 my-1">
                <HiUserGroup color={teal} className="text-[.75rem]" />
                <p className="text-[.5rem] md:text-[.5625rem] font-semibold">
                  {convertToBangla(relatedCourseCardData?.sold)}
                </p>
              </div>
            )}
          </div>
          <div className="w-16 bg-[#DFF4D7] text-center my-1">
            <p className="text-[.5rem] md:text-[.5625rem] text-[#51933E] p-[1px]">
              {relatedCourseCardData?.category}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex item-center">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${
                      index <
                      Math.floor(relatedCourseCardData?.rating as number)
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1l2.598 6.854h7.902l-6.386 4.946 2.598 6.854L10 13.708l-6.713 4.946 2.598-6.854L.5 7.854h7.902L10 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                );
              })}
            </div>
            <div className="outline outline-offset-2 outline-2 rounded-full outline-purple-500/70">
              <p className="h-4 rounded-full text-purple-500 px-2 py-2 flex items-center justify-center text-sm">
                {relatedCourseCardData?.price}$
              </p>
            </div>
          </div>
        </div>
        <div
          className={`mt-3 gap-1 absolute bottom-0 right-0 transition duration-300 p-2 
           
            ${
              isCardHovered
                ? "-translate-x-2 -translate-y-2 visible"
                : "translate-x-full translate-y-full invisible"
            }

          bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center`}
        >
          <CButton variant="solid" color={teal}>
            {relatedCoursesStaticData.button1}
          </CButton>
          <CButton
            variant="outline"
            color={teal}
            onClick={() => route.push(`/courses/${relatedCourseCardData.id}`)}
          >
            {relatedCoursesStaticData.button2}
          </CButton>
        </div>
      </div>
    </section>
  );
};

export default RelatedCourseCard;
