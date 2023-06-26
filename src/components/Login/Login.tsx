"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton, CInput, SelectField } from "@/Shared";
import Image from "next/image";
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
    <section className="container-lg mx-auto">
      <div className="h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full">
          <div className="col-span-1">
            <div className=" bg-white">
              <div className="px-6 lg:px-14 pt-8">
                <h1 className="text-3xl dark:text-white font-bold mb-8">
                  {loginStaticData?.title1}
                </h1>
                <p className="text-md text-gray-600">
                  {loginStaticData?.description}
                </p>
                {/* dashed line */}
                <div className="border-[0.0925rem] border-dashed mt-8"></div>
                {/* input section */}
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-between items-center mt-8">
                    <h1 className="text-md font-bold my-1 ">
                      {loginStaticData?.title2}
                    </h1>
                    <BsQuestionCircleFill
                      color={teal}
                      className="cursor-pointer"
                    />
                  </div>
                  <CInput type="email" placeholder="Email" />
                  <CInput type="password" placeholder="Password" />

                  <p className="text-button-teal my-1 cursor-pointer">
                    {loginStaticData?.link1}
                  </p>
                  {/* dashed line */}
                  <div className="border-[0.0925rem] border-dashed my-8"></div>
                  {/* button and remember me */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <SelectField type="checkbox" pl="0" />
                      <p className="mt-2 text-gray-600 cursor-pointer">
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
                <div className="flex flex-col justify-center items-center mt-12">
                  <p className="text-gray-600">{`Don't have an account yet?`}</p>
                  <p
                    className="text-button-teal my-1 cursor-pointer"
                    onClick={() => router.push("/signup")}
                  >
                    {loginStaticData?.link2}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* image section */}

          <div className="hidden md:block md:col-span-1 lg:col-span-2">
            <div className="bg-gray-200 h-full">
              <LoginSvg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
