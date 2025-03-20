const OrderHeader = ({ order }) => {
  return (
    <div className="space-y-1 text-sm border-b border-gray-200 pb-3">
      <div className="flex justify-between">
        <span className="text-gray-600 font-medium">Order ID:</span>
        <span className="font-semibold">{order.id}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600 font-medium">Order Date:</span>
        <span>{order.date}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600 font-medium">Total Price:</span>
        <span className="font-semibold">{order.price}</span>
      </div>
    </div>
  );
};

export default OrderHeader;
