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
          <div>
            <Image
              src={demoInstructorImage}
              alt="instructor image"
              height={500}
              width={500}
              className="object-center object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAnInstructor;
