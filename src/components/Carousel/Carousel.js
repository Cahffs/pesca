import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      id: 1,
      title: "Promoção de Verão",
      subtitle: "Até 40% OFF em Equipamentos de Pesca",
      image: "/images/carousel/pesca-verao.jpg",
      buttonText: "Ver Ofertas"
    },
    {
      id: 2,
      title: "Novidades em Camping",
      subtitle: "Equipamentos premium para suas aventuras",
      image: "/images/carousel/camping-novidades.jpg",
      buttonText: "Descobrir"
    },
    {
      id: 3,
      title: "Pesca Esportiva",
      subtitle: "Equipamentos profissionais para pescadores",
      image: "/images/carousel/pesca-esportiva.jpg",
      buttonText: "Explorar"
    },
    {
      id: 4,
      title: "Frete Grátis",
      subtitle: "Em compras acima de R$ 199,99",
      image: "/images/carousel/frete-gratis.jpg",
      buttonText: "Comprar Agora"
    },
    {
      id: 5,
      title: "Kit Pesca Completo",
      subtitle: "Tudo que você precisa para começar",
      image: "/images/carousel/kit-pesca.jpg",
      buttonText: "Montar Kit"
    },
    {
      id: 6,
      title: "Ofertas Relâmpago",
      subtitle: "Promoções por tempo limitado",
      image: "/images/carousel/ofertas-relampago.jpg",
      buttonText: "Aproveitar"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const buttonStyle = {
    backgroundColor: '#A7672A',
    borderColor: '#A7672A',
    color: 'white'
  };

  return (
    <div className="custom-carousel">
      {/* Espaçamento acima do carousel */}
      <div className="carousel-spacer"></div>
      
      <div className="carousel-container">
        {/* Indicadores */}
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        
        {/* Slides */}
        <div className="carousel-slides">
          {carouselItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div 
                className="slide-background"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="slide-overlay">
                  <div className="slide-content">
                    <h2 className="slide-title">{item.title}</h2>
                    <p className="slide-subtitle">{item.subtitle}</p>
                    <button 
                      className="slide-button"
                      style={buttonStyle}
                    >
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Controles de Navegação */}
        <button 
          className="carousel-control prev" 
          onClick={prevSlide}
        >
          <span className="control-icon">‹</span>
        </button>
        
        <button 
          className="carousel-control next" 
          onClick={nextSlide}
        >
          <span className="control-icon">›</span>
        </button>
      </div>

      {/* Espaçamento abaixo do carousel */}
      <div className="carousel-spacer"></div>
    </div>
  );
};

export default Carousel;