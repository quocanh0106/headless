import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../views/HomePage/HomePage';
import ProductPage from '../views/Product/ProductPage';
import CollectionPage from '../views/CollectionPage';
import CartPage from '../views/Cart/CartPage';

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products/:handle" element={<ProductPage />} />
        <Route path="/collections/:handle" element={<CollectionPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}