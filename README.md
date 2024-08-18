# E-commerce Product Listing and Cart Management

This project is a simple e-commerce application that consists of two main pages: a Product Listing Page and a Cart Page. The application is built using ReactJS and styled with Tailwind CSS. The key features include a paginated product grid, product details modal, and a dynamic cart management system.
![image](https://github.com/user-attachments/assets/132a9935-7150-4de0-b8b2-2b9ed4c540fe)



## Features

### 1. Product Listing Page
- **Pagination-Based Grid Layout:**
  - The product listing page displays products in a grid layout with 12 items per page.
  - Users can navigate between pages to view more products.
  - ![image](https://github.com/user-attachments/assets/f89074ce-8090-472e-bec4-b2e7bceaef69)



- **Product Card:**
  - Each product card displays an image, name, and price of the product.
  - Clicking on the product image opens a modal that shows detailed information about the product.
  - The product card also includes an "Add to Cart" button.
  - ![image](https://github.com/user-attachments/assets/7265dfcc-0de0-4aa6-a1e3-13cea4213e2c)


- **Add to Cart Functionality:**
  - When the "Add to Cart" button is clicked:
    - The button temporarily changes its color for 1 second to indicate the product has been added to the cart.
    - The cart icon in the header vibrates (or debounces) to provide visual feedback that an item has been added.

- **Product Details Modal:**
  - The modal displays a larger image of the product along with detailed information.
  - The modal also includes an "Add to Cart" button, allowing users to add the product directly from the modal.
  - ![image](https://github.com/user-attachments/assets/3a39f7d2-d839-4fe8-9a0c-a5836129cb03)



### 2. Cart Page
![image](https://github.com/user-attachments/assets/bf2dde22-65fb-4783-ae1e-21dede2685a6)

- **Cart Items Listing:**
  - The cart page displays all products that have been added to the cart.
  - Each cart item includes:
    - Product image
    - Product name
    - Product price
    - Quantity selector (up/down buttons or input field) to adjust the quantity of each item
    - A "Remove Item" button to delete a specific product from the cart.

- **Cart Summary:**
  - The cart summary section calculates and displays:
    - The subtotal of all items in the cart.
    - The total price after applying any discounts (if applicable).

- **Checkout Button:**
  - A checkout button is available to simulate the checkout process or redirect to a checkout page.
 
## Navigation

- **Redirect to Cart Page:**
  - Clicking on the cart icon in the header will redirect users to the Cart Listing Page, where they can view and manage their selected products.
  - ![image](https://github.com/user-attachments/assets/0a83872d-70ab-460e-8d59-79a48f93a2b5)



## State Management with Redux

- **Redux Store:**
  - The application uses Redux to manage the global state, including the product list, cart items, and UI states.
  
- **Redux Thunk:**
  - Asynchronous operations, such as API calls, are handled using Redux Thunk. This middleware allows for dispatching actions that return functions (thunks) instead of plain objects.

- **Redux Persist:**
  - The application uses Redux Persist to automatically save the Redux store state to local storage, ensuring that the state persists across page reloads.

## API Calls with Axios

- **Axios for API Requests:**
  - Axios is used to handle HTTP requests to fetch product data and manage cart operations.
  
- **Axios Interceptors:**
  - Axios interceptors are implemented to handle request and response transformations globally.

