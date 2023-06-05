"use client";
import { CButton } from "@/Shared";
import { useLocalStorage } from "browser_storage_hook_react";
import React from "react";

const ProfileDropDown = ({
  user,
  dropdown,
  setDropdown,
  setRefreshUserData,
  setUser,
}) => {
  const [userData, setUserData] = useLocalStorage("userData", "");
  const handleLogout = () => {
    setDropdown(false);
    setUserData("");
    setUser("");
    setRefreshUserData((state) => !state);
    // window.location.reload();
  };
  return (
    <>
      <div className="relative inline-block text-left mb-4">
        <div>
          <CButton
            type="button"
            className="inline-flex justify-center w-full mt-4 px-4 py-2 text-sm font-medium text-black-400 bg-orange-400 border border-black-400 rounded-md shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            {user?.user?.name}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#000000"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 12.95a1 1 0 001.414 0l3-3a1 1 0 10-1.414-1.414L11
                      .586V8a1 1 0 01-2 0V.586L6.707 3.95a1 1 0
                      10-1.414 1.414l3 3a1 1 0 001.414 0zM3
                      16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0
                      01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </CButton>
        </div>
        {dropdown ? (
          <div
            className="absolute 
            lg:right-0
            lg:mt-5
            xl:w-48
            origin-top-right
            top-10
            left-0
           w-full
            mt-5
            rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <CButton
                type="button"
                textUpperCased
                className="block w-full px-4 py-2 text-sm text-left text-black-400 hover:bg-gray-100 hover:text-black-700"
                onClick={() => {
                  handleLogout();
                }}
              >
                Sign Out
              </CButton>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ProfileDropDown;
