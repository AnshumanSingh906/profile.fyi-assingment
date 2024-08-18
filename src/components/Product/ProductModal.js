import React, { useState } from 'react';

const ProductModal = ({ product, onAddToCart, onClose, showAddToCart=true }) => {
  const { title, price, description, images, discountPercentage } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full md:max-w-2xl p-6 mx-4">
        <button
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-1/2">
            {/* Image Carousel */}
            <div className="relative">
              <img
                className="w-full h-64 md:h-80 object-cover object-center rounded-lg"
                src={images[currentImageIndex]}
                alt={title}
              />
              {images.length > 1 && (
                <>
                  <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
                    onClick={handlePrevImage}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
                    onClick={handleNextImage}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-4">{title}</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">{description}</p>
            <div className="flex items-center mb-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">${price}</p>
              {discountPercentage && (
                <p className="text-sm font-medium text-gray-500 line-through dark:text-gray-400 ml-2">
                  ${((price * 100) / (100 - discountPercentage)).toFixed(2)}
                </p>
              )}
            </div>
            {showAddToCart && <button
              className="w-full flex items-center justify-center rounded-lg py-2 px-4 bg-blue-600 text-white text-sm font-medium shadow-md transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              onClick={() => {onAddToCart(product); onClose();} }
            >
              Add to Cart
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
