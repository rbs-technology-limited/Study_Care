import Image from "next/image";
import Link from "next/link";

type ICardData = {
  data: {
    id: number;
    title: string;
    progress: number;
  };
};

const DashboardCard = ({ data }: ICardData) => {
  return (
    <Link href={`/courses/${data.id}`}>
      <div
        className={`
        flex max-w-lg shadow-lg rounded-lg overflow-hidden cursor-pointer`}
      >
        <div className="w-2/4 relative bg-no-repeat">
          <Image
            src={`https://img.freepik.com/free-photo/boy-studying-from-home-online-classroom-new-normal_53876-96659.jpg?w=740&t=st=1686653491~exp=1686654091~hmac=35ee66c6704ba0c67dbb073abcb6b9ec44986ce9d2fa771913a88f8601184813`}
            alt="course"
            width={300}
            height={280}
            className="rounded-l-lg h-full w-full object-cover object-left"
          />
        </div>
        <div className="w-2/3 p-2">
          <h1 className="text-gray-900 font-bold text-sm dark:text-white">
            {/* title */}
            {data.title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
