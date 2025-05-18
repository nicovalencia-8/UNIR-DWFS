import { useEffect, useState } from "react";

const CART_KEY = "cart_relatos";

export default function useCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      console.log("storedCart",storedCart)
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (book) => {
    const currentCart = [...cart];
    const existing = currentCart.find((item) => item.id === book.id);
    let updatedCart;

    if (existing) {
      updatedCart = currentCart.map((item) =>
        item.id === book.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      updatedCart = [...currentCart, { ...book, cantidad: 1 }];
    }

    saveCart(updatedCart);
  }

  const saveCart = (updatedCart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const clearCart = () => {
    localStorage.removeItem(CART_KEY);
    setCart([]);
  };

  return { cart, addToCart, clearCart };
}