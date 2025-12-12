import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import './Pesca.css';

const Pesca = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSpecific, setSelectedSpecific] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState(null);
  const [sortBy, setSortBy] = useState('relevancia');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // ESTRUTURA CORRETA baseada no seu banco de dados
  const menuStructure = [
    {
      id: 'varas',
      name: 'Varas de Pesca',
      icon: 'bi-bicycle',
      subcategories: [
        { 
          id: 'varas-molinete', 
          name: 'Varas para Molinete',
          specificCategory: 'molinete'
        },
        { 
          id: 'varas-carretilha', 
          name: 'Varas para Carretilha',
          specificCategory: 'carretilha'
        },
        { 
          id: 'varas-telescopica', 
          name: 'Varas Telescópicas',
          specificCategory: 'telescopica'
        },
        { 
          id: 'varas-praia', 
          name: 'Varas de Praia',
          specificCategory: 'praia'
        },
        { 
          id: 'varas-pesada', 
          name: 'Varas para Pesca Pesada',
          specificCategory: 'pesada'
        }
      ]
    },
    {
      id: 'carretilhas-molinetes',
      name: 'Carretilhas e Molinetes',
      icon: 'bi-gear-wide-connected',
      subcategories: [
        { 
          id: 'molinetes', 
          name: 'Molinetes',
          specificCategory: 'molinete'
        },
        { 
          id: 'carretilhas-baixo', 
          name: 'Carretilhas de Perfil Baixo',
          specificCategory: 'carretilha-baixo-perfil'
        },
        { 
          id: 'carretilhas-alto', 
          name: 'Carretilhas de Perfil Alto',
          specificCategory: 'carretilha-alto-perfil'
        },
        { 
          id: 'pecas-manutencao', 
          name: 'Peças e Manutenção',
          specificCategory: 'pecas-manutencao'
        }
      ]
    },
    {
      id: 'linhas',
      name: 'Linhas de Pesca',
      icon: 'bi-hurricane',
      subcategories: [
        { 
          id: 'monofilamento', 
          name: 'Monofilamento',
          specificCategory: 'monofilamento'
        },
        { 
          id: 'multifilamento', 
          name: 'Multifilamento',
          specificCategory: 'multifilamento'
        },
        { 
          id: 'fluorocarbon', 
          name: 'Fluorocarbon',
          specificCategory: 'fluorocarbon'
        }
      ]
    },
    {
      id: 'iscas',
      name: 'Iscas',
      icon: 'bi-fish',
      subcategories: [
        { 
          id: 'iscas-artificiais', 
          name: 'Iscas Artificiais',
          subitems: [
            { id: 'isca-artificial-superficie', name: 'Superfície e Zara' },
            { id: 'isca-artificial-meia-agua', name: 'Meia-água' },
            { id: 'isca-artificial-fundo', name: 'Fundo e Jigs' },
            { id: 'isca-soft', name: 'Soft' },
            { id: 'isca-natural', name: 'Iscas Naturais' }
          ]
        },
        { 
          id: 'massas', 
          name: 'Massas Prontas',
          specificCategory: 'massas'
        }
      ]
    },
    {
      id: 'ancas-terminais',
      name: 'Anzóis e Terminais',
      icon: 'bi-shield-check',
      subcategories: [
        { 
          id: 'anzois', 
          name: 'Anzóis',
          specificCategory: 'anzóis'
        },
        { 
          id: 'garateias', 
          name: 'Garateias',
          specificCategory: 'garateias'
        },
        { 
          id: 'jig-heads', 
          name: 'Jig Heads',
          specificCategory: 'jig-heads'
        },
        { 
          id: 'chumbadas', 
          name: 'Chumbadas e Pesos',
          specificCategory: 'chumbadas'
        },
        { 
          id: 'boias', 
          name: 'Boias',
          specificCategory: 'boias'
        },
        { 
          id: 'giradores', 
          name: 'Giradores, Snaps e Argolas',
          specificCategory: 'giradores'
        }
      ]
    },
    {
      id: 'acessorios',
      name: 'Acessórios de Apoio',
      icon: 'bi-tools',
      subcategories: [
        { 
          id: 'caixas', 
          name: 'Caixas de Pesca e Estojos Organizadores',
          specificCategory: 'caixas-estojos'
        },
        { 
          id: 'alicates', 
          name: 'Alicates de Contenção e de Corte',
          specificCategory: 'alicates-ferramentas'
        },
        { 
          id: 'facas', 
          name: 'Facas e Canivetes',
          specificCategory: 'facas-canivetes'
        },
        { 
          id: 'pucas', 
          name: 'Puçás e Samburás',
          specificCategory: 'pucas'
        },
        { 
          id: 'suportes', 
          name: 'Suportes de Vara',
          specificCategory: 'suportes-vara'
        }
      ]
    }
  ];

  // Filtrar produtos de pesca
  const fishingProducts = products.filter(p => p.category === 'pesca');

  // Função para contar produtos
  const countProducts = (subcategory, specific) => {
    if (!subcategory && !specific) {
      return fishingProducts.length;
    }
    
    if (specific) {
      // Para subitens de iscas artificiais
      return fishingProducts.filter(p => p.specificCategory === specific).length;
    }
    
    // Para subcategorias com specificCategory direta
    const allSubcategories = menuStructure.flatMap(cat => cat.subcategories);
    const subcatInfo = allSubcategories.find(s => s.id === subcategory);
    
    if (subcatInfo && subcatInfo.specificCategory) {
      return fishingProducts.filter(p => p.specificCategory === subcatInfo.specificCategory).length;
    }
    
    // Para subcategorias com subitems (iscas artificiais)
    if (subcatInfo && subcatInfo.subitems) {
      return subcatInfo.subitems.reduce((total, item) => {
        return total + countProducts(null, item.id);
      }, 0);
    }
    
    return 0;
  };

  // Função para obter nome da seleção atual
  const getCurrentSelectionName = () => {
    if (selectedCategory === 'todas') return 'Todas as Categorias';
    
    const category = menuStructure.find(cat => cat.id === selectedCategory);
    if (!category) return '';
    
    if (selectedSpecific) {
      // Encontrar em subitems (iscas artificiais)
      for (const subcat of category.subcategories) {
        if (subcat.subitems) {
          const item = subcat.subitems.find(i => i.id === selectedSpecific);
          if (item) return item.name;
        }
        if (subcat.specificCategory === selectedSpecific) {
          return subcat.name;
        }
      }
      return '';
    }
    
    if (selectedSubcategory) {
      const subcat = category.subcategories.find(s => s.id === selectedSubcategory);
      return subcat ? subcat.name : '';
    }
    
    return category.name;
  };

  // Filtrar produtos baseado nas seleções
  const filteredProducts = fishingProducts.filter(product => {
    if (selectedCategory === 'todas') {
      return true;
    }
    
    if (selectedCategory && !selectedSubcategory && !selectedSpecific) {
      return product.subcategory === selectedCategory;
    }
    
    if (selectedSpecific) {
      return product.specificCategory === selectedSpecific;
    }
    
    if (selectedSubcategory) {
      // Encontrar a specificCategory da subcategoria
      const category = menuStructure.find(cat => cat.id === selectedCategory);
      if (!category) return false;
      
      const subcat = category.subcategories.find(s => s.id === selectedSubcategory);
      if (!subcat) return false;
      
      if (subcat.specificCategory) {
        return product.specificCategory === subcat.specificCategory;
      }
      
      // Para iscas artificiais, mostra todos os produtos da categoria iscas
      return product.subcategory === selectedCategory;
    }
    
    return true;
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
  }, [selectedCategory, selectedSubcategory, selectedSpecific, sortBy]);

  // Função para mudar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Função para expandir categoria
  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
      setExpandedSubcategory(null);
    } else {
      setExpandedCategory(categoryId);
      setExpandedSubcategory(null);
      setSelectedCategory(categoryId);
      setSelectedSubcategory(null);
      setSelectedSpecific(null);
    }
  };

  // Função para expandir subcategoria
  const toggleSubcategory = (categoryId, subcategoryId) => {
    if (expandedSubcategory === subcategoryId) {
      setExpandedSubcategory(null);
    } else {
      setExpandedSubcategory(subcategoryId);
      setSelectedSubcategory(subcategoryId);
      setSelectedSpecific(null);
    }
  };

  // Função para selecionar categoria principal
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    setSelectedSpecific(null);
    setExpandedCategory(categoryId);
    setExpandedSubcategory(null);
  };

  // Função para selecionar subcategoria específica
  const handleSpecificSelect = (categoryId, subcategoryId, specificId = null) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);
    setSelectedSpecific(specificId || subcategoryId);
    // Se for uma specificCategory direta (não tem subitems)
    const category = menuStructure.find(cat => cat.id === categoryId);
    if (category) {
      const subcat = category.subcategories.find(s => s.id === subcategoryId);
      if (subcat && subcat.specificCategory && !subcat.subitems) {
        setSelectedSpecific(subcat.specificCategory);
      }
    }
  };

  // Gerar números de página para paginação
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
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
    <div className="pesca-page">
      {/* Header */}
      <div className="pesca-header">
        <div className="container">
          <div className="py-3">
            <h1 className="fw-bold mb-1" style={{ color: '#53632F' }}>Equipamentos de Pesca</h1>
            <p className="text-muted mb-0">
              {sortedProducts.length} produtos encontrados
              {selectedCategory !== 'todas' && ` em ${getCurrentSelectionName()}`}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          {/* Menu Lateral Expansível */}
          <div className="col-lg-3 col-md-4 mb-4">
            <div className="filtro-sidebar card border-0 shadow-sm">
              <div className="card-body p-0">
                {/* Botão Todas Categorias */}
                <button
                  className={`menu-category-btn w-100 text-start p-3 border-bottom ${selectedCategory === 'todas' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory('todas');
                    setSelectedSubcategory(null);
                    setSelectedSpecific(null);
                    setExpandedCategory(null);
                    setExpandedSubcategory(null);
                  }}
                >
                  <i className="bi bi-grid-3x3-gap me-2"></i>
                  <span className="fw-bold">Todas as Categorias</span>
                  <span className="badge rounded-pill float-end" style={{ backgroundColor: '#A7672A' }}>
                    {fishingProducts.length}
                  </span>
                </button>

                {/* Categorias do Menu */}
                {menuStructure.map((category) => {
                  const isCategoryExpanded = expandedCategory === category.id;
                  const isCategorySelected = selectedCategory === category.id && !selectedSubcategory && !selectedSpecific;
                  const categoryCount = fishingProducts.filter(p => p.subcategory === category.id).length;
                  
                  return (
                    <div key={category.id} className="border-bottom">
                      {/* Botão da Categoria Principal */}
                      <button
                        className={`menu-category-btn w-100 text-start p-3 d-flex justify-content-between align-items-center ${isCategorySelected ? 'active' : ''}`}
                        onClick={() => toggleCategory(category.id)}
                      >
                        <div>
                          <i className={`bi ${category.icon} me-2`}></i>
                          <span className="fw-bold">{category.name}</span>
                        </div>
                        <div>
                          <span className="badge rounded-pill me-2" style={{ backgroundColor: '#A7672A', fontSize: '0.7rem' }}>
                            {categoryCount}
                          </span>
                          <i className={`bi ${isCategoryExpanded ? 'bi-chevron-up' : 'bi-chevron-down'} small`}></i>
                        </div>
                      </button>

                      {/* Subcategorias (expansível) */}
                      {isCategoryExpanded && (
                        <div className="subcategory-menu bg-light">
                          {category.subcategories.map((subcategory) => {
                            const isSubcategoryExpanded = expandedSubcategory === subcategory.id;
                            const hasSubitems = subcategory.subitems && subcategory.subitems.length > 0;
                            const subcategoryCount = countProducts(subcategory.id, null);
                            
                            if (subcategoryCount === 0) return null;
                            
                            return (
                              <div key={subcategory.id} className="border-top">
                                {/* Botão da Subcategoria */}
                                <button
                                  className={`subcategory-btn w-100 text-start p-3 d-flex justify-content-between align-items-center ${selectedSubcategory === subcategory.id && !selectedSpecific ? 'active' : ''}`}
                                  onClick={() => hasSubitems ? toggleSubcategory(category.id, subcategory.id) : handleSpecificSelect(category.id, subcategory.id)}
                                >
                                  <span className="ps-3">{subcategory.name}</span>
                                  <div>
                                    {hasSubitems && (
                                      <i className={`bi ${isSubcategoryExpanded ? 'bi-chevron-up' : 'bi-chevron-down'} me-2 small`}></i>
                                    )}
                                    <span className="badge rounded-pill" style={{ 
                                      backgroundColor: '#A7672A',
                                      fontSize: '0.7rem'
                                    }}>
                                      {subcategoryCount}
                                    </span>
                                  </div>
                                </button>

                                {/* Subitens (para iscas artificiais) */}
                                {hasSubitems && isSubcategoryExpanded && (
                                  <div className="subitems-menu">
                                    {subcategory.subitems.map((item) => {
                                      const itemCount = countProducts(null, item.id);
                                      if (itemCount === 0) return null;
                                      
                                      return (
                                        <div key={item.id} className="border-top">
                                          <button
                                            className={`subitem-btn w-100 text-start p-3 d-flex justify-content-between align-items-center ${selectedSpecific === item.id ? 'active' : ''}`}
                                            onClick={() => handleSpecificSelect(category.id, subcategory.id, item.id)}
                                          >
                                            <span className="ps-5">{item.name}</span>
                                            <span className="badge rounded-pill" style={{ 
                                              backgroundColor: selectedSpecific === item.id ? '#53632F' : '#A7672A',
                                              fontSize: '0.7rem'
                                            }}>
                                              {itemCount}
                                            </span>
                                          </button>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Botão Limpar Filtros */}
                <div className="p-3 border-top">
                  <button
                    className="btn btn-sm w-100 text-white"
                    style={{ backgroundColor: '#53632F' }}
                    onClick={() => {
                      setSelectedCategory('todas');
                      setSelectedSubcategory(null);
                      setSelectedSpecific(null);
                      setExpandedCategory(null);
                      setExpandedSubcategory(null);
                    }}
                  >
                    <i className="bi bi-x-circle me-2"></i>
                    Limpar Filtros
                  </button>
                </div>
              </div>
            </div>

            {/* Banner Lateral */}
            <div className="card border-0 shadow-sm mt-4" style={{ backgroundColor: '#f0f4e8' }}>
              <div className="card-body text-center">
                <i className="bi bi-tag-fill fs-1 mb-3" style={{ color: '#A7672A' }}></i>
                <h6 className="fw-bold" style={{ color: '#53632F' }}>Ofertas Especiais</h6>
                <p className="small text-muted mb-3">Frete grátis em compras acima de R$ 199</p>
                <button 
                  className="btn btn-sm text-white"
                  style={{ backgroundColor: '#A7672A' }}
                  onClick={() => navigate('/')}
                >
                  Ver Ofertas
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Produtos */}
          <div className="col-lg-9 col-md-8">
            {/* Barra de Ordenação */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <span className="text-muted">
                  Mostrando {currentProducts.length} de {sortedProducts.length} produtos
                  {totalPages > 1 && ` (Página ${currentPage} de ${totalPages})`}
                </span>
                {selectedCategory !== 'todas' && (
                  <div className="small text-muted mt-1">
                    Filtro atual: <strong>{getCurrentSelectionName()}</strong>
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

                {/* Paginação */}
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
                  {selectedCategory !== 'todas'
                    ? `Não encontramos produtos em "${getCurrentSelectionName()}"`
                    : 'Tente ajustar os filtros de busca'}
                </p>
                <button 
                  className="btn text-white"
                  style={{ backgroundColor: '#A7672A' }}
                  onClick={() => {
                    setSelectedCategory('todas');
                    setSelectedSubcategory(null);
                    setSelectedSpecific(null);
                    setExpandedCategory(null);
                    setExpandedSubcategory(null);
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

export default Pesca;