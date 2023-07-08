"use client";
import { CButton, CInput } from "@/Shared";
import React, { ChangeEvent } from "react";
import SingleCard from "../Home/instructor/SingleCard";
import { instructorsData } from "@/Content";

type inputEvent = ChangeEvent<HTMLInputElement>;

const AllTeacher = () => {
  const [teacherData, setTeacherData] = React.useState(instructorsData);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    const filtered = instructorsData.filter((data) =>
      data.name.includes(searchTerm)
    );
    setTeacherData(filtered);
  };

  const handleInputChange = (e: inputEvent) => {
    setSearchTerm(e.target.value);

    if (e.target.value) {
      setTeacherData(instructorsData);
    }
  };

  return (
    <section className="container-lg mx-auto px-16 py-8">
      {/*search section  */}
      <div className="w-1/3 flex gap-2 items-center">
        <CInput mb="0" onChange={handleInputChange} />
        <CButton
          variant="solid"
          color="teal"
          btnTitle="Search"
          onClick={handleSearch}
        />
      </div>
      {/* instructor list */}
      <div className="my-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  justify-center px-4">
          {teacherData?.map((item) => (
            <SingleCard
              key={item.id}
              name={item.name}
              designation={item.designation}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTeacher;
