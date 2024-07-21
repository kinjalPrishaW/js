import React from 'react';

function SearchBar({ searchQuery, setSearchQuery, searchInputRef }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        ref={searchInputRef}
      />
    </div>
  );
}

export default SearchBar;


