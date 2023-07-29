"use client";
import { setCourseDetails } from "@/Redux/features/category/categorySlice";
import { useAppDispatch } from "@/Redux/store";
import { useEffect } from "react";
import CoursePageLeftUI from "./CoursePageLeftUI/CoursePageLeftUI";
import CoursePageRightUI from "./CoursePageRightUI/CoursePageRightUI";

type ICourseData = {
  courseData: any;
};

const Course = ({ courseData }: ICourseData) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCourseDetails(courseData));
  }, [dispatch, courseData]);

  return (
    <section className="container mx-auto px-8 py-8">
      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-3 lg:col-span-2">
          <CoursePageLeftUI />
        </div>
        <div className="lg:col-span-1 hidden lg:block">
          <CoursePageRightUI />
        </div>
      </div>
    </section>
  );
};

export default Course;
