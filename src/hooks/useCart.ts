import { useState, useEffect } from 'react';

import { Guitar, CartItem } from '../types';

export const useCart = () => {
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (id: Guitar['id']) => {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  };

  const decreaseQuantity = (id: Guitar['id']) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const increaseQuantity = (id: Guitar['id']) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const clearCart = () => setCart([]);

  return {
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
  };
};
