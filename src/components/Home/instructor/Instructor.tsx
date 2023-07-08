import { orange } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import Image from "next/image";
import line from "../../../../public/Asset/image/line.svg";
import SingleCard from "./SingleCard";
import { instructorContent, instructorsData } from "@/Content";
import Link from "next/link";

export default function Instructor() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#F3FCFD] dark:bg-[#141414] py-12 ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="dark:text-[#E4E4E7] text-gray-900 md:text-3xl text-2xl  font-bold text-center">
            {instructorContent.section_title}
          </h2>
          <Image src={line} alt="line" width={152} height={13} />
        </div>
        <p className="dark:text-[#DFDFDF] text-[#363636] text-center text-base font-normal py-4">
          {instructorContent.section_description}
        </p>

        <div className="w-[80%] mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  justify-center px-4">
            {instructorsData?.map((item) => (
              <SingleCard
                key={item.id}
                name={item.name}
                designation={item.designation}
                image={item.image}
                id={item.id}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <Link href="/allTeacher">
            <CButton variant="outline" color={orange} textUpperCased>
              {instructorContent.button1}
            </CButton>
          </Link>
        </div>
      </div>

      {/* left blur */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px]   z-10"></div>
      {/* right blur */}
      <div className="absolute  top-0 right-0 w-64 h-64 rounded-full bg-[#FBC131] opacity-40 blur-[100px]  z-10"></div>
    </section>
  );
}
