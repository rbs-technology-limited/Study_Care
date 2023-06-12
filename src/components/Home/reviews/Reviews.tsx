import Image from "next/image";

import line from "public/Asset/image/line.svg";
import ReviewsSlider from "./ReviewsSlider";
import { reviewsContent, reviewsData } from "@/Content";
export default function Reviews() {
  return (
    <section className="bg-white dark:bg-[#141414] relative overflow-hidden py-20">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-black dark:text-white text-3xl font-bold text-center">
            {reviewsContent.title}
          </h2>
          <Image src={line} alt="line" width={100} height={13} />
        </div>
      </div>
      <div className="gap-4 px-4">
        <ReviewsSlider reviews={reviewsData} />
      </div>
      {/* left blur */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1BE1FF] opacity-40 blur-[200px]   z-10"></div>
      {/* right blur */}
      <div className="absolute  top-0 right-0 w-64 h-64 rounded-full bg-[#FBC131] opacity-40 blur-[150px]  z-10"></div>
    </section>
  );
}
