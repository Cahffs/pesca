import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; 

const Navbar = () => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  
  const navbarStyle = {
    backgroundColor: '#53632F',
  };

  const buttonStyle = {
    backgroundColor: '#A7672A',
    borderColor: '#A7672A',
    color: 'white'
  };

  const categoriesStyle = {
    backgroundColor: '#445427',
  };

  return (
    <>
      {/* Primeira linha da Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark py-2" style={navbarStyle}>
        <div className="container-fluid">
          {/* Logo - Esquerda */}
          <div className="d-flex align-items-center" style={{ width: '25%' }}>
            <a className="navbar-brand ms-3" href="/">
              <img 
                src="/images/logo-navbar.jpg" 
                alt="Cuesta Pesca e Camping" 
                className="img-fluid"
                style={{ maxHeight: '60px', width: 'auto' }}
              />
            </a>
          </div>

          {/* Search Bar - Centro */}
          <div className="d-flex justify-content-center" style={{ width: '50%' }}>
            <div className="input-group" style={{ maxWidth: '500px' }}>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar varas, anzóis, iscas..." 
              />
              <button 
                className="btn text-white" 
                style={buttonStyle} 
                type="button"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          {/* Conta e Carrinho - Direita */}
          <div className="d-flex justify-content-end" style={{ width: '25%' }}>
            {/* Botão direto para Minha Conta */}
            <button 
              className="btn btn-outline-light me-3"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/minhaconta');
              }}
            >
              <i className="bi bi-person me-1"></i>
              Minha Conta
            </button>
            
            {/* Botão do Carrinho */}
            <button 
              className="btn btn-outline-light position-relative"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/cart');
              }}
            >
              <i className="bi bi-cart3"></i>
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={buttonStyle}>
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Segunda linha - Categorias */}
      <nav className="navbar navbar-expand py-1" style={categoriesStyle}>
        <div className="container-fluid justify-content-center">
          <div className="navbar-nav d-flex flex-row gap-4">
            <a 
              className="nav-link text-white" 
              href="/pesca"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
                navigate('/pesca');
              }}
            >
              <i className="bi bi-fish me-1"></i>
              Pesca
            </a>
            <a 
              className="nav-link text-white" 
              href="/camping"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
                navigate('/camping');
              }}
            >
              <i className="bi bi-tent me-1"></i>
              Camping
            </a>
            <a 
              className="nav-link text-white" 
              href="/kits"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
                navigate('/kits');
              }}
            >
              <i className="bi bi-box-seam me-1"></i>
              Kits
            </a>
            <a 
              className="nav-link text-white" 
              href="/vestuario"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
                navigate('/vestuario');
              }}
            >
              <i className="bi bi-person me-1"></i>
              Vestuário
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;