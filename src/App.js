import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; // Importar o Footer
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Pesca from './pages/Pesca/Pesca';
import Cart from './pages/Cart/Cart';
import AccountPage from './pages/AccountPage/AccountPage';
import Camping from './pages/Camping/Camping';
import Vestuario from './pages/Vestuario/Vestuario';
import ColecoesEspeciais from './pages/ColecoesEspeciais/ColecoesEspeciais';
import AboutPage from './pages/AboutPage/AboutPage';
import BrandPage from './pages/BrandPage/BrandPage';


import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/pesca" element={<Pesca />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/minhaconta" element={<AccountPage />} />
              <Route path="/camping" element={<Camping />} />
              <Route path="/vestuario" element={<Vestuario />} />
              <Route path="/kits" element={<ColecoesEspeciais />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/brand" element={<BrandPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;