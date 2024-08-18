import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const navigate = useNavigate()

  // Select cart items from Redux store
  const cartItems = useSelector(state => state.product.cartItems);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center w-full">
      <h1 className="text-xl font-bold text-gray-800">Shop</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="relative cart-icon" onClick={()=>navigate('/cart-item')}>
          {/* Cart Icon with Item Count */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartItems && cartItems.length}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
