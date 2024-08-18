// API base URL from environment variable or default to fake store API
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.escuelajs.co/';

// Product endpoints
export const API_ENDPOINT_PRODUCT_LIST = `${API_BASE_URL}api/v1/products?`;
export const API_ENDPOINT_SINGLE_PRODUCT = `${API_BASE_URL}api/v1/products`;

// Cart endpoints
export const API_ENDPOINT_CART_LIST = `${API_BASE_URL}carts`;
export const API_ENDPOINT_SINGLE_CART = `${API_BASE_URL}carts/{id}`;
export const API_ENDPOINT_CART_LIMIT = `${API_BASE_URL}carts?limit={limit}`;
export const API_ENDPOINT_CART_SORT = `${API_BASE_URL}carts?sort={sort}`;
export const API_ENDPOINT_CART_DATE_RANGE = `${API_BASE_URL}carts?startdate={startdate}&enddate={enddate}`;
export const API_ENDPOINT_USER_CARTS = `${API_BASE_URL}carts/user/{userId}`;

export const PAGE_LIMIT = 10;

