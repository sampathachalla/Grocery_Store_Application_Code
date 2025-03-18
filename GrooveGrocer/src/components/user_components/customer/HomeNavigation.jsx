import { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaMapMarkerAlt,
  FaSearch,
  FaArrowLeft, // ⬅ Import Back Icon
} from "react-icons/fa";
import AddToCart from "./add_to_cart_page/AddToCart";
import AccountPanel from "./account_page/AccountPanel";

const HomeNavigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartClosing, setIsCartClosing] = useState(false);

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isAccountClosing, setIsAccountClosing] = useState(false);

  // Cart handlers
  const openCart = () => {
    setIsCartOpen(true);
    setIsCartClosing(false);
  };
  const closeCart = () => {
    setIsCartClosing(true);
    setTimeout(() => setIsCartOpen(false), 300);
  };

  // Account handlers
  const openAccount = () => {
    setIsAccountOpen(true);
    setIsAccountClosing(false);
  };
  const closeAccount = () => {
    setIsAccountClosing(true);
    setTimeout(() => setIsAccountOpen(false), 300);
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
          <button
            className="text-black flex items-center space-x-2"
            onClick={openAccount}
          >
            <FaUser />
            <span>Account</span>
          </button>
        </div>
      </div>

      {/* ⬅ Back Button for AccountPanel - Overlay Top Left */}
      {isAccountOpen && (
        <button
          onClick={closeAccount}
          className="fixed top-4 left-4 z-[80] bg-black text-white px-3 py-1 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition"
        >
          <FaArrowLeft />
          <span>Back</span>
        </button>
      )}

      {/* Slide-In Cart Overlay */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 z-70 bg-transparent"
            onClick={closeCart}
          />
          <div
            className={`fixed top-0 right-0 w-full md:w-[30%] h-full z-70 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isCartClosing
                ? "animate-slide-out-right"
                : "animate-slide-in-right"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <AddToCart onClose={closeCart} />
          </div>
        </>
      )}

      {/* Slide-In Account Panel */}
      {isAccountOpen && (
        <>
          <div
            className="fixed inset-0 z-70 bg-transparent"
            onClick={closeAccount}
          />
          <div
            className={`fixed top-0 left-0 w-full md:w-[15%] h-full z-70 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isAccountClosing
                ? "animate-slide-out-left"
                : "animate-slide-in-left"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <AccountPanel onClose={closeAccount} />
          </div>
        </>
      )}
    </>
  );
};

export default HomeNavigation;
