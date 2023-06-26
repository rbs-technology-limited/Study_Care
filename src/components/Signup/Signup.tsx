"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton, CInput, SelectField } from "@/Shared";
import React from "react";
import { BsFillPersonFill, BsQuestionCircleFill } from "react-icons/bs";
import RegisterSvg from "../svgComponents/RegisterSvg";
import { useRouter } from "next/navigation";
import { signupStaticData } from "@/Content";

const Signup = () => {
  const router = useRouter();
  return (
    <section className="container-md mx-auto">
      <div className="h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full justify-center items-center">
          {/* input section */}
          <div className="col-span-1 md:col-span-2 p-6 text-sm text-gray-600">
            {/* already a member? section */}
            <div className="flex justify-end">
              <div
                className="flex items-center gap-1 mb-4 cursor-pointer"
                onClick={() => router.push("/login")}
              >
                <p className="text-button-teal">
                  {signupStaticData?.loginLink}
                </p>
                <BsFillPersonFill color={teal} />
              </div>
            </div>
            {/* title and description */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-6/12">
                <h1 className="text-3xl font-bold text-gray-600">
                  {signupStaticData?.primary_title1}{" "}
                  {signupStaticData?.primary_title2}
                </h1>
              </div>
              <div className="w-full md:w-6/12">
                <p className="text-grey-600">
                  {signupStaticData?.description1}{" "}
                  <span className="text-button-teal cursor-pointer">
                    {signupStaticData?.terms}
                  </span>
                  . {signupStaticData?.description2}
                </p>
              </div>
            </div>
            {/* dashed line */}
            <div className="border-[0.0925rem] border-dashed my-3"></div>
            {/* input section */}
            <form>
              <div className="flex flex-col md:flex-row md:gap-6 items-center">
                <div className="w-full md:w-6/12">
                  {/* name */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="name">
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
                      id="name"
                    />
                  </div>
                  {/* address */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="address">
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
                    />
                  </div>
                  {/* phone number */}
                  <div className="mb-2 md:mb-0">
                    <div className="flex justify-between items-center">
                      <label htmlFor="phoneNumber">
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
                    />
                  </div>
                </div>
                {/* last name,email and phone number(optional) */}
                <div className="w-full md:w-6/12">
                  {/* last name */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="lastName">
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
                    />
                  </div>
                  {/* email */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="email">
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
                    />
                  </div>
                  {/* phone number(optional)*/}
                  <div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="phoneNumberOptional">
                        {
                          signupStaticData?.inputDetails?.phoneNumberOptional
                            ?.title
                        }
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
                    />
                  </div>
                </div>
              </div>
              {/* dashed line */}
              <div className="border-[0.0925rem] border-dashed my-3"></div>
              {/* password and confirm password section */}
              <div className="flex flex-col md:flex-row md:gap-6 items-center">
                <div className="w-full md:w-6/12">
                  {/* password */}
                  <div className="mb-2 md:mb-0">
                    <div className="flex justify-between items-center">
                      <label htmlFor="password">
                        {signupStaticData?.inputDetails?.password?.title}
                      </label>
                      <BsQuestionCircleFill
                        color={teal}
                        className="cursor-pointer"
                      />
                    </div>
                    <CInput type="password" id="password" />
                  </div>
                </div>
                <div className="w-full md:w-6/12">
                  {/* confirm password */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="confirmPassword">
                        {signupStaticData?.inputDetails?.confirmPassword?.title}
                      </label>
                      <BsQuestionCircleFill
                        color={teal}
                        className="cursor-pointer"
                      />
                    </div>
                    <CInput type="password" id="confirmPassword" />
                  </div>
                </div>
              </div>
              {/* dashed line */}
              <div className="border-[0.0925rem] border-dashed my-3"></div>

              {/* terms and condition , Register */}
              <div className="flex justify-between items-center mb-3">
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
                <CButton
                  type="submit"
                  variant="solid"
                  btnTitle={signupStaticData?.button}
                  color={teal}
                />
              </div>
            </form>
          </div>
          {/* image section */}
          <div className="hidden h-full md:block md:col-span-1 bg-gray-200">
            <RegisterSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
