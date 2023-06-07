import photo1 from '../../../../public/Asset/image/gallery/photos1.png';
import photo2 from '../../../../public/Asset/image/gallery/photos2.png';
import photo3 from '../../../../public/Asset/image/gallery/photos3.png';
// import ArrowLeft from '../../../../public/Asset/svg/ArrowLeft';
// import ArrowRight from '../../../../public/Asset/svg/ArrowRight';
import Image from "next/image";

import line from '../../../../public/Asset/image/line.svg';
const photos = [
    {
        id: 1,
        image: photo1
    },
    {
        id: 2,
        image: photo2
    },
    {
        id: 3,
        image: photo3
    },
    {
        id: 4,
        image: photo2
    },
    {
        id: 5,
        image: photo3
    },
]
export default function Gallery() {
    return (
        <section
            className="position-relative z-10 overflow-hidden bg-white "
        >
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-black text-3xl font-bold text-center">
                        Gallery
                    </h2>
                    <Image
                        src={line}
                        alt="line"
                        width={152}
                        height={13}
                    />
                </div>
            </div>
            <div className='gap-4'>

            </div>

        </section>
    )
}