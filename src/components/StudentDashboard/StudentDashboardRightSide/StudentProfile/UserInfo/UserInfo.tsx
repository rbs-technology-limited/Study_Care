import { lightPurple } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import Image from "next/image";

type IUserInfo = {
  data: {
    name: string;
    email: string;
    mobile: string;
    address: string;
    profile_image_thumbnail: {
      url: string;
    };
  };
};

const UserInfo = ({ data }: IUserInfo) => {
  return (
    <main>
      {/* //left will be user image and right will be students inf0 */}
      <div className="flex md:flex-row flex-col gap-4 text-gray-600 dark:text-white">
        <div className="flex flex-col gap-2 items-center p-2">
          <Image
            src={data?.profile_image_thumbnail?.url}
            alt="user"
            width={150}
            height={100}
            className="object-cover w-40 h-40 rounded-full"
          />
          {/* //chnage button to icon */}
          <CButton variant="solid" color={lightPurple}>
            Change
          </CButton>
        </div>
        <div className="flex flex-col text-md gap-2 flex-1 bg-white dark:bg-transparent p-2 rounded">
          <h1 className="text-xl font-bold">{data?.name}</h1>
          <p className="text-sm">
            <span className="font-bold">Email:</span> {data?.email}
          </p>
          {data?.mobile && (
            <p className="text-sm">
              <span className="font-bold">Phone Number:</span> {data?.mobile}
            </p>
          )}
          {data?.address && (
            <p className="text-sm">
              <span className="font-bold">Address:</span> {data?.address}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default UserInfo;
