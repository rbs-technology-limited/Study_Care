"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper";

import "swiper/css/free-mode";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import { coursePageData } from "@/Content";

const CarouselMedia = () => {
  return (
    <div className="h-[25rem]">
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
        className="mySwiper h-full "
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {coursePageData?.mediaLinks?.map((media) => (
          <SwiperSlide
            key={media.id}
            className="h-full flex items-center justify-center w-full"
          >
            <div className="h-full w-full">
              {media.type === "video" ? (
                <iframe
                  width="560"
                  height="400"
                  src={media.video_link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : media?.image_link ? (
                <div className="h-full w-full">
                  <Image
                    src={media.image_link}
                    alt=""
                    width={1500}
                    height={400}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : null}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselMedia;
