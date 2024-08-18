// import axios from 'axios';
// import {
//   ADD_TO_CART,
//   GET_CART_ITEM,
//   ADD_TO_WISHLIST,
//   GET_WISHLIST_ITEMS,
//   BUY_ITEM,
//   GET_ITEMS_LIST
// } from './actionTypes';

// // Example API base URL
// const API_BASE_URL = 'https://fakestoreapi.com/';

// // Add to cart action creator
// const addToCartSuccess = (item) => ({
//   type: ADD_TO_CART,
//   payload: item
// });

// const addToCartFailure = (error) => ({
//   type: 'ADD_TO_CART_FAILURE',
//   payload: error
// });

// export const addToCart = (item) => async (dispatch, getState) => {
//   const { cart } = getState();
//   // Check if item is already in the cart
//   const itemExists = cart.items.some(cartItem => cartItem.id === item.id);

//   if (itemExists) {
//     console.warn('Item is already in the cart');
//     return; // No need to make an API call
//   }

//   try {
//     const response = await axios.post(`${API_BASE_URL}/cart`, item);
//     dispatch(addToCartSuccess(response.data));
//   } catch (error) {
//     dispatch(addToCartFailure(error));
//     console.error('Error adding item to cart:', error);
//   }
// };

// // Get cart items action creator
// const getCartItemsSuccess = (items) => ({
//   type: GET_CART_ITEM,
//   payload: items
// });

// export const getCartItem = () => async (dispatch, getState) => {
//   const { cart } = getState();

//   if (cart.items.length > 0) {
//     console.log('Cart items already loaded');
//     return; // Data is already in the store
//   }

//   try {
//     const response = await axios.get(`${API_BASE_URL}/cart`);
//     dispatch(getCartItemsSuccess(response.data));
//   } catch (error) {
//     console.error('Error fetching cart items:', error);
//   }
// };

// // Add to wishlist action creator
// const addToWishlistSuccess = (item) => ({
//   type: ADD_TO_WISHLIST,
//   payload: item
// });

// const addToWishlistFailure = (error) => ({
//   type: 'ADD_TO_WISHLIST_FAILURE',
//   payload: error
// });

// export const addToWishlist = (item) => async (dispatch, getState) => {
//   const { wishlist } = getState();
//   // Check if item is already in the wishlist
//   const itemExists = wishlist.items.some(wishlistItem => wishlistItem.id === item.id);

//   if (itemExists) {
//     console.warn('Item is already in the wishlist');
//     return; // No need to make an API call
//   }

//   try {
//     const response = await axios.post(`${API_BASE_URL}/wishlist`, item);
//     dispatch(addToWishlistSuccess(response.data));
//   } catch (error) {
//     dispatch(addToWishlistFailure(error));
//     console.error('Error adding item to wishlist:', error);
//   }
// };

// // Get wishlist items action creator
// const getWishlistItemsSuccess = (items) => ({
//   type: GET_WISHLIST_ITEMS,
//   payload: items
// });

// export const getWishlistItems = () => async (dispatch, getState) => {
//   const { wishlist } = getState();

//   if (wishlist.items.length > 0) {
//     console.log('Wishlist items already loaded');
//     return; // Data is already in the store
//   }

//   try {
//     const response = await axios.get(`${API_BASE_URL}/wishlist`);
//     dispatch(getWishlistItemsSuccess(response.data));
//   } catch (error) {
//     console.error('Error fetching wishlist items:', error);
//   }
// };

// // Buy item action creator
// const buyItemSuccess = (itemId) => ({
//   type: BUY_ITEM,
//   payload: { id: itemId }
// });

// const buyItemFailure = (error) => ({
//   type: 'BUY_ITEM_FAILURE',
//   payload: error
// });

// export const buyItem = (itemId) => async (dispatch, getState) => {
//   const { cart } = getState();
//   // Check if item is in the cart before attempting to delete
//   const itemExists = cart.items.some(cartItem => cartItem.id === itemId);

//   if (!itemExists) {
//     console.warn('Item not found in cart');
//     return; // No need to make an API call
//   }

//   try {
//     await axios.delete(`${API_BASE_URL}/cart/${itemId}`);
//     dispatch(buyItemSuccess(itemId));
//   } catch (error) {
//     dispatch(buyItemFailure(error));
//     console.error('Error buying item:', error);
//   }
// };


// // Get cart items action creator
// const getAvailableItems = (items) => ({
//   type: GET_ITEMS_LIST,
//   payload: items
// });

// export const getProducts = () => async (dispatch, getState) => {
//   const { cart } = getState();

//   if (cart.items.length > 0) {
//     console.log('Cart items already loaded');
//     return; // Data is already in the store
//   }

//   try {
//     const response = await axios.get(`${API_BASE_URL}/cart`);
//     dispatch(getAvailableItems(response.data));
//   } catch (error) {
//     console.error('Error fetching cart items:', error);
//   }
// };


























import axios from 'axios';
import {
  ADD_TO_CART,
  GET_CART_ITEM,
  BUY_ITEM,
  GET_ITEMS_LIST
} from './actionTypes';
import {
  API_ENDPOINT_CART_LIST,
  API_ENDPOINT_PRODUCT_LIST,
  API_ENDPOINT_SINGLE_PRODUCT,
  API_ENDPOINT_USER_CARTS,
  PAGE_LIMIT
} from '../../api-config/constant';

// Add to cart action creator
const addToCartSuccess = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

const addToCartFailure = (error) => ({
  type: 'ADD_TO_CART_FAILURE',
  payload: error
});

export const addToCart = (item) => async (dispatch) => {
  try {
    // const response = await axios.post(API_ENDPOINT_CART, item, {
    //   headers: { 'Content-Type': 'application/json' }
    // });
    // dispatch(addToCartSuccess(response.data));
  } catch (error) {
    dispatch(addToCartFailure(error));
    console.error('Error adding item to cart:', error);
  }
};

// Get cart items action creator
const getCartItemsSuccess = (items) => ({
  type: GET_CART_ITEM,
  payload: items
});

export const getCartItems = () => async (dispatch) => {

  try {
    const response = await axios.get(API_ENDPOINT_CART_LIST);
    dispatch(getCartItemsSuccess(response.data));
  } catch (error) {
    console.error('Error fetching cart items:', error);
  }
};

// Get products action creator
const getAvailableItemsSuccess = (items) => ({
  type: GET_ITEMS_LIST,
  payload: items
});

export const getProducts = (pageNumber=1) => async (dispatch) => {
  const url = `${API_ENDPOINT_PRODUCT_LIST}offset=${(pageNumber-1)*PAGE_LIMIT}&limit=${PAGE_LIMIT}`
  try {
    const response = await axios.get(url);
    console.log(response);
    dispatch(getAvailableItemsSuccess(response.data));
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const getSinglProduct = (id) =>async (dispatch) => {
  const url= `${API_ENDPOINT_SINGLE_PRODUCT}/${id}`
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  } 
}