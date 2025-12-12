import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { formatPrice, formatDiscountPercentage } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct({
        ...foundProduct,
        additionalImages: [
          foundProduct.image,
          "/images/products/extra1.jpg",
          "/images/products/extra2.jpg",
          "/images/products/extra3.jpg"
        ]
      });
    }
  }, [id]);

  // Função para formatar o nome da categoria
  const getCategoryName = (category) => {
    switch(category) {
      case 'pesca':
        return 'Pesca';
      case 'camping':
        return 'Camping';
      case 'kits':
        return 'Coleções Especiais';
      case 'vestuario':
        return 'Vestuário';
      default:
        return category;
    }
  };

  // Função para formatar o nome da subcategoria
  const getSubcategoryName = (product) => {
    if (!product) return '';
    
    const { category, subcategory } = product;
    
    // Mapeamento das subcategorias principais
    const subcategoryMap = {
      pesca: {
        'varas': 'Varas de Pesca',
        'carretilhas-molinetes': 'Carretilhas e Molinetes',
        'linhas': 'Linhas de Pesca',
        'iscas': 'Iscas',
        'ancas-terminais': 'Anzóis e Terminais',
        'acessorios': 'Acessórios'
      },
      camping: {
        'barracas': 'Barracas',
        'cozinha': 'Cozinha',
        'abrigo-conforto': 'Abrigo e Conforto',
        'cozinha-hidratacao': 'Cozinha e Hidratação',
        'iluminacao-ferramentas': 'Iluminação e Ferramentas'
      },
      kits: {
        'kits-prontos': 'Kits Prontos',
        'outlet-promocoes': 'Outlet / Promoções',
        'iniciante': 'Kits Iniciante',
        'bass': 'Kits Bass',
        'praia': 'Kits Praia',
        'camping': 'Kits Camping'
      },
      vestuario: {
        'camisetas': 'Camisetas',
        'calcas': 'Calças',
        'jaquetas': 'Jaquetas',
        'acessorios': 'Acessórios',
        'camisas-protecao-uv': 'Camisas Proteção UV',
        'bones-chapeus': 'Bonés e Chapéus',
        'oculos-polarizados': 'Óculos Polarizados',
        'coletes-salva-vidas': 'Coletes Salva-vidas',
        'calcados-protecao': 'Calçados de Proteção',
        'luvas-protecao': 'Luvas de Proteção'
      }
    };
    
    return subcategoryMap[category]?.[subcategory] || subcategory || '';
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    
    setIsAddingToCart(true);
    addToCart(product, quantity);
    
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  const handleBuyNow = () => {
    if (!product) return;
    
    addToCart(product, quantity);
    window.scrollTo(0, 0);
    navigate('/cart');
  };

  const buttonStyle = {
    backgroundColor: '#A7672A',
    borderColor: '#A7672A',
    color: 'white'
  };

  const secondaryButtonStyle = {
    backgroundColor: '#53632F',
    borderColor: '#53632F',
    color: 'white'
  };

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="mt-3">Carregando produto...</p>
      </div>
    );
  }

  return (
    <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Breadcrumb atualizado */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" style={{ color: '#53632F', textDecoration: 'none' }}>
                <i className="bi bi-house me-1"></i>
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a 
                href="#" 
                style={{ color: '#53632F', textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/products?category=${product.category}`);
                }}
              >
                {getCategoryName(product.category)}
              </a>
            </li>
            {getSubcategoryName(product) && (
              <li className="breadcrumb-item">
                <a 
                  href="#"
                  style={{ color: '#53632F', textDecoration: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/products?category=${product.category}&subcategory=${product.subcategory}`);
                  }}
                >
                  {getSubcategoryName(product)}
                </a>
              </li>
            )}
            <li className="breadcrumb-item active" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="row g-5">
          {/* Coluna de Imagens */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12 mb-4">
                <div 
                  className="border rounded-3 overflow-hidden"
                  style={{ height: '400px', backgroundColor: 'white' }}
                >
                  <img
                    src={product.additionalImages?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
              
              <div className="col-12">
                <div className="d-flex gap-2 justify-content-center">
                  {product.additionalImages?.map((img, index) => (
                    <div
                      key={index}
                      className={`border rounded-2 cursor-pointer ${selectedImage === index ? 'border-2 border-success' : ''}`}
                      style={{ 
                        width: '80px', 
                        height: '80px',
                        cursor: 'pointer',
                        borderColor: selectedImage === index ? '#A7672A' : '#dee2e6'
                      }}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna de Informações */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              {/* Categoria e Nome - Atualizado */}
              <div className="mb-3">
                <span className="badge rounded-pill mb-2" style={secondaryButtonStyle}>
                  {getCategoryName(product.category)}
                </span>
                {getSubcategoryName(product) && (
                  <span className="badge rounded-pill mb-2 ms-2" style={{ backgroundColor: '#6c757d', color: 'white' }}>
                    {getSubcategoryName(product)}
                  </span>
                )}
                <h1 className="h2 fw-bold mt-2" style={{ color: '#53632F' }}>
                  {product.name}
                </h1>
              </div>

              {/* Preço */}
              <div className="mb-4">
                <div className="d-flex align-items-center gap-3">
                  <span className="h2 text-danger fw-bold mb-0">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <>
                      <span className="h5 text-muted text-decoration-line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="badge bg-success fs-6">
                        {formatDiscountPercentage(product.originalPrice, product.price)}
                      </span>
                    </>
                  )}
                </div>
                {product.originalPrice && product.originalPrice > product.price && (
                  <p className="text-success mb-0">
                    <i className="bi bi-arrow-down-circle me-1"></i>
                    Economize {formatPrice(product.originalPrice - product.price)}
                  </p>
                )}
              </div>

              {/* Descrição */}
              <div className="mb-4">
                <h5 className="fw-bold" style={{ color: '#53632F' }}>Descrição</h5>
                <p className="text-muted">{product.description}</p>
              </div>

              {/* Características */}
              <div className="mb-4">
                <h5 className="fw-bold mb-3" style={{ color: '#53632F' }}>Características</h5>
                <div className="row">
                  {product.features.map((feature, index) => (
                    <div key={index} className="col-md-6 mb-2">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantidade e Ações */}
              <div className="border-top pt-4">
                <div className="row g-3 align-items-center">
                  <div className="col-md-4">
                    <label className="form-label fw-bold" style={{ color: '#53632F' }}>
                      Quantidade:
                    </label>
                    <div className="input-group input-group-lg">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={quantity}
                        readOnly
                        style={{ backgroundColor: 'white' }}
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => handleQuantityChange(1)}
                        disabled={quantity >= 10}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="d-grid gap-2 d-md-flex">
                      <button
                        className="btn btn-lg flex-fill text-white"
                        style={buttonStyle}
                        onClick={handleAddToCart}
                        disabled={isAddingToCart}
                      >
                        {isAddingToCart ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Adicionando...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-cart-plus me-2"></i>
                            {isInCart(product.id) ? 'Adicionar Mais' : 'Adicionar ao Carrinho'}
                          </>
                        )}
                      </button>
                      <button
                        className="btn btn-lg flex-fill text-white"
                        style={secondaryButtonStyle}
                        onClick={handleBuyNow}
                      >
                        <i className="bi bi-lightning me-2"></i>
                        Comprar Agora
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações Adicionais */}
              <div className="mt-4 pt-3 border-top">
                <div className="row text-center">
                  <div className="col-4">
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-truck fs-4" style={{ color: '#A7672A' }}></i>
                      <small className="fw-bold">Frete Grátis</small>
                      <small className="text-muted">Acima de R$ 199</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-shield-check fs-4" style={{ color: '#A7672A' }}></i>
                      <small className="fw-bold">Garantia</small>
                      <small className="text-muted">12 meses</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-arrow-repeat fs-4" style={{ color: '#A7672A' }}></i>
                      <small className="fw-bold">Devolução</small>
                      <small className="text-muted">30 dias</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Produtos Relacionados - Atualizado */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="fw-bold mb-4" style={{ color: '#53632F' }}>
              Produtos Relacionados
            </h3>
            <div className="row g-3">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map(relatedProduct => (
                  <div key={relatedProduct.id} className="col-lg-3 col-md-6">
                    <div 
                      className="card h-100 shadow-sm border-0 cursor-pointer"
                      onClick={() => navigate(`/product/${relatedProduct.id}`)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img 
                        src={relatedProduct.image} 
                        className="card-img-top" 
                        alt={relatedProduct.name}
                        style={{ height: '150px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <h6 className="card-title" style={{ color: '#53632F' }}>
                          {relatedProduct.name}
                        </h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-danger fw-bold">
                            {formatPrice(relatedProduct.price)}
                          </span>
                          <button 
                            className="btn btn-sm text-white"
                            style={{ backgroundColor: '#A7672A', borderColor: '#A7672A' }}
                          >
                            <i className="bi bi-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;