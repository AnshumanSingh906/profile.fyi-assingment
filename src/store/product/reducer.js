// reducer.js
import {
  ADD_TO_CART,
  GET_CART_ITEM,
  REMOVE_FROM_CART
} from './actionTypes';

const initialState = {
  productList: [],
  cartItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { item, increase } = action.payload;
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        // Update quantity based on increase flag
        return {
          ...state,
          cartItems: state.cartItems.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: increase ? cartItem.quantity + 1 : cartItem.quantity - 1 }
              : cartItem
          ).filter(cartItem => cartItem.quantity > 0) // Remove items with zero quantity
        };
      } else if (increase) {
        // Add new item with quantity 1 if increasing
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, quantity: 1 }]
        };
      }

      return state; // If not increasing, do nothing
    }

    case REMOVE_FROM_CART: {
      const { itemId } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== itemId)
      };
    }

    case GET_CART_ITEM:
      return {
        ...state,
        productList: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
