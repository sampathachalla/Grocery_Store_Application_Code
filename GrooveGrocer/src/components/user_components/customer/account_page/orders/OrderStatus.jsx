import { useState } from "react";

const OrderStatus = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Order Status</h2>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Product Description</p>
          <p className="text-xs text-gray-500">Return Eligibility: [Status]</p>
        </div>
        <img
          src="https://via.placeholder.com/80"
          alt="Product"
          className="w-16 h-16 rounded-md object-cover"
        />
      </div>

      {isDetailsVisible && (
        <p className="text-sm text-gray-600 transition-all duration-500">
          [Extended product details...]
        </p>
      )}
    </div>
  );
};

export default OrderStatus;
