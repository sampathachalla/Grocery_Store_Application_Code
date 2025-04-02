import { FaTimes } from "react-icons/fa";
import NotificationGroup from "./NotificationGroup";

const NotificationSettings = ({ onClose }) => {
  const orderNotifications = [
    {
      label: "Order Updates",
      description: "Get updates on order status and delivery.",
      enabled: true,
    },
    {
      label: "Shipping Notifications",
      description: "Receive tracking updates via email or SMS.",
      enabled: true,
    },
  ];

  const promoNotifications = [
    {
      label: "Promotional Emails",
      description: "Receive special offers and discounts.",
      enabled: false,
    },
    {
      label: "Product Recommendations",
      description: "Get personalized product suggestions.",
      enabled: true,
    },
  ];

  return (
    <div className="relative p-4 text-black bg-white space-y-6">
      {/* Close Icon in the top right corner */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black focus:outline-none"
        >
          <FaTimes size={20} />
        </button>
      )}

      <h2 className="text-xl font-semibold">Notification Settings</h2>

      <NotificationGroup
        title="Order Notifications"
        options={orderNotifications}
      />
      <NotificationGroup title="Promotions" options={promoNotifications} />
    </div>
  );
};

export default NotificationSettings;
