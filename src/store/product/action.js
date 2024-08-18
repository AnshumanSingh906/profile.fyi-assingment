import axios from '../../api-config/api';
import {
  ADD_TO_CART,
  GET_CART_ITEM,
  BUY_ITEM,
  GET_ITEMS_LIST,
  REMOVE_FROM_CART
} from './actionTypes';
import {
  API_ENDPOINT_CART_LIST,
  API_ENDPOINT_PRODUCT_LIST,
  API_ENDPOINT_SINGLE_PRODUCT,
  API_ENDPOINT_USER_CARTS,
  PAGE_LIMIT
} from '../../api-config/constant';

// Add to cart action creator
const addToCartSuccess = (item, increase) => ({
  type: ADD_TO_CART,
  payload: { item, increase }
});

// Remove from cart action creator
const removeFromCartSuccess = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: { itemId }
});

export const addToCart = (item, increase = true) => async (dispatch) => {
  try {
    // Simulate an API call
    // const response = await axios.post(API_ENDPOINT_CART, item, {
    //   headers: { 'Content-Type': 'application/json' }
    // });
    dispatch(addToCartSuccess(item, increase));
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
};

export const removeFromCart = (itemId) => async (dispatch) => {
  try {
    // Simulate an API call
    // const response = await axios.delete(`${API_ENDPOINT_CART}/${itemId}`);
    dispatch(removeFromCartSuccess(itemId));
  } catch (error) {
    console.error('Error removing item from cart:', error);
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
    dispatch(getCartItemsSuccess(response));
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
    dispatch(getAvailableItemsSuccess(response));
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const getSingleProduct = (id) =>async (dispatch) => {
  const url= `${API_ENDPOINT_SINGLE_PRODUCT}/${id}`
  try {
    const response = await axios.get(url);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
  } 
}