"use client";
import React, { useState } from "react";

interface Props {
  customClass?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  btnTitle?: string;
  textUpperCased?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  color?: string;
  variant?: "solid" | "outline" | "text";
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  rest?: any;
}

const CButton = ({
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
  ...rest
}: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <>
      <button
        className={
          customClass
            ? customClass
            : ` px-4 
            h-[2.4rem]
              rounded-lg
              text-[0.625rem]
              sm:text-sm
              font-semibold
            ${fullWidth ? "w-full" : ""} ${textUpperCased ? "uppercase" : ""}
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
        {btnTitle}
        {children}
      </button>
    </>
  );
};

export default CButton;
