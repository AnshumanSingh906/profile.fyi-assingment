import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 1,
      image: "https://via.placeholder.com/150", // Example image URL
      description: "This is a detailed description of Product 1.",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
      description: "This is a detailed description of Product 2.",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null); // Clear preview if the selected item is removed
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const applyDiscount = (subtotal) => {
    const discount = 10; // Example: $10 off
    return subtotal - discount;
  };

  const subtotal = calculateSubtotal();
  const total = applyDiscount(subtotal);

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center lg:text-left">
        Your Shopping Cart
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="cart-items w-full lg:w-2/3 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className={`cart-item flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer ${
                selectedItem?.id === item.id ? "border-blue-500 border-2" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg lg:mr-6"
              />
              <div className="item-details w-full lg:w-2/3 flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-0">
                <div className="text-center lg:text-left">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-lg text-gray-600 mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="quantity-control flex items-center mt-4 lg:mt-0">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity <= 1}
                    className="bg-gray-200 text-gray-700 rounded-l px-4 py-2 hover:bg-gray-300 disabled:opacity-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="mx-3 text-lg text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-gray-200 text-gray-700 rounded-r px-4 py-2 hover:bg-gray-300 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-600 hover:text-red-800 mt-4 lg:mt-0 lg:ml-6 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 space-y-6">
          {selectedItem ? (
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
                  onClick={() => handleQuantityChange(selectedItem.id, -1)}
                  disabled={selectedItem.quantity <= 1}
                  className="bg-gray-200 text-gray-700 rounded-l px-4 py-2 hover:bg-gray-300 disabled:opacity-50 transition-colors"
                >
                  -
                </button>
                <span className="mx-3 text-lg text-gray-800">
                  {selectedItem.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(selectedItem.id, 1)}
                  className="bg-gray-200 text-gray-700 rounded-r px-4 py-2 hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(selectedItem.id)}
                className="w-full mt-4 bg-red-600 text-white rounded-lg py-2 text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Remove Item
              </button>
            </div>
          ) : (
            <div className="selected-item-preview bg-gray-100 shadow-lg rounded-lg p-6 text-center text-gray-600">
              Select an item to preview its details here.
            </div>
          )}
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
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
