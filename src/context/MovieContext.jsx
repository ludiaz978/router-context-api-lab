import React, { createContext, useState } from 'react';


const MovieContext = createContext();


const MovieProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState(''); 
    const [searchResults, setSearchResults] = useState([]);
  
    return (
      <MovieContext.Provider value={{ searchTerm, setSearchTerm, searchResults, setSearchResults }}>
        {children}
      </MovieContext.Provider>
    );
  };


  export { MovieProvider, MovieContext };