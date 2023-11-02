import React from 'react';
import { Link } from 'react-router-dom'; 


function MovieDetailsPage() {
    
    const movie = {
      Title: 'Movie Title',
      Plot: 'Movie Plot goes here.',
      Actors: 'Actor 1, Actor 2, Actor 3',
      Ratings: [
        { Source: 'IMDb', Value: '7.5/10' },
        { Source: 'Rotten Tomatoes', Value: '89%' },
      ],
      
    };
  
    return (
      <div className="movie-details-page">
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <ul>
          {movie.Ratings.map((rating, index) => (
            <li key={index}><strong>{rating.Source}:</strong> {rating.Value}</li>
          ))}
        </ul>
        
        <Link to="/search">Back to Search</Link> 
      </div>
    );
  }
  
  export default MovieDetailsPage;
  