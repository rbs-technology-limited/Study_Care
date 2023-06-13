"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
// import Image from "next/image";
import React, { useState } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

interface SliderData {
  id: number;
  status: string;
  class: string;
  buttonText: string;
}

type Class = {
  data: Array<SliderData>;
  delayTime?: number;
};

type ClassData = Array<SliderData>;

const ClassSlider = ({ data, delayTime }: Class) => {
  const [init, setInit] = useState<any>(null);
  const route = useRouter();

  return (
    <div className="flex justify-center">
      <div className="w-full mt-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          allowTouchMove={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
          onInit={(swiper) => {
            setInit(swiper);
          }}
          autoplay={{
            delay: delayTime,
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
          {data?.map((classData: SliderData) => {
            return (
              <SwiperSlide key={classData?.id}>
                <div className="bg-custom-teal dark:bg-transparent p-4 rounded-2xl border-2 border-button-teal">
                  <p className="text-sm font-bold">{classData.status}</p>
                  <h1 className="text-xl mt-2 font-bold">{classData.class}</h1>
                  <div className="flex justify-center mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-notebook"
                      width="124"
                      height="124"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke={teal}
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                      <path d="M13 8l2 0" />
                      <path d="M13 12l2 0" />
                    </svg>
                  </div>
                  <CButton
                    variant="outline"
                    color={teal}
                    onClick={() => {
                      const id = classData?.id;
                      route.push(`/categories/${id}`);
                    }}
                  >
                    {classData.buttonText}
                  </CButton>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ClassSlider;
