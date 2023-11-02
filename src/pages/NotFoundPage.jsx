import React from 'react';
import { Link } from 'react-router-dom'; 


function NotFoundPage() {
    return (
      <div className="not-found-page">
        <h2>404: Page Not Found</h2>
        <p>The page you are looking for doesn't exist.</p>
        <Link to="/">Back to Home</Link> 
      </div>
    );
  }
  
  export default NotFoundPage;
  