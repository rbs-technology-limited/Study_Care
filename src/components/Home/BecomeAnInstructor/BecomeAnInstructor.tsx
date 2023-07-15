import { teal } from "@/Constant/Custom-Color";
import { becomeAnInstructorData } from "@/Content";
import { CButton } from "@/Shared";
import Image from "next/image";
import Link from "next/link";
import line from "public/Asset/image/line.svg";
import demoInstructorImage from "public/Asset/svg/becomeAnInstructor/instructor.svg";

const BecomeAnInstructor = () => {
  return (
    <section className="pt-12 pb-20">
      <div className=" container mx-auto px-4 py-8 justify-center items-center flex ">
        <div className="inline-block md:w-[80%] justify-center items-center ">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex flex-col justify-center mb-6">
                <h1 className="md:text-3xl text-2xl font-bold">
                  {becomeAnInstructorData?.title}
                </h1>
                <Image src={line} alt="line" width={152} height={13} />
              </div>
              <p className="text-sm md:text-xl mb-6">
                {becomeAnInstructorData?.description}
              </p>
              <Link href={"/teacherRegistration"}>
                <CButton color={teal} variant="outline">
                  {becomeAnInstructorData?.buttonText}
                </CButton>
              </Link>
            </div>
            <div className="relative" data-aos="fade-left">
              <Image
                src={demoInstructorImage}
                alt="instructor image"
                height={500}
                width={500}
                className="object-center object-cover rounded-xl shadow-xl  transform hover:scale-105 transition-all duration-300"
              />
              {/* left blur */}
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px] z-10"></div>
              {/* right blur */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FBC131] opacity-40 blur-[100px] z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAnInstructor;
