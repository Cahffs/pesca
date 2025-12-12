import React from 'react';
import { Link } from 'react-router-dom';
import useNavigateToTop from '../../hooks/useNavigateToTop'; // Ajuste o caminho

const AboutPage = () => {
  const navigateToTop = useNavigateToTop();

  return (
    <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="display-5 fw-bold mb-4" style={{ color: '#53632F' }}>
              Mais que uma Loja, Sua Parceira de Aventura
            </h1>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="lead mb-4">
                  A Cuesta Pesca e Camping nasceu da paixão pela vida ao ar livre, 
                  feita <strong>de pescador para pescador</strong>, entendendo as 
                  necessidades reais de quem está na beira do rio ou no acampamento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: 'white' }}>
              <div className="card-body text-center p-4">
                <div className="d-flex justify-content-center mb-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ 
                      backgroundColor: '#53632F',
                      width: '70px',
                      height: '70px'
                    }}
                  >
                    <i className="bi bi-bullseye fs-3 text-white"></i>
                  </div>
                </div>
                <h4 className="card-title fw-bold mb-3" style={{ color: '#53632F' }}>
                  Missão
                </h4>
                <p className="card-text">
                  Proporcionar experiências inesquecíveis na natureza, 
                  fornecendo equipamentos de alta performance e segurança 
                  para pescadores e campistas de todos os níveis.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: 'white' }}>
              <div className="card-body text-center p-4">
                <div className="d-flex justify-content-center mb-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ 
                      backgroundColor: '#53632F',
                      width: '70px',
                      height: '70px'
                    }}
                  >
                    <i className="bi bi-eye fs-3 text-white"></i>
                  </div>
                </div>
                <h4 className="card-title fw-bold mb-3" style={{ color: '#53632F' }}>
                  Visão
                </h4>
                <p className="card-text">
                  Ser a referência nacional em artigos de pesca e camping, 
                  reconhecida não apenas pela qualidade dos produtos, mas 
                  pelo incentivo à cultura da vida ao ar livre.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: 'white' }}>
              <div className="card-body text-center p-4">
                <div className="d-flex justify-content-center mb-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ 
                      backgroundColor: '#53632F',
                      width: '70px',
                      height: '70px'
                    }}
                  >
                    <i className="bi bi-heart fs-3 text-white"></i>
                  </div>
                </div>
                <h4 className="card-title fw-bold mb-3" style={{ color: '#53632F' }}>
                  Valores
                </h4>
                <ul className="list-unstyled text-start">
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#A7672A' }}></i>
                    <strong>Paixão pelo Esporte:</strong> Tudo o que vendemos, nós testamos e amamos.
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#A7672A' }}></i>
                    <strong>Transparência:</strong> Honestidade nas especificações e no atendimento.
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#A7672A' }}></i>
                    <strong>Respeito:</strong> Pelo cliente e pela natureza.
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill me-2" style={{ color: '#A7672A' }}></i>
                    <strong>Comunidade:</strong> Valorizamos as histórias e a jornada de cada cliente.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Compromisso ESG */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="p-5 rounded-3" style={{ backgroundColor: '#53632F', color: 'white' }}>
              <h2 className="text-center fw-bold mb-4" style={{ color: '#A7672A' }}>
                Nossa Responsabilidade com a Natureza
              </h2>
              <p className="text-center lead mb-5">
                Sabemos que nosso esporte depende de uma natureza preservada. 
                Por isso, assumimos o compromisso ESG:
              </p>
              
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="text-center p-3">
                    <div className="d-flex justify-content-center mb-3">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center" 
                        style={{ 
                          backgroundColor: 'white',
                          width: '80px',
                          height: '80px'
                        }}
                      >
                        <i className="bi bi-tree fs-2" style={{ color: '#53632F' }}></i>
                      </div>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#A7672A' }}>
                      Ambiental (E)
                    </h4>
                    <p className="mb-0">
                      Incentivamos ativamente a prática do Pesque e Solte na pesca esportiva 
                      e o princípio de "Não Deixe Rastros" no camping. Trabalhamos com 
                      fornecedores que respeitam normas ambientais e buscamos reduzir o 
                      uso de plásticos desnecessários em nossas reembalagens.
                    </p>
                  </div>
                </div>
                
                <div className="col-md-4 mb-4">
                  <div className="text-center p-3">
                    <div className="d-flex justify-content-center mb-3">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center" 
                        style={{ 
                          backgroundColor: 'white',
                          width: '80px',
                          height: '80px'
                        }}
                      >
                        <i className="bi bi-people fs-2" style={{ color: '#53632F' }}></i>
                      </div>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#A7672A' }}>
                      Social (S)
                    </h4>
                    <p className="mb-0">
                      Acreditamos que a pesca e o camping unem famílias e amigos, 
                      promovendo saúde mental e bem-estar longe das telas. Apoiamos 
                      comunidades locais e eventos de pesca que fomentam o turismo sustentável.
                    </p>
                  </div>
                </div>
                
                <div className="col-md-4 mb-4">
                  <div className="text-center p-3">
                    <div className="d-flex justify-content-center mb-3">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center" 
                        style={{ 
                          backgroundColor: 'white',
                          width: '80px',
                          height: '80px'
                        }}
                      >
                        <i className="bi bi-building fs-2" style={{ color: '#53632F' }}></i>
                      </div>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: '#A7672A' }}>
                      Governança (G)
                    </h4>
                    <p className="mb-0">
                      Atuamos com ética inegociável, garantindo a procedência original 
                      de todos os equipamentos (importante para evitar pirataria de 
                      marcas famosas de pesca) e clareza total nas políticas de garantia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="row">
          <div className="col-12 text-center">
            <button 
              onClick={() => navigateToTop('/pesca')}
              className="btn btn-lg text-white"
              style={{ backgroundColor: '#A7672A', borderColor: '#A7672A' }}
            >
              <i className="bi bi-compass me-2"></i>
              Explorar Nossos Equipamentos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;