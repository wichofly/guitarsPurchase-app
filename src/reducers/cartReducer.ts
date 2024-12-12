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
  payload: { item: Guitar } | { id: Guitar['id'] };
}

export const initialState: CartState = {
  data: db,
  cart: [],
};

const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
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
    return {
      ...state,
    };
  }

  if (action.type === 'decrease-quantity') {
    return {
      ...state,
    };
  }

  if (action.type === 'increase-quantity') {
    return {
      ...state,
    };
  }

  if (action.type === 'clear-cart') {
    return {
      ...state,
    };
  }
};
