import Image from "next/image";

interface item {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function SingleCard({ title, description, image }: item) {
    return (
        <div
            className="flex gap-1 "
            data-aos={"zoom-out"}


        >
            <Image src={image} alt="image" width={200} height={160} />
            <div
            >
                <h3
                    className="text-3xl font-bold"
                >
                    {title}
                </h3>
                <p
                    className="text-lg font-medium dark:text-gray-500 text-black-500"
                >
                    {description}
                </p>
            </div>
        </div>
    )
}
