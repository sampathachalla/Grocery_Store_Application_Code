import {
  FaShoppingCart,
  FaUser,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

const HomeNavigation = () => {
  return (
    <div className="fixed top-0 w-full bg-white border-b border-gray-300 py-3 flex justify-between items-center px-6 shadow-md z-50">
      {/* 🔹 Left – Logo */}
      <div className="text-lg font-bold text-black">Groove Grocer</div>

      {/* 🔹 Center – Search Bar + Address */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <FaSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-3 py-2 bg-gray-200 text-black border border-gray-400 rounded-full w-64"
          />
        </div>

        {/* Address Button – to the right of Search */}
        <button className="text-black flex items-center space-x-1">
          <FaMapMarkerAlt />
          <span>Address</span>
        </button>
      </div>

      {/* 🔹 Right – Cart + Account */}
      <div className="flex space-x-6">
        <button className="text-black flex items-center space-x-2">
          <FaShoppingCart />
          <span>Cart</span>
        </button>
        <button className="text-black flex items-center space-x-2">
          <FaUser />
          <span>Account</span>
        </button>
      </div>
    </div>
  );
};

export default HomeNavigation;
