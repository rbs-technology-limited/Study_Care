"use client";
import { courseAccessData, courseAccessStaticData } from "@/Content";
import CopyClassroomLink from "./CopyClassroomLink/CopyClassroomLink";

const LessonTasksSummary = () => {
  return (
    <section>
      <div className="p-3 bg-gray-50 text-gray-600 dark:text-white border rounded flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="p-2">{courseAccessData.quiz_status}</p>
        <p className="p-2">
          <CopyClassroomLink data={courseAccessData.classroom_link} />
        </p>
        <p className="p-2">{courseAccessData.assignment_status}</p>
        <p className="p-2">{courseAccessStaticData.record_video_button}</p>
      </div>
    </section>
  );
};

export default LessonTasksSummary;
