import Image from "next/image";
import arrow from "../../../../public/Asset/image/ArrowRighticon.svg";
import line from "../../../../public/Asset/image/line.svg";
import SingleCard from "./SingleCard";
import { faqContent, questionsData } from "@/Content";

export default function Faq() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#F3FCFD] dark:bg-[#141414] py-12 ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="dark:text-[#E4E4E7] text-gray-900 text-3xl font-bold text-center">
            {faqContent.title}
          </h2>
          <Image src={line} alt="line" width={152} height={13} />
        </div>
        <p className="dark:text-[#DFDFDF] text-[#363636] text-center text-base font-normal py-4">
          {faqContent.description}
        </p>
        <div className="flex justify-center items-center gap-2">
          <a
            href="#"
            className="w-fit flex justify-center items-center gap-2 dark:text-[#00A6C0] text-[#363636] text-center text-base font-normal py-4"
          >
            {faqContent.button1}
            <span>
              <Image
                src={arrow}
                alt="About img"
                width={20}
                height={20}
                className="object-cover object-center  "
              />
            </span>
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-4  justify-center px-4">
          {questionsData?.map((item, index) => (
            <SingleCard
              key={index}
              question={item.question}
              answer={item.answer}
              id={item.id}
            />
          ))}
        </div>
      </div>

      {/* left blur */}
      <div className="absolute  top-0 right-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px]   z-10"></div>
      {/* right blur */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#FBC131] opacity-40 blur-[100px]  z-10"></div>
    </section>
  );
}
