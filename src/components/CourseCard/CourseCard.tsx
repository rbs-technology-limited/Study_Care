import { CButton } from "@/Shared";
import Image from "next/image";
import React from "react";
import { FaGenderless } from "react-icons/fa";
import { teal } from "@/Constant/Custom-Color";

const CourseCard = () => {
  const courseCardData = {
    id: 1,
    title: "HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)",
    price: 4500,
    courseDetails: [
      {
        id: 1,
        title: "৫ টি বিষয়",
      },
      {
        id: 2,
        title: "৯০ টি লাইভ ক্লাস",
      },
      {
        id: 3,
        title: "৫ টি ফাইনাল মডেল টেস্ট",
      },
      {
        id: 4,
        title: "৯০ টি লেকচার স্লাইড",
      },
      {
        id: 5,
        title: "৮০ টি লেকচার শিট",
      },
    ],
  };
  return (
    <section className="container mx-auto">
      <div className="my-16">
        <div className="w-60 p-3 border-2 border-button-teal hover:border-custom-teal rounded-lg shadow-lg  transform hover:cursor-pointer transition duration-300">
          <div className="relative">
            <Image
              src="https://img.freepik.com/free-psd/digital-marketing-live-webinar-corporate-social-media-post-template_202595-414.jpg?w=740&t=st=1686637947~exp=1686638547~hmac=1f441b06a0df053328d475142a61807cc6e6632eb3c9392e05cd1862f80d2b76"
              alt="course image"
              width={500}
              height={500}
              className="object-cover object-center"
            />
          </div>
          <div className="absolute left-1 top-1 p-3 z-10 ">
            <p className="h-7 rounded-full bg-red-400 p-2 flex items-center justify-center text-white text-sm">
              New
            </p>
          </div>
          <div>
            <h1 className="md:3xl 2xl font-bold py-3">
              {courseCardData.title}
            </h1>
            <div>
              {courseCardData.courseDetails.map((courseDetail) => (
                <div className="flex items-center gap-1" key={courseDetail.id}>
                  <FaGenderless className="text-sm" />
                  <p className="text-sm">{courseDetail.title}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xl font-bold p-1 my-2 rounded-md text-center ">
            ট{courseCardData.price}
          </p>
          <CButton
            variant="outline"
            color={teal}
            customClass="w-full text-lg font-bold bg-button-teal p-1 my-2 text-white rounded-md text-center"
          >
            কোর্সটি কিনুন
          </CButton>
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
