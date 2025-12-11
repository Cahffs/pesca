import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Pesca from './pages/Pesca/Pesca';
import Cart from './pages/Cart/Cart';
import AccountPage from './pages/AccountPage/AccountPage';

import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/pesca" element={<Pesca />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/minhaconta" element={<AccountPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;