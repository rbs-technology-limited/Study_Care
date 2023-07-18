import LessonTasksSummary from "./LessonTasksSummary/LessonTasksSummary";

const CourseAccess = () => {
  return (
    <section className="container mx-auto px-8">
      <div className="flex flex-col md:flex-row gap-3">
        {/* description */}
        <div className="w-3/5">
          <LessonTasksSummary />
        </div>
        {/* lesson part */}
        <div className="w-2/5"></div>
      </div>
    </section>
  );
};

export default CourseAccess;
