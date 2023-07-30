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
  const pageNumbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="pagination my-8">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber, coursePerPage)}
          disabled={pageNumber === currentPage}
          className={`px-3 py-2 border ${
            pageNumber === currentPage
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          {pageNumber}
        </button>
      ))}
      <select
        value={coursePerPage}
        onChange={(e) =>
          onPageChange(currentPage, parseInt(e.target.value, 10))
        }
      >
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
      </select>
    </div>
  );
};

export default Pagination;
