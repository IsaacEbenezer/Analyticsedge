import React, { useState, useEffect } from "react";

const DataGrid = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [displayData, setDisplayData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize, searchKeyword, sortKey, sortDirection]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / pageSize));
  }, [data, pageSize]);

  const fetchData = () => {
    let filteredData = data;

    if (searchKeyword) {
      filteredData = data.filter((row) => {
        return Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchKeyword.toLowerCase())
        );
      });
    }

    if (sortKey) {
      filteredData.sort((a, b) => {
        const valueA = a[sortKey];
        const valueB = b[sortKey];

        if (valueA < valueB) {
          return sortDirection === "asc" ? -1 : 1;
        } else if (valueA > valueB) {
          return sortDirection === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });
    }

    if (pageSize >= filteredData.length) {
      setDisplayData(filteredData);
    } else {
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      const paginatedData = filteredData.slice(start, end);
      setDisplayData(paginatedData);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (e) => {
    const newPageSize = Number(e.target.value);
    setPageSize(newPageSize);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchData();
  };

  const handleSort = (column) => {
    if (column === sortKey) {
      // If the same column is clicked again, toggle the sorting direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(column);
      setSortDirection("asc");
    }
  };

  return (
    <div>
      <span className="text-lg font-serif">Page Size: </span>
      <select
        value={pageSize}
        onChange={handlePageSizeChange}
        className="px-2 py-1 rounded bg-gray-200"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <br />
      <div className="mt-4 flex">
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="Search..."
          className="px-2 py-1 rounded bg-gray-200"
        />
        <button
          onClick={handleSearch}
          className="px-3 py-1 ml-2 rounded bg-gray-500 text-gray-800 hover:bg-gray-600 hover:text-white"
        >
          Search
        </button>
      </div>
      <table className="mt-4">
        <thead>
           <tr>
            {columns.map((column) => (
              <th key={column} className="border px-4 py-2">
                {column}
                <button
                  onClick={() => handleSort(column)}
                  className="ml-2"
                >
                  {sortKey === column && sortDirection === "asc" ? (
                    <span>&uarr;</span>
                  ) : (
                    <span>&darr;</span>
                  )}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column} className="border px-4 py-2">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-gray-500 mt-4 flex justify-center overflow-x-auto">
        <div className="bg-gray-500 mt-4 flex flex-wrap justify-center">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                disabled={currentPage === page}
                className={`px-3 py-1 mx-1 mb-2 rounded ${
                  currentPage === page
                    ? "bg-gray-700 text-white"
                    : "bg-gray-500 text-gray-800 hover:bg-gray-600 hover:text-white"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default DataGrid;
