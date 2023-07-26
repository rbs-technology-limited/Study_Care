import { teal } from "@/Constant/Custom-Color";
import { editProfileData } from "@/Content";
import { CButton, CInput } from "@/Shared";
import { ChangeEvent, FormEvent, useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

const EditProfile = () => {
  const [details, setDetails] = useState({
    username: "",
    address: "",
  });

  const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleRegisterSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* name */}
          <div className="">
            <div className="flex justify-between items-center">
              <label htmlFor="name" className="my-2 md:my-0 lg:my-0 xl:my-1">
                {editProfileData?.inputDetails?.firstName?.title}
              </label>
              <BsQuestionCircleFill color={teal} className="cursor-pointer" />
            </div>
            <CInput
              type="text"
              placeholder={
                editProfileData?.inputDetails?.firstName?.placeholder
              }
              mb="mb-0"
              id="name"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDetails({ ...details, username: e.target.value })
              }
            />
            {/* {isError && error!.data.username && (
              <label htmlFor="" className="text-red-500 text-[0.625rem]">
                {error!.data.username}
              </label>
            )} */}
          </div>
          {/* last name */}
          <div className="">
            <div className="flex justify-between items-center">
              <label
                htmlFor="lastName"
                className="my-1 md:my-0 lg:my-0 xl:my-1"
              >
                {editProfileData?.inputDetails?.lastName?.title}
              </label>
              <BsQuestionCircleFill color={teal} className="cursor-pointer" />
            </div>
            <CInput
              type="text"
              placeholder={editProfileData?.inputDetails?.lastName?.placeholder}
              id="lastName"
              mb="mb-0"
            />
          </div>
          {/* address */}
          <div className="">
            <div className="flex justify-between items-center">
              <label htmlFor="address" className="my-2 md:my-0 lg:my-0 xl:my-1">
                {editProfileData?.inputDetails?.address?.title}
              </label>
              <BsQuestionCircleFill color={teal} className="cursor-pointer" />
            </div>
            <CInput
              type="text"
              placeholder={editProfileData?.inputDetails?.address?.placeholder}
              id="address"
              mb="mb-0"
            />
          </div>
          {/* email */}
          <div className="">
            <div className="flex justify-between items-center">
              <label htmlFor="email" className="my-2 md:my-0 lg:my-0 xl:my-1">
                {editProfileData?.inputDetails?.email?.title}
              </label>
              <BsQuestionCircleFill color={teal} className="cursor-pointer" />
            </div>
            <CInput
              type="email"
              placeholder={editProfileData?.inputDetails?.email?.placeholder}
              id="email"
              mb="mb-0"
              disabled
            />
          </div>
          {/* phone number */}
          <div className="">
            <div className="flex justify-between items-center">
              <label
                htmlFor="phoneNumber"
                className="my-2 md:my-0 lg:my-0 xl:my-1"
              >
                {editProfileData?.inputDetails?.phoneNumber?.title}
              </label>
              <BsQuestionCircleFill color={teal} className="cursor-pointer" />
            </div>
            <CInput
              type="text"
              placeholder={
                editProfileData?.inputDetails?.phoneNumber?.placeholder
              }
              id="phoneNumber"
              mb="mb-0"
              disabled
            />
          </div>
          {/* phone number(optional)*/}
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="phoneNumberOptional"
                className="my-2 md:my-0 lg:my-0 xl:my-1"
              >
                {editProfileData?.inputDetails?.phoneNumberOptional?.title}
              </label>
              <BsQuestionCircleFill color={teal} className="cursor-pointer" />
            </div>
            <CInput
              type="text"
              placeholder={
                editProfileData?.inputDetails?.phoneNumberOptional?.placeholder
              }
              id="phoneNumberOptional"
              mb="mb-0"
              disabled
            />
          </div>
        </div>
        <div className="my-4">
          <CButton
            type="submit"
            variant="solid"
            btnTitle={editProfileData?.button}
            color={teal}
          />
        </div>
      </form>
    </section>
  );
};

export default EditProfile;
