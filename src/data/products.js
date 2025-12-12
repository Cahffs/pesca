// products.js - Padronizado com todos os produtos

export const products = [
  // ========== VARAS PARA MOLINETE ==========
  {
    id: 1,
    name: "Vara Shimano Exage 2.10m Molinete",
    price: 189.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "molinete",
    bestSeller: true,
    rating: 4.8,
    stock: 15,
    description: "Vara Shimano Exage de 2,10m, ideal para pesca esportiva em água doce com molinete.",
    features: ["Carbono HD", "2,10m", "Ação média", "Guides Fuji", "Para molinete"]
  },
  {
    id: 2,
    name: "Vara Daiwa Exceler 2.40m Molinete",
    price: 159.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "molinete",
    bestSeller: false,
    rating: 4.6,
    stock: 22,
    description: "Vara Daiwa Exceler 2,40m com ação rápida, perfeita para pesca com molinete.",
    features: ["Carbono", "2,40m", "Ação rápida", "Leve", "Molinete"]
  },
  {
    id: 3,
    name: "Vara Okuma Celilo 1.80m Molinete",
    price: 119.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "molinete",
    bestSeller: false,
    rating: 4.4,
    stock: 18,
    description: "Vara Okuma Celilo 1,80m compacta para pesca leve com molinete.",
    features: ["1,80m", "Compacta", "Leve", "Ação leve", "Molinete"]
  },

  // ========== VARAS PARA CARRETILHA ==========
  {
    id: 4,
    name: "Vara Abu Garcia Vendetta 2.10m Carretilha",
    price: 249.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "carretilha",
    bestSeller: true,
    rating: 4.7,
    stock: 12,
    description: "Vara Abu Garcia Vendetta 2,10m específica para carretilha, ideal para bass.",
    features: ["Carbono", "2,10m", "Ação rápida", "Para carretilha", "Bass"]
  },
  {
    id: 5,
    name: "Vara Shimano SLX 2.30m Carretilha",
    price: 219.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "carretilha",
    bestSeller: false,
    rating: 4.5,
    stock: 10,
    description: "Vara Shimano SLX 2,30m para carretilha, sensibilidade elevada.",
    features: ["2,30m", "Sensível", "Carretilha", "Ação média-rápida"]
  },
  {
    id: 6,
    name: "Vara Daiwa Tatula 2.40m Carretilha",
    price: 279.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "carretilha",
    bestSeller: true,
    rating: 4.8,
    stock: 8,
    description: "Vara Daiwa Tatula 2,40m premium para carretilha, construção em carbono.",
    features: ["Carbono premium", "2,40m", "Carretilha", "Ação extra rápida"]
  },

  // ========== VARAS TELESCÓPICAS ==========
  {
    id: 7,
    name: "Vara Telescópica Shimano Catana 7 Seções",
    price: 129.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "telescopica",
    bestSeller: false,
    rating: 4.3,
    stock: 25,
    description: "Vara telescópica Shimano Catana com 7 seções, compacta para viagens.",
    features: ["7 seções", "Compacta", "Telescópica", "Leve"]
  },
  {
    id: 8,
    name: "Vara Telescópica Daiwa Ninja 6 Seções",
    price: 149.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "telescopica",
    bestSeller: true,
    rating: 4.6,
    stock: 15,
    description: "Vara telescópica Daiwa Ninja 6 seções, resistente e versátil.",
    features: ["6 seções", "Resistente", "Telescópica", "Multiuso"]
  },
  {
    id: 9,
    name: "Vara Telescópica Okuma Voyager 5 Seções",
    price: 99.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "telescopica",
    bestSeller: false,
    rating: 4.2,
    stock: 30,
    description: "Vara telescópica Okuma Voyager 5 seções, ideal para iniciantes.",
    features: ["5 seções", "Econômica", "Telescópica", "Iniciantes"]
  },

  // ========== VARAS DE PRAIA ==========
  {
    id: 10,
    name: "Vara de Praia Penn Battalion 4m Surfcasting",
    price: 319.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "praia",
    bestSeller: false,
    rating: 4.6,
    stock: 7,
    description: "Vara de praia Penn Battalion 4m para surfcasting, alta resistência.",
    features: ["4 metros", "Surfcasting", "Ação pesada", "Praia"]
  },
  {
    id: 11,
    name: "Vara de Praia Shimano Speedmaster 3.90m",
    price: 289.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "praia",
    bestSeller: true,
    rating: 4.7,
    stock: 9,
    description: "Vara de praia Shimano Speedmaster 3,90m, equilíbrio perfeito.",
    features: ["3,90m", "Praia", "Equilibrada", "Lançamento longo"]
  },
  {
    id: 12,
    name: "Vara de Praia Daiwa Emblem 4.20m",
    price: 349.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "praia",
    bestSeller: false,
    rating: 4.8,
    stock: 5,
    description: "Vara de praia Daiwa Emblem 4,20m premium para pesca oceânica.",
    features: ["4,20m", "Premium", "Praia", "Oceânica"]
  },

  // ========== VARAS PESADA ==========
  {
    id: 13,
    name: "Vara Pesada Shimano Beastmaster 2.70m",
    price: 389.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "pesada",
    bestSeller: true,
    rating: 4.9,
    stock: 6,
    description: "Vara pesada Shimano Beastmaster 2,70m para peixes grandes.",
    features: ["2,70m", "Pesada", "Peixes grandes", "Resistente"]
  },
  {
    id: 14,
    name: "Vara Pesada Penn International 2.40m",
    price: 459.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "pesada",
    bestSeller: false,
    rating: 4.8,
    stock: 4,
    description: "Vara pesada Penn International 2,40m para pesca oceânica profissional.",
    features: ["2,40m", "Oceânica", "Profissional", "Pesada"]
  },
  {
    id: 15,
    name: "Vara Pesada Daiwa Saltiga 2.50m",
    price: 519.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "pesada",
    bestSeller: true,
    rating: 5.0,
    stock: 3,
    description: "Vara pesada Daiwa Saltiga 2,50m, top de linha para marlim e atum.",
    features: ["2,50m", "Top linha", "Marlim/Atum", "Pesada"]
  },

  // ========== MOLINETES ==========
  {
    id: 16,
    name: "Molinete Shimano Sedona FI 2500",
    price: 279.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "carretilhas-molinetes",
    specificCategory: "molinete",
    bestSeller: true,
    rating: 4.7,
    stock: 20,
    description: "Molinete Shimano Sedona FI 2500, 5+1 rolamentos, resistente à água salgada.",
    features: ["2500", "5+1 rolamentos", "Anti-corrosão", "Molinete"]
  },
  {
    id: 17,
    name: "Molinete Daiwa BG 5000",
    price: 349.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "carretilhas-molinetes",
    specificCategory: "molinete",
    bestSeller: true,
    rating: 4.9,
    stock: 15,
    description: "Molinete Daiwa BG 5000, corpo de alumínio, 5 rolamentos, alto torque.",
    features: ["5000", "Alumínio", "5 rolamentos", "Alto torque"]
  },
  {
    id: 18,
    name: "Molinete Penn Pursuit III 4000",
    price: 199.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "carretilhas-molinetes",
    specificCategory: "molinete",
    bestSeller: false,
    rating: 4.5,
    stock: 25,
    description: "Molinete Penn Pursuit III 4000, excelente custo-benefício, 5 rolamentos.",
    features: ["4000", "5 rolamentos", "Custo-benefício", "Molinete"]
  },

  // ========== CARRETILHAS BAIXO PERFIL ==========
  {
    id: 19,
    name: "Carretilha Shimano Curado 150",
    price: 299.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "carretilhas-molinetes",
    specificCategory: "carretilha-baixo-perfil",
    bestSeller: true,
    rating: 4.8,
    stock: 12,
    description: "Carretilha Shimano Curado 150, perfil baixo, 6 rolamentos, freio magnético.",
    features: ["6 rolamentos", "Freio magnético", "Perfil baixo", "150"]
  },
  {
    id: 20,
    name: "Carretilha Abu Garcia Revo SX",
    price: 329.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "carretilhas-molinetes",
    specificCategory: "carretilha-baixo-perfil",
    bestSeller: false,
    rating: 4.6,
    stock: 10,
    description: "Carretilha Abu Garcia Revo SX, perfil baixo, sistema de freio infinito.",
    features: ["Perfil baixo", "Freio infinito", "7 rolamentos", "SX"]
  },
  {
    id: 21,
    name: "Carretilha Daiwa Tatula CT",
    price: 279.99,
    originalPrice: 339.99,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "carretilhas-molinetes",
    specificCategory: "carretilha-baixo-perfil",
    bestSeller: true,
    rating: 4.7,
    stock: 14,
    description: "Carretilha Daiwa Tatula CT, compacta, T-Wing sistema, 6 rolamentos.",
    features: ["Compacta", "T-Wing", "6 rolamentos", "CT"]
  },

  // ========== LINHAS MONOFILAMENTO ==========
  {
    id: 22,
    name: "Linha Berkley Trilene XL 300m 12lb",
    price: 45.99,
    originalPrice: 59.99,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "linhas",
    specificCategory: "monofilamento",
    bestSeller: false,
    rating: 4.4,
    stock: 45,
    description: "Linha monofilamento Berkley Trilene XL 300m, 12lb, baixa memória.",
    features: ["Monofilamento", "300 metros", "12lb", "Baixa memória"]
  },
  {
    id: 23,
    name: "Linha Sufix Elite 250m 10lb",
    price: 39.99,
    originalPrice: 49.99,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "linhas",
    specificCategory: "monofilamento",
    bestSeller: true,
    rating: 4.6,
    stock: 35,
    description: "Linha Sufix Elite 250m, 10lb, alta resistência à abrasão.",
    features: ["250 metros", "10lb", "Anti-abrasão", "Monofilamento"]
  },
  {
    id: 24,
    name: "Linha Spiderwire EZ Monofilamento 200m 15lb",
    price: 34.99,
    originalPrice: 44.99,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "linhas",
    specificCategory: "monofilamento",
    bestSeller: false,
    rating: 4.3,
    stock: 40,
    description: "Linha Spiderwire EZ Monofilamento 200m, 15lb, fácil de manusear.",
    features: ["200 metros", "15lb", "Fácil manusear", "Monofilamento"]
  },

  // ========== LINHAS MULTIFILAMENTO ==========
  {
    id: 25,
    name: "Linha PowerPro Braid 150m 30lb",
    price: 89.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "linhas",
    specificCategory: "multifilamento",
    bestSeller: true,
    rating: 4.9,
    stock: 25,
    description: "Linha PowerPro Braid 150m, 30lb, 8-carregamento, alta sensibilidade.",
    features: ["Braid", "150 metros", "30lb", "8-carregamento"]
  },
  {
    id: 26,
    name: "Linha Daiwa J-Braid 200m 20lb",
    price: 79.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "linhas",
    specificCategory: "multifilamento",
    bestSeller: false,
    rating: 4.7,
    stock: 30,
    description: "Linha Daiwa J-Braid 200m, 20lb, super fina, alta resistência.",
    features: ["200 metros", "20lb", "Super fina", "Multifilamento"]
  },
  {
    id: 27,
    name: "Linha Sufix 832 Braid 135m 50lb",
    price: 99.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "linhas",
    specificCategory: "multifilamento",
    bestSeller: true,
    rating: 4.8,
    stock: 15,
    description: "Linha Sufix 832 Braid 135m, 50lb, 8 fibras, para pesca pesada.",
    features: ["135 metros", "50lb", "8 fibras", "Pesada"]
  },

  // ========== ANZÓIS ==========
  {
    id: 28,
    name: "Kit Anzóis Variados 50 Unidades",
    price: 39.99,
    originalPrice: 49.99,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "ancas-terminais",
    specificCategory: "anzóis",
    bestSeller: false,
    rating: 4.3,
    stock: 60,
    description: "Kit com 50 anzóis de diferentes tamanhos e modelos.",
    features: ["50 unidades", "Vários tamanhos", "Aço inox", "Pontas afiadas"]
  },
  {
    id: 29,
    name: "Anzóis Owner Mosquito 10 Unidades",
    price: 24.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "ancas-terminais",
    specificCategory: "anzóis",
    bestSeller: true,
    rating: 4.8,
    stock: 45,
    description: "Anzóis Owner Mosquito tamanho 6, 10 unidades, ultra afiados.",
    features: ["10 unidades", "Tamanho 6", "Ultra afiados", "Owner"]
  },
  {
    id: 30,
    name: "Anzóis Gamakatsu Octopus 25 Unidades",
    price: 49.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "ancas-terminais",
    specificCategory: "anzóis",
    bestSeller: true,
    rating: 4.9,
    stock: 35,
    description: "Anzóis Gamakatsu Octopus 25 unidades, tamanho 2/0, alta qualidade.",
    features: ["25 unidades", "Tamanho 2/0", "Gamakatsu", "Alta qualidade"]
  },

  // ========== JIG HEADS ==========
  {
    id: 31,
    name: "Jig Heads 10 Unidades Variadas",
    price: 18.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "ancas-terminais",
    specificCategory: "jig-heads",
    bestSeller: false,
    rating: 4.5,
    stock: 50,
    description: "Kit com 10 jig heads de diferentes pesos e cores.",
    features: ["10 unidades", "1/8 a 1/2 oz", "Anzóis afiados", "Cores variadas"]
  },
  {
    id: 32,
    name: "Jig Heads Owner Cultiva 7g 5 Unidades",
    price: 22.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "ancas-terminais",
    specificCategory: "jig-heads",
    bestSeller: true,
    rating: 4.7,
    stock: 40,
    description: "Jig Heads Owner Cultiva 7g, 5 unidades, pontas ultra afiadas.",
    features: ["5 unidades", "7g", "Owner", "Ultra afiados"]
  },
  {
    id: 33,
    name: "Jig Heads Colored 15 Unidades",
    price: 29.99,
    originalPrice: 39.99,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "ancas-terminais",
    specificCategory: "jig-heads",
    bestSeller: false,
    rating: 4.4,
    stock: 55,
    description: "Kit com 15 jig heads coloridos, diferentes pesos.",
    features: ["15 unidades", "Coloridos", "3 pesos diferentes", "Kit completo"]
  },

  // ========== CAIXAS E ESTOJOS ==========
  {
    id: 34,
    name: "Caixa de Pesca Plano 3600",
    price: 59.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "acessorios",
    specificCategory: "caixas-estojos",
    bestSeller: true,
    rating: 4.7,
    stock: 28,
    description: "Caixa de pesca Plano 3600 com 36 divisórias removíveis.",
    features: ["36 divisórias", "Removíveis", "Resistente", "Fechadura"]
  },
  {
    id: 35,
    name: "Caixa de Pesca Flambeau 5007",
    price: 79.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "acessorios",
    specificCategory: "caixas-estojos",
    bestSeller: false,
    rating: 4.6,
    stock: 20,
    description: "Caixa Flambeau 5007, 7 gavetas, sistema de organização premium.",
    features: ["7 gavetas", "Sistema premium", "Flambeau", "Organização"]
  },
  {
    id: 36,
    name: "Estojo de Pesca Portátil",
    price: 34.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "acessorios",
    specificCategory: "caixas-estojos",
    bestSeller: true,
    rating: 4.5,
    stock: 40,
    description: "Estojo de pesca portátil compacto, ideal para viagens.",
    features: ["Compacto", "Portátil", "Viagens", "Leve"]
  },

  // ========== ALICATES E FERRAMENTAS ==========
  {
    id: 37,
    name: "Alicate de Pesca Multifunção",
    price: 34.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "acessorios",
    specificCategory: "alicates-ferramentas",
    bestSeller: true,
    rating: 4.8,
    stock: 55,
    description: "Alicate multifunção para pesca com cortador de linha e removedor de anzol.",
    features: ["Cortador", "Removedor", "Inox", "Anti-corrosão"]
  },
  {
    id: 38,
    name: "Alicate de Corte Premium",
    price: 49.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "acessorios",
    specificCategory: "alicates-ferramentas",
    bestSeller: false,
    rating: 4.9,
    stock: 30,
    description: "Alicate de corte premium, corta até linha de multifilamento.",
    features: ["Corte premium", "Multifilamento", "Aço carbono", "Preciso"]
  },
  {
    id: 39,
    name: "Kit Alicates 3 em 1",
    price: 59.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "acessorios",
    specificCategory: "alicates-ferramentas",
    bestSeller: true,
    rating: 4.7,
    stock: 25,
    description: "Kit com 3 alicates: corte, contenção e boca de jacaré.",
    features: ["3 alicates", "Kit completo", "Profissional", "Estojo"]
  },

  // ========== SUPORTES DE VARA ==========
  {
    id: 40,
    name: "Suporte Triplo para Varas",
    price: 42.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "acessorios",
    specificCategory: "suportes-vara",
    bestSeller: false,
    rating: 4.4,
    stock: 30,
    description: "Suporte triplo para varas de pesca, ajustável e portátil.",
    features: ["Triplo", "Ajustável", "Alumínio", "Portátil"]
  },
  {
    id: 41,
    name: "Suporte Quádruplo Profissional",
    price: 69.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "acessorios",
    specificCategory: "suportes-vara",
    bestSeller: true,
    rating: 4.6,
    stock: 18,
    description: "Suporte quádruplo profissional, regulagem independente.",
    features: ["Quádruplo", "Profissional", "Regulável", "Estável"]
  },
  {
    id: 42,
    name: "Suporte Simples para Barco",
    price: 29.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "acessorios",
    specificCategory: "suportes-vara",
    bestSeller: false,
    rating: 4.3,
    stock: 35,
    description: "Suporte simples para vara, ideal para uso em barco.",
    features: ["Simples", "Barco", "Compacto", "Fácil instalação"]
  },

  // ========== CAMPING ==========
  {
    id: 43,
    name: "Barraca Camping 4 Pessoas",
    price: 459.99,
    originalPrice: null,
    image: "/images/fogareiro-portal.webp",
    category: "camping",
    subcategory: "barracas",
    specificCategory: "barraca-familiar",
    bestSeller: true,
    rating: 4.7,
    stock: 10,
    description: "Barraca familiar para 4 pessoas, resistente à chuva e vento.",
    features: ["4 pessoas", "Impermeável", "Fácil montagem", "Ventilação"]
  },
  {
    id: 44,
    name: "Fogareiro Portátil Campingaz",
    price: 89.99,
    originalPrice: 119.99,
    image: "/images/fogareiro-portal.webp",
    category: "camping",
    subcategory: "cozinha",
    specificCategory: "fogareiro",
    bestSeller: true,
    rating: 4.6,
    stock: 40,
    description: "Fogareiro compacto ideal para camping e trilhas.",
    features: ["Compacto", "Fácil transporte", "Alta potência", "Regulável"]
  },

  // ========== PRODUTOS DE PESCA ESPORTIVA ==========
  {
    id: 45,
    name: "Vara de Bass Shimano Curado",
    price: 389.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "varas",
    specificCategory: "carretilha",
    bestSeller: true,
    rating: 4.9,
    stock: 8,
    description: "Vara especializada para pesca de bass, ação extra rápida.",
    features: ["Ação extra rápida", "2,10m", "Bass", "Guides Fuji"]
  },
  {
    id: 46,
    name: "Carretilha para Bass Lew's Tournament",
    price: 429.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "carretilhas-molinetes",
    specificCategory: "carretilha-baixo-perfil",
    bestSeller: true,
    rating: 4.8,
    stock: 6,
    description: "Carretilha profissional para competições de bass.",
    features: ["Freio magnético", "7 rolamentos", "Bass", "Competição"]
  },
  {
    id: 47,
    name: "Iscas Soft para Bass 10 unidades",
    price: 89.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "ancas-terminais",
    specificCategory: "jig-heads",
    bestSeller: false,
    rating: 4.7,
    stock: 25,
    description: "Kit com 10 iscas soft especializadas para bass.",
    features: ["10 unidades", "Soft plastic", "Bass", "Cores variadas"]
  },
  {
    id: 48,
    name: "Linha Fluorocarbon Bass 150m",
    price: 79.99,
    originalPrice: null,
    image: "/images/vara-pesca.webp",
    category: "pesca",
    subcategory: "linhas",
    specificCategory: "fluorocarbon",
    bestSeller: true,
    rating: 4.8,
    stock: 30,
    description: "Linha fluorocarbon especial para pesca de bass.",
    features: ["Fluorocarbon", "150m", "8lb", "Invisível"]
  },

  // ========== KITS ESPECIAIS ==========
  {
    id: 49,
    name: "Kit Iniciante Pesca Completo",
    price: 299.99,
    originalPrice: 399.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "iniciante",
    specificCategory: "kit-completo",
    bestSeller: true,
    rating: 4.9,
    stock: 15,
    description: "Kit completo para quem está começando na pesca.",
    features: ["Vara + Molinete", "Linha + Anzóis", "Caixa", "Alicate"]
  },
  {
    id: 50,
    name: "Kit Bass Pro",
    price: 599.99,
    originalPrice: null,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "bass",
    specificCategory: "kit-bass",
    bestSeller: true,
    rating: 4.8,
    stock: 10,
    description: "Kit profissional para pesca de bass.",
    features: ["Vara baitcast", "Carretilha", "Iscas", "Caixa premium"]
  },
  {
    id: 51,
    name: "Kit Pesca de Praia",
    price: 449.99,
    originalPrice: null,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "praia",
    specificCategory: "kit-praia",
    bestSeller: false,
    rating: 4.7,
    stock: 12,
    description: "Kit completo para pesca de praia.",
    features: ["Vara 4m", "Molinete 5000", "Linha", "Chumbadas"]
  },
  {
    id: 52,
    name: "Kit Camping Familiar",
    price: 799.99,
    originalPrice: 999.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "camping",
    specificCategory: "kit-familiar",
    bestSeller: true,
    rating: 4.8,
    stock: 8,
    description: "Kit completo para camping em família.",
    features: ["Barraca 4 pessoas", "Fogareiro", "Lanterna", "Kit cozinha"]
  },

  // ========== VESTUÁRIO ==========
  {
    id: 53,
    name: "Camiseta Técnica Pesca UV Protection",
    price: 89.99,
    originalPrice: 119.99,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "camisetas",
    specificCategory: "tecnica",
    bestSeller: true,
    rating: 4.7,
    stock: 40,
    description: "Camiseta técnica com proteção UV para pesca.",
    features: ["Proteção UV", "Tecido rápido secagem", "Pesca", "Confortável"]
  },
  {
    id: 54,
    name: "Calça Cargo Pesca Impermeável",
    price: 149.99,
    originalPrice: null,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "calcas",
    specificCategory: "impermeavel",
    bestSeller: false,
    rating: 4.6,
    stock: 25,
    description: "Calça cargo impermeável para pesca e camping.",
    features: ["Impermeável", "Múltiplos bolsos", "Resistente", "Confortável"]
  },
  {
    id: 55,
    name: "Boné Pesca Aba Curva",
    price: 49.99,
    originalPrice: 69.99,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "acessorios",
    specificCategory: "bone",
    bestSeller: true,
    rating: 4.8,
    stock: 60,
    description: "Boné especializado para pesca com aba curva.",
    features: ["Proteção solar", "Aba curva", "Ajustável", "Leve"]
  },
  {
    id: 56,
    name: "Jaqueta Corta Vento Pesca",
    price: 199.99,
    originalPrice: 259.99,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "jaquetas",
    specificCategory: "corta-vento",
    bestSeller: true,
    rating: 4.9,
    stock: 20,
    description: "Jaqueta corta vento para pesca em condições adversas.",
    features: ["Corta vento", "Impermeável", "Bolso iscas", "Capuz"]
  },
  {
    id: 60,
    name: "Barraca Quechua 2 Pessoas Fresh & Black",
    price: 449.99,
    originalPrice: 549.99,
    image: "/images/fogareiro-portal.webp",
    category: "camping",
    subcategory: "abrigo-conforto",
    specificCategory: "barracas-2p",
    bestSeller: true,
    rating: 4.8,
    stock: 15,
    description: "Barraca 2 pessoas com tecnologia Fresh & Black...",
    features: ["2 pessoas", "Fresh & Black", "Escurece 99%", "3kg"]
  },
  {
    id: 71,
    name: "Fogareiro Jetboil Flash Cooking System",
    price: 199.99,
    originalPrice: 249.99,
    image: "/images/fogareiro-portal.webp",
    category: "camping",
    subcategory: "cozinha-hidratacao",
    specificCategory: "fogareiro",
    bestSeller: true,
    rating: 4.9,
    stock: 15,
    description: "Sistema de cozimento Jetboil...",
    features: ["100s fervura", "Sistema integrado", "Eficiente", "Compacto"]
  },
  {
    id: 74,
    name: "Lanterna de Cabeça Petzl Actik Core",
    price: 129.99,
    originalPrice: null,
    image: "/images/fogareiro-portal.webp",
    category: "camping",
    subcategory: "iluminacao-ferramentas",
    specificCategory: "lanternas",
    bestSeller: true,
    rating: 4.8,
    stock: 25,
    description: "Lanterna de cabeça 450 lumens...",
    features: ["450 lumens", "Recarregável", "À prova d'água", "Confortável"]
  },

  // ========== VESTUÁRIO - CAMISAS UV ==========
  {
    id: 70,
    name: "Camiseta UV Protection Columbia PFG",
    price: 129.99,
    originalPrice: 159.99,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "camisas-protecao-uv",
    specificCategory: "tecnica",
    bestSeller: true,
    rating: 4.8,
    stock: 25,
    description: "Camiseta técnica com proteção UV 50+, tecido rápido secagem.",
    features: ["UPF 50+", "Secagem rápida", "Leve", "Ventilação"]
  },
  {
    id: 71,
    name: "Camiseta Mangas Longas UV Shimano",
    price: 149.99,
    originalPrice: null,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "camisas-protecao-uv",
    specificCategory: "tecnica",
    bestSeller: true,
    rating: 4.7,
    stock: 20,
    description: "Camiseta mangas longas com proteção solar total.",
    features: ["Mangas longas", "Proteção total", "Confortável", "Tecido técnico"]
  },

  // ========== VESTUÁRIO - BONÉS ==========
  {
    id: 72,
    name: "Boné Aba Curva UV Protection",
    price: 49.99,
    originalPrice: 69.99,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "bones-chapeus",
    specificCategory: "bone",
    bestSeller: true,
    rating: 4.6,
    stock: 40,
    description: "Boné com aba curva e proteção UV, ajustável.",
    features: ["Proteção UV", "Aba curva", "Ajustável", "Leve"]
  },
  {
    id: 73,
    name: "Chapéu de Pesca Aba Larga",
    price: 79.99,
    originalPrice: null,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "bones-chapeus",
    specificCategory: "bone",
    bestSeller: false,
    rating: 4.5,
    stock: 30,
    description: "Chapéu com aba larga para proteção total do rosto.",
    features: ["Aba larga", "Proteção total", "Cordão", "Resistente à água"]
  },

  // ========== VESTUÁRIO - ÓCULOS POLARIZADOS ==========
  {
    id: 74,
    name: "Óculos Polarizado Costa Del Mar",
    price: 299.99,
    originalPrice: 349.99,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "oculos-polarizados",
    specificCategory: "acessorios",
    bestSeller: true,
    rating: 4.9,
    stock: 15,
    description: "Óculos polarizado premium, lentes 100% polarizadas.",
    features: ["100% polarizado", "Proteção UV400", "Anti-reflexo", "Premium"]
  },
  {
    id: 75,
    name: "Óculos Polarizado Oakley Flak Jacket",
    price: 249.99,
    originalPrice: null,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "oculos-polarizados",
    specificCategory: "acessorios",
    bestSeller: false,
    rating: 4.7,
    stock: 20,
    description: "Óculos esportivo polarizado, design aerodinâmico.",
    features: ["Polarizado", "Esportivo", "Conforto", "Durabilidade"]
  },

  // ========== VESTUÁRIO - COLETES SALVA-VIDAS ==========
  {
    id: 76,
    name: "Colete Salva-vidas Infantil",
    price: 89.99,
    originalPrice: 119.99,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "coletes-salva-vidas",
    specificCategory: "acessorios",
    bestSeller: true,
    rating: 4.8,
    stock: 25,
    description: "Colete salva-vidas infantil, certificação INMETRO.",
    features: ["Certificado", "Ajustável", "Cores vivas", "Infantil"]
  },
  {
    id: 77,
    name: "Colete Salva-vidas Adulto Premium",
    price: 159.99,
    originalPrice: null,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "coletes-salva-vidas",
    specificCategory: "acessorios",
    bestSeller: true,
    rating: 4.9,
    stock: 18,
    description: "Colete salva-vidas adulto premium, máxima flutuação.",
    features: ["Premium", "Alta flutuação", "Confortável", "Segurança"]
  },

  // ========== VESTUÁRIO - CALÇADOS ==========
  {
    id: 78,
    name: "Sapatilha de Pesca Columbia Drainmaker",
    price: 199.99,
    originalPrice: 249.99,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "calcados-protecao",
    specificCategory: "acessorios",
    bestSeller: true,
    rating: 4.7,
    stock: 22,
    description: "Sapatilha especial para pesca, drenagem rápida.",
    features: ["Drenagem rápida", "Antiderrapante", "Confortável", "Leve"]
  },
  {
    id: 79,
    name: "Bota de Pesca Impermeável",
    price: 179.99,
    originalPrice: null,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "calcados-protecao",
    specificCategory: "acessorios",
    bestSeller: false,
    rating: 4.6,
    stock: 20,
    description: "Bota impermeável para pesca, solado antiderrapante.",
    features: ["Impermeável", "Antiderrapante", "Conforto", "Durabilidade"]
  },

  // ========== VESTUÁRIO - LUVAS ==========
  {
    id: 80,
    name: "Luva de Proteção UV Fingerless",
    price: 39.99,
    originalPrice: 49.99,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "luvas-protecao",
    specificCategory: "acessorios",
    bestSeller: true,
    rating: 4.5,
    stock: 35,
    description: "Luva sem dedos com proteção UV, ideal para pesca.",
    features: ["Proteção UV", "Sem dedos", "Confortável", "Leve"]
  },
  {
    id: 81,
    name: "Luva de Corte para Pesca",
    price: 59.99,
    originalPrice: null,
    image: "/images/camisa-tecnica.webp",
    category: "vestuario",
    subcategory: "luvas-protecao",
    specificCategory: "acessorios",
    bestSeller: false,
    rating: 4.7,
    stock: 28,
    description: "Luva anti-corte para manipulação de anzóis e linhas.",
    features: ["Anti-corte", "Proteção", "Conforto", "Durabilidade"]
  },
  {
    id: 90,
    name: "Kit Iniciante Pesca Completo Shimano",
    price: 299.99,
    originalPrice: 399.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "kits-prontos",
    specificCategory: "kit-iniciante",
    bestSeller: true,
    rating: 4.9,
    stock: 15,
    description: "Kit completo para quem está começando na pesca. Inclui vara, molinete, linha, anzóis e caixa organizadora.",
    features: ["Vara 2,10m", "Molinete 2500", "Linha 150m", "Kit anzóis", "Caixa organizadora"]
  },
  {
    id: 91,
    name: "Kit Pesca de Praia Premium",
    price: 449.99,
    originalPrice: 599.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "kits-prontos",
    specificCategory: "kit-praia",
    bestSeller: true,
    rating: 4.7,
    stock: 12,
    description: "Kit completo para pesca de praia. Vara 4m, molinete 5000, linha multifilamento e chumbadas.",
    features: ["Vara 4m", "Molinete 5000", "Linha multifilamento", "Chumbadas variadas", "Porta-varas"]
  },
  {
    id: 92,
    name: "Kit Tucunaré Pro",
    price: 699.99,
    originalPrice: 899.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "kits-prontos",
    specificCategory: "kit-tucunare",
    bestSeller: true,
    rating: 4.8,
    stock: 8,
    description: "Kit profissional para pesca de tucunaré. Vara média-ação, carretilha, iscas artificiais específicas.",
    features: ["Vara baitcast", "Carretilha", "Iscas artificiais", "Caixa premium", "Alicate"]
  },
  {
    id: 93,
    name: "Kit Pesca Embarcada Mar",
    price: 799.99,
    originalPrice: 999.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "kits-prontos",
    specificCategory: "kit-iniciante",
    bestSeller: false,
    rating: 4.6,
    stock: 6,
    description: "Kit para pesca embarcada em mar. Vara pesada, molinete robusto, linha braid 50lb.",
    features: ["Vara pesada 2,7m", "Molinete 8000", "Linha braid 50lb", "Anzóis marítimos", "Giradores"]
  },
  {
    id: 94,
    name: "Kit Bass Competição",
    price: 599.99,
    originalPrice: 799.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "kits-prontos",
    specificCategory: "kit-tucunare",
    bestSeller: true,
    rating: 4.9,
    stock: 10,
    description: "Kit para competições de bass. Equipamentos de alta performance.",
    features: ["Vara extra rápida", "Carretilha premium", "Iscas soft", "Fluorocarbon", "Caixa Plano"]
  },
  {
    id: 95,
    name: "Kit Camping + Pesca Familiar",
    price: 899.99,
    originalPrice: 1199.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "kits-prontos",
    specificCategory: "kit-iniciante",
    bestSeller: false,
    rating: 4.7,
    stock: 5,
    description: "Combo perfeito para acampamento com pesca. Barraca 4 pessoas + equipamentos básicos de pesca.",
    features: ["Barraca 4 pessoas", "Vara telescópica", "Molinete", "Kit pesca básico", "Lanterna"]
  },

  // ========== OUTLET / PROMOÇÕES ==========
  {
    id: 96,
    name: "Vara Shimano Exage (Outlet) - Pequenos Defeitos",
    price: 149.99,
    originalPrice: 289.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "outlet-promocoes",
    specificCategory: null,
    bestSeller: true,
    rating: 4.5,
    stock: 3,
    description: "Vara Shimano Exage com pequenos defeitos cosméticos. Funcionalidade 100%.",
    features: ["Pequenos defeitos", "Funcional 100%", "Garantia 30 dias", "Oportunidade"]
  },
  {
    id: 97,
    name: "Carretilha Abu Garcia Revo SX (Display)",
    price: 249.99,
    originalPrice: 429.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "outlet-promocoes",
    specificCategory: null,
    bestSeller: true,
    rating: 4.6,
    stock: 2,
    description: "Carretilha de display. Caixa original danificada, produto perfeito.",
    features: ["Produto display", "Caixa danificada", "Funcional novo", "Super desconto"]
  },
  {
    id: 98,
    name: "Molinete Daiwa BG 4000 (Ponta de Estoque)",
    price: 279.99,
    originalPrice: 379.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "outlet-promocoes",
    specificCategory: null,
    bestSeller: false,
    rating: 4.7,
    stock: 4,
    description: "Ponta de estoque modelo antigo. Produto novo com embalagem original.",
    features: ["Ponta de estoque", "Modelo antigo", "Novo lacrado", "Economia"]
  },
  {
    id: 99,
    name: "Kit Iscas Variadas (Pacote Econômico)",
    price: 39.99,
    originalPrice: 79.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "outlet-promocoes",
    specificCategory: null,
    bestSeller: true,
    rating: 4.4,
    stock: 25,
    description: "Pacote com iscas variadas, algumas com embalagem amassada. Produtos perfeitos.",
    features: ["Embalagem danificada", "Iscas perfeitas", "Variedade", "50% desconto"]
  },
  {
    id: 100,
    name: "Caixa Plano 3600 (Segunda Linha)",
    price: 34.99,
    originalPrice: 69.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "outlet-promocoes",
    specificCategory: null,
    bestSeller: false,
    rating: 4.3,
    stock: 8,
    description: "Produto de segunda linha, pequenas imperfeições na pintura. Funcionalidade garantida.",
    features: ["Segunda linha", "Imperfeições cosméticas", "Funciona perfeitamente", "Ótimo custo"]
  },
  {
    id: 101,
    name: "Vara Telescópica (Kit com 2 Unidades)",
    price: 129.99,
    originalPrice: 199.99,
    image: "/images/anzois-variados.webp",
    category: "kits",
    subcategory: "outlet-promocoes",
    specificCategory: null,
    bestSeller: true,
    rating: 4.5,
    stock: 6,
    description: "Kit com 2 varas telescópicas. Produtos de entrada, ideal para iniciantes.",
    features: ["Kit 2 unidades", "Para iniciantes", "Econômico", "Boa qualidade"]
  },

  // ADICIONE AQUI TODOS OS OUTROS PRODUTOS QUE ESTAVAM NO SEU ARQUIVO ORIGINAL
  // Mantenha a mesma estrutura, apenas ajustando as imagens conforme abaixo:
  
  // Para produtos de PESCA: image: "/images/vara-pesca.webp"
  // Para produtos de CAMPING: image: "/images/fogareiro-portal.webp"
  // Para produtos de KITS: image: "/images/anzois-variados.webp"
  // Para produtos de VESTUÁRIO: image: "/images/camisa-tecnica.webp"
];

