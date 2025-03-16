import { useState, useEffect } from "react";
import { FaSpinner, FaArrowDown } from "react-icons/fa";
import ProductDetailCard from "./prodcut_detail_card/ProductDetailCard";

// Helper Function to Create Product Data with Local Images

import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";

const images = [img1, img2, img3, img4];
const generateProductDetails = () => {
  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `P-${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    rating: (Math.random() * 2 + 3).toFixed(1),
    offer: "Free shipping on orders over $50",
    description: "High quality product, perfect for daily use.",
    image: images[i % images.length], // ✅ Dynamically assign local image
  }));
};

const HomeProductGrid = () => {
  const allProducts = generateProductDetails();
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  // Load visible products
  useEffect(() => {
    setVisibleProducts(allProducts.slice(0, itemsToShow));
  }, [itemsToShow]);

  const loadMore = () => {
    if (itemsToShow < allProducts.length) {
      setIsLoading(true);
      setTimeout(() => {
        setItemsToShow((prev) => prev + 20);
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="w-full h-full p-6 overflow-y-auto">
      <h2 className="text-xl font-semibold text-black mb-4">Our Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleProducts.map((product) => (
          <ProductDetailCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      {itemsToShow < allProducts.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className={`px-4 py-2 flex items-center justify-center gap-2 bg-black text-white rounded hover:bg-gray-800 transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <FaArrowDown />
                Load More
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeProductGrid;
