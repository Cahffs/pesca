import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice, formatDiscountPercentage } from '../../utils/formatters';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  
  const handleProductClick = () => {
    window.scrollTo(0, 0);
    navigate(`/product/${product.id}`);
  };

  const buttonStyle = {
    backgroundColor: '#A7672A',
    borderColor: '#A7672A',
    color: 'white'
  };

  // Calcular desconto (se houver)
  const discountPercentage = product.originalPrice && product.originalPrice > product.price
    ? formatDiscountPercentage(product.originalPrice, product.price)
    : null;

  return (
    <div 
      className="card h-100 shadow-sm" 
      style={{ border: '1px solid #e0e0e0', transition: 'all 0.3s ease' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      }}
    >
      {product.bestSeller && (
        <span 
          className="position-absolute top-0 start-0 translate-middle-y badge rounded-pill text-white px-3"
          style={{ backgroundColor: '#A7672A', fontSize: '0.8rem' }}
        >
          Mais Vendido
        </span>
      )}
      
      {discountPercentage && (
        <span 
          className="position-absolute top-0 end-0 translate-middle-y badge rounded-pill bg-danger px-3"
          style={{ fontSize: '0.8rem' }}
        >
          {discountPercentage}
        </span>
      )}
      
      <img 
        src={product.image} 
        className="card-img-top" 
        alt={product.name}
        style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={handleProductClick}
      />
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ color: '#53632F', cursor: 'pointer' }} onClick={handleProductClick}>
          {product.name}
        </h5>
        <p className="card-text text-muted small flex-grow-1">{product.description}</p>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <span className="h5 text-danger mb-0">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <small className="text-muted text-decoration-line-through ms-2">
                  {formatPrice(product.originalPrice)}
                </small>
              )}
            </div>
          </div>
          
          <button 
            className="btn w-100 text-white"
            style={buttonStyle}
            onClick={handleProductClick}
          >
            <i className="bi bi-eye me-2"></i>
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;