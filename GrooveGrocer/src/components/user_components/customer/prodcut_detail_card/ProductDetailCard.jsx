import { useState } from "react";
import { FaStar, FaShoppingCart, FaPlus } from "react-icons/fa";

const ProductDetailCard = ({ product, onImageClick }) => {
  const [hoverAdd, setHoverAdd] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative bg-white rounded-lg p-4 hover:bg-gray-50 transition duration-300 w-full max-w-xs mx-auto">
      {/* Add/Cart Button Top-Right */}
      <button
        className="absolute top-3 right-3 bg-black text-white px-3 py-2 rounded-full hover:bg-gray-800 transition z-10 font-semibold text-sm flex items-center"
        aria-label="Add Product"
        onMouseEnter={() => setHoverAdd(true)}
        onMouseLeave={() => setHoverAdd(false)}
      >
        {hoverAdd ? (
          <>
            <FaShoppingCart className="mr-1" />
            <span>Add to Cart</span>
          </>
        ) : (
          <>
            <FaPlus className="mr-1" />
            <span>Add</span>
          </>
        )}
      </button>

      {/* Product Image - No Border or Shadow */}
      <div className="relative w-full h-48 mb-4">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-gray-400 text-sm">Loading...</span>
          </div>
        )}
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            onClick={(e) => {
              e.stopPropagation();
              onImageClick();
            }}
            className={`cursor-pointer w-full h-48 object-cover rounded-md transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-md text-gray-500 text-sm">
            No Image Available
          </div>
        )}
      </div>

      {/* Price & Rating */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-black font-semibold text-lg">
          ${product.price}
        </span>
        <div className="flex items-center space-x-1">
          <FaStar className="text-yellow-500 text-sm" />
          <span className="text-black text-sm">{product.rating}</span>
        </div>
      </div>

      {/* Offer */}
      <div className="text-gray-500 text-xs italic mb-1">{product.offer}</div>

      {/* Description */}
      <p className="text-gray-700 text-sm">{product.description}</p>
    </div>
  );
};

export default ProductDetailCard;
