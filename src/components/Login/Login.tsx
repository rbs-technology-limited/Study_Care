"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton, CInput, SelectField } from "@/Shared";
import React, { FormEvent } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { loginStaticData } from "@/Content";
import LoginSvg from "../svgComponents/LoginSvg";
import { useRouter } from "next/navigation";

const Login = () => {
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
            <h1 className="text-3xl font-bold mb-8">
              {loginStaticData?.title1}
            </h1>
            <p className="">{loginStaticData?.description}</p>
            {/* dashed line */}
            <div className="border-[0.0925rem] border-dashed mt-6"></div>
            {/* input section */}
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center mt-6">
                <h1 className="text-md font-bold my-1 ">
                  {loginStaticData?.title2}
                </h1>
                <BsQuestionCircleFill color={teal} className="cursor-pointer" />
              </div>
              <CInput type="text" placeholder="Email/Phone" />
              <CInput type="password" placeholder="Password" />

              <p
                className="text-button-teal my-1 cursor-pointer"
                onClick={() => {
                  router.push("/forgotPassword");
                }}
              >
                {loginStaticData?.link1}
              </p>
              {/* dashed line */}
              <div className="border-[0.0925rem] border-dashed my-6"></div>
              {/* button and remember me */}
              <div className="flex justify-between items-center gap-1">
                <div className="flex gap-1 items-center">
                  <SelectField type="checkbox" pl="0" />
                  <p className="mt-2 cursor-pointer">
                    {loginStaticData?.title3}
                  </p>
                </div>
                <CButton
                  type="submit"
                  variant="solid"
                  color={teal}
                  btnTitle="Log in"
                />
              </div>
            </form>
            {/* don't have an account and register */}
            <div className="flex flex-col justify-center items-center mt-8">
              <p className="">{`Don't have an account yet?`}</p>
              <p
                className="text-button-teal my-1 cursor-pointer"
                onClick={() => router.push("/signup")}
              >
                {loginStaticData?.link2}
              </p>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="dark:relative bg-gray-200 dark:bg-transparent hidden md:block w-2/3 md:justify-center md:items-center">
          <div className="h-full">
            <LoginSvg />
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

export default Login;
