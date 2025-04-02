import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon
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

const Orders = ({ onClose }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isPanelMounted, setIsPanelMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const handleCardClick = (order) => {
    if (selectedOrder?.id === order.id) {
      // Close the panel
      setAnimateIn(false);
      setTimeout(() => {
        setSelectedOrder(null);
        setIsPanelMounted(false);
      }, 500);
    } else if (selectedOrder) {
      // Switch panel to another order
      setAnimateIn(false);
      setTimeout(() => {
        setSelectedOrder(order);
        setIsPanelMounted(true);
        setTimeout(() => setAnimateIn(true), 10);
      }, 500);
    } else {
      // First open
      setSelectedOrder(order);
      setIsPanelMounted(true);
      setTimeout(() => setAnimateIn(true), 10);
    }
  };

  const closePanel = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setSelectedOrder(null);
      setIsPanelMounted(false);
    }, 500);
  };

  return (
    <div className="relative h-full bg-white text-black p-4 space-y-4 w-full">
      {/* Close Entire Orders Component Button 
          Only show when the detail panel is not open */}
      {!isPanelMounted && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black focus:outline-none z-50"
        >
          <FaTimes size={20} />
        </button>
      )}

      <h2 className="text-lg font-semibold">Your Orders</h2>

      {/* Order Cards */}
      <div className="space-y-4">
        {dummyOrders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onClick={() => handleCardClick(order)}
          />
        ))}
      </div>

      {/* Slide-in Order Detail Panel */}
      {isPanelMounted && selectedOrder && (
        <div
          className={`fixed top-0 right-0 h-full w-full bg-white border-l border-gray-200 shadow-lg z-40 transform transition-transform duration-500 ${
            animateIn ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Icon for Order Details Panel */}
          <button
            onClick={closePanel}
            className="absolute top-4 right-4 text-gray-600 hover:text-black focus:outline-none"
          >
            <FaTimes size={20} />
          </button>

          <OrderDetail order={selectedOrder} onClose={closePanel} />
        </div>
      )}
    </div>
  );
};

export default Orders;
