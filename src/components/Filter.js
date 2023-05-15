import React, { useState } from 'react';

const Filter = ({ columns, onFilterChange }) => {
  const [selectedColumn, setSelectedColumn] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleColumnChange = (e) => {
    setSelectedColumn(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilterSubmit = () => {
    onFilterChange(selectedColumn, filterValue);
  };

  return (
    <div>
      <select value={selectedColumn} onChange={handleColumnChange}>
        <option value="">Select Column</option>
        {columns.map((column) => (
          <option key={column} value={column}>
            {column}
          </option>
        ))}
      </select>
      <input type="text" value={filterValue} onChange={handleFilterChange} />
      <button onClick={handleFilterSubmit}>Filter</button>
    </div>
  );
};

export default Filter;
