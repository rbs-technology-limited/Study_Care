import React from "react";

interface Props {
  children?: React.ReactNode;
  rest?: any;
}

const OutLineButton = ({ children, ...rest }: Props) => {
  return (
    <>
      <button
        className={`
            border-2
        border-[#00BCD4]
        hover:bg-[#00BCD4] 
        hover:text-white
        text-[#00BCD4]
        py-2
        px-4
        rounded-xl
        uppercase
        font-semibold
        focus:outline-none
        focus:shadow-outline
        transition duration-300 ease-in-out
        shadow-md
        shadow-teal-200/90
        `}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default OutLineButton;
