import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link to="/cart">Cart Page</Link></li>
        <li><Link to="/collections/frontpage">Collection Page</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;