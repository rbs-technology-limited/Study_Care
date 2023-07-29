import { getCategoriesDataEndpoint } from "@/API_CALL";
import { getCall } from "@/Global/(ApiCalingFunc)/GetCall/GetCall";
import Course from "@/components/Course/Course";

const page = async ({ params }: any) => {
  const courseData = await getCall(getCategoriesDataEndpoint, {
    data: {
      id: params.id,
    },
  });

  console.log("courseData", courseData);
  return (
    <main className="mt-[4.4rem]">
      <Course courseData={courseData} />
    </main>
  );
};

export default page;
