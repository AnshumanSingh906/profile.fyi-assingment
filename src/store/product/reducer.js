// reducer.js
import {
    ADD_TO_CART,
    GET_CART_ITEM
  } from './actionTypes';
  
  const initialState = {
    cart: [],
    wishlist: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      
      case GET_CART_ITEM:
        return {
          ...state,
          cart: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  