import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import './Vestuario.css';

const Vestuario = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('relevancia');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Estrutura hierárquica do menu
  const menuStructure = [
    {
      id: 'camisas-protecao-uv',
      name: 'Camisas de Pesca com Proteção UV',
    },
    {
      id: 'bones-chapeus',
      name: 'Bonés e Chapéus',
    },
    {
      id: 'oculos-polarizados',
      name: 'Óculos Polarizados',
    },
    {
      id: 'coletes-salva-vidas',
      name: 'Coletes Salva-vidas',
    },
    {
      id: 'calcados-protecao',
      name: 'Calçados de Proteção',
    },
    {
      id: 'luvas-protecao',
      name: 'Luvas de Proteção',
    }
  ];

  // Filtrar produtos de vestuário
  const vestuarioProducts = products.filter(p => p.category === 'vestuario');

  // Filtrar produtos baseado nas seleções
  const filteredProducts = vestuarioProducts.filter(product => {
    if (selectedCategory === 'todas') {
      return true;
    }
    
    return product.subcategory === selectedCategory;
  });

  // Ordenar produtos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'preco-crescente':
        return a.price - b.price;
      case 'preco-decrescente':
        return b.price - a.price;
      case 'nome':
        return a.name.localeCompare(b.name);
      case 'relevancia':
      default:
        return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
    }
  });

  // Calcular produtos para página atual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Resetar para página 1 quando filtros mudam
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSubcategory, sortBy]);

  // Função para mudar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Função para selecionar categoria
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
  };

  // Gerar números de página para paginação
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Mostrar todas as páginas
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Lógica para mostrar páginas com "..." no meio
      if (currentPage <= 3) {
        // Primeiras páginas
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Últimas páginas
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Páginas do meio
        pageNumbers.push(1);
        pageNumbers.push('...');
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="vestuario-page">
      {/* Header */}
      <div className="vestuario-header">
        <div className="container">
          <div className="py-3">
            <h1 className="fw-bold mb-1" style={{ color: '#53632F' }}>Vestuário e Proteção</h1>
            <p className="text-muted mb-0">
              {sortedProducts.length} produtos encontrados
              {selectedCategory && selectedCategory !== 'todas' && ` em ${menuStructure
                .find(cat => cat.id === selectedCategory)?.name}`}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          {/* Menu Lateral - MESMO PADRÃO da Pesca (sem números) */}
          <div className="col-lg-3 col-md-4 mb-4">
            <div className="filtro-sidebar card border-0 shadow-sm">
              <div className="card-body p-0">
                {/* Botão Todas Categorias - SEM NÚMERO */}
                <button
                  className={`menu-category-btn w-100 text-start p-3 border-bottom ${selectedCategory === 'todas' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory('todas');
                    setSelectedSubcategory(null);
                    setExpandedCategory(null);
                  }}
                >
                  <span className="fw-bold">Todas as Categorias</span>
                </button>

                {/* Categorias do Menu - SEM ÍCONES, SEM NÚMEROS */}
                {menuStructure.map((category) => (
                  <div key={category.id} className="border-bottom">
                    <button
                      className={`menu-category-btn w-100 text-start p-3 ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => handleCategorySelect(category.id)}
                    >
                      <span className="fw-bold">{category.name}</span>
                    </button>
                  </div>
                ))}

                {/* Botão Limpar Filtros */}
                <div className="p-3 border-top">
                  <button
                    className="btn btn-sm w-100 text-white"
                    style={{ backgroundColor: '#53632F' }}
                    onClick={() => {
                      setSelectedCategory('todas');
                      setSelectedSubcategory(null);
                      setExpandedCategory(null);
                    }}
                  >
                    Limpar Filtros
                  </button>
                </div>
              </div>
            </div>

            {/* Banner Lateral - MESMA COR da Pesca */}
            <div className="card border-0 shadow-sm mt-4" style={{ backgroundColor: '#f0f4e8' }}>
              <div className="card-body text-center">
                <h6 className="fw-bold" style={{ color: '#53632F' }}>Proteção Essencial</h6>
                <p className="small text-muted mb-3">Equipamentos de segurança para sua aventura</p>
                <button 
                  className="btn btn-sm text-white"
                  style={{ backgroundColor: '#A7672A' }}
                  onClick={() => navigate('/ofertas')}
                >
                  Ver Ofertas
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Produtos */}
          <div className="col-lg-9 col-md-8">
            {/* Barra de Ordenação - MESMAS CORES da Pesca */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <span className="text-muted">
                  Mostrando {currentProducts.length} de {sortedProducts.length} produtos
                  {totalPages > 1 && ` (Página ${currentPage} de ${totalPages})`}
                </span>
                {selectedCategory && selectedCategory !== 'todas' && (
                  <div className="small text-muted mt-1">
                    Categoria: <strong>{menuStructure.find(cat => cat.id === selectedCategory)?.name}</strong>
                  </div>
                )}
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2 text-muted">Ordenar por:</span>
                <select 
                  className="form-select form-select-sm" 
                  style={{ width: 'auto', borderColor: '#A7672A' }}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="relevancia">Relevância</option>
                  <option value="nome">Nome (A-Z)</option>
                  <option value="preco-crescente">Menor Preço</option>
                  <option value="preco-decrescente">Maior Preço</option>
                </select>
              </div>
            </div>

            {/* Grid de Produtos */}
            {currentProducts.length > 0 ? (
              <>
                <div className="row g-4">
                  {currentProducts.map(product => (
                    <div key={product.id} className="col-xl-4 col-lg-6 col-md-6">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>

                {/* Paginação - MESMAS CORES da Pesca */}
                {totalPages > 1 && (
                  <nav aria-label="Paginação de produtos" className="mt-5">
                    <ul className="pagination justify-content-center">
                      {/* Botão Anterior */}
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => paginate(currentPage - 1)}
                          aria-label="Página anterior"
                          style={{ 
                            color: '#53632F',
                            borderColor: '#dee2e6'
                          }}
                        >
                          <i className="bi bi-chevron-left"></i>
                        </button>
                      </li>

                      {/* Números de página */}
                      {getPageNumbers().map((number, index) => (
                        <li key={index} className="page-item">
                          {number === '...' ? (
                            <span className="page-link" style={{ borderColor: '#dee2e6' }}>
                              ...
                            </span>
                          ) : (
                            <button
                              className={`page-link ${currentPage === number ? 'active' : ''}`}
                              onClick={() => paginate(number)}
                              style={{
                                backgroundColor: currentPage === number ? '#53632F' : 'transparent',
                                borderColor: '#dee2e6',
                                color: currentPage === number ? 'white' : '#53632F'
                              }}
                            >
                              {number}
                            </button>
                          )}
                        </li>
                      ))}

                      {/* Botão Próximo */}
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => paginate(currentPage + 1)}
                          aria-label="Próxima página"
                          style={{ 
                            color: '#53632F',
                            borderColor: '#dee2e6'
                          }}
                        >
                          <i className="bi bi-chevron-right"></i>
                        </button>
                      </li>
                    </ul>

                    {/* Informação da página */}
                    <div className="text-center mt-2">
                      <small className="text-muted">
                        Página {currentPage} de {totalPages} • {productsPerPage} produtos por página
                      </small>
                    </div>
                  </nav>
                )}
              </>
            ) : (
              <div className="text-center py-5">
                <i className="bi bi-search fs-1 text-muted mb-3"></i>
                <h5 className="fw-bold" style={{ color: '#53632F' }}>Nenhum produto encontrado</h5>
                <p className="text-muted">
                  {selectedCategory && selectedCategory !== 'todas' 
                    ? `Não encontramos produtos na categoria "${menuStructure.find(cat => cat.id === selectedCategory)?.name}"`
                    : 'Tente ajustar os filtros de busca'}
                </p>
                <button 
                  className="btn text-white"
                  style={{ backgroundColor: '#A7672A' }}
                  onClick={() => {
                    setSelectedCategory('todas');
                    setSelectedSubcategory(null);
                    setExpandedCategory(null);
                  }}
                >
                  Limpar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vestuario;