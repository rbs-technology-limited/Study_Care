import Image from "next/image";

import line from "public/Asset/image/line.svg";
import GallrySlider from "./GallrySlider/GallrySlider";
import { galleryContent, galleryImages } from "@/Content";

export default function Gallery() {
  return (
    <section className="pt-16 pb-20">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-black dark:text-white text-3xl font-bold text-center">
            {galleryContent?.title}
          </h2>
          <Image src={line} alt="line" width={152} height={13} />
        </div>
      </div>
      <div className="gap-4">
        <GallrySlider galleryImages={galleryImages} />
      </div>
    </section>
  );
}
