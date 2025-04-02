import { useState, useEffect } from "react";
import { FaSpinner, FaArrowDown } from "react-icons/fa";
import ProductDetailCard from "./prodcut_detail_card/ProductDetailCard";
import ProductDetailPage from "./product_detail_page/ProductDetailPage";
import axios from "axios";

// Dummy Images (stay the same)
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";

// Array of images for random assignment
const images = [img1, img2, img3, img4];

const HomeProductGrid = ({ selectedCategoryId }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Fetch products whenever selectedCategoryId changes
  useEffect(() => {
    if (!selectedCategoryId) {
      setAllProducts([]); // Clear products if no category
      setVisibleProducts([]);
      return;
    }

    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/products?category_id=${selectedCategoryId}`
        );
        // ✅ Assign random dummy images to fetched products
        const productsWithImages = res.data.map((prod, index) => ({
          ...prod,
          image: images[index % images.length],
        }));
        setAllProducts(productsWithImages);
        setVisibleProducts(productsWithImages.slice(0, 20));
        setItemsToShow(20);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategoryId]);

  // ✅ Load More Logic (unchanged)
  const loadMore = () => {
    if (itemsToShow < allProducts.length) {
      setIsLoading(true);
      setTimeout(() => {
        setItemsToShow((prev) => prev + 20);
        setVisibleProducts(allProducts.slice(0, itemsToShow + 20));
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
            key={product.product_id}
            product={product}
            onImageClick={() => setSelectedProduct(product)}
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
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white w-full max-w-6xl rounded-lg shadow-lg relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <ProductDetailPage
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeProductGrid;
