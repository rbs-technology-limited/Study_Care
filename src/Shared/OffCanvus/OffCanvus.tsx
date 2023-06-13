import React from "react";
import { MdCancel } from "react-icons/md";
import CButton from "../CButton/CButton";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width?: string;
  background?: string;
  opacity?: string;
  zIndex?: string;
  children?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
}

const SideBar = ({
  open,
  setOpen,
  width,
  background,
  opacity,
  zIndex,
  children,
  title,
  icon,
}: Props) => {
  return (
    <section
      //   open with transition
      className={`absolute top-0 left-0 
      ${width ? width : "md:w-[50%] w-[70%]"}
       min-h-screen  ${zIndex ? zIndex : "z-40"}
        transform
        ${background ? background : "bg-white dark:bg-gray-800"}
        ${open ? "translate-x-0" : "-translate-x-full"}
        ease-in-out duration-300
          border-t border-r  
            ${opacity ? opacity : ""}
          `}
    >
      <section className="flex justify-between items-center gap-2 mt-2 px-1">
        <h1 className="text-lg font-bold md:text-left md:text-lg text-black dark:text-white w-full">
          {title}
        </h1>
        <CButton
          onClick={() => {
            setOpen(!open);
          }}
          variant="text"
        >
          {icon ? (
            icon
          ) : (
            <MdCancel className="text-2xl font-bold md:text-left dark:text-custom-orange w-full" />
          )}
        </CButton>
      </section>
      <hr className="my-2" />
      <section className="px-1">{children}</section>
    </section>
  );
};

export default SideBar;
