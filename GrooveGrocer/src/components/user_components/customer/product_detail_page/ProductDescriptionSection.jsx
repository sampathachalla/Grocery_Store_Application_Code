// src/components/user_components/customer/product_detail_page/ProductDescriptionSection.jsx
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const ProductDescriptionSection = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4">
      <h3 className="text-xl font-semibold text-black mb-2">Description</h3>
      <p className="text-gray-700 mb-4">{product.description}</p>

      {/* Collapsible Additional Info */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-black font-medium mb-2"
        >
          <span>Additional Information</span>
          <FaChevronDown
            className={`ml-2 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <p className="text-gray-600 text-sm italic">
            Detailed specifications, materials, and other product details.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDescriptionSection;
