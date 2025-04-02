import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const ProductDetailPage = ({ product, onClose }) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);

  return (
    <div className="p-6 relative">
      {/* Back Button */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 flex items-center gap-1 text-black hover:text-gray-700"
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>

      {/* Top Section - Image and Basic Info */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full lg:w-1/3 h-64 object-cover rounded-lg border border-gray-300"
        />

        {/* Product Info */}
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-black">{product.name}</h2>
          <p className="text-gray-600">{product.shortDescription}</p>

          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-black">
              ${product.price}
            </span>
            <span className="text-gray-500 text-sm">Qty: 1</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Buy Now
            </button>
            <button className="border border-black text-black px-4 py-2 rounded hover:bg-gray-100">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Description + Additional Info (Collapsible) */}
      <div className="mt-8 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-black mb-2">Description</h3>
          <p className="text-gray-700">{product.description}</p>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <button
            className="flex justify-between items-center w-full text-black font-medium"
            onClick={() => setInfoOpen(!infoOpen)}
          >
            Additional Information
            <span
              className={`transition-transform duration-300 ${
                infoOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              infoOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600 mt-2 text-sm">
              Detailed specifications, materials, and product details.
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-black mb-4">
          Suggested Products
        </h3>
        <div className="flex overflow-x-auto gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="min-w-[150px] bg-gray-100 p-2 rounded">
              <img
                src={product.image}
                alt={`Suggested ${num}`}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <p className="text-sm text-black">Product {num}</p>
              <p className="text-xs text-gray-600">
                ${(10 + num * 5).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section (Collapsible) */}
      <div className="mt-8 border-t border-gray-300 pt-4">
        <button
          className="flex justify-between items-center w-full text-black font-medium"
          onClick={() => setReviewsOpen(!reviewsOpen)}
        >
          Reviews and Ratings
          <span
            className={`transition-transform duration-300 ${
              reviewsOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            reviewsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((review) => (
              <div
                key={review}
                className="bg-gray-100 p-2 rounded text-sm text-gray-700"
              >
                <p className="font-semibold text-black">User {review}</p>
                <p className="text-yellow-500">★★★★☆</p>
                <p>This is a sample review.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
