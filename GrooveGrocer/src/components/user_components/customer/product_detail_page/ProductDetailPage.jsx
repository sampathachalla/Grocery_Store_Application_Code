import { FaStar, FaShoppingCart, FaTimes } from "react-icons/fa";
import img1 from "../../../../assets/img1.jpg";

const ProductDetailPage = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-black bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      {/* Product Image */}
      <div
        className="w-full aspect-video bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${product.image || img1})` }}
      ></div>

      {/* Product Info */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-black mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-1">{product.shortDescription}</p>
        <p className="text-gray-600 mb-4">High-quality product image</p>

        {/* Price and Actions */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-bold text-black">${product.price}</p>
          <div className="flex space-x-2">
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 text-sm font-bold">
              Buy Now
            </button>
            <button className="bg-gray-100 text-black px-4 py-2 rounded-full hover:bg-gray-200 text-sm font-bold">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Description */}
        <h2 className="text-xl font-bold text-black mb-2">Description</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>

        {/* Collapsible Additional Info */}
        <details className="border border-gray-300 rounded-xl px-4 py-2 mb-6">
          <summary className="cursor-pointer font-medium text-black">
            Additional Information
          </summary>
          <p className="text-gray-600 mt-2 text-sm">
            Detailed specifications, materials, and other product details.
          </p>
        </details>

        {/* Suggested Products */}
        <h2 className="text-xl font-bold text-black mb-2">
          Suggested Products
        </h2>
        <div className="flex overflow-x-auto gap-4 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="min-w-[150px] bg-gray-100 rounded-lg p-2">
              <div
                className="aspect-[3/4] bg-cover bg-center rounded-md mb-2"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <p className="text-black font-medium text-sm">Product {i}</p>
              <p className="text-gray-600 text-xs">$49.99</p>
            </div>
          ))}
        </div>

        {/* Ratings */}
        <h2 className="text-xl font-bold text-black mb-2">
          Reviews and Ratings
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((r, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-2">
              <p className="font-medium text-black">User {r}</p>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-sm" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                This is a sample review of the product. User feedback goes here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
