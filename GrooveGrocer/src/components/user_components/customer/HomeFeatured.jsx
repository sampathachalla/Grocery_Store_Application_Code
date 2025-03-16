import { useState } from "react";
import {
  FaCarrot,
  FaDrumstickBite,
  FaCheese,
  FaBreadSlice,
  FaCookieBite,
  FaGlassWhiskey,
  FaSnowflake,
  FaPepperHot,
  FaHome,
} from "react-icons/fa";

const HomeFeatured = () => {
  const categories = [
    { name: "Produce", icon: <FaCarrot className="mr-1" /> },
    { name: "Meat", icon: <FaDrumstickBite className="mr-1" /> },
    { name: "Dairy", icon: <FaCheese className="mr-1" /> },
    { name: "Bakery", icon: <FaBreadSlice className="mr-1" /> },
    { name: "Snacks", icon: <FaCookieBite className="mr-1" /> },
    { name: "Beverages", icon: <FaGlassWhiskey className="mr-1" /> },
    { name: "Frozen", icon: <FaSnowflake className="mr-1" /> },
    { name: "Spices", icon: <FaPepperHot className="mr-1" /> },
    { name: "Household", icon: <FaHome className="mr-1" /> },
  ];

  const [activeCategory, setActiveCategory] = useState("Produce");

  return (
    <div className="w-full mt-16">
      {/* Category Tabs - Merged with page */}
      <div className="flex flex-wrap justify-center sticky top-0 bg-white z-50">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`flex items-center px-3 py-1 mx-2 my-1 text-base font-medium rounded transition-all duration-300
              ${
                activeCategory === category.name
                  ? "text-black font-semibold border-b-2 border-black"
                  : "text-gray-600 hover:text-black"
              }`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.icon}
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeFeatured;
