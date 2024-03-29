"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ReactPlayer from "react-player/lazy";
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
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        allowTouchMove={true}
        modules={[Pagination]}
        className="mySwiper h-full"
        // autoplay={{
        //   delay: 6000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
      >
        {coursePageData?.mediaLinks?.map((media) => (
          <>
            <SwiperSlide
              key={media.id}
              className="h-full flex items-center justify-center w-full rounded-md"
            >
              <div className="h-full w-full rounded-md">
                {media.type === "video" ? (
                  <ReactPlayer
                    url={media.video_link}
                    controls={true}
                    width="100%"
                    height="100%"
                    fallback={
                      //skeleton
                      <div className="h-full w-full bg-gray-200">
                        <div className="h-full w-full bg-gray-300 animate-pulse"></div>
                      </div>
                    }
                  />
                ) : media?.image_link ? (
                  <div className="h-full w-full">
                    <Image
                      src={media.image_link}
                      alt="media"
                      width={1500}
                      height={400}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselMedia;
