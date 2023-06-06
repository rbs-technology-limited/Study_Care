import photo1 from '../../../../public/Asset/image/gallery/photos1.png';
import photo2 from '../../../../public/Asset/image/gallery/photos2.png';
import photo3 from '../../../../public/Asset/image/gallery/photos3.png';
// import ArrowLeft from '../../../../public/Asset/svg/ArrowLeft';
// import ArrowRight from '../../../../public/Asset/svg/ArrowRight';
import Image from "next/image";
import Slider from "react-slick";

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
    // const slider = React.useRef(null);
    const settings = {
        className: "center",
        infinite: true,
        dots: false,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.75,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
                        alt="Hero Image"
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