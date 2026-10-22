import type { Category, Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Tênis Nike Air Max',
    category: 'Calçados',
    price: 699.9,
    oldPrice: 899.9,
    rating: 4.8,
    reviews: 148,
    description:
      'Tênis moderno com excelente amortecimento e visual esportivo. Ideal para uso diário e caminhar com conforto.',
    colors: ['Preto', 'Branco', 'Vermelho'],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Novo'
  },
  {
    id: 2,
    name: 'Jaqueta Adidas Performance',
    category: 'Roupas',
    price: 499.9,
    oldPrice: 620.0,
    rating: 4.7,
    reviews: 94,
    description:
      'Jaqueta leve e respirável, ideal para treinos e uso no dia a dia com design sofisticado.',
    colors: ['Azul', 'Preto', 'Cinza'],
    sizes: ['P', 'M', 'G', 'GG'],
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529374255404-8f42d576b3f7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Mais vendido'
  },
  {
    id: 3,
    name: 'Mochila Urban',
    category: 'Acessórios',
    price: 219.9,
    oldPrice: 299.9,
    rating: 4.6,
    reviews: 77,
    description:
      'Mochila prática e resistente com compartimentos para notebook, água e acessórios.',
    colors: ['Preto', 'Bege', 'Verde'],
    sizes: ['Único'],
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Popular'
  },
  {
    id: 4,
    name: 'Smartwatch Pro X',
    category: 'Eletrônicos',
    price: 899.9,
    oldPrice: 1199.9,
    rating: 4.9,
    reviews: 210,
    description:
      'Relógio inteligente com monitoramento esportivo, GPS e design premium para uso diário.',
    colors: ['Preto', 'Prata', 'Azul'],
    sizes: ['38mm', '42mm', '46mm'],
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Premium'
  },
  {
    id: 5,
    name: 'Boné Street',
    category: 'Acessórios',
    price: 119.9,
    oldPrice: 179.9,
    rating: 4.5,
    reviews: 62,
    description:
      'Boné confortável com acabamento premium para uso casual ou esportivo.',
    colors: ['Preto', 'Off White', 'Azul'],
    sizes: ['Único'],
    images: [
      'https://images.unsplash.com/photo-1521369909026-2afed882baee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Oferta'
  },
  {
    id: 6,
    name: 'Camiseta Performance',
    category: 'Roupas',
    price: 169.9,
    oldPrice: 229.9,
    rating: 4.7,
    reviews: 125,
    description:
      'Camiseta leve, respirável e com corte moderno para uso em atividades físicas.',
    colors: ['Branco', 'Preto', 'Azul'],
    sizes: ['P', 'M', 'G', 'GG'],
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Coleção'
  },
  {
    id: 7,
    name: 'Bola de Basquete Pro',
    category: 'Esportes',
    price: 249.9,
    oldPrice: 349.9,
    rating: 4.8,
    reviews: 86,
    description:
      'Bola profissional com alta resistência e aderência ideal para treino e jogos.',
    colors: ['Laranja', 'Preto', 'Azul'],
    sizes: ['Único'],
    images: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Premium'
  },
  {
    id: 8,
    name: 'Headset Galaxy Sound',
    category: 'Eletrônicos',
    price: 349.9,
    oldPrice: 459.9,
    rating: 4.7,
    reviews: 143,
    description:
      'Headset com som imersivo, bateria de longa duração e conforto para uso prolongado.',
    colors: ['Preto', 'Branco', 'Roxo'],
    sizes: ['Único'],
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80'
    ],
    badge: 'Oferta'
  }
];

export const categories: Category[] = [
  {
    title: 'Calçados',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    accent: '#F59E0B'
  },
  {
    title: 'Roupas',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    accent: '#F97316'
  },
  {
    title: 'Acessórios',
    image:
      'https://images.unsplash.com/photo-1521369909026-2afed882baee?auto=format&fit=crop&w=900&q=80',
    accent: '#60A5FA'
  },
  {
    title: 'Esportes',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80',
    accent: '#34D399'
  }
];
