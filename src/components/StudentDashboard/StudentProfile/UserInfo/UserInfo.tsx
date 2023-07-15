import { lightPurple, teal } from "@/Constant/Custom-Color";
import { CButton } from "@/Shared";
import Image from "next/image";
import React from "react";

const UserInfo = () => {
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
        <div className="flex flex-col gap-2 flex-1 bg-white p-2 rounded">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl font-bold">John Doe</h1>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserInfo;
