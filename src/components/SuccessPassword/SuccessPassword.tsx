import React from "react";
import { passwordSuccessStaticData } from "@/Content";
import { CButton } from "@/Shared";
import SuccessPasswordSvg from "../svgComponents/SuccessPasswordSvg";
import SuccessPasswordSvg2 from "../svgComponents/SuccessPasswordSvg2";
import { teal } from "@/Constant/Custom-Color";

const SuccessPassword = () => {
  return (
    <section className="container-lg relative mx-auto overflow-hidden">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">
          {passwordSuccessStaticData.title}
        </h1>
        <p className="w-3/4 md:w-1/2 my-6 text-center">
          {passwordSuccessStaticData.message1}
        </p>

        <CButton
          variant="solid"
          color={teal}
          btnTitle={passwordSuccessStaticData.button}
        />
      </div>

      <div className="flex">
        <div className="none lg:absolute left-[-170px] bottom-[-60px] ">
          <SuccessPasswordSvg />
        </div>

        <div className="none lg:absolute right-[-150px] bottom-0 ">
          <SuccessPasswordSvg2 />
        </div>
      </div>
      {/* left blur */}
      <div className="hidden dark:block dark:absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px] z-10"></div>
      {/* right blur */}
      <div className="hidden dark:block dark:absolute top-0 right-0 w-64 h-64 rounded-full bg-custom-orange opacity-40 blur-[100px] z-10"></div>
    </section>
  );
};

export default SuccessPassword;
