import { getUserDataEndpoint } from "@/API_CALL";
// import { userInfo } from "@/Context/ContextProvider";
import { getCall } from "@/Global/(ApiCalingFunc)/GetCall/GetCall";
import StudentDashboard from "@/components/StudentDashboard/StudentDashboard";

const page = async () => {
  // const userFullInfo = await getCall(getUserDataEndpoint, {});
  // console.log(userFullInfo);
  return (
    <div className="mt-[4.4rem]">
      <StudentDashboard />
    </div>
  );
};

export default page;
