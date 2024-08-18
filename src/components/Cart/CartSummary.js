// CartSummary.jsx
import React from 'react';

const CartSummary = ({ subtotal, total }) => (
  <div className="cart-summary bg-gray-50 shadow-lg rounded-lg p-6">
    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
      Cart Summary
    </h3>
    <p className="text-lg text-gray-700">
      Subtotal: ${subtotal.toFixed(2)}
    </p>
    <p className="text-lg text-gray-700">Discount: $10.00</p>
    <hr className="my-4" />
    <h4 className="text-xl font-bold text-gray-900">
      Total: ${total.toFixed(2)}
    </h4>
    <button className="w-full mt-6 bg-blue-600 text-white rounded-lg py-3 text-lg font-semibold hover:bg-blue-700 transition-colors">
      Checkout
    </button>
  </div>
);

export default CartSummary;
