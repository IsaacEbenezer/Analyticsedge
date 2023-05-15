import React, { useState } from 'react';

const GlobalSearch = ({ onGlobalSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    onGlobalSearch(searchValue);
  };

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
      <button onClick={handleSearchSubmit}>Search</button>
    </div>
  );
};

export default GlobalSearch;
