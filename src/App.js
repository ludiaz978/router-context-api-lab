import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <MovieProvider>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/movie/:id" component={MovieDetailsPage} />
        <Route path="*" component={NotFoundPage} />
      </MovieProvider>
    </Router>
  );
}

export default App;



