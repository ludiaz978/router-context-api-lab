import React from 'react';
import MovieList from '../components/MovieList'; 
import SearchBar from '../components/SearchBar'; 



function SearchPage() {
    
    const movies = []; 
    const isLoading = false; 
  
    
    const handleSearch = (searchTerm) => {
     
      console.log('Search initiated with term:', searchTerm);
     
    }
  
    return (
      <div className="search-page">
        <SearchBar onSearch={handleSearch} />
        <MovieList movies={movies} isLoading={isLoading} />
      </div>
    );
  }
  
  export default SearchPage;
  