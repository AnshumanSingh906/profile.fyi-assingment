import React from 'react';

const CartItem = ({ item, isSelected, onItemClick, onQuantityChange, onRemoveItem }) => (
  <div
    key={item.id}
    className={`cart-item flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all cursor-pointer ${
      isSelected ? "border-blue-500 border-2" : ""
    }`}
  >
    <img
      src={item.images[0]}
      alt={item.title}
      className="w-32 h-32 object-cover rounded-lg lg:mr-6 transform transition-transform hover:scale-105"
      onClick={() => onItemClick(item)}
    />
    <div className="item-details w-full lg:w-2/3 flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-0">
      <div className="text-center lg:text-left">
        <h4 className="text-xl font-semibold text-gray-900">
          {item.title}
        </h4>
        <p className="text-lg text-gray-500 mt-1">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="quantity-control flex items-center mt-4 lg:mt-0">
        <button
          onClick={() => onQuantityChange(item.id, -1)}
          disabled={item.quantity <= 1}
          className="bg-gray-200 text-gray-700 rounded-l px-4 py-2 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          -
        </button>
        <span className="mx-3 text-lg text-gray-800 font-semibold">
          {item.quantity}
        </span>
        <button
          onClick={() => onQuantityChange(item.id, 1)}
          className="bg-gray-200 text-gray-700 rounded-r px-4 py-2 hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          +
        </button>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemoveItem(item.id);
        }}
        className="text-red-500 hover:text-red-700 mt-4 lg:mt-0 lg:ml-6 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Remove
      </button>
    </div>
  </div>
);

export default CartItem;
