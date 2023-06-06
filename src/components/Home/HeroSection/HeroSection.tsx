import Image from "next/image";
import React from "react";
import HeroImage from "public/Asset/Hero_section_Logo.svg";
import { CButton } from "@/Shared";
import { lightTeal, teal } from "@/Constant/Custom-Color";

const HERO_SECTION_BOTTOM = [
  {
    title: "Business Solutions",
    shortDescription: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Free Courses",
    shortDescription: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Tutoring",
    shortDescription: "Lorem ipsum dolor sit amet",
  },
];

const HeroSection = () => {
  return (
    <main className="relative py-20">
      {/* //shape  */}
      <section
        className="bg-custom-teal dark:bg-dark-teal h-[43.75rem] absolute top-[-6.125rem] right-[-1.5625rem] w-[100%] z-[-5]"
        style={{
          transform: "rotate(-10deg)",
          borderRadius: "5rem",
        }}
      />
      {/* //shape  */}

      <section className="container mx-auto px-4 lg:px-8 py-8 md:mt-[2.1875rem]">
        <section>
          <div className="flex flex-col md:flex-row md:justify-between items-center flex-col-reverse ">
            <div className="flex flex-col md:w-1/2 justify-center">
              <h1 className="text-2xl font-bold text-center md:text-left md:text-3xl dark:text-black">
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600 font-bold pr-2
              dark:from-orange-300 dark:to-purple-400
              "
                >
                  Study Care
                </span>
                To The Next Level
              </h1>
              <p
                className="text-center md:text-left text-xl text-stone-500 my-4
            dark:text-stone-300 
            "
              >
                The best place to study online
              </p>
              <section className="mt-4 flex justify-center md:justify-start">
                <CButton variant="text" color={lightTeal} textUpperCased>
                  More Info
                </CButton>
                <CButton variant="solid" color={teal} textUpperCased>
                  See Details
                </CButton>
              </section>
            </div>

            <div className="flex justify-center items-center md:w-1/3">
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

        <section>
          {/* //3 cards section here . middle card left ,right line  */}
          <div className="text-center mt-20">
            <div className="flex flex-col md:flex-row md:justify-between text-center items-center mb-4">
              {HERO_SECTION_BOTTOM.map((item, index) => (
                <div
                  key={index}
                  className={`md:w-1/3 mx-auto md:mx-0 md:mb-0 mb-4
                ${index === 1 ? "md:border-l md:border-r" : ""}

                `}
                >
                  <h1 className="text-xl font-bold text-center md:text-xl">
                    <span
                      className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600 font-bold
                    dark:from-orange-300 dark:to-purple-400
                    "
                    >
                      {item.title}
                    </span>
                  </h1>
                  <p
                    className="text-center text-sm text-stone-500
                dark:text-stone-300
                "
                  >
                    {item.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default HeroSection;