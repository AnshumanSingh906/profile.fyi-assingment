import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const { id, title, price, description, images, discountPercentage } = product;
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000); // Reset after 1 seconds
  };

  const handleViewDetails = () => {
    onViewDetails(product);
  };

  return (
    <div className="relative mx-auto mt-8 w-60 transform overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Discount Badge */}
      {discountPercentage && (
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {discountPercentage}% OFF
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-56 overflow-hidden rounded-t-xl cursor-pointer" onClick={handleViewDetails}>
        <img
          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110"
          src={images[0]}
          alt={title}
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold dark:text-white text-gray-900 truncate">{title}</h2>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400 truncate">{description}</p>
        <div className="flex items-center space-x-2 mb-4">
          <p className="text-xl font-bold text-gray-900 dark:text-white">${price}</p>
          {discountPercentage && (
            <p className="text-sm font-medium text-gray-500 line-through dark:text-gray-400">
              ${((price * 100) / (100 - discountPercentage)).toFixed(2)}
            </p>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full flex items-center justify-center space-x-2 rounded-lg py-2 px-4 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${
            added ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          <span className="text-sm font-medium text-white">{added ? 'Added!' : 'Add to Cart'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
