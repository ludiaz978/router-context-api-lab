import React from 'react';
import SearchBar from '../components/SearchBar'; 


function HomePage() {
    return (
      <div className="home-page">
        <h1>Welcome to Movie Search App</h1>
        <p>Find information about your favorite movies!</p>
        <SearchBar />
      </div>
    );
  }
  
  export default HomePage;
  