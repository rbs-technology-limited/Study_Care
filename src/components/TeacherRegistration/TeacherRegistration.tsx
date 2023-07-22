"use client";
import { teal } from "@/Constant/Custom-Color";
import {
  educationYears,
  options,
  segments,
  subjects,
  teacherRegistrationStaticData,
} from "@/Content";
import { CButton, CDropdown, CInput } from "@/Shared";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import TeachingSubjects from "./TeachingSubjects/TeachingSubjects";

const TeacherRegistration = () => {
  const [selectOption, setSelectOption] = useState("dhaka");
  const [selectSegment, setSelectSegment] = useState("Class6-10");
  const [selectYear, setSelectYear] = useState("1stYear");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(e.target.value);
  };

  const handleSelectSegment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectSegment(e.target.value);
  };
  const handleSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectYear(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  // pdf view

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  // `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const {
    lName,
    lCurrentAddress,
    lCurrentLocation,
    lCurrentYear,
    lDepartmentName,
    lEmail,
    lPhoneNumber,
    lSegment,
    lSubject,
    lUniversityName,
    lFbLink,
  } = teacherRegistrationStaticData;
  return (
    <section className="container mx-auto px-8 py-8">
      {/*pdf view  */}
      <div className="flex justify-center overflow-x-auto w-full">
        <Document
          file="/Asset/demoSample1.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      {/* form part */}
      <div className="my-5 text-sm text-gray-600 dark:text-white">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label htmlFor="name" className="font-bold ">
                {lName}
              </label>
              <CInput type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email" className="font-bold ">
                {lEmail}
              </label>
              <CInput type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="font-bold ">
                {lPhoneNumber}
              </label>
              <CInput type="text" id="phoneNumber" required />
            </div>
            <div>
              <label htmlFor="currentLocation" className="font-bold  ">
                {lCurrentLocation}
              </label>
              <CDropdown
                options={options}
                value={selectOption}
                onChange={handleSelectOption}
              />
            </div>
            <div>
              <label htmlFor="currentAddress" className="font-bold ">
                {lCurrentAddress}
              </label>
              <CInput type="text" id="currentAddress" required />
            </div>
            <div>
              <label htmlFor="universityName" className="font-bold ">
                {lUniversityName}
              </label>
              <CInput type="text" id="universityName" required />
            </div>
            <div>
              <label htmlFor="departmentName" className="font-bold ">
                {lDepartmentName}
              </label>
              <CInput type="text" id="departmentName" required />
            </div>
            <div>
              <label htmlFor="CurrentYear" className="font-bold ">
                {lCurrentYear}
              </label>
              <CDropdown
                id="CurrentYear"
                options={educationYears}
                value={selectYear}
                onChange={handleSelectYear}
              />
            </div>
            <div>
              <label htmlFor="segment" className="font-bold ">
                {lSegment}
              </label>
              <CDropdown
                id="segment"
                options={segments}
                value={selectSegment}
                onChange={handleSelectSegment}
              />
            </div>
            <div>
              <label htmlFor="facebookLink" className="font-bold ">
                {lFbLink}
              </label>
              <CInput type="text" id="facebookLink" required />
            </div>
          </div>
          <TeachingSubjects subjects={subjects} label={lSubject} />

          <div className="my-5">
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
