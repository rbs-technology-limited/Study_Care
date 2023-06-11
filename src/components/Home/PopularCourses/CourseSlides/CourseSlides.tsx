"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import "swiper/css/free-mode";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./slides.css";

// import required modules
import { Pagination, FreeMode, Navigation } from "swiper";
import Image from "next/image";
import HeroImage from "public/Asset/to-do-list.svg";
import { CButton } from "@/Shared";
import { lightTeal, teal } from "@/Constant/Custom-Color";
import { popularCourses } from "@/Content";

const CourseSlides = () => {
  const [_, setInit] = useState<any>(null);
  interface Course {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    price: number;
  }

  return (
    <>
      <CButton
        customClass="bg-transparent text-cyan-600 dark:text-cyan-500 hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 px-2 z-[10] "
        onClick={() => {
          _?.slidePrev();
        }}
      >
        <BsFillArrowLeftCircleFill size={40} 
        
        />
      </CButton>

      <div className="lg:w-1/5 w-full" data-aos="fade-right">
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={100}
          height={150}
          className="object-cover object-center w-full h-[50%]
          rounded-lg
          lg:h-full
          "
        />
      </div>
      {/* //slider */}
      <div className="lg:w-4/5 w-full mt-10" data-aos="fade-left">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[FreeMode, Pagination, Navigation]}
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
              spaceBetween: 20,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {popularCourses?.map((course: Course) => {
            return (
              <SwiperSlide key={course?.id}>
                <div className="flex flex-col items-center bg-white dark:bg-gray-600 rounded-lg shadow-lg text-black dark:text-white h-full p-2">
                  <div className="w-full">
                    <Image
                      src={course?.image}
                      alt={course?.title}
                      className="object-contain object-center rounded-lg mx-auto"
                      width={400}
                      height={100}
                    />
                  </div>
                  <section className="flex flex-col items-center justify-center pb-5">
                    <h1 className="text-lg font-semibold">{course?.title}</h1>
                    <p className="text-sm">
                      {course?.description?.slice(0, 100)}...
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
                    <CButton color={teal} variant="outline">
                      See Details
                    </CButton>
                  </section>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <CButton
        customClass="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 px-2 z-[10] bg-transparent text-cyan-600 dark:text-cyan-500"
        onClick={() => {
          _?.slideNext();
        }}
      >
        <BsFillArrowRightCircleFill size={40}/>
      </CButton>
    </>
  );
};

export default CourseSlides;
