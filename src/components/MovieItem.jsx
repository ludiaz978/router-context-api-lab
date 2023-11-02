import React from 'react';



function MovieItem({ movie, onMovieClick }) {
    const { Title, Year, Poster, imdbID } = movie;
  
    return (
      <div className="movie-item">
        <div className="movie-poster">
          <img
            src={Poster}
            alt={Title}
            onClick={() => onMovieClick(imdbID)} 
          />
        </div>
        <div className="movie-details">
          <h3 onClick={() => onMovieClick(imdbID)}>{Title}</h3> 
          <p>{Year}</p>
        </div>
      </div>
    );
  }
  
  export default MovieItem;
  