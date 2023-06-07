import { teal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import Image from "next/image";
import aboutImg from '../../../../public/Asset/image/about/About.svg';
import line from '../../../../public/Asset/image/line.svg';

export default function About() {
    return (
        <div
            className=" container mx-auto px-4 py-8 bg-white justify-center items-center flex "

        >
            <div className="inline-block w-[80%]  relative z-10  bg-black  rounded-2xl justify-center items-center overflow-hidden">
                <div
                    className="md:flex  gap-4 justify-center items-center py-6"
                >
                    {/* image section */}

                    <div
                    //  className="flex justify-center items-center sm:w-1/2 "
                    >
                        <Image
                            src={aboutImg}
                            alt="About img"
                            width={630}
                            height={350}
                            className="object-cover object-center  "
                        />
                    </div>
                    {/* text section */}
                    <div className="px-2">
                        <div className="sm:hidden md:block">
                            <h2 className="text-white text-3xl font-bold ">
                                About Us
                            </h2>
                            <Image
                                src={line}
                                alt="line"
                                width={152}
                                height={13}
                            />
                        </div>
                        <div className="sm:flex md:block flex-col justify-center items-center ">
                            <p
                                className="text-[#e5e5e5] text-[1.1rem] font-normal  py-4 sm:text-center md:text-left"
                            >
                                Aliquam gravida quam dui, venenatis suscipit erat dapibus eu. Donec non libero ultricies  Cras convallis lacus orci. <br /> <br />

                                Tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.  Quisque ut metus sit amet augue rutrum feugiat.
                            </p>
                            <CButton variant="solid" color={teal} textUpperCased>
                                Download
                            </CButton>
                        </div>
                    </div>


                </div>
                {/* left blur */}
                <div className="absolute bottom-[-5rem] left-[-2rem] w-52 h-52 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px] z-10">
                </div>
                {/* right blur */}
                <div className="absolute top-[-5rem] right-[-2rem] w-52 h-52 rounded-full bg-[#FBC131] opacity-40 blur-[150px] z-10">
                </div>
            </div>
        </div>
    )
}
