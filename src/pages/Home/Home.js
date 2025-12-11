import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import ProductSection from '../../components/ProductSection/ProductSection';
import { 
  bestSellers, 
  fishingProducts, 
  campingProducts,
  products 
} from '../../data/products';
import './Home.css';
import useNavigateToTop from '../../hooks/useNavigateToTop';

const Home = () => {
  const navigate = useNavigateToTop();

  // Criar os filtros diretamente aqui
  const sportFishingProducts = products.filter(product => 
    product.category === 'pesca' && (
      product.name.toLowerCase().includes('bass') ||
      product.name.toLowerCase().includes('competição') ||
      product.name.toLowerCase().includes('esportiv')
    )
  ).slice(0, 4);

  const kitProducts = products.filter(product => 
    product.name.toLowerCase().includes('kit')
  ).slice(0, 4);

  const clothingProducts = products.filter(product => 
    product.category === 'vestuario'
  ).slice(0, 4);

  // Limitar a 4 produtos por seção
  const limitedBestSellers = bestSellers.slice(0, 4);
  const limitedFishingProducts = fishingProducts.slice(0, 4);
  const limitedCampingProducts = campingProducts.slice(0, 4);
  const limitedSportFishingProducts = sportFishingProducts.slice(0, 4);
  const limitedKitProducts = kitProducts.slice(0, 4);
  const limitedClothingProducts = clothingProducts.slice(0, 4);

  return (
    <div className="home-page">
      <Carousel />
      
      {/* Seção Mais Vendidos */}
      <ProductSection
        title="Mais Vendidos"
        subtitle="Os produtos preferidos dos nossos clientes"
        products={limitedBestSellers}
        showViewMore={true}
        viewMoreText="Ver Todos os Mais Vendidos"
        onViewMore={() => navigate('/pesca?filter=mais-vendidos')}
      />
      
      {/* Seção Pesca Esportiva - REDIRECIONA PARA PESCA */}
      <ProductSection
        title="Pesca Esportiva"
        subtitle="Equipamentos profissionais para todas modalidades"
        products={limitedFishingProducts}  // Agora usa fishingProducts
        showViewMore={true}
        viewMoreText="Ver Todos os Equipamentos"
        onViewMore={() => navigate('/pesca')}  // Redireciona para /pesca
        backgroundColor="#f8f9fa"
      />
      
      {/* Seção Kits Especiais */}
      <ProductSection
        title="Kits Especiais"
        subtitle="Combinações completas com tudo que você precisa"
        products={limitedKitProducts}
        showViewMore={true}
        viewMoreText="Ver Todos os Kits"
        onViewMore={() => navigate('/kits')}
        backgroundColor="#ffffff"
      />
      
      {/* Seção Camping e Outdoor */}
      <ProductSection
        title="Camping e Outdoor"
        subtitle="Equipamentos para suas aventuras na natureza"
        products={limitedCampingProducts}
        showViewMore={true}
        viewMoreText="Ver Tudo de Camping"
        onViewMore={() => navigate('/camping')}
      />
      
      {/* Seção Vestuário */}
      <ProductSection
        title="Vestuário Técnico"
        subtitle="Roupas e acessórios para conforto e proteção"
        products={limitedClothingProducts}
        showViewMore={true}
        viewMoreText="Ver Todo o Vestuário"
        onViewMore={() => navigate('/vestuario')}
        backgroundColor="#f8f9fa"
      />
      
      {/* Banner Informativo */}
      <div className="container my-5">
        <div className="info-banner rounded-3 p-4" style={{ 
          backgroundColor: '#f0f4e8',
          border: '1px solid rgba(83, 99, 47, 0.2)'
        }}>
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-truck fs-3 me-3" style={{ color: '#A7672A' }}></i>
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: '#53632F' }}>Frete Grátis para Todo Brasil</h5>
                  <p className="text-muted mb-0 small">Em compras acima de R$ 199,99</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <button 
                className="btn text-white"
                style={{ backgroundColor: '#A7672A' }}
                onClick={() => navigate('/pesca')}
              >
                <i className="bi bi-arrow-right me-2"></i>
                Comprar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;