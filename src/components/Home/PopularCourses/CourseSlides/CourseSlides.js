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

import "./slides.css";

// import required modules
import { Pagination, FreeMode, Navigation } from "swiper";
import Image from "next/image";
import HeroImage from "public/Asset/Hero_section_Logo.svg";
import { CButton } from "@/Shared";
import { lightTeal } from "@/Constant/Custom-Color";

const CourseSlides = () => {
  const [_, setInit] = useState();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <button
        className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 z-10 px-2"
        ref={prevRef}
      >
        <BsFillArrowLeftCircleFill size={40} color={lightTeal} />
      </button>

      <div className="lg:w-1/6 w-full" data-aos="fade-right">
        <Image
          src={HeroImage}
          alt="Hero Image"
          width={200}
          height={250}
          className="object-cover object-center transform scale-60 md:scale-125"
        />
      </div>
      <div className="lg:w-4/6 w-full">
        {/* //slider */}
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
          onInit={(swiper) => {
            setInit(swiper);
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            
          }}
        >
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <Image
                src="https://picsum.photos/100/100"
                alt="course"
                width={100}
                height={100}
              />
              <h3>Course Name</h3>
              <p>Course Description</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <button
        className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 px-2"
        ref={nextRef}
      >
        <BsFillArrowRightCircleFill size={40} color={lightTeal} />
      </button>
    </>
  );
};

export default CourseSlides;
