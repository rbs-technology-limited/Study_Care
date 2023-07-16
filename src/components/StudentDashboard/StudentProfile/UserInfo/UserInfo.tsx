import { lightPurple } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import Image from "next/image";

type IUserInfo = {
  data: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
};

const UserInfo = ({ data }: IUserInfo) => {
  return (
    <main>
      {/* //left will be user image and right will be students inf0 */}
      <div className="flex md:flex-row flex-col gap-4">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="https://picsum.photos/200/300"
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
        <div className="flex flex-col text-sm gap-2 flex-1 bg-white p-2 rounded">
          <h1 className="text-xl font-bold">{data?.name}</h1>
          <p className="text-sm">
            <span className="font-bold">Email:</span> {data?.email}
          </p>
          <p className="text-sm">
            <span className="font-bold">Phone Number:</span> {data?.phone}
          </p>
          <p className="text-sm">
            <span className="font-bold">Address:</span> {data?.address}
          </p>
        </div>
      </div>
    </main>
  );
};

export default UserInfo;
