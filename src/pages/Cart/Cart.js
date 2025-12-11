import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatters';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getTotalItems,
    getTotalDiscount
  } = useCart();

  const cartTotal = getCartTotal();
  const totalItems = getTotalItems();
  const totalDiscount = getTotalDiscount();
  const shipping = cartTotal > 199 ? 0 : 19.90;
  const finalTotal = cartTotal + shipping;

  const handleCheckout = () => {
    // Aqui você implementaria a integração com checkout
    alert('Redirecionando para checkout...');
    // navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container py-5">
          <div className="text-center py-5">
            <i className="bi bi-cart-x display-1 text-muted mb-4"></i>
            <h2 className="fw-bold mb-3" style={{ color: '#53632F' }}>
              Seu carrinho está vazio
            </h2>
            <p className="text-muted mb-4">
              Adicione produtos para ver eles aqui
            </p>
            <button
              className="btn text-white px-4 py-2"
              style={{ backgroundColor: '#A7672A' }}
              onClick={() => navigate('/pesca')}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Continuar Comprando
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container py-5">
        <div className="row">
          {/* Título */}
          <div className="col-12 mb-4">
            <h1 className="fw-bold" style={{ color: '#53632F' }}>
              Meu Carrinho
            </h1>
            <p className="text-muted">
              {totalItems} {totalItems === 1 ? 'item' : 'itens'} no carrinho
            </p>
          </div>

          <div className="col-lg-8">
            {/* Lista de Produtos */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-0">
                {/* Cabeçalho da tabela */}
                <div className="d-none d-md-flex px-4 py-3 border-bottom bg-light">
                  <div className="col-6">
                    <span className="fw-bold">Produto</span>
                  </div>
                  <div className="col-2 text-center">
                    <span className="fw-bold">Preço</span>
                  </div>
                  <div className="col-2 text-center">
                    <span className="fw-bold">Quantidade</span>
                  </div>
                  <div className="col-2 text-center">
                    <span className="fw-bold">Total</span>
                  </div>
                </div>

                {/* Itens do carrinho */}
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 border-bottom">
                    <div className="row align-items-center">
                      {/* Imagem e Nome */}
                      <div className="col-md-6 mb-3 mb-md-0">
                        <div className="d-flex align-items-center">
                          <div 
                            className="me-3 cursor-pointer"
                            onClick={() => {
                              window.scrollTo(0, 0);
                              navigate(`/product/${item.id}`);
                            }}
                            style={{ cursor: 'pointer' }}
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="rounded"
                              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                            />
                          </div>
                          <div>
                            <h6 
                              className="fw-bold mb-1 cursor-pointer"
                              onClick={() => {
                                window.scrollTo(0, 0);
                                navigate(`/product/${item.id}`);
                              }}
                              style={{ 
                                color: '#53632F',
                                cursor: 'pointer'
                              }}
                            >
                              {item.name}
                            </h6>
                            {item.originalPrice && item.originalPrice > item.price && (
                              <small className="text-success">
                                Economize {formatPrice(item.originalPrice - item.price)}
                              </small>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Preço Unitário */}
                      <div className="col-md-2 mb-3 mb-md-0 text-center">
                        <div>
                          <span className="fw-bold text-danger">
                            {formatPrice(item.price)}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <div>
                              <small className="text-muted text-decoration-line-through">
                                {formatPrice(item.originalPrice)}
                              </small>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Quantidade */}
                      <div className="col-md-2 mb-3 mb-md-0">
                        <div className="d-flex justify-content-center">
                          <div className="input-group input-group-sm" style={{ width: '120px' }}>
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              className="form-control text-center"
                              value={item.quantity}
                              readOnly
                              style={{ backgroundColor: 'white' }}
                            />
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= (item.maxStock || 10)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Total e Remover */}
                      <div className="col-md-2">
                        <div className="d-flex flex-column align-items-center">
                          <span className="fw-bold text-danger mb-2">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                          <button
                            className="btn btn-link text-danger p-0"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <i className="bi bi-trash me-1"></i>
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Botão Limpar Carrinho */}
                <div className="p-3 border-top">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={clearCart}
                  >
                    <i className="bi bi-trash me-2"></i>
                    Limpar Carrinho
                  </button>
                </div>
              </div>
            </div>

            {/* Botão Continuar Comprando */}
            <div className="text-start">
              <button
                className="btn btn-outline-secondary"
                onClick={() => navigate('/pesca')}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Continuar Comprando
              </button>
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
              <div className="card-body">
                <h5 className="fw-bold mb-4" style={{ color: '#53632F' }}>
                  Resumo do Pedido
                </h5>

                {/* Valores */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Subtotal</span>
                    <span className="fw-bold">{formatPrice(cartTotal)}</span>
                  </div>
                  
                  {totalDiscount > 0 && (
                    <div className="d-flex justify-content-between mb-2 text-success">
                      <span>Descontos</span>
                      <span>- {formatPrice(totalDiscount)}</span>
                    </div>
                  )}

                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Frete</span>
                    <span className={shipping === 0 ? 'text-success' : ''}>
                      {shipping === 0 ? 'Grátis' : formatPrice(shipping)}
                    </span>
                  </div>

                  {shipping > 0 && (
                    <div className="alert alert-info py-2 mb-3">
                      <small>
                        <i className="bi bi-info-circle me-1"></i>
                        Faltam {formatPrice(199 - cartTotal)} para frete grátis!
                      </small>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="border-top pt-3 mb-4">
                  <div className="d-flex justify-content-between">
                    <span className="fw-bold">Total</span>
                    <div>
                      <span className="h4 text-danger fw-bold">
                        {formatPrice(finalTotal)}
                      </span>
                      <div className="small text-muted">
                        ou 10x de {formatPrice(finalTotal / 10)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão Finalizar */}
                <button
                  className="btn w-100 text-white py-3"
                  style={{ backgroundColor: '#A7672A' }}
                  onClick={handleCheckout}
                >
                  <i className="bi bi-lock me-2"></i>
                  Finalizar Compra
                </button>

                {/* Formas de Pagamento */}
                <div className="mt-4 pt-3 border-top">
                  <small className="text-muted d-block mb-2">
                    <i className="bi bi-shield-check me-1"></i>
                    Compra 100% segura
                  </small>
                  <div className="d-flex justify-content-center gap-2">
                    <i className="bi bi-credit-card fs-4 text-muted"></i>
                    <i className="bi bi-paypal fs-4 text-muted"></i>
                    <i className="bi bi-cash-coin fs-4 text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;