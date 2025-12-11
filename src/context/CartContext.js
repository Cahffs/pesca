import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Recuperar carrinho do localStorage se existir
  const getInitialCart = () => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cuesta_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  };

  const [cartItems, setCartItems] = useState(getInitialCart);

  // Salvar carrinho no localStorage sempre que mudar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cuesta_cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Adicionar item ao carrinho
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Atualizar quantidade se item já existe
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Adicionar novo item
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            quantity,
            maxStock: product.stock || 10
          }
        ];
      }
    });
  };

  // Remover item do carrinho
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Atualizar quantidade de um item
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.min(quantity, item.maxStock || 10) }
          : item
      )
    );
  };

  // Limpar carrinho
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total do carrinho
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  // Calcular total de itens
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calcular total de descontos
  const getTotalDiscount = () => {
    return cartItems.reduce((total, item) => {
      if (item.originalPrice && item.originalPrice > item.price) {
        return total + ((item.originalPrice - item.price) * item.quantity);
      }
      return total;
    }, 0);
  };

  // Verificar se item está no carrinho
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getTotalItems,
    getTotalDiscount,
    isInCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};