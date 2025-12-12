import React from 'react';
import useNavigateToTop from '../../hooks/useNavigateToTop';

const Footer = () => {
  const navigateToTop = useNavigateToTop();

  const handleWhatsAppClick = () => {
    // Abre apenas uma nova aba
    window.open('https://wa.me/5514997824817', '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    // Para email, podemos usar window.location
    window.location.href = 'mailto:cuestapescaecamping@gmail.com';
  };

  const handleSocialClick = (url) => {
    return () => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
  };

  return (
    <footer className="bg-dark text-white pt-4" style={{ backgroundColor: '#53632F' }}>
      <div className="container">
        <div className="row">
          {/* Logo e Contato */}
          <div className="col-lg-4 mb-4">
            <div className="mb-3">
              <h5 className="fw-bold mb-3" style={{ color: '#A7672A' }}>
                Cuesta Pesca e Camping
              </h5>
              <div className="mb-3">
                <div className="d-flex align-items-start mb-2">
                  <i className="bi bi-whatsapp me-2" style={{ color: '#A7672A', marginTop: '2px' }}></i>
                  <div>
                    <button 
                      onClick={handleWhatsAppClick}
                      className="text-decoration-none text-light small hover-gold bg-transparent border-0 p-0 text-start"
                      style={{ cursor: 'pointer' }}
                    >
                      (14) 99782-4817
                    </button>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-2">
                  <i className="bi bi-envelope me-2" style={{ color: '#A7672A', marginTop: '2px' }}></i>
                  <div>
                    <button 
                      onClick={handleEmailClick}
                      className="text-decoration-none text-light small hover-gold bg-transparent border-0 p-0 text-start"
                      style={{ cursor: 'pointer' }}
                    >
                      cuestapescaecamping@gmail.com
                    </button>
                  </div>
                </div>
                
                <div className="d-flex align-items-start">
                  <i className="bi bi-clock me-2" style={{ color: '#A7672A', marginTop: '2px' }}></i>
                  <div>
                    <p className="mb-0 text-light small">08:00 às 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sobre Nós */}
          <div className="col-lg-4 mb-4">
            <h6 className="fw-bold mb-3" style={{ color: '#A7672A' }}>Sobre Nós</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button 
                  onClick={() => navigateToTop('/about')}
                  className="text-decoration-none text-light small hover-gold bg-transparent border-0 p-0 text-start"
                  style={{ cursor: 'pointer' }}
                >
                  Quem Somos
                </button>
              </li>
              <li className="mb-2">
                <button 
                  onClick={() => navigateToTop('/brand')}
                  className="text-decoration-none text-light small hover-gold bg-transparent border-0 p-0 text-start"
                  style={{ cursor: 'pointer' }}
                >
                  Nossa Marca
                </button>
              </li>
            </ul>

            {/* Redes Sociais */}
            <h6 className="fw-bold mb-3 mt-4" style={{ color: '#A7672A' }}>Redes Sociais</h6>
            <div className="d-flex gap-2">
              <button 
                onClick={handleSocialClick('https://instagram.com')}
                className="text-decoration-none text-light hover-gold small bg-transparent border-0 p-0"
                style={{ cursor: 'pointer' }}
              >
                <i className="bi bi-instagram me-1"></i>
                Instagram
              </button>
              <span className="text-light mx-2">|</span>
              <button 
                onClick={handleSocialClick('https://facebook.com')}
                className="text-decoration-none text-light hover-gold small bg-transparent border-0 p-0"
                style={{ cursor: 'pointer' }}
              >
                <i className="bi bi-facebook me-1"></i>
                Facebook
              </button>
            </div>
          </div>

          {/* Categorias */}
          <div className="col-lg-4 mb-4">
            <h6 className="fw-bold mb-3" style={{ color: '#A7672A' }}>Categorias</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button 
                  onClick={() => navigateToTop('/pesca')}
                  className="text-decoration-none text-light small hover-gold bg-transparent border-0 p-0 text-start"
                  style={{ cursor: 'pointer' }}
                >
                  Pesca
                </button>
              </li>
              <li className="mb-2">
                <button 
                  onClick={() => navigateToTop('/camping')}
                  className="text-decoration-none text-light small hover-gold bg-transparent border-0 p-0 text-start"
                  style={{ cursor: 'pointer' }}
                >
                  Camping
                </button>
              </li>
              <li className="mb-2">
                <button 
                  onClick={() => navigateToTop('/vestuario')}
                  className="text-decoration-none text-light small hover-gold bg-transparent border-0 p-0 text-start"
                  style={{ cursor: 'pointer' }}
                >
                  Vestuário
                </button>
              </li>
              <li className="mb-2">
                <button 
                  onClick={() => navigateToTop('/kits')}
                  className="text-decoration-none text-light small hover-gold bg-transparent border-0 p-0 text-start"
                  style={{ cursor: 'pointer' }}
                >
                  Coleções Especiais
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Formas de Pagamento */}
        <div className="row pt-3 border-top border-secondary">
          <div className="col-12">
            <div className="text-center mb-2">
              <span className="text-light small me-3">
                <i className="bi bi-shield-check me-1"></i>
                Site Seguro
              </span>
              <span className="text-light small">
                <i className="bi bi-award me-1"></i>
                Compra Garantida
              </span>
            </div>
            
            <p className="text-center mb-2 small">Formas de Pagamento</p>
            <div className="d-flex justify-content-center flex-wrap gap-2 small">
              <span className="badge bg-light text-dark px-2 py-1">PIX</span>
              <span className="badge bg-light text-dark px-2 py-1">Cartão de Crédito</span>
              <span className="badge bg-light text-dark px-2 py-1">Boleto</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row py-3 mt-3" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <div className="col-12 text-center">
            <p className="mb-0 small">
              &copy; {new Date().getFullYear()} Cuesta Pesca e Camping. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-gold:hover {
          color: #A7672A !important;
          transition: color 0.3s ease;
        }
        
        a.small, button.small {
          font-size: 0.875rem;
        }
        
        .badge {
          font-size: 0.75rem;
          font-weight: normal;
        }
        
        button.bg-transparent:hover {
          color: #A7672A !important;
          text-decoration: underline;
        }
        
        button.bg-transparent:focus {
          outline: none;
          box-shadow: none;
        }
        
        /* Garante que os botões se pareçam com links */
        button.bg-transparent {
          cursor: pointer;
          text-align: left;
        }
      `}</style>
    </footer>
  );
};

export default Footer;