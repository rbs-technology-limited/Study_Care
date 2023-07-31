import { useState } from "react";
import Select from "react-tailwindcss-select";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";

type IPaginationProps = {
  currentPage: number;
  totalPages: number;
  coursePerPage: number;
  onPageChange: (pageNumber: number, coursePerPage: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  coursePerPage,
  onPageChange,
}: IPaginationProps) => {
  // Calculate the start and end index of visible page numbers
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const showStartEllipsis = startPage > 1;
  const showEndEllipsis = endPage < totalPages;

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  // const pageNumbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const [selectedCoursePerPage, setSelectedCoursePerPage] =
    useState<SelectValue>({ value: "5", label: "5 per page" });

  const options = [
    { value: "5", label: "5 per page" },
    { value: "10", label: "10 per page" },
    { value: "15", label: "20 per page" },
  ];

  return (
    <div className="pagination mt-8 flex flex-col md:flex-row gap-4 justify-center w-full">
      <div className="w-full md:w-9/12">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1, coursePerPage)}
          className={`w-20 px-1 py-2 border rounded-md  text-gray-800 dark:text-white 
          ${
            currentPage === 1
              ? "bg-gray-200 dark:bg-gray-500"
              : "bg-white dark:bg-transparent"
          }
          ${showStartEllipsis ? "mr-0" : "mr-1"}`}
        >
          Prev
        </button>

        {showStartEllipsis && <span className="px-1 py-2">...</span>}

        {pageNumbers.map((pageNumber, index) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber, coursePerPage)}
            disabled={pageNumber === currentPage}
            className={`w-16 px-1 py-2 border  my-1 md:my-0 
            ${index === 0 ? "rounded-tl-lg rounded-bl-lg" : ""} 
            ${
              index === pageNumbers.length - 1
                ? "rounded-tr-lg rounded-br-lg"
                : ""
            }
            ${
              pageNumber === currentPage
                ? "bg-button-teal dark:bg-custom-orange text-white"
                : "bg-white dark:bg-transparent text-gray-800 dark:text-white"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        {showEndEllipsis && <span className="px-1 py-2">...</span>}

        <button
          onClick={() => {
            if (currentPage !== totalPages) {
              onPageChange(currentPage + 1, coursePerPage);
            }
          }}
          disabled={currentPage === totalPages}
          className={`w-20 px-1 py-2 my-1 md:my-0 border rounded-md text-gray-800 dark:text-white 
          ${
            currentPage === totalPages
              ? "bg-gray-200 dark:bg-gray-500"
              : "bg-white dark:bg-transparent"
          }
          ${showEndEllipsis ? "ml-0" : "ml-1"}`}
        >
          Next
        </button>
      </div>
      {/* <select
        value={coursePerPage}
        onChange={(e) =>
          onPageChange(currentPage, parseInt(e.target.value, 10))
        }
      >
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
      </select> */}
      <div className="w-full md:w-3/12">
        <Select
          value={selectedCoursePerPage}
          primaryColor="#6366F1"
          placeholder="course per page*"
          // required
          onChange={(value: SelectValue) => setSelectedCoursePerPage(value)}
          // isClearable={true}
          options={options}
          classNames={{
            menuButton: ({ isDisabled }: any) =>
              `flex text-sm text-gray-500 dark:text-white border border-gray-300 rounded shadow-sm transition-all duration-300 my-0.5 focus:outline-none ${
                isDisabled
                  ? "bg-gray-200"
                  : "bg-white dark:bg-transparent hover:border-gray-400 focus:border-primary focus:ring focus:ring-primary/20"
              }`,
            menu: "absolute z-10 w-full bg-white dark:bg-transparent shadow-lg border rounded py-1 text-sm text-gray-700 dark:text-white",
            listItem: ({ isSelected }: any) =>
              `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded border my-0.5 ${
                isSelected
                  ? `text-white bg-button-teal dark:bg-custom-orange`
                  : `text-gray-800 dark:text-white hover:bg-primary/10 hover:text-button-teal dark:hover:text-custom-orange`
              }`,
            listDisabledItem:
              "block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded text-gray-500 bg-gray-200",
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
