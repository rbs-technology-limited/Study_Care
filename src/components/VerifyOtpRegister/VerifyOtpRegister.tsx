"use client";

import { teal } from "@/Constant/Custom-Color";
import { verifyOtpData } from "@/Content";
import { CButton, CInput } from "@/Shared";
import Link from "next/link";
import { FormEvent } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import VerifyOtpSvg from "../svgComponents/VerifyOtpSvg";

const VerifyOtpRegister = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="container-lg mx-auto h-screen flex md:block justify-center items-center">
      <div className="flex justify-center items-center text-sm text-gray-600 dark:text-white">
        <div className="w-full md:w-1/3 md:flex justify-center items-center bg-white dark:bg-transparent">
          <div className="px-6 lg:px-14">
            <h1 className=" text-2xl xl:text-3xl font-bold mb-8">
              {verifyOtpData?.title1}
            </h1>
            <p className="text-justify">{verifyOtpData?.description}</p>
            {/* dashed line */}
            <div className="border-[0.0925rem] border-dashed my-4 md:my-2 lg:my-3 xl:my-6"></div>
            {/* input section */}
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center">
                <label htmlFor="email" className=" font-bold my-1 ">
                  {verifyOtpData?.email}
                </label>
                <BsQuestionCircleFill color={teal} className="cursor-pointer" />
              </div>
              <CInput type="text" placeholder="Email" id="email" />
              <div className="flex justify-between items-center ">
                <label htmlFor="otp" className="font-bold my-1 ">
                  {verifyOtpData?.otp}
                </label>
                <BsQuestionCircleFill color={teal} className="cursor-pointer" />
              </div>
              <CInput type="text" placeholder="Enter your OTP here" id="otp" />
              {/* dashed line */}
              <div className="border-[0.0925rem] border-dashed my-4 md:my-2 lg:my-3 xl:my-6"></div>
              {/* button*/}
              <Link href={"/successRegister"}>
                <div className="flex justify-between items-center gap-1 w-full text-[0.8125rem]">
                  <CButton
                    type="submit"
                    variant="solid"
                    color={teal}
                    fullWidth
                    btnTitle={verifyOtpData?.button1}
                  />
                </div>
              </Link>
            </form>
            {/* customer support part */}
            <div className="flex flex-col justify-center items-center mt-5 xl:mt-8">
              <p className="">{verifyOtpData?.title3}</p>
              <Link href={"/signup"}>
                <p className="text-button-teal my-1 cursor-pointer">
                  {verifyOtpData?.link1}
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="dark:relative bg-gray-200 dark:bg-transparent hidden md:block w-2/3 md:justify-center md:items-center">
          <div className="h-full">
            <VerifyOtpSvg />
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

export default VerifyOtpRegister;
