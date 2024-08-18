// EmptyCart.jsx
import React from 'react';
import EmpltyCartSVG from '../../assets/images/empty-cart'; // Ensure this is correctly imported

const EmptyCart = ({ onStartShopping }) => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <EmpltyCartSVG />
    <p className="text-xl text-gray-600">Your cart is currently empty.</p>
    <button
      className="mt-4 bg-blue-600 text-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors"
      onClick={onStartShopping}
    >
      Start Shopping
    </button>
  </div>
);

export default EmptyCart;
