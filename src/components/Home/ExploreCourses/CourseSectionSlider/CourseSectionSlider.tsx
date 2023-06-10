"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   BsFillArrowLeftCircleFill,
//   BsFillArrowRightCircleFill,
// } from "react-icons/bs";

import "swiper/css/free-mode";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./slides.css";

// import required modules
import { Pagination, FreeMode, Navigation } from "swiper";
import Image from "next/image";
// import HeroImage from "public/Asset/Hero_section_Logo.svg";
import { CButton } from "@/Shared";
import { lightTeal, teal } from "@/Constant/Custom-Color";
// import { exploreCoursesData1 } from "@/Content";

interface CourseSectionSliderProps {
  exploreCoursesData?: Array<any>;
}

const CourseSectionSlider = ({
  exploreCoursesData,
}: CourseSectionSliderProps) => {
  const [init, setInit] = useState<any>(null);
  interface courseData {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    price: number;
  }

  return (
    <>
      <div className="w-full mt-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          //   loop={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          onInit={(swiper) => {
            setInit(swiper);
          }}
          autoHeight={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {exploreCoursesData?.map((course: courseData) => {
            return (
              <SwiperSlide key={course?.id}>
                <div
                  className="flex flex-row items-center 
                justify-between gap-3
                bg-white dark:bg-gray-600 rounded-lg shadow-lg text-black dark:text-white h-full p-2
                 shadow-gray-700/30"
                >
                  <div className="w-full">
                    <Image
                      src={course?.image}
                      alt={course?.title}
                      className="object-contain object-center w-[300px] rounded-lg mx-auto border-2"
                      width={100}
                      height={100}
                    />
                  </div>

                  <section className="flex flex-col justify-center pb-5">
                    <h1 className="text-lg font-semibold">{course?.title}</h1>
                    <p className="text-sm">
                      {course?.description?.slice(0, 90)}...
                    </p>
                    <div className="flex items-center justify-between w-full py-3">
                      {/* //rating */}
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => {
                          return (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 ${
                                index < Math.floor(course?.rating)
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

                        <span className="text-sm text-gray-400">
                          ({course?.rating})
                        </span>
                      </div>

                      <span className="text-sm text-gray-400">
                        {course?.price} &#2547;
                      </span>
                    </div>

                    {/* //see detail button */}
                    <CButton color={teal} variant="outline" textUpperCased>
                      Explore
                    </CButton>
                  </section>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default CourseSectionSlider;
