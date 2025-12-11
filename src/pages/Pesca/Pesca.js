import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import './Pesca.css';

const Pesca = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('relevancia');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Estrutura hierárquica do menu - CORRIGIDA
  const menuStructure = [
    {
      id: 'varas',
      name: 'Varas de Pesca',
      icon: 'bi-bicycle',
      subcategories: [
        { id: 'varas-molinete', name: 'Varas para Molinete' },
        { id: 'varas-carretilha', name: 'Varas para Carretilha' },
        { id: 'varas-telescopicas', name: 'Varas Telescópicas' },
        { id: 'varas-praia', name: 'Varas de Praia' },
        { id: 'varas-pesada', name: 'Varas para Pesca Pesada' }
      ]
    },
    {
      id: 'carretilhas-molinetes',
      name: 'Carretilhas e Molinetes',
      icon: 'bi-gear-wide-connected',
      subcategories: [
        { id: 'molinetes', name: 'Molinetes' },
        { id: 'carretilhas-baixo', name: 'Carretilhas de Perfil Baixo' },
        { id: 'carretilhas-alto', name: 'Carretilhas de Perfil Alto' },
        { id: 'pecas-manutencao', name: 'Peças e Manutenção' }
      ]
    },
    {
      id: 'linhas',
      name: 'Linhas de Pesca',
      icon: 'bi-hurricane',
      subcategories: [
        { id: 'monofilamento', name: 'Monofilamento' },
        { id: 'multifilamento', name: 'Multifilamento' },
        { id: 'fluorocarbon', name: 'Fluorocarbon' }
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
            'Superfície e Zara',
            'Meia-água',
            'Fundo e Jigs',
            'Soft',
            'Sapo/Frog'
          ]
        },
        {
          id: 'iscas-naturais',
          name: 'Iscas Naturais e Massas',
          subitems: [
            'Massas prontas',
            'Essências e Atrativos'
          ]
        }
      ]
    },
    {
      id: 'ancas-terminais',
      name: 'Anzóis e Terminais',
      icon: 'bi-shield-check',
      subcategories: [
        { id: 'anzois', name: 'Anzóis' },
        { id: 'garateias', name: 'Garateias' },
        { id: 'jig-heads', name: 'Jig Heads' },
        { id: 'chumbadas', name: 'Chumbadas e Pesos' },
        { id: 'boias', name: 'Boias' },
        { id: 'giradores', name: 'Giradores, Snaps e Argolas' }
      ]
    },
    {
      id: 'acessorios',
      name: 'Acessórios de Apoio',
      icon: 'bi-tools',
      subcategories: [
        { id: 'caixas', name: 'Caixas de Pesca e Estojos Organizadores' },
        { id: 'alicates', name: 'Alicates de Contenção e de Corte' },
        { id: 'facas', name: 'Facas e Canivetes' },
        { id: 'pucas', name: 'Puçás e Samburás' },
        { id: 'suportes', name: 'Suportes de Vara' }
      ]
    }
  ];

  // Filtrar produtos de pesca
  const fishingProducts = products.filter(p => p.category === 'pesca');

  // Filtrar produtos baseado nas seleções
  const filteredProducts = fishingProducts.filter(product => {
    if (selectedCategory === 'todas') {
      return true;
    }
    
    if (selectedCategory && !selectedSubcategory) {
      return product.subcategory === selectedCategory;
    }
    
    if (selectedSubcategory) {
      const categoryMap = {
        'varas-molinete': 'molinete',
        'varas-carretilha': 'carretilha',
        'varas-telescopicas': 'telescopica',
        'varas-praia': 'praia',
        'varas-pesada': 'pesada',
        'molinetes': 'molinete',
        'carretilhas-baixo': 'carretilha-baixo-perfil',
        'carretilhas-alto': 'carretilha-alto-perfil',
        'monofilamento': 'monofilamento',
        'multifilamento': 'multifilamento',
        'fluorocarbon': 'fluorocarbon',
        'anzois': 'anzóis',
        'garateias': 'garateias',
        'jig-heads': 'jig-heads',
        'chumbadas': 'chumbadas',
        'boias': 'boias',
        'giradores': 'giradores',
        'caixas': 'caixas-estojos',
        'alicates': 'alicates-ferramentas',
        'facas': 'facas-canivetes',
        'pucas': 'pucas',
        'suportes': 'suportes-vara'
      };
      
      const mappedCategory = categoryMap[selectedSubcategory];
      return product.specificCategory === mappedCategory;
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
  }, [selectedCategory, selectedSubcategory, sortBy]);

  // Função para mudar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Função para expandir/recolher categoria
  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  // Função para selecionar subcategoria
  const handleSubcategorySelect = (categoryId, subcategoryId = null) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);
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
    <div className="pesca-page">
      {/* Header */}
      <div className="pesca-header">
        <div className="container">
          <div className="py-3">
            <h1 className="fw-bold mb-1" style={{ color: '#53632F' }}>Equipamentos de Pesca</h1>
            <p className="text-muted mb-0">
              {sortedProducts.length} produtos encontrados
              {selectedSubcategory && ` em ${menuStructure
                .find(cat => cat.id === selectedCategory)
                ?.subcategories?.find(sub => sub.id === selectedSubcategory)?.name}`}
              {selectedCategory && !selectedSubcategory && ` em ${menuStructure
                .find(cat => cat.id === selectedCategory)?.name}`}
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
                    setExpandedCategory(null);
                  }}
                >
                  <i className="bi bi-grid-3x3-gap me-2"></i>
                  <span className="fw-bold">Todas as Categorias</span>
                  <span className="badge rounded-pill float-end" style={{ backgroundColor: '#A7672A' }}>
                    {fishingProducts.length}
                  </span>
                </button>

                {/* Categorias do Menu */}
                {menuStructure.map((category) => (
                  <div key={category.id} className="border-bottom">
                    {/* Botão da Categoria Principal */}
                    <button
                      className={`menu-category-btn w-100 text-start p-3 d-flex justify-content-between align-items-center ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => {
                        toggleCategory(category.id);
                        handleSubcategorySelect(category.id);
                      }}
                    >
                      <div>
                        <i className={`bi ${category.icon} me-2`}></i>
                        <span className="fw-bold">{category.name}</span>
                      </div>
                      <div>
                        <i className={`bi ${expandedCategory === category.id ? 'bi-chevron-up' : 'bi-chevron-down'} small`}></i>
                      </div>
                    </button>

                    {/* Subcategorias (expansível) */}
                    {expandedCategory === category.id && (
                      <div className="subcategory-menu bg-light">
                        {category.subcategories.map((subcategory) => (
                          <div key={subcategory.id} className="border-top">
                            {/* Subcategoria principal - SEM setinha */}
                            <button
                              className={`subcategory-btn w-100 text-start p-3 ${selectedSubcategory === subcategory.id ? 'active' : ''}`}
                              onClick={() => handleSubcategorySelect(category.id, subcategory.id)}
                            >
                              <span>{subcategory.name}</span>
                            </button>

                            {/* Subitens (para iscas artificiais/naturais) */}
                            {subcategory.subitems && (
                              <div className="subitems-menu ps-4">
                                {subcategory.subitems.map((item, index) => (
                                  <div key={index} className="border-top">
                                    <button
                                      className="subitem-btn w-100 text-start p-2"
                                      onClick={() => handleSubcategorySelect(category.id, subcategory.id)}
                                    >
                                      <small>{item}</small>
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
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
                {selectedCategory && !selectedSubcategory && (
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
                  {selectedCategory && !selectedSubcategory 
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

export default Pesca;