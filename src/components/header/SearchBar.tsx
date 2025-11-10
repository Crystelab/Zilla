import React, { useState } from 'react';

function SearchBar(){
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;