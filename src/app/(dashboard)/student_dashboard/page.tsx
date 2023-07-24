import { getUserDataEndpoint } from "@/API_CALL";
// import { userInfo } from "@/Context/ContextProvider";
import { getCall } from "@/Global/(ApiCalingFunc)/GetCall/GetCall";
import StudentDashboard from "@/components/StudentDashboard/StudentDashboard";
import { cookies } from 'next/headers'

const page = async () => {
  const userFullInfo = await getCall(getUserDataEndpoint, {});
 
  const cookieStore = cookies().get("userInfo") 
  console.log(cookieStore);

  return (
    <div className="mt-[4.4rem]">
      <StudentDashboard />
    </div>
  );
};

export default page;
