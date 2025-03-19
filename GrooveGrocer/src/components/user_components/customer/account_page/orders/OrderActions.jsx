import { useState } from "react";
import TrackingDetails from "./TrackingDetails";
import ReturnSection from "./ReturnSection";
import ProductReview from "./ProductReview";
import { FaFileInvoice, FaInfoCircle } from "react-icons/fa";

const OrderActions = () => {
  const [activeTab, setActiveTab] = useState(null);

  const renderSection = () => {
    if (activeTab === "tracking") return <TrackingDetails />;
    if (activeTab === "return") return <ReturnSection />;
    if (activeTab === "review") return <ProductReview />;
    return null;
  };

  return (
    <div className="space-y-4">
      {/* Re-order & Footer Icons (Aligned Together) */}
      <div className="flex justify-between items-center">
        <button className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-800">
          Re-order
        </button>

        {/* Footer Icons on Right Side */}
        <div className="flex space-x-2">
          <button
            className="p-2 rounded-full hover:bg-gray-200 transition"
            title="View Details"
          >
            <FaInfoCircle className="text-black text-lg" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-200 transition"
            title="Invoice"
          >
            <FaFileInvoice className="text-black text-lg" />
          </button>
        </div>
      </div>

      {/* Action Buttons: Tracking, Return, Review */}
      <div className="flex flex-col space-y-2">
        {["Tracking Details", "Return", "Product Review"].map((label) => (
          <button
            key={label}
            onClick={() =>
              setActiveTab((prev) =>
                prev === label.toLowerCase() ? null : label.toLowerCase()
              )
            }
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              label === "Tracking Details"
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Smooth Toggle Section */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          activeTab
            ? "max-h-[500px] opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {renderSection()}
      </div>
    </div>
  );
};

export default OrderActions;
