import { useState, useRef, useEffect } from "react";
import { FaSpinner } from "react-icons/fa"; // Spinner icon

const HomeSidebar = () => {
  const totalCategories = Array.from(
    { length: 25 },
    (_, i) => `Sub-Category ${i + 1}`
  );
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(10); // Start with 10
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  // Load visible categories
  useEffect(() => {
    setVisibleCategories(totalCategories.slice(0, itemsToShow));
  }, [itemsToShow]);

  // Infinite Scroll Trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (
          target.isIntersecting &&
          itemsToShow < totalCategories.length &&
          !isLoading
        ) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [visibleCategories, isLoading]);

  // Load more with spinner
  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setItemsToShow((prev) => Math.min(prev + 3, totalCategories.length));
      setIsLoading(false);
    }, 1000); // Simulate 1s loading time
  };

  return (
    <div className="flex flex-col bg-gray-100 shadow-md border-r border-gray-300">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-black">Categories</h2>
        <ul className="space-y-3 text-gray-700">
          {visibleCategories.map((category, i) => (
            <li
              key={i}
              className={`${
                i === 0 ? "font-bold text-black" : ""
              } hover:text-black cursor-pointer`}
            >
              📌 {category}
            </li>
          ))}
        </ul>

        {/* Loading Spinner Animation */}
        {isLoading && (
          <div className="flex items-center justify-center mt-4 text-gray-600">
            <FaSpinner className="animate-spin mr-2" />
            Loading...
          </div>
        )}

        {/* Invisible trigger for infinite scroll */}
        <div ref={loaderRef} className="h-6 mt-4"></div>
      </div>
    </div>
  );
};

export default HomeSidebar;
