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

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {
  if (action.type === 'add-to-cart') {
    return {
      ...state,
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
