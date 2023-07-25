"use client";
import { teal } from "@/Constant/Custom-Color";
import { forgotPasswordStaticData } from "@/Content";
import { CButton, CInput } from "@/Shared";
import Link from "next/link";
import { FormEvent } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import ForgotPasswordSvg from "../svgComponents/ForgotPasswordSvg";

const ForgotPassword = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section className="container-lg mx-auto h-screen flex md:block justify-center items-center">
      <div className="flex justify-center items-center text-sm text-gray-600 dark:text-white">
        <div className="w-full md:w-1/3 md:flex justify-center items-center bg-white dark:bg-transparent">
          <div className="px-6 lg:px-14">
            <h1 className="text-3xl font-bold mb-8">
              {forgotPasswordStaticData?.title1}
            </h1>
            <p className="text-justify">
              {forgotPasswordStaticData?.description}
            </p>
            {/* dashed line */}
            <div className="border-[0.0925rem] border-dashed mt-6"></div>
            {/* input section */}
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center mt-6">
                <h1 className="text-md font-bold my-1 ">
                  {forgotPasswordStaticData?.title2}
                </h1>
                <BsQuestionCircleFill color={teal} className="cursor-pointer" />
              </div>
              <CInput type="text" placeholder="Email/Phone" />
              {/* dashed line */}
              <div className="border-[0.0925rem] border-dashed my-6"></div>
              {/* button*/}
              <Link href={"/changePassword"}>
                <div className="flex justify-between items-center gap-1 w-full text-[0.8125rem]">
                  <CButton
                    type="submit"
                    variant="solid"
                    color={teal}
                    fullWidth
                    btnTitle={forgotPasswordStaticData?.button1}
                  />
                </div>
              </Link>
            </form>
            {/* customer support part */}
            <div className="flex flex-col justify-center items-center mt-8">
              <p className="">{forgotPasswordStaticData?.title3}</p>
              <Link href={"/signup"}>
                <p className="text-button-teal my-1 cursor-pointer">
                  {forgotPasswordStaticData?.link1}
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="dark:relative bg-gray-200 dark:bg-transparent hidden md:block w-2/3 md:justify-center md:items-center">
          <div className="h-full">
            <ForgotPasswordSvg />
          </div>

          {/* left blur */}
          <div className="hidden dark:block dark:absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px] z-10"></div>
          {/* right blur */}
          <div className="hidden dark:block dark:absolute top-0 right-0 w-64 h-64 rounded-full bg-custom-orange opacity-40 blur-[100px] z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
