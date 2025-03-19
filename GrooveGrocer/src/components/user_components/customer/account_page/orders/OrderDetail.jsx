import OrderStatus from "./OrderStatus";
import OrderActions from "./OrderActions";
import OrderFooter from "./OrderFooter";
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
    <div className="h-full w-full p-4 space-y-4 relative overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      {/* Order Status */}
      <OrderStatus order={order} />

      {/* Actions */}
      <OrderActions onActionSelect={setActiveSection} />

      {/* Conditional Section with Smooth Transition */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          activeSection ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {renderSection()}
      </div>
    </div>
  );
};

export default OrderDetail;
