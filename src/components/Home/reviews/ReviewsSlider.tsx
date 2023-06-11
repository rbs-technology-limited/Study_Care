"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./slides.css";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
// import HeroImage from "public/Asset/Hero_section_Logo.svg";
import { CButton } from "@/Shared";
// import { exploreCoursesData1 } from "@/Content";
import { useSwiperSlide } from 'swiper/react';

interface reviewsData {
    reviews?: Array<any>;
}

const ReviewsSlider = ({ reviews }: reviewsData) => {
    const swiperSlide = useSwiperSlide();
    const [init, setInit] = useState<any>(null);
    React.useEffect(() => {
        console.log(init);
    }, [init]);
    return (
        <div className="w-full mt-4" data-aos="zoom-in">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                loop={true}

                centeredSlides={true}
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

                }}
            >
                {reviews?.map((review) => {
                    return (
                        <SwiperSlide
                            key={review.id}
                        >
                            <div
                                className={`flex flex-col justify-center items-center space-y-4 p-4 rounded-2xl 
                                shadow-lg
                                 bg-white
                                 dark:border-[#3F3F3F]  border-[#CDCDCD]
                                  py-16 px-4 
                                ${init?.activeIndex === review.id ? 'dark:bg-[#0D0D0D] ' : 'dark:bg-transparent '}
                                ${init?.activeIndex === review.id ? ' border-0' : ' border-2'}
                                `}
                            >

                                <p
                                    className={`text-xl font-normal text-center italic
                                   
                                    ${init?.activeIndex + 1 === review.id ? 'dark:text-[#868686] text-[#535353]' : ' text-[#CDCDCD] dark:text-[#868686]'}
                                           `}
                                >
                                    {review?.review_text}
                                </p>
                                <div
                                    className="flex  justify-center items-center gap-4"
                                >
                                    <div
                                        className="relative mx-auto w-20 h-20 rounded-full overflow-hidden"
                                    >
                                        <Image
                                            src={review?.avatar}
                                            alt='avatar'
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full"
                                        />
                                    </div>

                                    <div>
                                        <h3

                                            className={`
                                            ${init?.activeIndex === review.id ? 'dark:text-[#00A6C0] text-[#0090A6]' : 'text-[#868686]'}
                                        text-2xl font-bold
                                        `}
                                        >
                                            {review?.name}
                                        </h3>
                                        <p
                                            className={`
                                        ${init?.activeIndex === review.id ? 'dark:text-white' : 'dark:text-[#727272] text-[#191919]'}
                                    text-xl font-normal
                                    `}
                                        >
                                            {review?.designation}
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* ??two button for next and prev */}
            <div className="mt-10">
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
            </div>
        </div>
    );
};

export default ReviewsSlider;
