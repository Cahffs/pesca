import { useNavigate } from 'react-router-dom';

const useNavigateToTop = () => {
  const navigate = useNavigate();
  
  const navigateToTop = (path) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Adiciona animação suave
    });
    
    // Pequeno delay para garantir o scroll antes de navegar
    setTimeout(() => {
      navigate(path);
    }, 100);
  };
  
  return navigateToTop;
};

export default useNavigateToTop;