"use client";
import { teal } from "@/Constant/Custom-Color";
import { courseAccessData, courseAccessStaticData } from "@/Content";
import { AiOutlineStop } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { LuFiles } from "react-icons/lu";
import { SiGoogleclassroom } from "react-icons/si";
import CopyClassroomLink from "./CopyClassroomLink/CopyClassroomLink";

const getStatusIcon = (status: string) => {
  switch (status) {
    case "কুইজ আছে":
      return <LuFiles color={teal} />;
    case "কুইজ নেই":
      return <AiOutlineStop color="red" />;
    default:
      return <AiOutlineStop color="red" />;
  }
};

const LessonTasksSummary = () => {
  const quizStatusIcon = getStatusIcon(courseAccessData.quiz_status);
  const assignmentStatusIcon = getStatusIcon(
    courseAccessData.assignment_status
  );
  return (
    <section>
      <div className="p-3 bg-gray-50 text-sm text-gray-600 dark:text-white border rounded flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="flex gap-1 items-center">
          {quizStatusIcon}
          <span>{courseAccessData.quiz_status}</span>
        </p>
        <p className="flex gap-1 items-center">
          <SiGoogleclassroom color={teal} />
          <CopyClassroomLink data={courseAccessData.classroom_link} />
        </p>
        <p className="flex gap-1 items-center">
          {assignmentStatusIcon}
          <span>{courseAccessData.assignment_status}</span>
        </p>
        <p className="flex gap-1 items-center cursor-pointer">
          <FiPlayCircle color={teal} />
          <span>{courseAccessStaticData.record_video_button}</span>
        </p>
      </div>
    </section>
  );
};

export default LessonTasksSummary;
