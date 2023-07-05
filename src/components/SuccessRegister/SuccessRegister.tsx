import { teal } from "@/Constant/Custom-Color";
import { registerSuccessStaticData } from "@/Content";
import { CButton } from "@/Shared";
import React from "react";
import SuccessSvg1 from "../svgComponents/SuccessSvg1";
import SuccessSvg2 from "../svgComponents/SuccesSvg2";

const SuccessRegister = () => {
  return (
    <section className="container-lg relative x-auto overflow-hidden">
      <div className="dark:text-white text-center h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl dark:text-white font-bold">
          {registerSuccessStaticData.title}
        </h1>
        <p className="my-6 w-1/2">{registerSuccessStaticData.message1}</p>
        <p className="my-4 w-1/2">{registerSuccessStaticData.message2}</p>
        <CButton
          variant="solid"
          color={teal}
          btnTitle={registerSuccessStaticData.button}
        />
      </div>
      <div className="flex">
        <div className="none lg:absolute left-[-130px] xl:left-[-100px] bottom-[-10px]">
          <SuccessSvg1 />
        </div>
        <div className="none lg:absolute lg:right-[-135px] xl:right-[-105px] bottom-[-15px]">
          <SuccessSvg2 />
        </div>
      </div>

      {/* left blur */}
      <div className="hidden dark:block dark:absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px] z-10"></div>
      {/* right blur */}
      <div className="hidden dark:block dark:absolute top-0 right-0 w-64 h-64 rounded-full bg-custom-orange opacity-40 blur-[100px] z-10"></div>
    </section>
  );
};

export default SuccessRegister;
