import { useState, useEffect, useRef } from "react";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";

const HomeSidebar = ({ selectedCategoryId }) => {
  const [subcategories, setSubcategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  // ✅ Fetch subcategories whenever category changes
  useEffect(() => {
    if (!selectedCategoryId) {
      setSubcategories([]);
      return;
    }

    const fetchSubcategories = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/categories/${selectedCategoryId}/subcategories`
        );
        setSubcategories(res.data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubcategories();
  }, [selectedCategoryId]);

  return (
    <div className="flex flex-col bg-gray-100 shadow-md border-r border-gray-300">
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold mb-4 text-black">Subcategories</h2>

        {/* Subcategory List */}
        <ul className="space-y-3 text-gray-700">
          {subcategories.map((subcategory) => (
            <li
              key={subcategory.subcategory_id}
              className="hover:text-black cursor-pointer"
            >
              📌 {subcategory.name}
            </li>
          ))}
        </ul>

        {/* Loader */}
        {isLoading && (
          <div className="flex items-center justify-center mt-4 text-gray-600">
            <FaSpinner className="animate-spin mr-2" />
            Loading...
          </div>
        )}

        {/* Placeholder loader trigger (Optional if you plan infinite scroll later) */}
        <div ref={loaderRef} className="h-6 mt-4"></div>
      </div>
    </div>
  );
};

export default HomeSidebar;
