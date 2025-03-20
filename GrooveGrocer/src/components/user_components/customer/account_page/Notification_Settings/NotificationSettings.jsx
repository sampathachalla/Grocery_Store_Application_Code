import NotificationGroup from "./NotificationGroup";

const NotificationSettings = () => {
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
    <div className="p-4 text-black bg-white space-y-6">
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
