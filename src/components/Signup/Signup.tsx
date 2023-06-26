import { teal } from "@/Constant/Custom-Color";
import { CButton, CInput, SelectField } from "@/Shared";
import React from "react";
import { BsFillPersonFill, BsQuestionCircleFill } from "react-icons/bs";
import RegisterSvg from "../svgComponents/RegisterSvg";

const Signup = () => {
  return (
    <section className="container-lg mx-auto">
      <div className="h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full">
          {/* input section */}
          <div className="col-span-1 md:col-span-2 p-6 text-sm text-gray-600">
            {/* already a member? section */}
            <div className="flex justify-end">
              <div className="flex items-center gap-1 mb-4 cursor-pointer">
                <p className="text-button-teal">Already a member?</p>
                <BsFillPersonFill color={teal} />
              </div>
            </div>
            {/* title and description */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-6/12">
                <h1 className="text-3xl font-bold text-gray-600">
                  Input your <br /> information
                </h1>
              </div>
              <div className="w-full md:w-6/12">
                <p className="text-grey-600">
                  We need you to help us with some basic information for your
                  account creation. Here are our{" "}
                  <span className="text-button-teal cursor-pointer">
                    terms and conditins
                  </span>
                  . Please read them carefully. We are GDRP compliiant
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
                      <label htmlFor="name">Name</label>
                      <BsQuestionCircleFill
                        color={teal}
                        className="cursor-pointer"
                      />
                    </div>
                    <CInput type="text" placeholder="Name" id="name" />
                  </div>
                  {/* address */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="address">Address</label>
                      <BsQuestionCircleFill
                        color={teal}
                        className="cursor-pointer"
                      />
                    </div>
                    <CInput type="text" placeholder="Address" id="address" />
                  </div>
                  {/* phone number */}
                  <div className="mb-2 md:mb-0">
                    <div className="flex justify-between items-center">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <BsQuestionCircleFill
                        color={teal}
                        className="cursor-pointer"
                      />
                    </div>
                    <CInput
                      type="text"
                      placeholder="+88 0000"
                      id="phoneNumber"
                    />
                  </div>
                </div>
                {/* last name,email and phone number(optional) */}
                <div className="w-full md:w-6/12">
                  {/* last name */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="lastName">Last Name</label>
                      <BsQuestionCircleFill
                        color={teal}
                        className="cursor-pointer"
                      />
                    </div>
                    <CInput type="text" placeholder="Last Name" id="lastName" />
                  </div>
                  {/* email */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <label htmlFor="email">Email</label>
                      <BsQuestionCircleFill
                        color={teal}
                        className="cursor-pointer"
                      />
                    </div>
                    <CInput type="email" placeholder="Email" id="email" />
                  </div>
                  {/* phone number(optional)*/}
                  <div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="phoneNumberOptional">
                        Phone Number (Optional)
                      </label>
                      <BsQuestionCircleFill
                        color={teal}
                        className="cursor-pointer"
                      />
                    </div>
                    <CInput
                      type="text"
                      placeholder="+88 0000"
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
                      <label htmlFor="password">Password</label>
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
                      <label htmlFor="confirmPassword">Confirm Password</label>
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
                  <p className="mt-2">
                    I agree with{" "}
                    <span className="text-button-teal cursor-pointer">
                      terms and conditions
                    </span>
                    .
                  </p>
                </div>
                <CButton
                  type="submit"
                  variant="solid"
                  btnTitle="Register"
                  color={teal}
                />
              </div>
            </form>
          </div>
          {/* image section */}
          <div className="hidden md:block md:col-span-1">
            <div className="relative">
              <div className="h-full bg-gray-200 absolute left-0 bottom-0 right-0">
                <RegisterSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
