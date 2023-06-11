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
import { Pagination, FreeMode, Autoplay, Navigation } from "swiper";
import Image from "next/image";
// import HeroImage from "public/Asset/Hero_section_Logo.svg";
import { CButton } from "@/Shared";
import { lightTeal, teal } from "@/Constant/Custom-Color";
// import { exploreCoursesData1 } from "@/Content";

interface CourseSectionSliderProps {
  galleryImages?: Array<any>;
}

const GallrySlider = ({ galleryImages }: CourseSectionSliderProps) => {
  interface galleryData {
    id: number;
    image: string;
  }
  const [init, setInit] = useState<any>(null);

  return (
    <div className="w-full mt-4" data-aos="zoom-in">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        // centeredSlides={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        allowTouchMove={true}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwiper"
        onInit={(swiper) => {
          setInit(swiper);
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {galleryImages?.map((gallery: galleryData) => {
          return (
            <SwiperSlide key={gallery?.id}>
              <div
                className={`w-full h-full bg-gray-100 rounded-md border-[1px] border-cyan-200 dark:bg-gray-800 dark:border-cyan-700]`}
              >
                <Image
                  src={gallery?.image}
                  alt="gallery"
                  width={800}
                  height={500}
                  className="w-full h-full rounded-md object-cover object-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* ??two button for next and prev */}
      <section className="mt-10">
        <div className="flex justify-center items-center space-x-4 mt-4">
          <CButton
            customClass="bg-transparent text-cyan-600 dark:text-cyan-500 "
            onClick={() => init?.slidePrev()}
          >
            <BsFillArrowLeftCircleFill size={30} />
          </CButton>
          <CButton
            customClass="bg-transparent text-cyan-600 dark:text-cyan-500 "
            onClick={() => init?.slideNext()}
          >
            <BsFillArrowRightCircleFill size={30} />
          </CButton>
        </div>
      </section>
    </div>
  );
};

export default GallrySlider;
