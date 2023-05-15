import React from 'react';

const Pagination = ({
  total,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.ceil(total / pageSize);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const handlePageSizeChange = (e) => {
    onPageSizeChange(Number(e.target.value));
  };

  return (
    <div>
      <span>Page Size: </span>
      <select value={pageSize} onChange={handlePageSizeChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <br />
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          disabled={currentPage === number}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
