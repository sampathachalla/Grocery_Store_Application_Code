// src/components/user_components/customer/product_detail_page/ProductHeaderSection.jsx
import { FaShoppingCart } from "react-icons/fa";

const ProductHeaderSection = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg p-4 gap-4 items-start">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/3 h-64 object-cover rounded-lg border border-gray-200"
      />

      {/* Details */}
      <div className="flex flex-col flex-grow justify-between h-full w-full md:w-2/3">
        <h2 className="text-2xl font-semibold text-black mb-2">
          {product.name}
        </h2>

        <div className="flex justify-between items-center mb-4">
          <span className="text-lg text-black font-bold">${product.price}</span>
          <span className="text-sm text-gray-700">Qty: 1</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-2">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Buy Now
          </button>
          <button className="flex items-center bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 transition">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeaderSection;
