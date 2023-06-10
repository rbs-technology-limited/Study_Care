'use client';
import { lightPurple } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import Image from "next/image";
import React from "react";

interface item {
    name: string;
    designation: string;
    image: string;
}

export default function SingleCard({ name, designation, image }: item) {
    const [isActive, setIsActive] = React.useState(false);
    return (
        <div
            //className="p-4 bg-[#ff0] rounded-2xl shadow-xl blur-[100px]"
            className="dark:bg-[#222222] bg-white rounded-2xl p-4  shadow-lg shadow-[#00000014]"

        >
            <div
                className="relative mx-auto w-24 h-24 rounded-full overflow-hidden"
            >
                <Image
                    src={image}
                    alt="instructor"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
            <div
                className="flex justify-between items-center gap-4 pt-4"
            >
                <div>
                    <p
                        className="dark:text-[#FFFFFF] text-[#181818] text-base  md:text-xl font-semibold  "
                    >
                        {name}
                    </p>
                    <p
                        className="text-[#181818CC] dark:text-[#DFDFDF] font-normal text-sm md:text-base"
                    >
                        @{designation}
                    </p>
                </div>
                <CButton variant="outline" color={lightPurple} textUpperCased>
                    Profile
                </CButton>

            </div>

        </div>
    )
}
