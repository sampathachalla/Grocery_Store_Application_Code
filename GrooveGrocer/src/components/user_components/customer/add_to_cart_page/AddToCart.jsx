import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import CartProductCard from "./CartProductCard";
import sampleImage from "../../../../assets/img1.jpg";

const generateSampleItems = () => {
  return Array.from({ length: 2 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    description: "High quality product for daily use.",
    price: Math.floor(Math.random() * 50) + 10,
    image: sampleImage,
    quantity: 1,
    isSelected: true,
  }));
};

const AddToCart = ({ onClose }) => {
  const [cartItems, setCartItems] = useState(generateSampleItems());

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleToggleSelect = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems
    .filter((item) => item.isSelected)
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="w-full h-full bg-white flex flex-col rounded-l-lg shadow-lg">
      {/* 🔹 Top Bar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button
          onClick={onClose}
          className="text-black flex items-center space-x-2"
        >
          <span>Back</span>
          <FaArrowRight />
        </button>
      </div>

      {/* 🔹 Scrollable Cart Items (Fixed 5) */}
      <div className="p-4 flex-1 overflow-y-auto space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartProductCard
              key={item.id}
              product={item}
              quantity={item.quantity}
              isSelected={item.isSelected}
              onQuantityChange={(newQty) =>
                handleQuantityChange(item.id, newQty)
              }
              onRemove={() => handleRemove(item.id)}
              onToggleSelect={() => handleToggleSelect(item.id)}
            />
          ))
        ) : (
          <p className="text-gray-600">Your cart is currently empty.</p>
        )}
      </div>

      {/* 🔹 Checkout Bar - Flush at Bottom */}
      {cartItems.length > 0 && (
        <div className="bg-white p-4">
          <button className="w-full bg-black text-white rounded-full px-6 py-3 flex justify-between items-center hover:bg-gray-800 transition shadow-md">
            <span className="font-semibold text-base">Checkout</span>
            <span className="font-semibold text-base">${totalPrice}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
