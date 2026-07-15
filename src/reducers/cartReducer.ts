import { db } from '../data/db';
import { CartItem, Guitar } from '../types';

export interface CartState {
  data: Guitar[];
  cart: CartItem[];
}

export interface CartActions {
  type:
    | 'add-to-cart'
    | 'remove-from-cart'
    | 'decrease-quantity'
    | 'increase-quantity'
    | 'clear-cart';
  payload?: { item?: Guitar } | { id?: Guitar['id'] };
}

const initialCart = (): CartItem[] => {
  const localStorageCart = localStorage.getItem('cart');
  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const initialState: CartState = {
  data: db,
  cart: initialCart(),
};

const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions,
) => {
  if (action.type === 'add-to-cart') {
    const { item } = action.payload as { item: Guitar };

    const itemExists = state.cart.find((guitar) => guitar.id === item.id);

    let updatedCart: CartItem[] = [];

    if (itemExists) {
      updatedCart = state.cart.map((item) => {
        if (item.id === item.id) {
          if (item.quantity < MAX_ITEMS) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    } else {
      const newItem: CartItem = { ...item, quantity: 1 };
      updatedCart = [...state.cart, newItem];
    }

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === 'remove-from-cart') {
    const { id } = action.payload as { id: Guitar['id'] };

    const deleteCart = state.cart.filter((guitar) => guitar.id !== id);

    return {
      ...state,
      cart: deleteCart,
    };
  }

  if (action.type === 'decrease-quantity') {
    const { id } = action.payload as { id: Guitar['id'] };

    const updatedCart = state.cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === 'increase-quantity') {
    const { id } = action.payload as { id: Guitar['id'] };

    const updatedCart = state.cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === 'clear-cart') {
    return {
      ...state,
      cart: [],
    };
  }
};
