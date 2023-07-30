"use client";
import { classTeacherInfoData, classTeacherListData } from "@/Content";
import { useAppSelector } from "@/Redux/store";
import { CButton } from "@/Shared";
import Image from "next/image";
import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
// {
//     id: 2,
//     name: "মোঃ আব্দুল কাদের",
//     designation: "GNU, IBA",
//     experience: "১০ বছর",
//     image: "https://i.ibb.co/0jZ3q3D/teacher-1.jpg",
//     subject: "ইংরেজি",
//   },

interface ClassTeacherData {
  [x: string]: any;
  id: number;
  name: string;
  designation: any;
  experience: string;
  image: string;
  subject: any;
}

const ClassTeacherInfo = () => {
  const [sliceNumber, setSliceNumber] = React.useState<number>(5);
  const { courseDetails } = useAppSelector((state) => state.category);

  return (
    <section>
      {/* class requirements */}
      <div className="mt-12">
        <h1 className="text-xl font-bold dark:text-white text-gray-800">
          {classTeacherInfoData?.title}
        </h1>

        <section className="border-[.0925rem] p-3 my-5 rounded-lg relative">
          {/* //2column grid layout */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
            {courseDetails?.teachers
              ?.slice(0, sliceNumber)
              ?.map((item: ClassTeacherData, index: number) => (
                <div key={index} className="flex flex-row justify-start gap-2">
                  <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                    <Image
                      src={item?.image}
                      alt="teacher"
                      width={70}
                      height={70}
                    />
                  </div>
                  <section>
                    <h1 className="text-md font-semibold dark:text-white text-gray-800">
                      {item?.teacher?.user?.username}
                    </h1>
                    <h1 className="text-xs font-normal dark:text-white text-gray-800">
                      {item?.teacher?.user?.designation}, {item?.experience}
                    </h1>

                    <h1 className="text-sm font-base dark:text-white text-gray-800 bg-stone-100 px-3 py-.5 w-fit">
                      {item?.subject}
                    </h1>
                  </section>
                </div>
              ))}
          </div>
          {sliceNumber < classTeacherListData?.length ? (
            <div className="absolute bottom-[-60] left-1/2 transform -translate-x-1/2">
              <CButton
                onClick={() => setSliceNumber(classTeacherListData?.length)}
                customClass="bg-[#F6F6F6] text-sm text-gray-800 dark:text-black  px-3 py-2 rounded-lg"
              >
                <div className="flex gap-2 items-center justify-center">
                  <p> {"আরও দেখুন"}</p>
                  <MdOutlineKeyboardArrowDown className="text-lg" />
                </div>
              </CButton>
            </div>
          ) : (
            <div className="absolute bottom-[-60] left-1/2 transform -translate-x-1/2">
              <CButton
                onClick={() => setSliceNumber(5)}
                customClass="bg-[#F6F6F6] text-sm text-gray-800 dark:text-black  px-4 py-2 rounded-lg"
              >
                <div className="flex gap-2 items-center justify-center">
                  <p> {"কম দেখুন"}</p>
                  <MdOutlineKeyboardArrowUp className="text-lg" />
                </div>
              </CButton>
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default ClassTeacherInfo;
