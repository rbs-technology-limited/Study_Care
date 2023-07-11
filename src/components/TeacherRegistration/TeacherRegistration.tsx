"use client";
import { teal } from "@/Constant/Custom-Color";
import { CButton, CDropdown, CInput } from "@/Shared";
import React, { useState } from "react";
import TeachingSubjects from "./TeachingSubjects/TeachingSubjects";

const TeacherRegistration = () => {
  const [selectOption, setSelectOption] = useState("dhaka");
  const [selectSegment, setSelectSegment] = useState("Class6-10");
  const [selectYear, setSelectYear] = useState("1stYear");

  const options = [
    {
      value: "dhaka",
      label: "Dhaka",
    },
    {
      value: "chattogram",
      label: "Chattogram",
    },
    {
      value: "rajshahi",
      label: "Rajshahi",
    },
    {
      value: "khulna",
      label: "Khulna",
    },
    {
      value: "barishal",
      label: "Barishal",
    },
    {
      value: "sylhet",
      label: "Sylhet",
    },
  ];

  const handleSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(e.target.value);
  };

  const handleSelectSegment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectSegment(e.target.value);
  };
  const handleSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectYear(e.target.value);
  };

  const subjects = [
    "Bangla",
    "English",
    "math",
    "physics",
    "chemistry",
    "ict",
    "biology",
    "accounting",
    "finance",
    "marketing",
    "management",
    "economics",
    "statistics",
    "history",
  ];

  const segments = [
    {
      value: "class6-10",
      label: "Class 6-10",
    },
    {
      value: "hscAndUniversityAdmission",
      label: "HSC and University Admission",
    },
    {
      value: "both",
      label: "Both",
    },
  ];
  const educationYears = [
    {
      value: "1stYear",
      label: "1st Year",
    },
    {
      value: "2ndYear",
      label: "2nd Year",
    },
    {
      value: "3rdYear",
      label: "3rd Year",
    },
    {
      value: "4thYear",
      label: "4th Year",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section className="container mx-auto px-8 py-8">
      {/*pdf view  */}
      <div></div>

      {/* form part */}
      <div className="my-5 text-gray-600 dark:text-white">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label htmlFor="name" className="font-bold text-sm">
                Your Full Name (as per NID/Certificate)
              </label>
              <CInput type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email" className="font-bold text-sm">
                Email Address
              </label>
              <CInput type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="font-bold text-sm">
                Phone Number
              </label>
              <CInput type="text" id="phoneNumber" required />
            </div>
            <div>
              <label htmlFor="currentLocation" className="font-bold text-sm ">
                Your Current Location
              </label>
              <CDropdown
                options={options}
                value={selectOption}
                onChange={handleSelectOption}
              />
            </div>
            <div>
              <label htmlFor="currentAddress" className="font-bold text-sm">
                Your Current Address
              </label>
              <CInput type="text" id="currentAddress" required />
            </div>
            <div>
              <label htmlFor="universityName" className="font-bold text-sm">
                Your University Name
              </label>
              <CInput type="text" id="universityName" required />
            </div>
            <div>
              <label htmlFor="departmentName" className="font-bold text-sm">
                Department Name
              </label>
              <CInput type="text" id="departmentName" required />
            </div>
            <div>
              <label htmlFor="CurrentYear" className="font-bold text-sm">
                Your Current Education Year
              </label>
              <CDropdown
                id="CurrentYear"
                options={educationYears}
                value={selectYear}
                onChange={handleSelectYear}
              />
            </div>
            <div>
              <label htmlFor="segment" className="font-bold text-sm">
                Which segment are you most comfortable in teaching?
              </label>
              <CDropdown
                id="segment"
                options={segments}
                value={selectSegment}
                onChange={handleSelectSegment}
              />
            </div>
            <div>
              <label htmlFor="facebookLink" className="font-bold text-sm">
                Facebook ID Link (Please try to keep your profile public)
              </label>
              <CInput type="text" id="facebookLink" required />
            </div>
          </div>
          <TeachingSubjects subjects={subjects} />

          <div className="my-4">
            <CButton
              type="submit"
              color={teal}
              variant="solid"
              btnTitle="Submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default TeacherRegistration;
