import { teal } from "@/Constant/Custom-Color";
import { registerSuccessStaticData } from "@/Content";
import { CButton } from "@/Shared";
import React from "react";
import SuccessSvg1 from "../svgComponents/SuccessSvg1";
import SuccessSvg2 from "../svgComponents/SuccesSvg2";

const SuccessRegister = () => {
  return (
    <section className="container-lg relative x-auto overflow-hidden">
      <div className="text-center h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">
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
        <div className="none lg:absolute left-[-150px] bottom-[-10px]">
          <SuccessSvg1 />
        </div>
        <div className="none lg:absolute right-[-105px] bottom-[-15px]">
          <SuccessSvg2 />
        </div>
      </div>
    </section>
  );
};

export default SuccessRegister;
