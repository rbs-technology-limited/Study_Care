import { orange } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import Image from "next/image";
import AboutImage from "public/Asset/svg/About.svg";

const HomeAbout = () => {
  return (
    <main>
      <section className="container mx-auto py-20 md:px-4 lg:px-8 ">
        <section
          // linear-gradient(to right top, #213f43, #20333c, #202730, #1d1c23, #161316, #39202740, #81413650);
          className="flex flex-col lg:flex-row justify-between items-center mx-auto md:p-24 p-10 rounded-xl shadow-md
          dark:bg-[linear-gradient(to_right_top,#213f43,#20333c,#202730,#1d1c23,#161316,#39202740,#81413650)]
          bg-[linear-gradient(to_right_top,#00BCD460,#fff,#fff,#fff,#fff,#fff,#e89f2950)]
        "
          // style={{
          //   background: `linear-gradient(to right top, #213f43, #20333c, #202730, #1d1c23, #161316, #39202740, #81413650);`,
          // }}
        >
          <Image
            src={AboutImage}
            alt="Hero Image"
            width={300}
            height={350}
            className="object-contain object-center transform scale-60 w-full lg:w-1/2"
          />

          <div
            className="flex flex-col justify-center
            text-center lg:text-left
          w-full lg:w-1/2
          "
          >
            <h1 className="text-xl font-bold text-left md:text-3xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600 font-bold dark:from-orange-300 dark:to-purple-400">
                About Us
              </span>
            </h1>
            <p className="text-left text-sm text-stone-500 dark:text-stone-300 mt-6">
              Aliquam gravida quam dui, venenatis suscipit erat dapibus eu.
              Donec non libero ultricies Cras convallis lacus orci. Tristique
              tincidunt magna consequat in.
            </p>
            <p className="text-left text-sm text-stone-500 dark:text-stone-300 my-3">
              In vel pulvinar est, at euismod libero. Quisque ut metus sit amet
              augue rutrum feugiat.
            </p>

            <div>
              <CButton
                type="button"
                textUpperCased
                variant="solid"
                color={orange}
              >
                Join Now
              </CButton>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default HomeAbout;
