// import ArrowLeft from '../../../../public/Asset/svg/ArrowLeft';
// import ArrowRight from '../../../../public/Asset/svg/ArrowRight';
import Image from "next/image";

import line from '../../../../public/Asset/image/line.svg';

export default function Workflow() {
    const workflowData = [
        {
            id: 1,
            title: 'Career Counselling',
        },
        {
            id: 2,
            title: 'University Selection',
        },
        {
            id: 3,
            title: 'Application Process',
        },
        {
            id: 4,
            title: 'Class Schedule'
        },
        {
            id: 5,
            title: 'SSC Special Classes'
        },
        {
            id: 6,
            title: 'Doubt Clearing Sessions'
        },
        {
            id: 7,
            title: 'Mock Tests'
        },
        {
            id: 8,
            title: 'Parent Teacher Meeting'
        },
        {
            id: 9,
            title: 'Progress Report'
        },
        {
            id: 10,
            title: 'Feedback'
        }
    ]
    return (
        <section
            className="position-relative z-10 overflow-hidden bg-[#141414] "
        >
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[#E4E4E7] text-3xl font-bold text-center">
                        Whatever you get with us
                    </h2>
                    <Image
                        src={line}
                        alt="line"
                        width={152}
                        height={13}
                    />
                </div>
                <p
                    className="text-[DFDFDF] text-center text-base font-normal py-4"
                >
                    WeCare Education offers a comprehensive range of services, from admissions support <br /> to visa assistance, to ensure a smooth and stress-free application <br />
                    process for our students.
                </p>
            </div>
            <div className='flex flex-wrap gap-4  justify-center items-center px-4'>
                {
                    workflowData.map((item, index) => (
                        <div

                            key={index}
                            className="flex flex-col justify-center items-center py-4"
                        >
                            <div
                                className="flex justify-center items-center bg-[#1D1D1D] rounded-lg p-4 border-solid border-2 border-sky-500 hover:border-green-400 hover:cursor-pointer"
                            >
                                <h1
                                    className="text-[#E4E4E7] text-[1.1rem] font-semibold text-center px-4 py-2"
                                >
                                    {item.title}
                                </h1>
                            </div>

                        </div>
                    ))
                }
            </div>

        </section>
    )
}