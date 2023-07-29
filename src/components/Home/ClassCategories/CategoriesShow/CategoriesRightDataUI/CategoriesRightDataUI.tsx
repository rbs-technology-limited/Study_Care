import { coursesCardData } from "@/Content";
import CourseCard from "../../CourseCard/CourseCard";

type ICourseCardData = {
  data: any;
};

const CategoriesRightDataUI = ({ data }: ICourseCardData) => {
  return (
    <section className="break-all text-black dark:text-white">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {coursesCardData?.map((courseCardData) => (
          <CourseCard courseCardData={courseCardData} key={courseCardData.id} />
        ))}
      </section>
    </section>
  );
};

export default CategoriesRightDataUI;
