import { courseSyllabusStaticData } from "@/Content";
import { useAppSelector } from "@/Redux/store";
import { Accordion } from "@/Shared";

const CourseSyllabus = () => {
  const { courseDetails } = useAppSelector((state) => state.category);
  return (
    <section className="mt-12">
      <h1 className="text-xl font-bold">{courseSyllabusStaticData?.title}</h1>
      <div>
        <Accordion
          contents={courseDetails?.syllabuses}
          btnExpand={courseSyllabusStaticData?.btn_expand}
          btnCollapse={courseSyllabusStaticData?.btn_collapse}
        />
      </div>
    </section>
  );
};

export default CourseSyllabus;
