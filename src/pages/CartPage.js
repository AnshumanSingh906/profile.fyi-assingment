import React, { useState } from 'react';
import EmptyCart from '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/product/action';
import ProductModal from '../components/Product/ProductModal';

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Select cart items from Redux store
  const cartItems = useSelector(state => state.product.cartItems);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleQuantityChange = (id, delta) => {
    dispatch(addToCart({ id }, delta > 0));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    if (selectedItem?.id === id) {
      setSelectedItem(null); // Clear preview if the selected item is removed
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const calculateSubtotal = () => {
    return cartItems && cartItems.reduce(
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
    <>
      {selectedItem && <ProductModal
        product={selectedItem}
        onAddToCart={handleQuantityChange}
        onClose={() => { setSelectedItem(null);}}
        showAddToCart={false}
      />}
      <div className="container mx-auto p-4 lg:p-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center lg:text-left">
          Your Shopping Cart
        </h2>

        {(!cartItems || cartItems.length === 0) ? (
          <EmptyCart onStartShopping={() => navigate('/')} />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="cart-items w-full lg:w-2/3 space-y-6">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  isSelected={selectedItem?.id === item.id}
                  onItemClick={handleItemClick}
                  onQuantityChange={handleQuantityChange}
                  onRemoveItem={handleRemoveItem}
                />
              ))}
            </div>
            <CartSummary subtotal={subtotal} total={total} />
          </div>
        )}
      </div>
    </>

  );
}

export default CartPage;


