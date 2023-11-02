import axios from 'axios';


const API_KEY = process.env.OMDB_API_KEY;

const BASE_URL = "http://www.omdbapi.com/";


const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: searchTerm, 
      },
    });

    
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};


const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: id, // Use the provided IMDb ID
      },
    });

   
    return response.data;
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
}

export { fetchMovies, fetchMovieById };
