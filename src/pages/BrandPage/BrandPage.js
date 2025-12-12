import React from 'react';
import useNavigateToTop from '../../hooks/useNavigateToTop'; // Ajuste o caminho

const BrandPage = () => {
  const navigateToTop = useNavigateToTop();

  return (
    <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="display-5 fw-bold mb-3" style={{ color: '#53632F' }}>
              Desperte sua paixão pela natureza
            </h1>
            <p className="lead mb-4" style={{ color: '#A7672A' }}>
              com a Cuesta Pesca e Camping
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="mb-4">
                  Uma jornada de descoberta com respeito ao meio ambiente.
                </p>
                <p className="mb-5 lead">
                  "De pescador para pescador: selecionamos os melhores equipamentos 
                  de pesca esportiva e camping para garantir o sucesso da sua jornada na natureza."
                </p>
                
                <button 
                  onClick={() => navigateToTop('/pesca')}
                  className="btn btn-lg text-white"
                  style={{ backgroundColor: '#A7672A', borderColor: '#A7672A' }}
                >
                  Explorar Equipamentos
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="row mb-5">
          <div className="col-12 mb-4">
            <h2 className="text-center fw-bold mb-5" style={{ color: '#53632F' }}>
              Por que escolher a Cuesta?
            </h2>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="text-center p-4 h-100">
              <div className="d-flex justify-content-center mb-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
                  style={{ 
                    backgroundColor: '#53632F',
                    width: '80px',
                    height: '80px',
                    flexShrink: 0 // Garante que não vai achatar
                  }}
                >
                  <i className="bi bi-check-circle fs-1 text-white"></i>
                </div>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: '#53632F' }}>
                Equipamentos Testados
              </h4>
              <p className="mb-0">
                Cada produto é selecionado por nossa equipe de pescadores 
                experientes que testam em condições reais.
              </p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="text-center p-4 h-100">
              <div className="d-flex justify-content-center mb-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
                  style={{ 
                    backgroundColor: '#53632F',
                    width: '80px',
                    height: '80px',
                    flexShrink: 0
                  }}
                >
                  <i className="bi bi-shield-check fs-1 text-white"></i>
                </div>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: '#53632F' }}>
                Qualidade Garantida
              </h4>
              <p className="mb-0">
                Trabalhamos apenas com marcas reconhecidas e produtos 
                originais, garantindo durabilidade e performance.
              </p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="text-center p-4 h-100">
              <div className="d-flex justify-content-center mb-3">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
                  style={{ 
                    backgroundColor: '#53632F',
                    width: '80px',
                    height: '80px',
                    flexShrink: 0
                  }}
                >
                  <i className="bi bi-person-check fs-1 text-white"></i>
                </div>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: '#53632F' }}>
                Atendimento Especializado
              </h4>
              <p className="mb-0">
                Nossa equipe é formada por apaixonados pela pesca e camping, 
                prontos para tirar dúvidas e indicar os melhores produtos.
              </p>
            </div>
          </div>
        </div>

        {/* Testemunho/Imagem adicional */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="p-4 rounded-3 text-center" style={{ backgroundColor: '#53632F', color: 'white' }}>
              <div className="row align-items-center">
                <div className="col-lg-8 text-lg-start">
                  <h3 className="fw-bold mb-3" style={{ color: '#A7672A' }}>
                    Conhecimento Prático
                  </h3>
                  <p className="mb-0">
                    Nossa equipe não apenas vende equipamentos, mas vive a experiência. 
                    Cada recomendação é baseada em horas de pesca e acampamento reais.
                  </p>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="d-flex justify-content-center justify-content-lg-end">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center" 
                      style={{ 
                        backgroundColor: '#A7672A',
                        width: '100px',
                        height: '100px'
                      }}
                    >
                      <i className="bi bi-trophy fs-2 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="p-5 rounded-3 shadow" style={{ backgroundColor: '#53632F' }}>
              <h3 className="text-white mb-4">
                Pronto para sua próxima aventura?
              </h3>
              <p className="text-white mb-4">
                Conte conosco para equipar sua jornada com qualidade e segurança.
              </p>
              <button 
                onClick={() => navigateToTop('/products')}
                className="btn btn-lg text-white"
                style={{ backgroundColor: '#A7672A', borderColor: '#A7672A' }}
              >
                <i className="bi bi-compass me-2"></i>
                Ver Todos os Produtos
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Garante que os ícones mantenham proporção */
        .rounded-circle {
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }
        
        /* Melhora o visual dos ícones */
        .bi {
          line-height: 1;
        }
      `}</style>
    </div>
  );
};

export default BrandPage;