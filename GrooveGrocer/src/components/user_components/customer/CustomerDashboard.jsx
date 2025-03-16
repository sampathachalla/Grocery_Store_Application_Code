import HomeSidebar from "./HomeSidebar";
import HomeFeatured from "./HomeFeatured";
import HomeProductGrid from "./HomeProductGrid";
import HomeFooter from "./HomeFooter";
import HomeNavigation from "./HomeNavigation";

const CustomerDashboard = () => {
  return (
    <div className="flex flex-col bg-white text-black h-screen overflow-hidden">
      {/* 🔹 Box 1 – TOP NAVIGATION BAR */}
      <div className="w-full">
        <HomeNavigation />
      </div>

      {/* 🔹 Box 2 – MAIN CONTENT (fills available height) */}
      <div className="flex flex-col flex-grow h-[calc(100vh-128px)]">
        {/* Top of Box 2 – HomeFeatured */}
        <div className="w-full">
          <HomeFeatured />
        </div>

        {/* Bottom of Box 2 – Sidebar + ProductGrid */}
        <div className="flex flex-grow w-full overflow-hidden">
          {/* Sidebar – 20% Width, Internal Scroll Only */}
          <div className="w-1/5 border-r border-gray-300 h-full overflow-y-auto">
            <HomeSidebar />
          </div>

          {/* Product Grid – 80% Width */}
          <div className="w-4/5 p-6 overflow-auto">
            <HomeProductGrid />
          </div>
        </div>
      </div>

      {/* 🔹 Box 3 – FOOTER */}
      <div className="w-full">
        <HomeFooter />
      </div>
    </div>
  );
};

export default CustomerDashboard;
