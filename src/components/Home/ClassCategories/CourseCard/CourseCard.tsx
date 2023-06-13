import { CButton } from "@/Shared";
import React from "react";
import { FaGenderless } from "react-icons/fa";
import { teal } from "@/Constant/Custom-Color";
import { courseData } from "@/Content";

interface ICardData {
  id: number;
  title: string;
  price: number;
  status?: string | null;
  rating?: number;
  courseDetails: Array<{ id: number; title: string }>;
}
interface ICourseCardData {
  courseCardData: ICardData;
}

const CourseCard = ({ courseCardData }: ICourseCardData) => {
  return (
    <section className="container mx-auto">
      <div className="my-16">
        <div className="flex max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="w-2/4 relative bg-no-repeat"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/boy-studying-from-home-online-classroom-new-normal_53876-96659.jpg?w=740&t=st=1686653491~exp=1686654091~hmac=35ee66c6704ba0c67dbb073abcb6b9ec44986ce9d2fa771913a88f8601184813')`,
              backgroundSize: "300px 280px",
              backgroundPosition: "left center",
            }}
          >
            {/* course tags */}
            {courseCardData.status && (
              <div className="absolute left-0 top-0 p-3 z-100 ">
                <p className="h-7 rounded-full bg-red-800 p-2 flex items-center justify-center text-white text-sm">
                  {courseCardData?.status}
                </p>
              </div>
            )}
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-base">
              {courseCardData?.title}
            </h1>
            <div className="my-2">
              {courseCardData?.courseDetails.map((courseDetail) => (
                <div className="flex items-center gap-1 " key={courseDetail.id}>
                  <FaGenderless className="text-sm" color={teal} />
                  <p className=" text-gray-600 text-sm">{courseDetail.title}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex item-center mt-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${
                        index < Math.floor(courseCardData?.rating as number)
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
              </div>
              <div className="outline outline-offset-2 outline-2 rounded-full outline-purple-500/70">
                <p className="h-4 rounded-full text-purple-500 px-2 py-2 flex items-center justify-center text-sm">
                  {courseCardData?.price}
                </p>
              </div>
            </div>
            <div className="flex item-center justify-between mt-3">
              <CButton variant="solid" color={teal}>
                {courseData.button1}
              </CButton>
              <CButton variant="outline" color={teal}>
                {courseData.button2}
              </CButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCard;

{
  /* <div className="w-60 p-3 border-2 border-button-teal hover:border-custom-teal rounded-lg shadow-lg  transform hover:cursor-pointer transition duration-300">
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
            customclassName="w-full text-lg font-bold bg-button-teal p-1 my-2 text-white rounded-md text-center"
          >
            কোর্সটি কিনুন
          </CButton>
        </div> */
}
