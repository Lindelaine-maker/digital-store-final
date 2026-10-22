import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react';
import type { CartItem, User } from '../types';

type AppContextType = {
  cart: CartItem[];
  addToCart: (product: {
    id: number;
    name: string;
    image: string;
    price: number;
    color: string;
    size: string;
  }, quantity?: number) => void;
  updateQuantity: (id: number, color: string, size: string, change: number) => void;
  removeFromCart: (id: number, color: string, size: string) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const CART_KEY = 'digital-store-cart';
const AUTH_KEY = 'digital-store-auth';

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_KEY);
    const savedUser = localStorage.getItem(AUTH_KEY);

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        setCart([]);
      }
    }

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  }, [user]);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const addToCart = (
    product: {
      id: number;
      name: string;
      image: string;
      price: number;
      color: string;
      size: string;
    },
    quantity = 1
  ) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity,
          color: product.color,
          size: product.size
        }
      ];
    });
  };

  const updateQuantity = (id: number, color: string, size: string, change: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.color === color && item.size === size
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number, color: string, size: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.color === color && item.size === size)
      )
    );
  };

  const clearCart = () => setCart([]);

  const login = (name: string, email: string) => {
    setUser({ name, email });
  };

  const logout = () => setUser(null);

  const value = useMemo<AppContextType>(
    () => ({
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      cartCount,
      subtotal,
      user,
      login,
      logout,
      isLoggedIn: !!user
    }),
    [cart, cartCount, subtotal, user]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return context;
}
