import Image from "next/image";
import React from "react";
import HeroImage from "public/Asset/Hero_section_Logo.svg";
import Styles from "./Style/HeroSection.module.css";

const HeroSection = () => {
  return (
    <main className="relative py-20 mb-40">
      {/* //shape  */}
      <section
        className="bg-custom-teal h-[43.75rem] absolute top-[-6.125rem] right-[-1.5625rem] w-[100%] z-[-5]"
        style={{
          transform: "rotate(-10deg)",
          borderRadius: "5rem",
        }}
      />
        {/* //shape  */}

      <section className="container mx-auto px-4 py-8 mt-[2.1875rem]">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/2 justify-center items-center">
            <h1 className="text-4xl font-bold text-center md:text-left md:text-6xl">
              Study Care
            </h1>
            <p className="text-center md:text-left text-xl my-4">
              The best place to study online
            </p>
            <button className="bg-[#FFD600] text-black font-bold py-2 px-6 rounded-full">
              Get Started
            </button>
          </div>
          <div className="flex justify-center items-center md:w-1/2">
            <Image
              src={HeroImage}
              alt="Hero Image"
              width={300}
              height={350}
              className="object-cover object-center transform scale-60 md:scale-125"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
