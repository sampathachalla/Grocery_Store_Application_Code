import OrderHeader from "./OrderHeader";
import OrderStatus from "./OrderStatus";
import OrderActions from "./OrderActions";
import TrackingDetails from "./TrackingDetails";
import ReturnSection from "./ReturnSection";
import ProductReview from "./ProductReview";
import { useState } from "react";

const OrderDetail = ({ order, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);

  const renderSection = () => {
    switch (activeSection) {
      case "tracking":
        return <TrackingDetails />;
      case "return":
        return <ReturnSection />;
      case "review":
        return <ProductReview />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full p-4 space-y-4 relative overflow-y-auto bg-white text-black">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg font-bold"
      >
        ✕
      </button>

      {/* Add margin-top to push below the close button */}
      <div className="mt-8 space-y-4">
        <OrderHeader order={order} />
        <OrderStatus order={order} />
        <OrderActions onActionSelect={setActiveSection} />

        {/* Conditional Section */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activeSection
              ? "max-h-[500px] opacity-100 mt-2"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
