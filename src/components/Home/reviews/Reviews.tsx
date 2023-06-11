import Image from "next/image";

import line from "public/Asset/image/line.svg";
import ReviewsSlider from "./ReviewsSlider";


export default function Reviews() {
    const reviewsData = {
        sectiion_title: "Reviews",
        reviews: [
            {
                id: 1,
                name: 'Jenny Wilson',
                designation: 'Students of BUET',
                avatar: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1686411232~exp=1686411832~hmac=a40abf517257b633d44bd8207c615c34372d48c4cb1a9836336d4d39229711e1',
                review_text: 'Thanks to WeCare transparent and efficient process, I was able to secure a spot at a prestigious Korean university.',

            },
            {
                id: 2,
                name: 'Tom Kerry',
                designation: 'Student of RU',
                avatar: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1686411205~exp=1686411805~hmac=0e6d9002ef41b92b8343b26301df4f1deae7c44b4b80fff46e322ceeedd06245',
                review_text: 'Thanks to WeCare transparent and efficient process, I was able to secure a spot at a prestigious Korean university.',

            },
            {
                id: 3,
                name: 'Leslie Winslate',
                designation: 'Student of DU',
                avatar: 'https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=996&t=st=1686411216~exp=1686411816~hmac=73d45d1695b7cf555b359c8c0298fe21996637afef0190bbd3596055f91175c9',
                review_text: 'Thanks to WeCare transparent and efficient process, I was able to secure a spot at a prestigious Korean university.',

            },


        ]
    }
    return (
        <section className="bg-white dark:bg-[#141414] relative overflow-hidden py-20">
            <div className="container mx-auto px-4 lg:px-8 py-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-black dark:text-white text-3xl font-bold text-center">
                        {reviewsData.sectiion_title}
                    </h2>
                    <Image src={line} alt="line" width={100} height={13} />
                </div>
            </div>
            <div className="gap-4">
                <ReviewsSlider reviews={reviewsData.reviews} />
            </div>
            {/* left blur */}
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[200px]   z-10">
            </div>
            {/* right blur */}
            <div className="absolute  top-0 right-0 w-64 h-64 rounded-full bg-[#FBC131] opacity-40 blur-[150px]  z-10">
            </div>
        </section>
    );
}
