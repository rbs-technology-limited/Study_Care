"use client";
import { CDropdown, CInput } from "@/Shared";
import React, { useState } from "react";

const TeacherRegistration = () => {
  const [selectOption, setSelectOption] = useState("dhaka");
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

  //   const subjects = [
  //     { id: "bangla", name: "Bangla" },
  //     { id: "english", name: "English" },
  //   ];

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

  return (
    <section className="container mx-auto px-8 py-8">
      {/*pdf view  */}
      <div></div>

      {/* form part */}
      <div className="my-5 text-gray-600">
        <form action="">
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
            <label htmlFor="currentLocation" className="font-bold text-sm">
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
              Your Department Name
            </label>
            <CInput type="text" id="departmentName" required />
          </div>
          <div>
            <label htmlFor="CurrentYear" className="font-bold text-sm">
              Your Current Education Year
            </label>
            <CDropdown
              id="CurrentYear"
              options={options}
              value={selectOption}
              onChange={handleSelectOption}
            />
          </div>
          <div>
            <label htmlFor="facebookLink" className="font-bold text-sm">
              Facebook ID Link (Please try to keep your profile public)
            </label>
            <CInput type="text" id="facebookLink" required />
          </div>
          <div>
            <table>
              <tr>
                <th></th>
                {subjects.map((subject, index) => {
                  return <th key={index}>{subject}</th>;
                })}
              </tr>
              <tr>
                <td>First Choice</td>
                {subjects.map((subject, index) => {
                  return (
                    <td key={index}>
                      <input
                        type="radio"
                        name={`secondChoice_${index}`}
                        value={subject}
                      />
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td>Second Choice</td>
                {subjects.map((subject, index) => {
                  return (
                    <td key={index}>
                      <input
                        type="radio"
                        name={`secondChoice_${index}`}
                        value={subject}
                      />
                    </td>
                  );
                })}
              </tr>
            </table>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TeacherRegistration;
