import { CButton } from "@/Shared";
import React from "react";
import demoInstructorImage from "public/Asset/svg/becomeAnInstructor/instructor.svg";
import Image from "next/image";
import line from "public/Asset/image/line.svg";
import { teal } from "@/Constant/Custom-Color";

const BecomeAnInstructor = () => {
  return (
    <section className="pt-12 pb-20">
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row px-8 items-center gap-8">
          <div>
            <div className="flex flex-col justify-center mb-6">
              <h1 className="md:text-3xl text-2xl font-bold">টিচার হতে চান?</h1>
              <Image src={line} alt="line" width={152} height={13} />
            </div>
            <p className="text-sm md:text-xl mb-6">
              একজন প্রশিক্ষক হন এবং জীবন পরিবর্তন করুন — আপনার নিজের সহ।
            </p>
            <CButton color={teal} variant="outline">
              নিবন্ধন করুন
            </CButton>
          </div>
          <div className="relative">
            <Image
              src={demoInstructorImage}
              alt="instructor image"
              height={500}
              width={500}
              className="object-center object-cover"
            />
            {/* left blur */}
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px] z-10"></div>
            {/* right blur */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FBC131] opacity-40 blur-[100px] z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAnInstructor;
