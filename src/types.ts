export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  description: string;
  colors: string[];
  sizes: string[];
  images: string[];
  badge: string;
};

export type Category = {
  title: string;
  image: string;
  accent: string;
};

export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
};

export type User = {
  name: string;
  email: string;
};
