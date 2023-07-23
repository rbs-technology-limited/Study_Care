"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton, CInput, SelectField, cToastify } from "@/Shared";
import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { loginStaticData } from "@/Content";
import LoginSvg from "../svgComponents/LoginSvg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/Redux/store";
import { getLoginInfo } from "@/Redux/features/Auth/auth-slice";
import { handleLogin } from "@/API_CALL/PostData/Login/Login";
import { useRouter } from "next/navigation";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loginDetails = useAppSelector((state) => state.authSlice.loginDetails);
  const isLoading = useAppSelector((state) => state.authSlice.isLoading);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = loginDetails?.username;
    const password = loginDetails?.password;
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    // console.log(data);
    const resultAction = await dispatch(handleLogin(formData));
    const { requestStatus, arg } = resultAction.meta;
    if (requestStatus === "fulfilled") {
      cToastify({
        type: "success",
        message: "Login Successful",
      });
      // router.push("/");
    }
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
              <CInput
                type="text"
                placeholder="Email/Phone"
                required
                onChange={(e: any) =>
                  dispatch(getLoginInfo({ username: e.target.value }))
                }
              />
              <CInput
                type="password"
                placeholder="Password"
                required
                onChange={(e: any) =>
                  dispatch(getLoginInfo({ password: e.target.value }))
                }
              />

              <Link href={"/forgotPassword"}>
                <p className="text-button-teal my-1 cursor-pointer">
                  {loginStaticData?.link1}
                </p>
              </Link>
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
                  loading={isLoading}
                />
              </div>
            </form>
            {/* don't have an account and register */}
            <div className="flex flex-col justify-center items-center mt-8">
              <p className="">{`Don't have an account yet?`}</p>
              <Link href={"/signup"}>
                <p className="text-button-teal my-1 cursor-pointer">
                  {loginStaticData?.link2}
                </p>
              </Link>
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
