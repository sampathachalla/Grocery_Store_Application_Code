import { useState } from "react";
import OrderCard from "./OrderCard";
import OrderDetail from "./OrderDetail";

const dummyOrders = [
  {
    id: "ORD123",
    date: "2025-03-20",
    price: "$85.00",
    description: "Product 1 Description",
    image: "/path/to/image1.jpg",
  },
  {
    id: "ORD124",
    date: "2025-03-18",
    price: "$45.00",
    description: "Product 2 Description",
    image: "/path/to/image2.jpg",
  },
];

const Orders = () => {
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const toggleDetail = (orderId) => {
    setSelectedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  return (
    <div className="h-full bg-white text-black p-4 space-y-4 w-full">
      <h2 className="text-lg font-semibold">Your Orders</h2>

      {/* Order Cards with Dropdown Detail */}
      <div className="space-y-4">
        {dummyOrders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <OrderCard
              order={order}
              onClick={() => toggleDetail(order.id)}
              isOpen={selectedOrderId === order.id}
            />

            {/* Dropdown Detail with Independent Scroll */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                selectedOrderId === order.id
                  ? "max-h-[500px] p-4"
                  : "max-h-0 p-0"
              }`}
            >
              {selectedOrderId === order.id && (
                <div className="max-h-[400px] overflow-y-auto">
                  <OrderDetail
                    order={order}
                    onClose={() => setSelectedOrderId(null)}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
