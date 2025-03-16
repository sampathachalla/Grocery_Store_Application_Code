import { useState, useEffect } from "react";
import { FaSpinner, FaArrowDown } from "react-icons/fa";
import ProductDetailCard from "./prodcut_detail_card/ProductDetailCard";
import ProductDetailPage from "./product_detail_page/ProductDetailPage";

// Import Local Images
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";

// Array of images
const images = [img1, img2, img3, img4];

// Generate Products with local images
const generateProductDetails = () => {
  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `P-${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    rating: (Math.random() * 2 + 3).toFixed(1),
    offer: "Free shipping on orders over $50",
    description: "High quality product, perfect for daily use.",
    shortDescription: "Short product description",
    image: images[i % images.length],
  }));
};

const HomeProductGrid = () => {
  const allProducts = generateProductDetails();
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    <div className="w-full h-full p-6 overflow-y-auto relative">
      <h2 className="text-xl font-semibold text-black mb-4">Our Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleProducts.map((product) => (
          <ProductDetailCard
            key={product.id}
            product={product}
            onImageClick={() => setSelectedProduct(product)} // 🔹 Trigger popup on image click only
          />
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

      {/* Product Detail Popup Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-70 flex justify-center items-start overflow-y-auto pt-10 bg-white/30 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)} // ✅ Close on background click
        >
          <div
            className="bg-white w-full max-w-6xl rounded-lg shadow-lg relative mx-4"
            onClick={(e) => e.stopPropagation()} // ❗ Prevent background click when inside box
          >
            <ProductDetailPage
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)} // ✅ Close on back button
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeProductGrid;
