import React from 'react';
import Table from './Table';
import Pagination from './Pagination';
import Filter from './Filter';
import GlobalSearch from './GlobalSearch';

const DataGrid = ({
  columns,
  data,
  total,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
  onFilterChange,
  onGlobalSearch,
  onSortChange,
}) => {
  return (
    <div>
      <GlobalSearch onGlobalSearch={onGlobalSearch} />
      <Filter columns={columns} onFilterChange={onFilterChange} />
      <Table columns={columns} data={data} onSortChange={onSortChange} />
      <Pagination
        total={total}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
};

export default DataGrid;
