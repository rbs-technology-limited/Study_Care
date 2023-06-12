import Image from "next/image";

interface item {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function SingleCard({ featureData }: { featureData: item }) {
  return (
    <div
      className="flex
      justify-evenly items-center
      gap-1
      rounded-lg
      shadow-lg
      p-4
    "
      data-aos={"zoom-out"}
    >
      <Image src={featureData?.image} alt="image" width={200} height={160} />
      <div>
        <h3 className="text-3xl font-bold">{featureData?.title}</h3>
        <p className="text-lg font-medium dark:text-gray-500 text-black-500">
          {featureData?.description}
        </p>
      </div>
    </div>
  );
}
