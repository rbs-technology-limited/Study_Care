"use client";
import { teal } from "@/Constant/Custom-Color";
import { signupStaticData } from "@/Content";
import { useRegisterMutation } from "@/Redux/features/registration/registrationSlice";
import { useAppSelector } from "@/Redux/store";
import { CButton, CInput, SelectField, cToastify } from "@/Shared";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BsFillPersonFill, BsQuestionCircleFill } from "react-icons/bs";
import RegisterSvg from "../svgComponents/RegisterSvg";

const Signup = () => {
  const { userDetails } = useAppSelector((state) => state.authSlice);
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [register, { isLoading, isError, isSuccess, error }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      cToastify({
        type: "success",
        message: "Account is created successfully.",
      });
    }
  }, [isSuccess, isError, error]);

  const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData();
    e.preventDefault();
    for (const key in details) {
      formData.append(key, details[key as keyof typeof details]);
    }
    try {
      const response = await register(formData).unwrap();
    } catch (error: FetchBaseQueryError | SerializedError | any) {
      cToastify({
        type: "error",
        message: error?.message,
      });
    }
  };

  return (
    <section className="container-md mx-auto h-screen">
      <div className="flex justify-center items-center text-[11px] lg:text-sm text-gray-600 dark:text-white">
        {/* input section */}
        <div className="w-full md:w-2/3 px-4 md:px-6 py-6 md:py-1">
          {/* already a member? section */}
          <div className="flex justify-end">
            <Link href={"/login"}>
              <div className="flex items-center gap-1 mb-4 cursor-pointer">
                <p className="text-button-teal">
                  {signupStaticData?.loginLink}
                </p>
                <BsFillPersonFill color={teal} />
              </div>
            </Link>
          </div>
          {/* title and description */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-6/12">
              <h1 className="text-3xl font-bold">
                {signupStaticData?.primary_title1}{" "}
                {signupStaticData?.primary_title2}
              </h1>
            </div>
            <div className="w-full md:w-6/12">
              <p>
                {signupStaticData?.description1}{" "}
                <span className="text-button-teal cursor-pointer">
                  {signupStaticData?.terms}
                </span>
                . {signupStaticData?.description2}
              </p>
            </div>
          </div>
          {/* dashed line */}
          <div className="border-[0.0925rem] border-dashed my-2 xl:my-4"></div>
          {/* input section */}
          <form onSubmit={handleRegisterSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* name */}
              <div className="">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="name"
                    className="my-2 md:my-0 lg:my-0 xl:my-1"
                  >
                    {signupStaticData?.inputDetails?.firstName?.title}
                  </label>
                  <BsQuestionCircleFill
                    color={teal}
                    className="cursor-pointer"
                  />
                </div>
                <CInput
                  type="text"
                  placeholder={
                    signupStaticData?.inputDetails?.firstName?.placeholder
                  }
                  mb="mb-0"
                  id="name"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setDetails({ ...details, username: e.target.value })
                  }
                />
                {isError && error!.data.username && (
                  <label htmlFor="" className="text-red-500 text-[0.625rem]">
                    {error!.data.username}
                  </label>
                )}
              </div>
              {/* last name */}
              <div className="">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="lastName"
                    className="my-1 md:my-0 lg:my-0 xl:my-1"
                  >
                    {signupStaticData?.inputDetails?.lastName?.title}
                  </label>
                  <BsQuestionCircleFill
                    color={teal}
                    className="cursor-pointer"
                  />
                </div>
                <CInput
                  type="text"
                  placeholder={
                    signupStaticData?.inputDetails?.lastName?.placeholder
                  }
                  id="lastName"
                  mb="mb-0"
                />
              </div>
              {/* email */}
              <div className="">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="email"
                    className="my-2 md:my-0 lg:my-0 xl:my-1"
                  >
                    {signupStaticData?.inputDetails?.email?.title}
                  </label>
                  <BsQuestionCircleFill
                    color={teal}
                    className="cursor-pointer"
                  />
                </div>
                <CInput
                  type="email"
                  placeholder={
                    signupStaticData?.inputDetails?.email?.placeholder
                  }
                  id="email"
                  mb="mb-0"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                />
                {isError && error!.data.email && (
                  <label htmlFor="" className="text-red-500 text-[0.625rem]">
                    {error!.data.email[0]}
                  </label>
                )}
              </div>
              {/* phone number */}
              <div className="">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="phoneNumber"
                    className="my-2 md:my-0 lg:my-0 xl:my-1"
                  >
                    {signupStaticData?.inputDetails?.phoneNumber?.title}
                  </label>
                  <BsQuestionCircleFill
                    color={teal}
                    className="cursor-pointer"
                  />
                </div>
                <CInput
                  type="text"
                  placeholder={
                    signupStaticData?.inputDetails?.phoneNumber?.placeholder
                  }
                  id="phoneNumber"
                  mb="mb-0"
                />
              </div>
              {/* phone number(optional)*/}
              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="phoneNumberOptional"
                    className="my-2 md:my-0 lg:my-0 xl:my-1"
                  >
                    {signupStaticData?.inputDetails?.phoneNumberOptional?.title}
                  </label>
                  <BsQuestionCircleFill
                    color={teal}
                    className="cursor-pointer"
                  />
                </div>
                <CInput
                  type="text"
                  placeholder={
                    signupStaticData?.inputDetails?.phoneNumberOptional
                      ?.placeholder
                  }
                  id="phoneNumberOptional"
                  mb="mb-0"
                />
              </div>
              {/* address */}
              <div className="">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="address"
                    className="my-2 md:my-0 lg:my-0 xl:my-1"
                  >
                    {signupStaticData?.inputDetails?.address?.title}
                  </label>
                  <BsQuestionCircleFill
                    color={teal}
                    className="cursor-pointer"
                  />
                </div>
                <CInput
                  type="text"
                  placeholder={
                    signupStaticData?.inputDetails?.address?.placeholder
                  }
                  id="address"
                  mb="mb-0"
                />
              </div>
            </div>
            {/* dashed line */}
            <div className="border-[0.0925rem] border-dashed my-2 xl:my-4"></div>
            {/* password and confirm password section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* password */}
              <div className="">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="my-1 md:my-0 lg:my-0 xl:my-1"
                  >
                    {signupStaticData?.inputDetails?.password?.title}
                  </label>
                  <BsQuestionCircleFill
                    color={teal}
                    className="cursor-pointer"
                  />
                </div>
                <CInput
                  type="password"
                  id="password"
                  mb="mb-0"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setDetails({ ...details, password1: e.target.value })
                  }
                />
                {isError && error!.data.non_field_errors && (
                  <label htmlFor="" className="text-red-500 text-[0.625rem]">
                    {error!.data.non_field_errors}
                  </label>
                )}
                {isError && error!.data.password1 && (
                  <label htmlFor="" className="text-red-500 text-[0.625rem]">
                    {error!.data.password1}
                  </label>
                )}
              </div>
              {/* confirm password */}
              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="confirmPassword"
                    className="my-1 md:my-0 lg:my-0 xl:my-1"
                  >
                    {signupStaticData?.inputDetails?.confirmPassword?.title}
                  </label>
                  <BsQuestionCircleFill
                    color={teal}
                    className="cursor-pointer"
                  />
                </div>
                <CInput
                  type="password"
                  id="confirmPassword"
                  mb="mb-0"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setDetails({ ...details, password2: e.target.value })
                  }
                />
                {isError && error!.data.non_field_errors && (
                  <label htmlFor="" className="text-red-500 text-[0.625rem]">
                    {error!.data.non_field_errors}
                  </label>
                )}
                {isError && error!.data.password1 && (
                  <label htmlFor="" className="text-red-500 text-[0.625rem]">
                    {error!.data.password1}
                  </label>
                )}
              </div>
            </div>
            {/* dashed line */}
            <div className="border-[0.0925rem] border-dashed my-2 xl:my-4"></div>
            {/* terms and condition , Register */}
            <div className="flex justify-between items-center">
              {/* terms and condition */}
              <div className="flex items-center gap-1">
                <SelectField type="checkbox" pl="0" />
                <p className="mt-2 text-[11px] md:text-sm">
                  {signupStaticData?.acceptTerms}{" "}
                  <span className=" text-button-teal cursor-pointer">
                    {signupStaticData?.terms}
                  </span>
                  .
                </p>
              </div>
              {isSuccess ? (
                <Link href={"/verify-otp"}>
                  <CButton
                    type="submit"
                    variant="solid"
                    btnTitle={signupStaticData?.button}
                    color={teal}
                    loading={isLoading}
                  />
                </Link>
              ) : (
                <CButton
                  type="submit"
                  variant="solid"
                  btnTitle={signupStaticData?.button}
                  color={teal}
                  loading={isLoading}
                />
              )}
            </div>
          </form>
        </div>
        {/* image section */}
        <div className="dark:relative w-1/3 hidden md:block bg-gray-200  dark:bg-transparent">
          <div className="h-full">
            <RegisterSvg />
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

export default Signup;
