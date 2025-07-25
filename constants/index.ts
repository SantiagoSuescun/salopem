import {
  Airplay,
  BadgeCheck,
  Box,
  Bubbles,
  Leaf,
  MoonStar,
} from "lucide-react";

export const nav = [
  { name: "Cuidado capilar", url: "/#cuidado-capilar" },
  { name: "Tienda", url: "/tienda" },
  { name: "Contacto", url: "/contacto" },
  { name: "Test capilar", url: "/#test-capilar" },
  { name: "Sobre Nosotras", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Mayoristas", url: "/#mayoristas" },
  { name: "Maquila", url: "/#maquila" },
];

export const cosmeticProducts = [
  {
    id: 1,
    name: "SHAMPOO",
    category: "HIDRATACIÓN PROFUNDA",
    brand: "SALOPEM",
    description:
      "Hidratación profunda con ácido hialurónico y vitamina E para una piel radiante",
    fullDescription:
      "Con su fórmula mejorada y vitaminas Pro B5, limpia suavemente y brinda hidratación intensa. Ideal para cabellos secos y rizados, mantiene la elasticidad y dejando tu melena suave y manejable. ¡Tu cabello te lo agradecerá!",
    benefits: [
      "Hidratación profunda",
      "Nutrición intensa:",
      "Brillo radiante",
      "Fórmula mejorada:",
    ],
    price: "$30.000",
    peso: "500 ml",
    image: "HI_salopem_500_ml_shampoo-removebg-preview.webp",
    images: [
      "HI_salopem_500_ml_shampoo-removebg-preview.webp",
      "22-removebg-preview.webp",
      "14-removebg-preview.webp",
    ],
    discount: null,
    features: [
      {
        icon: Leaf,
        title: "Natural",
        description: "100% ingredientes naturales",
      },
      {
        icon: Bubbles,
        title: "Hidratación",
        description: "24h de hidratación",
      },
      {
        icon: MoonStar,
        title: "Sin sulfatos",
        description: "Fórmula libre de sulfatos",
      },
    ],
  },
  {
    id: 2,
    name: "TÓNICO CAPILAR",
    category: "ANTICASPA",
    brand: "SALOPEM",
    description: " ¡Apto para todos los tipos de cabello!",
    fullDescription:
      "Este tónico combina ketoconazol, romero y ortiga para ofrecer un tratamiento eficaz que estimula el crecimiento del cabello y controla la caspa. Su fórmula ligera se absorbe rápidamente, brindando resultados visibles.",
    benefits: [
      "Estimula el crecimiento",
      "Previene la caída",
      "Alivia la picazón e irritación",
      "Eficacia natural",
    ],
    price: "$30.000",
    peso: "500 ml",
    image: "22-removebg-preview.webp",
    images: [
      "22-removebg-preview.webp",
      "HI_salopem_500_ml_shampoo-removebg-preview.webp",
      "14-removebg-preview.webp",
    ],
    discount: null,
    features: [
      { icon: Airplay, title: "Científico", description: "Fórmula avanzada" },
      { icon: Airplay, title: "Rápido", description: "Resultados visibles" },
      { icon: Airplay, title: "Premium", description: "Ingredientes de lujo" },
    ],
  },
  {
    id: 3,
    name: "REPARADOR CAPILAR",
    category: "TRATAMIENTO",
    brand: "SALOPEM",
    description:
      " ¡Potencia la reparación de tu cabellocon el Reparador Capilar deSalopém! ",
    fullDescription:
      "Enriquecido con aguacate, cacao, coco, miel y karité, este tratamiento es tu aliado perfecto para revitalizar cabellos maltratados, dañados o tratados químicamente.",
    benefits: [
      "Hidratación intensa",
      "Protección adicional",
      "Reparación profunda",
      "Escudo contra el cloro y las sales",
    ],
    price: "$33.000",
    peso: "500 ml",
    image: "14-removebg-preview.webp",
    images: [
      "14-removebg-preview.webp",
      "22-removebg-preview.webp",
      "HI_salopem_500_ml_shampoo-removebg-preview.webp",
    ],
    discount: null,
    features: [
      { icon: Box, title: "Específico", description: "Para contorno de ojos" },
      { icon: Box, title: "Cafeína", description: "Reduce hinchazón" },
      { icon: Box, title: "Colágeno", description: "Marino natural" },
    ],
  },
  {
    id: 4,
    name: "ACONDICIONADOR",
    category: "ANTI CAÍDA",
    brand: "KAMALA",
    description:
      "ideal para complementar el shampoo, ofrece una nutrición intensa.",
    fullDescription:
      "Enriquecido con romero, cola de caballo, miel, árnica y quina, este acondicionador cremoso desenreda y suaviza tu cabello, dejándolo sedoso y manejable. ",
    benefits: [
      "Hidratación profunda",
      "Definición de rizos",
      "Nutrición continua",
    ],
    price: "$30.000 ",
    peso: "500 ml",
    image: "Acondicionador_kamala_500ml-removebg-preview.webp",
    images: [
      "Acondicionador_kamala_500ml-removebg-preview.webp",
      "22-removebg-preview.webp",
      "14-removebg-preview.webp",
    ],
    discount: null,
    features: [
      { icon: BadgeCheck, title: "Karité", description: "Manteca natural" },
      {
        icon: BadgeCheck,
        title: "Aromático",
        description: "Aceites esenciales",
      },
      {
        icon: BadgeCheck,
        title: "Nutritivo",
        description: "Hidratación profunda",
      },
    ],
  },
  // {
  //   id: 5,
  //   name: "Exfoliante Facial Suave",
  //   category: "Renovación Celular",
  //   description: "Microperlas naturales y ácidos frutales para piel nueva",
  //   fullDescription:
  //     "Exfoliante facial suave con microperlas naturales y ácidos frutales que renueva la piel dejándola con una textura suave y brillo natural.",
  //   benefits: ["Renueva piel", "Textura suave", "Brillo natural"],
  //   price: "$19.99",
  //   image: "17-removebg-preview.webp",
  //   images: [
  //     "17-removebg-preview.webp",
  //     "22-removebg-preview.webp",
  //     "14-removebg-preview.webp",
  //   ],
  //   discount: null,
  //   features: [
  //     { icon: "🔵", title: "Microperlas", description: "Exfoliación suave" },
  //     { icon: "🍊", title: "Ácidos", description: "Frutales naturales" },
  //     { icon: "✨", title: "Renovador", description: "Piel como nueva" },
  //   ],
  // },
  // {
  //   id: 7,
  //   name: "Crema Anti-Edad Premium",
  //   category: "Anti-Envejecimiento",
  //   description: "Colágeno y elastina para combatir los signos del tiempo",
  //   fullDescription:
  //     "Crema anti-edad premium con colágeno y elastina que combate eficazmente los signos del envejecimiento, proporcionando firmeza y luminosidad.",
  //   benefits: ["Reduce arrugas", "Reafirma", "Luminosidad"],
  //   price: "$125.99",
  //   priceNumber: 125.99,
  //   rating: 4.9,
  //   image: "13-removebg-preview.webp",
  //   images: [
  //     "13-removebg-preview.webp",
  //     "22-removebg-preview.webp",
  //     "14-removebg-preview.webp",
  //   ],
  //   position: "normal",
  //   discount: null,
  //   features: [
  //     { icon: "🧬", title: "Colágeno", description: "Firmeza natural" },
  //     { icon: "🔄", title: "Elastina", description: "Elasticidad" },
  //     { icon: "👑", title: "Premium", description: "Máxima calidad" },
  //   ],
  // },
  // {
  //   id: 8,
  //   name: "Aceite Facial Regenerador",
  //   category: "Tratamiento Nocturno",
  //   description: "Aceites preciosos de rosa mosqueta y argán para regeneración",
  //   fullDescription:
  //     "Aceite facial regenerador con aceites preciosos de rosa mosqueta y argán que regenera, nutre profundamente y combate las manchas.",
  //   benefits: ["Regenera", "Nutre profundo", "Anti-manchas"],
  //   price: "$67.99",
  //   priceNumber: 67.99,
  //   rating: 4.8,
  //   image: "Aceite_de_aguacate_kamala_120_ml-removebg-preview.webp",
  //   images: [
  //     "Aceite_de_aguacate_kamala_120_ml-removebg-preview.webp",
  //     "22-removebg-preview.webp",
  //     "14-removebg-preview.webp",
  //   ],
  //   position: "normal",
  //   discount: null,
  //   features: [
  //     {
  //       icon: "🌹",
  //       title: "Rosa Mosqueta",
  //       description: "Regeneración celular",
  //     },
  //     { icon: "🌰", title: "Argán", description: "Nutrición profunda" },
  //     { icon: "🌙", title: "Nocturno", description: "Tratamiento intensivo" },
  //   ],
  // },
  // {
  //   id: 9,
  //   name: "Crema Solar Facial SPF50",
  //   category: "Protección Solar",
  //   description: "Protección máxima con filtros minerales y antioxidantes",
  //   fullDescription:
  //     "Crema solar facial con SPF50 que ofrece protección máxima con filtros minerales y antioxidantes, ideal como base de maquillaje.",
  //   benefits: ["Protección UV", "Anti-manchas", "Base maquillaje"],
  //   price: "$38.99",
  //   priceNumber: 38.99,
  //   rating: 4.7,
  //   image: "Aceite_de_Romero_120_ml-removebg-preview.webp",
  //   images: [
  //     "Aceite_de_Romero_120_ml-removebg-preview.webp",
  //     "22-removebg-preview.webp",
  //     "14-removebg-preview.webp",
  //   ],
  //   position: "normal",
  //   discount: null,
  //   features: [
  //     { icon: "☀️", title: "SPF50", description: "Protección máxima" },
  //     { icon: "🛡️", title: "Minerales", description: "Filtros naturales" },
  //     { icon: "💄", title: "Base", description: "Para maquillaje" },
  //   ],
  // },
  // {
  //   id: 10,
  //   name: "Tónico Facial Equilibrante",
  //   category: "Preparación Piel",
  //   description: "Agua de rosas y niacinamida para equilibrar el pH",
  //   fullDescription:
  //     "Tónico facial equilibrante con agua de rosas y niacinamida que equilibra el pH de la piel, minimiza los poros y la prepara para el cuidado.",
  //   benefits: ["Equilibra pH", "Minimiza poros", "Prepara piel"],
  //   price: "$22.99",
  //   priceNumber: 22.99,
  //   rating: 4.6,
  //   image: "10-removebg-preview.webp",
  //   images: [
  //     "10-removebg-preview.webp",
  //     "22-removebg-preview.webp",
  //     "14-removebg-preview.webp",
  //   ],
  //   position: "normal",
  //   discount: 15,
  //   features: [
  //     { icon: "🌹", title: "Agua de Rosas", description: "Suavidad natural" },
  //     { icon: "⚖️", title: "Equilibrante", description: "pH balanceado" },
  //     { icon: "🎯", title: "Preparador", description: "Base perfecta" },
  //   ],
  // },
];
