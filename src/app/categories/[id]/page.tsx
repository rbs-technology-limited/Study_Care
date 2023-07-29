// import { getCategoriesDataEndpoint } from "@/API_CALL";
// import { getCall } from "@/Global/(ApiCalingFunc)/GetCall/GetCall";
import CategoriesShow from "@/components/Home/ClassCategories/CategoriesShow/CategoriesShow";

const page = async ({ params }: any) => {
  // const categoriesData = await getCall(getCategoriesDataEndpoint, {});
  // console.log("categoriesData", categoriesData);
  return (
    <main className=" min-h-screen mt-[4.4rem]">
      <CategoriesShow categoriesData={categoriesData} />
    </main>
  );
};

export default page;
