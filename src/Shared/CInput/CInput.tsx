import React from "react";

type ICInput = {
  [x: string]: any;
  type?: any;
  mb?: any;
};

const CInput = ({ type, mb, ...rest }: ICInput) => {
  return (
    <>
      <input
        type={type}
        className={`w-full px-5 py-3 ${
          mb ? mb : "mb-2"
        } text-sm text-black dark:text-white transition duration-200 border border-gray-300 rounded-lg outline-none focus:border-orange-400 focus:outline-none dark:placeholder-white bg-transparent ring-1 ring-gray-700 dark:ring-gray-700`}
        {...rest}
      />
    </>
  );
};

export default CInput;
