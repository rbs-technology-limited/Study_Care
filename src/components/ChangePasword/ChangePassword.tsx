"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton, CInput } from "@/Shared";
import React, { FormEvent } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { changePasswordStaticData } from "@/Content";
import { useRouter } from "next/navigation";
import ChangePasswordSvg from "../svgComponents/ChangePasswordSvg";

const ChangePassword = () => {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section className="container-lg mx-auto h-screen flex md:block justify-center items-center">
      <div className="flex justify-center items-center text-sm text-gray-600 dark:text-white">
        <div className="w-full md:w-1/3 md:flex justify-center items-center bg-white dark:bg-transparent">
          <div className="px-6 lg:px-14">
            <h1 className=" text-2xl xl:text-3xl font-bold mb-8">
              {changePasswordStaticData?.title1}
            </h1>
            <p className="text-justify">
              {changePasswordStaticData?.description}
            </p>
            {/* dashed line */}
            <div className="border-[0.0925rem] border-dashed my-4 md:my-2 lg:my-3 xl:my-6"></div>
            {/* input section */}
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center">
                <label htmlFor="newPassword" className=" font-bold my-1 ">
                  {changePasswordStaticData?.new_password_label}
                </label>
                <BsQuestionCircleFill color={teal} className="cursor-pointer" />
              </div>
              <CInput type="text" placeholder="Email/Phone" id="newPassword" />
              <div className="flex justify-between items-center ">
                <label htmlFor="confirmPassword" className="font-bold my-1 ">
                  {changePasswordStaticData?.confirm_password_label}
                </label>
                <BsQuestionCircleFill color={teal} className="cursor-pointer" />
              </div>
              <CInput
                type="text"
                placeholder="Email/Phone"
                id="confirmPassword"
              />
              {/* dashed line */}
              <div className="border-[0.0925rem] border-dashed my-4 md:my-2 lg:my-3 xl:my-6"></div>
              {/* button*/}
              <div className="flex justify-between items-center gap-1 w-full text-[0.8125rem]">
                <CButton
                  type="submit"
                  variant="solid"
                  color={teal}
                  fullWidth
                  btnTitle={changePasswordStaticData?.button1}
                />
              </div>
            </form>
            {/* customer support part */}
            <div className="flex flex-col justify-center items-center mt-5 xl:mt-8">
              <p className="">{changePasswordStaticData?.title3}</p>
              <p
                className="text-button-teal my-1 cursor-pointer"
                onClick={() => router.push("/signup")}
              >
                {changePasswordStaticData?.link1}
              </p>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="dark:relative bg-gray-200 dark:bg-transparent hidden md:block w-2/3 md:justify-center md:items-center">
          <div className="h-full">
            <ChangePasswordSvg />
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

export default ChangePassword;
