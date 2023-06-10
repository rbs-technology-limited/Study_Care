import Image from "next/image";
import arrow from '../../../../public/Asset/image/ArrowRighticon.svg';
import line from '../../../../public/Asset/image/line.svg';

interface Provider {
    id: number;
    question: string;
    answer: string;
}

export default function Faq() {
    let isAcive = false;
    // const [selected, setSelected] = useState<number | null>(null)
    const questions = [
        {
            id: 1,
            question: 'How does Safespace work?',
            answer: 'Safespace is an online platform that provides mental health support and resources to individuals.'
        },
        {
            id: 2,
            question: 'How do I get started?',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis doloribus minima temporibus mollitia voluptate obcaecati odio magni illo aliquid itaque.'
        }, {
            id: 3,
            question: 'Sed ut perspiciatis unde omnis iste natus error sit?',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, voluptatibus!'
        },
        {
            id: 4,
            question: 'Lorem ipsum dolor sit amet.',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, facilis.'
        },
        {
            id: 5,
            question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolor?'
        },
        {
            id: 6,
            question: 'Lorem ipsum dolor sit amet.',
            answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, odio blanditiis minus eligendi atque possimus.'
        }
    ]
    return (
        <section
            className="relative z-10 overflow-hidden bg-[#F3FCFD] dark:bg-[#141414] py-12 "
        >
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="dark:text-[#E4E4E7] text-gray-900 text-3xl font-bold text-center">
                        Frequently asked questions
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
                    Please contact Safespace team for any questions you may have.
                </p>
                <a href="#"
                    className="flex justify-center items-center gap-2 dark:text-[#00A6C0] text-[#363636] text-center text-base font-normal py-4"
                >Read more FAQ
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
                <div className='grid md:grid-cols-2 gap-4  justify-center  px-4'>
                    {
                        questions.map((item, index) => (
                            <div

                                key={index}
                                className=" py-4"
                            >
                                <div
                                    className="dark:bg-[#222222] bg-white rounded-[10px] p-4 hover:cursor-pointer shadow-lg shadow-[#00000014]"
                                >
                                    <div className="px-4">
                                        <div
                                            className="flex justify-between items-center gap-4"
                                        >
                                            <h1
                                                className="dark:text-[#E4E4E7] text-[#181818] text-[1.1rem] font-semibold  py-2"
                                            >
                                                {item.question}
                                            </h1>
                                            <div
                                            >

                                                {
                                                    isAcive ? (
                                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.375 14H23.625" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M14 4.375V23.625" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    ) : (
                                                        <svg
                                                            width="24" height="4" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.375 2H21.625" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <p>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

            {/* left blur */}
            <div className="absolute  top-0 right-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[100px]   z-10">
            </div>
            {/* right blur */}
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#FBC131] opacity-40 blur-[100px]  z-10">
            </div>
        </section>
    )
}