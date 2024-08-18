// SelectedItemPreview.jsx
import React from 'react';

const SelectedItemPreview = ({ selectedItem, onQuantityChange, onRemoveItem }) => (
  selectedItem ? (
    <div className="selected-item-preview bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {selectedItem.name}
      </h3>
      <img
        src={selectedItem.image}
        alt={selectedItem.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700 mb-4">
        {selectedItem.description}
      </p>
      <p className="text-lg text-gray-900 font-semibold">
        Price: ${selectedItem.price.toFixed(2)}
      </p>
      <div className="quantity-control flex items-center mt-4">
        <button
          onClick={() => onQuantityChange(selectedItem.id, -1)}
          disabled={selectedItem.quantity <= 1}
          className="bg-gray-200 text-gray-700 rounded-l px-4 py-2 hover:bg-gray-300 disabled:opacity-50 transition-colors"
        >
          -
        </button>
        <span className="mx-3 text-lg text-gray-800">
          {selectedItem.quantity}
        </span>
        <button
          onClick={() => onQuantityChange(selectedItem.id, 1)}
          className="bg-gray-200 text-gray-700 rounded-r px-4 py-2 hover:bg-gray-300 transition-colors"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemoveItem(selectedItem.id)}
        className="w-full mt-4 bg-red-600 text-white rounded-lg py-2 text-lg font-semibold hover:bg-red-700 transition-colors"
      >
        Remove Item
      </button>
    </div>
  ) : (
    <div className="selected-item-preview bg-gray-100 shadow-lg rounded-lg p-6 text-center text-gray-600">
      Select an item to preview its details here.
    </div>
  )
);

export default SelectedItemPreview;
