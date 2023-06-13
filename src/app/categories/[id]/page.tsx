import React from "react";

const page = async ({ params }: any) => {
  console.log(params.id);
  return (
    <div className="h-screen text-white bg-black flex flex-col justify-center items-center">
      <h1>Class Categories Page</h1>
      <h2>{params.id}</h2>
    </div>
  );
};

export default page;
