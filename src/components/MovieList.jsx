import React from 'react';
import MovieItem from './MovieItem'; 

function MovieList({ movies, isLoading }) {
    if (isLoading) {
      return <p>Loading...</p>; // Display a "Loading..." message while fetching the movies
    }
  
    if (movies.length === 0) {
      return <p>No movies found.</p>; // Display a message when no movies are found
    }
  
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
  }
  
  export default MovieList;
  