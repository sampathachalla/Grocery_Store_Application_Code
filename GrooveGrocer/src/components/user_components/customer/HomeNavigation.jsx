import { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";
import AddToCart from "./add_to_cart_page/AddToCart";

const HomeNavigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
    setIsClosing(false);
  };

  const closeCart = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsCartOpen(false);
    }, 300); // Duration matches animation
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="fixed top-0 w-full bg-white border-b border-gray-300 py-3 flex justify-between items-center px-6 shadow-md z-60">
        <div className="text-lg font-bold text-black">Groove Grocer</div>

        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-2 bg-gray-200 text-black border border-gray-400 rounded-full w-64"
            />
          </div>

          <button className="text-black flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span>Address</span>
          </button>
        </div>

        <div className="flex space-x-6">
          <button
            className="text-black flex items-center space-x-2"
            onClick={openCart}
          >
            <FaShoppingCart />
            <span>Cart</span>
          </button>
          <button className="text-black flex items-center space-x-2">
            <FaUser />
            <span>Account</span>
          </button>
        </div>
      </div>

      {/* Slide-In Cart Overlay */}
      {isCartOpen && (
        <>
          {/* Transparent Background - higher z-index */}
          <div
            className="fixed inset-0 z-70 bg-transparent"
            onClick={closeCart}
          />
          {/* Cart Panel */}
          <div
            className={`fixed top-0 right-0 w-full md:w-[30%] h-full z-70 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isClosing ? "animate-slide-out-right" : "animate-slide-in-right"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <AddToCart onClose={closeCart} />
          </div>
        </>
      )}
    </>
  );
};

export default HomeNavigation;
