"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Asset from "public/asset/Asset 1-8.png";
import Logo from "public/Asset/Logo.png";
import { useRouter } from "next/navigation";

import ProfileDropDown from "./ProfileDropDown";
import { CButton } from "@/Shared";
import MENU_LIST from "@/Constant/Nav_Data";
import TopHeader from "public/Asset/top-header-right.svg";
import { orange } from "@/Constant/Custom-Color";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [IndexData, setIndex] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [refreshUserData, setRefreshUserData] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIndex("Home");
    } else {
      setIndex(window.location.pathname.split("/")[1]);
    }

    return () => {};
  }, []);

  useEffect(() => {
    setPageLoading(true);
    const studyCareData = JSON.parse(localStorage.getItem("studyCareData"));

    if (studyCareData) {
      setUser(studyCareData);
      setPageLoading(false);
    } else {
      setUser(null);
      setPageLoading(false);
    }
    return () => {
      setRefreshUserData(false);
    };
  }, [refreshUserData]);

  // console.log(IndexData);

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    //gradient orange 50 to orange 100
    <nav className="w-full fixed top-0 z-50 bg-[#EAFBFB] bg-[url('/Asset/top-header-right.svg')] bg-no-repeat bg-right-bottom">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
        <>
          <div className="flex items-center justify-between py-3 lg:py-1 lg:block">
            {/* //logo  */}
            <Link
              href="/"
              className="inline-block max-w-[160px] text-3xl text-black-400 font-bold leading-none"
            >
              <Image
                src={Logo}
                alt="logo"
                className="max-w-full h-auto mt-1"
                width={120}
                height={40}
              />
              {/* <div>
                <h1>Byte.Bridge</h1>
              </div> */}
            </Link>
            {/* //mobile menu  */}
            <div className="lg:hidden">
              <button
                className="flex items-center px-3 py-2 text-black-400 border border-black-400 rounded hover:text-black-500 hover:border-black-500"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-dark"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6  text-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </>
        {/* //desktop menu */}
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className=" bg-dark items-center justify-center space-y-4 lg:flex lg:space-x-6 lg:space-y-0">
              {MENU_LIST?.map((item, index) => {
                return (
                  <li
                    className={`text-blue-950 hover:text-gray-900
              ${item?.text === IndexData ? "underline" : ""}
              `}
                    key={index}
                    onClick={() => {
                      setIndex(item?.text);
                      setNavbar(false);
                    }}
                  >
                    <Link
                      href={item?.href}
                      className="inline-block px-1 py-2 font-medium leading-5 text-center text-black-400 transition duration-150 ease-in-out border border-transparent rounded-md hover:text-gray-500 focus:outline-none focus:border-black-500 focus:shadow-outline-black active:bg-gray-50 active:text-black-700"
                    >
                      <span>{item?.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* //sign in button
         */}
        <div className={`lg:block ${navbar ? "block" : "hidden"}`}>
          {pageLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-t-2 border-orange-200 rounded-full animate-spin"></div>
            </div>
          ) : user?.token ? (
            // <CButton type="button" textUpperCased>
            //   Sign Out
            // </CButton>
            // show name . and after click in name ahow a dropdown with signout
            <ProfileDropDown
              user={user}
              dropdown={dropdown}
              setDropdown={setDropdown}
              setRefreshUserData={setRefreshUserData}
              setUser={setUser}
            />
          ) : (
            <CButton
              type="button"
              textUpperCased
              variant="solid"
              color={orange}
              // className="px-4 py-2 mb-5 lg:mb-0 text-sm text-stone-700 transition-all bg-orange-400 rounded-lg outline-none hover:bg-orange-500 focus:bg-orange-500 uppercase focus:outline-none border-2 shadow-lg shadow-orange-500/50"
              onClick={() => {
                handleLogin();
              }}
            >
              Sign In
            </CButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
