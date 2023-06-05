import React from "react";

const CButton = ({
  customClass,
  fullWidth,
  type,
  btnTitle,
  textUpperCased,
  children,
  disabled,
  ...rest
}) => {
  return (
    <>
      <button
        className={
          customClass
            ? customClass
            : ` px-4 py-2 text-sm text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-500 space-x-2 focus:outline-none hover:shadow-lg shadow-orange-500/50 border-2 ${
                fullWidth ? "w-full" : ""
              } ${textUpperCased ? "uppercase" : ""}
              ${
                disabled
                  ? "opacity-50 cursor-not-allowed pointer-events-none"
                  : ""
              }
              `
        }
        type={type}
        {...rest}
      >
        {btnTitle}
        {children}
      </button>
    </>
  );
};

export default CButton;
