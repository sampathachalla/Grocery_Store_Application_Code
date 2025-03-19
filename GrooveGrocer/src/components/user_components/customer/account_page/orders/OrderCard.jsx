const OrderCard = ({ order, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer bg-white"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{order.date}</p>
          <p className="text-black font-medium">{order.title}</p>
          <p className="text-gray-600 text-sm">Order ID: {order.id}</p>
        </div>
        <div className="text-black font-semibold">{order.price}</div>
      </div>
    </div>
  );
};

export default OrderCard;
