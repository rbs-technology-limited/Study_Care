"use client";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";
import { Pagination } from "swiper";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { useAppSelector } from "@/Redux/store";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import "swiper/css/pagination";

type IMediaData = {
  mediaData: any;
};

const CarouselMedia = ({ mediaData }: IMediaData) => {
  console.log("mediaData", mediaData);
  const { courseDetails } = useAppSelector((state) => state.category);
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
        {mediaData?.map((media: any) => (
          <>
            <SwiperSlide className="h-full flex items-center justify-center w-full rounded-md">
              <div className="h-full w-full rounded-md">
                {media.yt_video_link ? (
                  <ReactPlayer
                    url="media.yt_video_link"
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
                ) : media?.cover_image ? (
                  <div className="h-full w-full">
                    <Image
                      src={media?.cover_image?.url}
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
