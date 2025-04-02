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

// ✅ Accept setSelectedCategoryId from props
const HomeFeatured = ({ setSelectedCategoryId }) => {
  // ✅ Assign real category_ids from your database
  const categories = [
    { id: "c3", name: "Vegetables", icon: <FaCarrot className="mr-1" /> },
    { id: "c1", name: "Meat", icon: <FaDrumstickBite className="mr-1" /> },
    { id: "c2", name: "Dairy", icon: <FaCheese className="mr-1" /> },
    { id: "c7", name: "Bakery", icon: <FaBreadSlice className="mr-1" /> },
    { id: "c5", name: "Snacks", icon: <FaCookieBite className="mr-1" /> },
    { id: "c6", name: "Beverages", icon: <FaGlassWhiskey className="mr-1" /> },
    { id: "c9", name: "Frozen Foods", icon: <FaSnowflake className="mr-1" /> },
    { id: "c8", name: "Seafood", icon: <FaPepperHot className="mr-1" /> },
    { id: "c10", name: "Health & Wellness", icon: <FaHome className="mr-1" /> },
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (category) => {
    setActiveCategory(category.id);
    setSelectedCategoryId(category.id); // ✅ Pass to parent
  };

  return (
    <div className="w-full mt-24">
      <div
        className="
          flex flex-nowrap md:flex-wrap 
          overflow-x-auto md:overflow-x-visible 
          sticky top-[64px] md:static 
          justify-start md:justify-center 
          bg-white z-50 px-4 py-2
        "
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`
              flex items-center whitespace-nowrap 
              px-3 py-1 mx-2 my-1 
              text-sm md:text-base font-medium rounded 
              transition-all duration-300 
              ${
                activeCategory === category.id
                  ? "text-black font-semibold border-b-2 border-black"
                  : "text-gray-600 hover:text-black"
              }
            `}
            onClick={() => handleClick(category)}
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
