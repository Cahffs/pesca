// src/utils/formatters.js
export const formatPrice = (price) => {
  if (price === null || price === undefined) return 'R$ 0,00';
  
  // Converte para número se for string
  const numPrice = typeof price === 'string' 
    ? parseFloat(price.replace(',', '.').replace('R$', '').trim())
    : Number(price);
  
  if (isNaN(numPrice)) return 'R$ 0,00';
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numPrice);
};

export const formatDiscountPercentage = (originalPrice, currentPrice) => {
  if (!originalPrice || originalPrice <= currentPrice) return null;
  
  const original = typeof originalPrice === 'string' 
    ? parseFloat(originalPrice.replace(',', '.')) 
    : originalPrice;
    
  const current = typeof currentPrice === 'string' 
    ? parseFloat(currentPrice.replace(',', '.')) 
    : currentPrice;
  
  if (isNaN(original) || isNaN(current)) return null;
  
  const discount = ((original - current) / original) * 100;
  return `${Math.round(discount)}% OFF`;
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat('pt-BR').format(number);
};