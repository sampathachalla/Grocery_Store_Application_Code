import { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaMapMarkerAlt,
  FaSearch,
  FaArrowLeft,
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
      {/* Fixed Top Navigation Bar */}
      <div className="fixed top-0 w-full bg-white border-b border-gray-300 py-3 shadow-md z-[60]">
        <div className="px-4 md:px-6">
          {/* MOBILE LAYOUT (below sm): Two rows */}
          <div className="block sm:hidden">
            {/* Row 1: Brand + Cart + Account */}
            <div className="flex items-center justify-between mb-3">
              {/* Brand */}
              <div className="text-lg font-bold text-black">Groove Grocer</div>

              {/* Cart & Account Icons */}
              <div className="flex space-x-4">
                <button
                  className="text-black flex items-center space-x-1"
                  onClick={openCart}
                >
                  <FaShoppingCart />
                </button>
                <button
                  className="text-black flex items-center space-x-1"
                  onClick={openAccount}
                >
                  <FaUser />
                </button>
              </div>
            </div>

            {/* Row 2: Search Bar + Address */}
            <div className="flex items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 mr-2">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-9 pr-3 py-2 bg-gray-200 text-black border border-gray-400 rounded-full w-full"
                />
              </div>

              {/* Address */}
              <button className="text-black flex items-center space-x-1">
                <FaMapMarkerAlt />
                <span>Address</span>
              </button>
            </div>
          </div>

          {/* TABLET/DESKTOP LAYOUT (sm and up): Single row */}
          <div className="hidden sm:flex items-center justify-between">
            {/* Brand (left) */}
            <div className="text-lg font-bold text-black">Groove Grocer</div>

            {/* Middle: Search + Address adjacent */}
            <div className="flex items-center space-x-4 mx-4 flex-1 max-w-2xl">
              {/* Search Bar */}
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-9 pr-3 py-2 bg-gray-200 text-black border border-gray-400 rounded-full w-full"
                />
              </div>

              {/* Address (immediately to the right of Search) */}
              <button className="text-black flex items-center space-x-1 whitespace-nowrap">
                <FaMapMarkerAlt />
                <span>Address</span>
              </button>
            </div>

            {/* Right: Cart + Account */}
            <div className="flex items-center space-x-4">
              <button
                className="text-black flex items-center space-x-1"
                onClick={openCart}
              >
                <FaShoppingCart />
                <span>Cart</span>
              </button>
              <button
                className="text-black flex items-center space-x-1"
                onClick={openAccount}
              >
                <FaUser />
                <span>Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button for Account Panel */}
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
            className="fixed inset-0 z-[70] bg-transparent"
            onClick={closeCart}
          />
          <div
            className={`fixed top-0 right-0 w-full sm:w-[50%] md:w-[30%] h-full z-[70] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
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
            className="fixed inset-0 z-[70] bg-transparent"
            onClick={closeAccount}
          />
          <div
            className={`fixed top-0 left-0 w-full sm:w-[50%] md:w-[30%] h-full z-[70] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
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
