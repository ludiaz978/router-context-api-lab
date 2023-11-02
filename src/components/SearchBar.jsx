import React, { useState } from 'react';



function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    // Function to handle the input change
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    // Function to handle the search when the button is clicked
    const handleSearch = () => {
      onSearch(searchTerm);
    };
  
    // Function to handle search on pressing the Enter key
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        onSearch(searchTerm);
      }
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  }
  
  export default SearchBar;
  