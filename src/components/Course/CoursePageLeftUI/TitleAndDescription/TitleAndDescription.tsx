import { useAppSelector } from "@/Redux/store";

const TitleAndDescription = () => {
  const { courseDetails } = useAppSelector((state) => state.category);

  return (
    <div className="mt-12">
      <h1 className="text-xl font-bold dark:text-white text-gray-800">
        {courseDetails?.title}
      </h1>
      <p className="text-md dark:text-white my-4 text-gray-600">
        {courseDetails?.description}
      </p>
    </div>
  );
};

export default TitleAndDescription;
