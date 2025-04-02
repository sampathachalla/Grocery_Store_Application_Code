import { useState, useEffect } from "react";
import HomeSidebar from "./HomeSidebar";
import HomeFeatured from "./HomeFeatured";
import HomeProductGrid from "./HomeProductGrid";
import HomeFooter from "./HomeFooter";
import HomeNavigation from "./HomeNavigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // ✅ Added state

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let computedLeft = "12px";
  if (isSidebarOpen) {
    if (screenWidth < 640) {
      computedLeft = "calc(100% - 48px)";
    } else if (screenWidth < 1024) {
      computedLeft = "calc(20% - 12px)";
    } else {
      computedLeft = "calc(15% - 12px)";
    }
  }

  return (
    <div className="flex flex-col bg-white text-black h-screen overflow-hidden relative">
      {/* TOP NAVIGATION BAR */}
      <div className="w-full">
        <HomeNavigation />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col flex-grow h-[calc(100vh-128px)] overflow-hidden">
        {/* HomeFeatured */}
        <div className="w-full">
          <HomeFeatured setSelectedCategoryId={setSelectedCategoryId} />
        </div>

        {/* Sidebar + Product Grid */}
        <div className="relative flex flex-grow w-full overflow-hidden transition-all duration-500">
          {/* Sidebar */}
          <div
            className={`
              transition-all duration-500 border-r border-gray-300
              ${isSidebarOpen ? "w-full sm:w-[20%] lg:w-[15%]" : "w-0"}
              ${
                isSidebarOpen && screenWidth < 640
                  ? "fixed inset-0 z-40 bg-white h-full"
                  : "relative h-full"
              }
            `}
          >
            {isSidebarOpen && (
              <HomeSidebar selectedCategoryId={selectedCategoryId} />
            )}
          </div>

          {/* Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="absolute z-50 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg focus:outline-none"
            style={{ left: computedLeft }}
          >
            {isSidebarOpen ? (
              <FaChevronLeft size={20} />
            ) : (
              <FaChevronRight size={20} />
            )}
          </button>

          {/* Product Grid */}
          <div
            className={`
              transition-all duration-500 p-6 overflow-auto flex-grow
              ${
                isSidebarOpen
                  ? "hidden sm:block sm:w-[80%] lg:w-[85%]"
                  : "w-full"
              }
            `}
          >
            <HomeProductGrid selectedCategoryId={selectedCategoryId} />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full">
        <HomeFooter />
      </div>
    </div>
  );
};

export default CustomerDashboard;