// Categorias principais - ESTRUTURA QUE OS COMPONENTES JS PRECISAM
export const categories = {
  pesca: {
    name: "Pesca",
    subcategories: {
      varas: {
        name: "Varas de Pesca",
        specific: {
          molinete: "Varas para Molinete",
          carretilha: "Varas para Carretilha",
          telescopica: "Varas Telescópicas",
          praia: "Varas de Praia",
          pesada: "Varas para Pesca Pesada"
        }
      },
      "carretilhas-molinetes": {
        name: "Carretilhas e Molinetes",
        specific: {
          molinete: "Molinetes",
          "carretilha-baixo-perfil": "Carretilhas Baixo Perfil",
          "carretilha-alto-perfil": "Carretilhas Alto Perfil",
          "pecas-manutencao": "Peças e Manutenção"
        }
      },
      linhas: {
        name: "Linhas de Pesca",
        specific: {
          monofilamento: "Monofilamento",
          multifilamento: "Multifilamento",
          fluorocarbon: "Fluorocarbon"
        }
      },
      iscas: {
        name: "Iscas",
        specific: {
          "isca-artificial-superficie": "Superfície e Zara",
          "isca-artificial-meia-agua": "Meia-água",
          "isca-artificial-fundo": "Fundo e Jigs",
          "isca-soft": "Soft",
          "isca-natural": "Iscas Naturais",
          massas: "Massas Prontas"
        }
      },
      "ancas-terminais": {
        name: "Anzóis e Terminais",
        specific: {
          anzóis: "Anzóis",
          garateias: "Garateias",
          "jig-heads": "Jig Heads",
          chumbadas: "Chumbadas e Pesos",
          boias: "Boias",
          giradores: "Giradores, Snaps e Argolas"
        }
      },
      acessorios: {
        name: "Acessórios de Apoio",
        specific: {
          "caixas-estojos": "Caixas e Estojos",
          "alicates-ferramentas": "Alicates e Ferramentas",
          "facas-canivetes": "Facas e Canivetes",
          pucas: "Puçás e Samburás",
          "suportes-vara": "Suportes de Vara"
        }
      }
    }
  },
  camping: {
    name: "Camping",
    subcategories: {
      barracas: {
        name: "Barracas",
        specific: {
          "barraca-familiar": "Barracas Familiares",
          "barraca-expedicao": "Barracas de Expedição",
          "barraca-ultraleve": "Barracas Ultralight"
        }
      },
      cozinha: {
        name: "Cozinha",
        specific: {
          fogareiro: "Fogareiros",
          utensilios: "Utensílios",
          conservacao: "Conservação de Alimentos"
        }
      },
      "abrigo-conforto": {
        name: "Abrigo e Conforto",
        specific: {
          "barracas-2p": "Barracas 2 Pessoas",
          "barracas-4p": "Barracas 4 Pessoas",
          "barracas-6p": "Barracas 6+ Pessoas",
          "gazebos-tendas": "Gazebos e Tendas",
          "sacos-dormir": "Sacos de Dormir",
          "colchoes-inflaveis": "Colchões Infláveis"
        }
      },
      "cozinha-hidratacao": {
        name: "Cozinha e Hidratação",
        specific: {
          "caixas-termicas": "Caixas Térmicas e Coolers",
          "garrafas-termicas": "Garrafas Térmicas e Copos",
          fogareiro: "Fogareiros",
          "kits-cozinha": "Kits de Cozinha"
        }
      },
      "iluminacao-ferramentas": {
        name: "Iluminação e Ferramentas",
        specific: {
          "lanternas-cabeca": "Lanternas de Cabeça",
          lampioes: "Lampiões",
          "canivetes-multiuso": "Canivetes Multiuso"
        }
      }
    }
  },
  kits: {
    name: "Coleções Especiais",
    subcategories: {
      "kits-prontos": {
        name: "Kits Prontos",
        specific: {
          "kit-iniciante": "Kit Iniciante",
          "kit-praia": "Kit Pesca de Praia",
          "kit-tucunare": "Kit Tucunaré",
          "kit-bass": "Kit Bass",
          "kit-completo": "Kit Completo",
          "kit-familiar": "Kit Familiar"
        }
      },
      "outlet-promocoes": {
        name: "Outlet / Promoções",
        specific: {}
      },
      iniciante: {
        name: "Kits Iniciante",
        specific: {
          "kit-completo": "Kit Completo Iniciante"
        }
      },
      bass: {
        name: "Kits Bass",
        specific: {
          "kit-bass": "Kit Bass Pro"
        }
      },
      praia: {
        name: "Kits Praia",
        specific: {
          "kit-praia": "Kit Pesca de Praia"
        }
      },
      camping: {
        name: "Kits Camping",
        specific: {
          "kit-familiar": "Kit Camping Familiar"
        }
      }
    }
  },
  vestuario: {
    name: "Vestuário e Proteção",
    subcategories: {
      camisetas: {
        name: "Camisetas",
        specific: {
          tecnica: "Camisetas Técnicas",
          "impermeavel": "Impermeáveis",
          "corta-vento": "Corta Vento"
        }
      },
      calcas: {
        name: "Calças",
        specific: {
          impermeavel: "Impermeáveis"
        }
      },
      jaquetas: {
        name: "Jaquetas",
        specific: {
          "corta-vento": "Corta Vento"
        }
      },
      acessorios: {
        name: "Acessórios",
        specific: {
          bone: "Bonés"
        }
      },
      "camisas-protecao-uv": {
        name: "Camisas de Proteção UV",
        specific: {
          tecnica: "Camisetas Técnicas"
        }
      },
      "bones-chapeus": {
        name: "Bonés e Chapéus",
        specific: {
          bone: "Bonés e Chapéus"
        }
      },
      "oculos-polarizados": {
        name: "Óculos Polarizados",
        specific: {
          acessorios: "Óculos"
        }
      },
      "coletes-salva-vidas": {
        name: "Coletes Salva-vidas",
        specific: {
          acessorios: "Coletes"
        }
      },
      "calcados-protecao": {
        name: "Calçados de Proteção",
        specific: {
          acessorios: "Calçados"
        }
      },
      "luvas-protecao": {
        name: "Luvas de Proteção",
        specific: {
          acessorios: "Luvas"
        }
      }
    }
  }
};

