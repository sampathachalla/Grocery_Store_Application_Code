import { useState, useEffect } from "react";
import { FaSpinner, FaArrowDown } from "react-icons/fa"; // Spinner + Arrow icon

const HomeProductGrid = () => {
  const totalProducts = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `P-${i + 1}`,
    image: "https://via.placeholder.com/150",
  }));

  const [visibleProducts, setVisibleProducts] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  // Load visible products
  useEffect(() => {
    setVisibleProducts(totalProducts.slice(0, itemsToShow));
  }, [itemsToShow]);

  const loadMore = () => {
    if (itemsToShow < totalProducts.length) {
      setIsLoading(true);
      setTimeout(() => {
        setItemsToShow((prev) => prev + 20);
        setIsLoading(false);
      }, 1000); // Simulated delay
    }
  };

  return (
    <div className="w-full h-full p-6 overflow-y-auto">
      <h2 className="text-xl font-semibold text-black mb-4">Our Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-lg text-center border border-gray-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mb-2"
            />
            <p className="font-medium text-black">{product.name}</p>
          </div>
        ))}
      </div>

      {/* Load More Button with Icon */}
      {itemsToShow < totalProducts.length && (
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
