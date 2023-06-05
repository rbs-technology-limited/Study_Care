import React from "react";

const CInput = ({ type, ...rest }) => {
  return (
    <>
      <input
        type={type}
        className="w-full px-5 py-3 mb-2 text-sm text-black transition duration-200 border border-gray-300 rounded-lg outline-none focus:border-orange-400 focus:outline-none"
        {...rest}
      />
    </>
  );
};

export default CInput;
