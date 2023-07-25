"use client";
import React, { useState } from "react";

interface Props {
  id?: string;
  customClass?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  btnTitle?: string;
  textUpperCased?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
  variant?: "solid" | "outline" | "text" | "contained";
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  height?: string;
  rest?: any;
}

const CButton = ({
  id,
  customClass,
  fullWidth,
  type,
  btnTitle,
  textUpperCased,
  children,
  disabled,
  color,
  variant,
  onClick,
  height,
  loading,
  ...rest
}: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <>
      <button
        className={
          customClass
            ? customClass
            : ` px-3
            mt-1
            ${height ? height : "h-[2.4rem]"}

              rounded-md
              text-[0.7rem]
              sm:text-sm
              font-semibold
              transition-all
              duration-300
              ease-in-out
              
            ${fullWidth ? "w-full" : ""} 
            ${textUpperCased ? "uppercase" : ""}
              ${
                disabled
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : ""
              }

              ${
                variant === "text"
                  ? `bg-transparent ${
                      color
                        ? color
                        : "text-button-teal dark:text-button-dark-teal"
                    } `
                  : ""
              }

              ${
                variant === "contained"
                  ? `${color ? color : "bg-black text-white "}
                  ${isHovered ? "opacity-90" : "opacity-100"}`
                  : ""
              }
              `
        }
        onClick={onClick}
        style={{
          ...(variant === "solid" && {
            backgroundColor: color,
            color: "#fff",
          }),
          ...(variant === "outline" && {
            border: isHovered ? `1px solid #fff` : `1px solid ${color}`,
            color: isHovered ? "#fff" : color,
            backgroundColor: isHovered ? color : "transparent",
          }),
          // ...(variant === "text" && {
          //   color: color,
          //   backgroundColor: "transparent",
          // }),
        }}
        type={type}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...rest}
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          </div>
        ) : (
          <>
            {btnTitle}
            {children}
          </>
        )}
      </button>
    </>
  );
};

export default CButton;
