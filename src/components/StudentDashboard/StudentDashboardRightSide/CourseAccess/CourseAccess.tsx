import LessonTasksSummary from "./LessonTasksSummary/LessonTasksSummary";

const CourseAccess = () => {
  return (
    <section className="container mx-auto px-8">
      <div className="flex flex-col-reverse lg:flex-row gap-3">
        {/* description */}
        <div className="w-full lg:w-3/5">
          <LessonTasksSummary />
        </div>
        {/* lesson part */}
        <div className="w-full lg:w-2/5">
          <h1>Lesson list</h1>
        </div>
      </div>
    </section>
  );
};

export default CourseAccess;
