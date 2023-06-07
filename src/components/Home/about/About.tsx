import { orange } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import Image from "next/image";
import aboutImg from "public/Asset/image/about/About.svg";
import line from "public/Asset/image/line.svg";

export default function About() {
  return (
    <div className=" container mx-auto px-4 py-8  justify-center items-center flex ">
      <div className="inline-block md:w-[80%]  relative  dark:bg-black bg-white rounded-2xl justify-center items-center overflow-hidden">
        <div className="md:flex  gap-4 justify-center items-center py-6">
          {/* image section */}

          <div
          //  className="flex justify-center items-center sm:w-1/2 "
          >
            <Image
              src={aboutImg}
              alt="About img"
              width={630}
              height={350}
              className="object-contain object-center transform scale-60 w-full "
            />
          </div>
          {/* text section */}
          <div className="px-2">
            <div className="sm:hidden md:block">
              <h2 className="dark:text-white text-gray-900 md:text-3xl text-2xl font-bold ">
                About Us
              </h2>
              <Image src={line} alt="line" width={152} height={13} />
            </div>
            <div className="sm:flex md:block flex-col justify-center items-center ">
              <p className="dark:text-stone-200 text-stone-500 text-sm md:text-xl font-normal py-4 sm:text-center md:text-left">
                Aliquam gravida quam dui, venenatis suscipit erat dapibus eu.
                Donec non libero ultricies Cras convallis lacus orci. <br />{" "}
                <br />
                Tristique tincidunt magna consequat in. In vel pulvinar est, at
                euismod libero. Quisque ut metus sit amet augue rutrum feugiat.
              </p>
              <CButton variant="solid" color={orange} textUpperCased>
                About Us More
              </CButton>
            </div>
          </div>
        </div>
        {/* left blur */}
        <div className="absolute bottom-[-5rem] left-[-2rem] w-52 h-52 rounded-full bg-button-teal opacity-40 blur-[100px] z-10"></div>
        {/* right blur */}
        <div className="absolute top-[-5rem] right-[-2rem] w-52 h-52 rounded-full bg-custom-orange opacity-40 blur-[150px] z-10"></div>
      </div>
    </div>
  );
}
