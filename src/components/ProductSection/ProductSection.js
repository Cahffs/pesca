import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSection.css';

const ProductSection = ({ 
  title, 
  subtitle, 
  products, 
  showViewMore = false, 
  viewMoreText = "Ver Mais", 
  onViewMore,
  backgroundColor = 'transparent'
}) => {
  const titleStyle = {
    color: '#53632F'
  };

  const dividerStyle = {
    backgroundColor: '#A7672A',
    height: '3px',
    width: '80px'
  };

  return (
    <section className="py-5" style={{ backgroundColor }}>
      <div className="container">
        {/* Cabeçalho com título e botão Ver Mais */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div className="text-center text-md-start">
            <h2 className="fw-bold" style={titleStyle}>{title}</h2>
            <p className="text-muted">{subtitle}</p>
            <div style={dividerStyle}></div>
          </div>
          
          {showViewMore && (
            <button 
              className="btn btn-outline d-none d-md-block"
              onClick={onViewMore}
              style={{
                color: '#A7672A',
                borderColor: '#A7672A',
                fontWeight: '500'
              }}
            >
              {viewMoreText} <i className="bi bi-arrow-right ms-1"></i>
            </button>
          )}
        </div>
        
        {/* Grid de Produtos */}
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-lg-3 col-md-6">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* Botão Ver Mais (mobile) */}
        {showViewMore && (
          <div className="text-center mt-4 d-block d-md-none">
            <button 
              className="btn text-white"
              onClick={onViewMore}
              style={{
                backgroundColor: '#A7672A',
                borderColor: '#A7672A'
              }}
            >
              {viewMoreText} <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;