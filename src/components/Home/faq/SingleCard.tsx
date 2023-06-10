'use client';
import React from "react";

interface item {
    id: number;
    question: string;
    answer: string;
}

export default function SingleCard({ question, answer, id }: item) {
    const [isActive, setIsActive] = React.useState(false);
    return <div>
        <div
            className=" py-4"
            data-aos={id % 2 === 0 ? "fade-right" : "fade-left"}

        >
            <div
                className="dark:bg-[#222222] bg-white rounded-[10px] p-4 hover:cursor-pointer shadow-lg shadow-[#00000014]"
                onClick={() => setIsActive(!isActive)}
            >
                <div className="px-4">
                    <div
                        className="flex justify-between items-center gap-4"
                    >
                        <h1
                            className="dark:text-[#FFFFFF] text-[#181818] text-xl font-semibold  py-2"
                        >
                            {question}
                        </h1>
                        <div
                        >

                            {
                                !isActive ? (
                                    <svg
                                        width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.375 14H23.625" stroke="#FFA000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 4.375V23.625" stroke="#FFA000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                ) : (
                                    <svg
                                        width="24" height="4" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.375 2H21.625" stroke="#FFA000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )
                            }
                        </div>
                    </div>
                    {
                        isActive && <p
                            className="text-[#181818CC] dark:text-[#DFDFDF] font-normal text-base"
                        >
                            {answer}
                        </p>
                    }
                </div>
            </div>

        </div>
    </div>;
}
