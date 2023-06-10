import { orange } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import Image from "next/image";
import line from '../../../../public/Asset/image/line.svg';
import SingleCard from "./SingleCard";

export default function Instructor() {
    const instructorData = {
        section_title: 'Our Instructors',
        section_description: 'Meet our best instructors who are always ready to help you',
        instructors: [
            {
                id: 1,
                name: "Mst Jannatul Ferdous",
                designation: 'Lecturer',
                image: 'https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=996&t=st=1686381934~exp=1686382534~hmac=bac8a4929dd9747dfc0887f5f956eebb176e76b4d56f26f3e88815a281b9c63f'
            },
            {
                id: 2,
                name: 'John Doe',
                designation: 'Lecturer',
                image: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1686385469~exp=1686386069~hmac=7cdac69d1e605ced7176f961c448e6da15240ded668504085c1a2a2d07e2377e',
            },
            {
                id: 3,
                name: 'John Noris',
                designation: 'Lecturer',
                image: 'https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?size=626&ext=jpg&ga=GA1.1.439512256.1684314487&semt=sph',

            },
            {
                id: 4,
                name: 'John Noris',
                designation: 'Lecturer',
                image: 'https://img.freepik.com/free-photo/woman-with-long-hair-white-top-is-standing-beach_1340-37514.jpg?size=626&ext=jpg&ga=GA1.2.439512256.1684314487&semt=sph'

            },
            {
                id: 5,
                name: 'John Noris',
                designation: 'Lecturer',
                image: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=740&t=st=1686385469~exp=1686386069~hmac=7cdac69d1e605ced7176f961c448e6da15240ded668504085c1a2a2d07e2377e',
            },
            {
                id: 6,
                name: "Mst Jannatul Ferdous",
                designation: 'Lecturer',
                image: 'https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=996&t=st=1686381934~exp=1686382534~hmac=bac8a4929dd9747dfc0887f5f956eebb176e76b4d56f26f3e88815a281b9c63f'

            }

        ]

    }

    return (
        <section
            className="relative z-10 overflow-hidden bg-[#F3FCFD] dark:bg-[#141414] py-12 "
        >
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="dark:text-[#E4E4E7] text-gray-900 md:text-3xl text-2xl  font-bold text-center">
                        {instructorData.section_title}
                    </h2>
                    <Image
                        src={line}
                        alt="line"
                        width={152}
                        height={13}
                    />
                </div>
                <p
                    className="dark:text-[#DFDFDF] text-[#363636] text-center text-base font-normal py-4"
                >
                    {instructorData.section_description}
                </p>

                <div
                    className="w-[80%] mx-auto relative z-10"
                >
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4  justify-center px-4' >
                        {
                            instructorData.instructors.map((item) => (
                                <SingleCard
                                    key={item.id}
                                    name={item.name}
                                    designation={item.designation}
                                    image={item.image}
                                    id={item.id}
                                />
                            ))
                        }
                    </div>
                </div>
                <div
                    className="flex justify-center items-center mt-8"
                >
                    <CButton variant="outline" color={orange} textUpperCased>
                        See more
                    </CButton>
                </div>
            </div>

            {/* left blur */}
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px]   z-10">
            </div>
            {/* right blur */}
            <div className="absolute  top-0 right-0 w-64 h-64 rounded-full bg-[#FBC131] opacity-40 blur-[100px]  z-10">
            </div>
        </section>
    )
}