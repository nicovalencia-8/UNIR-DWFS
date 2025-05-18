import { useEffect, useState } from "react";

const CART_KEY = "cart_relatos";

export default function useCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (book) => {
    setCart((prev) => {
      const updated = [...prev, book];
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const clearCart = () => {
    localStorage.removeItem(CART_KEY);
    setCart([]);
  };

  return { cart, addToCart, clearCart };
}