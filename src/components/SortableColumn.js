import React from 'react';

const SortableColumn = ({ column, sortOrder, onSortChange }) => {
  const handleSortChange = () => {
    onSortChange(column);
  };

  return (
    <th>
      <button onClick={handleSortChange}>
        {column} {sortOrder === 'asc' ? '▲' : '▼'}
      </button>
    </th>
  );
};

export default SortableColumn;
