import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dados');
  const [userData, setUserData] = useState({
    nome: 'João Silva',
    email: 'joao@email.com',
    telefone: '(11) 99999-9999',
    cpf: '123.456.789-00',
    endereco: {
      rua: 'Rua das Flores, 123',
      bairro: 'Jardim Primavera',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567'
    }
  });

  const [orders, setOrders] = useState([
    { id: 1001, date: '15/10/2023', total: 299.90, status: 'Entregue', items: 3 },
    { id: 1002, date: '05/11/2023', total: 459.50, status: 'Em Trânsito', items: 2 },
    { id: 1003, date: '20/11/2023', total: 189.90, status: 'Processando', items: 1 },
  ]);

  // Estilos
  const primaryColor = '#53632F'; 
  const secondaryColor = '#A7672A'; 
  const lightBg = '#f8f9fa';

  const buttonStyle = {
    backgroundColor: secondaryColor,
    borderColor: secondaryColor,
    color: 'white'
  };

  const handleLogout = () => {
    // Lógica de logout aqui
    alert('Saindo da conta...');
    navigate('/');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dados':
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title mb-4" style={{ color: primaryColor }}>
                <i className="bi bi-person-circle me-2"></i>
                Meus Dados
              </h5>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold" style={{ color: primaryColor }}>
                    Nome Completo
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={userData.nome}
                    onChange={(e) => setUserData({...userData, nome: e.target.value})}
                  />
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold" style={{ color: primaryColor }}>
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                  />
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold" style={{ color: primaryColor }}>
                    Telefone
                  </label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    value={userData.telefone}
                    onChange={(e) => setUserData({...userData, telefone: e.target.value})}
                  />
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold" style={{ color: primaryColor }}>
                    CPF
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={userData.cpf}
                    readOnly
                  />
                </div>
              </div>
              
              <h6 className="mt-4 mb-3 fw-bold" style={{ color: primaryColor }}>
                <i className="bi bi-geo-alt me-2"></i>
                Endereço Principal
              </h6>
              
              <div className="row">
                <div className="col-12 mb-3">
                  <label className="form-label fw-bold" style={{ color: primaryColor }}>
                    Endereço
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={userData.endereco.rua}
                    onChange={(e) => setUserData({
                      ...userData, 
                      endereco: {...userData.endereco, rua: e.target.value}
                    })}
                  />
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold" style={{ color: primaryColor }}>
                    Cidade
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={userData.endereco.cidade}
                    onChange={(e) => setUserData({
                      ...userData, 
                      endereco: {...userData.endereco, cidade: e.target.value}
                    })}
                  />
                </div>
                
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold" style={{ color: primaryColor }}>
                    Estado
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={userData.endereco.estado}
                    onChange={(e) => setUserData({
                      ...userData, 
                      endereco: {...userData.endereco, estado: e.target.value}
                    })}
                  />
                </div>
                
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold" style={{ color: primaryColor }}>
                    CEP
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={userData.endereco.cep}
                    onChange={(e) => setUserData({
                      ...userData, 
                      endereco: {...userData.endereco, cep: e.target.value}
                    })}
                  />
                </div>
              </div>
              
              <div className="d-flex justify-content-end mt-4">
                <button 
                  className="btn text-white"
                  style={buttonStyle}
                  onClick={() => alert('Dados salvos com sucesso!')}
                >
                  <i className="bi bi-check-circle me-2"></i>
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        );

      case 'pedidos':
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title mb-4" style={{ color: primaryColor }}>
                <i className="bi bi-receipt me-2"></i>
                Meus Pedidos
              </h5>
              
              {orders.length === 0 ? (
                <div className="text-center py-5">
                  <i className="bi bi-cart-x display-4" style={{ color: '#ddd' }}></i>
                  <p className="mt-3 text-muted">Nenhum pedido encontrado</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr style={{ backgroundColor: lightBg }}>
                        <th style={{ color: primaryColor }}>Nº Pedido</th>
                        <th style={{ color: primaryColor }}>Data</th>
                        <th style={{ color: primaryColor }}>Itens</th>
                        <th style={{ color: primaryColor }}>Total</th>
                        <th style={{ color: primaryColor }}>Status</th>
                        <th style={{ color: primaryColor }}>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(order => (
                        <tr key={order.id}>
                          <td className="fw-bold">#{order.id}</td>
                          <td>{order.date}</td>
                          <td>{order.items} item(s)</td>
                          <td className="fw-bold text-danger">R$ {order.total.toFixed(2)}</td>
                          <td>
                            <span className={`badge ${
                              order.status === 'Entregue' ? 'bg-success' :
                              order.status === 'Em Trânsito' ? 'bg-warning' :
                              'bg-secondary'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td>
                            <button 
                              className="btn btn-sm text-white"
                              style={buttonStyle}
                              onClick={() => navigate(`/order/${order.id}`)}
                            >
                              <i className="bi bi-eye"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        );

      case 'favoritos':
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title mb-4" style={{ color: primaryColor }}>
                <i className="bi bi-heart me-2"></i>
                Meus Favoritos
              </h5>
              
              <div className="text-center py-5">
                <i className="bi bi-heart display-4" style={{ color: '#ddd' }}></i>
                <p className="mt-3 text-muted">Nenhum produto favoritado</p>
                <button 
                  className="btn mt-3 text-white"
                  style={buttonStyle}
                  onClick={() => navigate('/pesca')}
                >
                  <i className="bi bi-search me-2"></i>
                  Explorar Produtos
                </button>
              </div>
            </div>
          </div>
        );

      case 'seguranca':
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="card-title mb-4" style={{ color: primaryColor }}>
                <i className="bi bi-shield-lock me-2"></i>
                Segurança da Conta
              </h5>
              
              <div className="mb-4">
                <label className="form-label fw-bold" style={{ color: primaryColor }}>
                  Senha Atual
                </label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Digite sua senha atual"
                />
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold" style={{ color: primaryColor }}>
                    Nova Senha
                  </label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Digite a nova senha"
                  />
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold" style={{ color: primaryColor }}>
                    Confirmar Nova Senha
                  </label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Confirme a nova senha"
                  />
                </div>
              </div>
              
              <div className="alert alert-warning mt-3">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Ao alterar sua senha, você será desconectado de todos os dispositivos.
              </div>
              
              <div className="d-flex justify-content-end mt-4">
                <button 
                  className="btn text-white"
                  style={buttonStyle}
                  onClick={() => alert('Senha alterada com sucesso!')}
                >
                  <i className="bi bi-key me-2"></i>
                  Alterar Senha
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-5" style={{ backgroundColor: lightBg, minHeight: '100vh' }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a 
                href="/" 
                style={{ color: primaryColor, textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
              >
                <i className="bi bi-house me-1"></i>
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page" style={{ color: secondaryColor }}>
              Minha Conta
            </li>
          </ol>
        </nav>

        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-4">
            <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <div 
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      backgroundColor: primaryColor,
                      color: 'white',
                      fontSize: '2rem'
                    }}
                  >
                    <i className="bi bi-person"></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: primaryColor }}>
                    {userData.nome.split(' ')[0]}
                  </h5>
                  <small className="text-muted">{userData.email}</small>
                </div>
                
                <div className="nav flex-column">
                  <button
                    className={`nav-link text-start py-3 d-flex align-items-center ${activeTab === 'dados' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dados')}
                    style={{
                      color: activeTab === 'dados' ? 'white' : primaryColor,
                      backgroundColor: activeTab === 'dados' ? primaryColor : 'transparent',
                      borderLeft: `4px solid ${activeTab === 'dados' ? secondaryColor : 'transparent'}`
                    }}
                  >
                    <i className="bi bi-person-circle me-3"></i>
                    Meus Dados
                  </button>
                  
                  <button
                    className={`nav-link text-start py-3 d-flex align-items-center ${activeTab === 'pedidos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('pedidos')}
                    style={{
                      color: activeTab === 'pedidos' ? 'white' : primaryColor,
                      backgroundColor: activeTab === 'pedidos' ? primaryColor : 'transparent',
                      borderLeft: `4px solid ${activeTab === 'pedidos' ? secondaryColor : 'transparent'}`
                    }}
                  >
                    <i className="bi bi-receipt me-3"></i>
                    Meus Pedidos
                    {orders.length > 0 && (
                      <span className="badge bg-danger ms-auto">
                        {orders.length}
                      </span>
                    )}
                  </button>
                  
                  <button
                    className={`nav-link text-start py-3 d-flex align-items-center ${activeTab === 'favoritos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('favoritos')}
                    style={{
                      color: activeTab === 'favoritos' ? 'white' : primaryColor,
                      backgroundColor: activeTab === 'favoritos' ? primaryColor : 'transparent',
                      borderLeft: `4px solid ${activeTab === 'favoritos' ? secondaryColor : 'transparent'}`
                    }}
                  >
                    <i className="bi bi-heart me-3"></i>
                    Favoritos
                  </button>
                  
                  <button
                    className={`nav-link text-start py-3 d-flex align-items-center ${activeTab === 'seguranca' ? 'active' : ''}`}
                    onClick={() => setActiveTab('seguranca')}
                    style={{
                      color: activeTab === 'seguranca' ? 'white' : primaryColor,
                      backgroundColor: activeTab === 'seguranca' ? primaryColor : 'transparent',
                      borderLeft: `4px solid ${activeTab === 'seguranca' ? secondaryColor : 'transparent'}`
                    }}
                  >
                    <i className="bi bi-shield-lock me-3"></i>
                    Segurança
                  </button>
                  
                  <hr className="my-2" />
                  
                  <button
                    className="nav-link text-start py-3 d-flex align-items-center text-danger"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-3"></i>
                    Sair da Conta
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="h3 fw-bold" style={{ color: primaryColor }}>
                <i className="bi bi-person-badge me-2"></i>
                Minha Conta
              </h1>
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => navigate('/cart')}
                >
                  <i className="bi bi-cart me-2"></i>
                  Meu Carrinho
                </button>
                <button 
                  className="btn text-white btn-sm"
                  style={buttonStyle}
                  onClick={() => navigate('/')}
                >
                  <i className="bi bi-shop me-2"></i>
                  Continuar Comprando
                </button>
              </div>
            </div>
            
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;