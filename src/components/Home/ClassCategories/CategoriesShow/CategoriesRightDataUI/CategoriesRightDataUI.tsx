"use client";
import { getCategoriesDataEndpoint } from "@/API_CALL";
import { getCall } from "@/Global/(ApiCalingFunc)/GetCall/GetCall";
import { setCategories } from "@/Redux/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import CourseCard from "../../CourseCard/CourseCard";
import Pagination from "./Pagination/Pagination";

type IData = {
  count: number;
  total_pages: number;
  course_per_page: number;
  current_page: number;
};

const initialData: IData = {
  count: 1,
  total_pages: 1,
  course_per_page: 5,
  current_page: 1,
};

const CategoriesRightDataUI = () => {
  const [filterData, setFilterData] = useState<IData>(initialData);
  const { categories } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handlePageChange = (pageNumber: number, coursePerPage: number) => {
    setFilterData((prevData) => ({
      ...prevData,
      current_page: pageNumber,
      course_per_page: coursePerPage,
    }));
  };

  useEffect(() => {
    const getCourseData = async () => {
      const courses = await getCall(
        `${getCategoriesDataEndpoint}/?class_category=${id}&page=${filterData?.current_page}&page_size=${filterData?.course_per_page}`,
        {}
      );
      dispatch(setCategories(courses?.results));
    };
    getCourseData();
  }, [id, filterData?.current_page, filterData?.course_per_page, dispatch]);

  return (
    <section className="relative break-all text-black dark:text-white h-full">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {categories?.map((courseCardData) => (
          <Fragment key={Math.random() * 100}>
            <CourseCard courseCardData={courseCardData} />
          </Fragment>
        ))}
      </section>

      <div className="lg:absolute bottom-0 w-full flex items-center justify-center ">
        <Pagination
          currentPage={filterData.current_page}
          totalPages={filterData.total_pages}
          coursePerPage={filterData.course_per_page}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default CategoriesRightDataUI;