// Funções auxiliares
export const getProductsByCategory = (category) => 
  products.filter(product => product.category === category);

export const getProductsBySubcategory = (category, subcategory) => 
  products.filter(product => 
    product.category === category && product.subcategory === subcategory
  );

export const getProductsBySpecificCategory = (category, subcategory, specific) => 
  products.filter(product => 
    product.category === category && 
    product.subcategory === subcategory && 
    product.specificCategory === specific
  );

export const bestSellers = products.filter(product => product.bestSeller);
export const fishingProducts = getProductsByCategory('pesca');
export const campingProducts = getProductsByCategory('camping');
export const kitProducts = getProductsByCategory('kits');
export const clothingProducts = getProductsByCategory('vestuario');

// Função para contar produtos por subcategoria
export const countProductsBySubcategory = (category, subcategory) => 
  products.filter(p => p.category === category && p.subcategory === subcategory).length;

// Função para contar produtos por categoria específica
export const countProductsBySpecific = (category, subcategory, specific) => 
  products.filter(p => 
    p.category === category && 
    p.subcategory === subcategory && 
    p.specificCategory === specific
  ).length;

// Funções para os componentes JS
export const sportFishingProducts = products.filter(product => 
  product.category === 'pesca' && (
    product.name.toLowerCase().includes('bass') ||
    product.name.toLowerCase().includes('competição') ||
    product.name.toLowerCase().includes('esportiv')
  )
).slice(0, 4);

export const getOutletProducts = () => 
  products.filter(product => 
    product.category === 'kits' && 
    product.subcategory === 'outlet-promocoes'
  );