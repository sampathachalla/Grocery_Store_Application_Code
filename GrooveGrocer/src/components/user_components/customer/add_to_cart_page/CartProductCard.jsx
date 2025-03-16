import { FaPlus, FaMinus, FaTrash, FaTag } from "react-icons/fa";

const CartProductCard = ({
  product,
  quantity,
  isSelected,
  onQuantityChange,
  onRemove,
  onToggleSelect,
}) => {
  const totalPrice = (product.price * quantity).toFixed(2);

  const handleIncrease = () => onQuantityChange(quantity + 1);
  const handleDecrease = () =>
    onQuantityChange(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex items-start space-x-2">
      {/* Checkbox outside the card */}
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onToggleSelect}
        className="w-5 h-5 mt-2 text-black focus:ring-black rounded cursor-pointer"
      />

      {/* Card Content */}
      <div className="border border-gray-200 rounded-lg p-4 flex flex-col space-y-3 shadow-sm bg-white flex-grow">
        {/* Savings */}
        <div className="flex items-center text-sm text-gray-700 font-medium space-x-2">
          <FaTag className="text-gray-600" />
          <span>Savings</span>
        </div>

        {/* Image and Description */}
        <div className="flex space-x-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-md border border-gray-300"
          />
          <div className="flex flex-col flex-grow">
            <p className="text-black font-semibold">{product.name}</p>
            <p className="text-gray-500 text-sm mt-1">{product.description}</p>
          </div>
        </div>

        {/* Quantity + Price */}
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecrease}
              className="bg-gray-200 rounded-full w-7 h-7 flex justify-center items-center"
            >
              <FaMinus className="text-sm text-gray-700" />
            </button>
            <span className="text-black font-medium">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-gray-200 rounded-full w-7 h-7 flex justify-center items-center"
            >
              <FaPlus className="text-sm text-gray-700" />
            </button>
          </div>

          <div className="bg-gray-100 px-3 py-1 rounded-lg border border-gray-300">
            <p className="text-black font-semibold text-sm">${totalPrice}</p>
          </div>
        </div>

        {/* Remove & View More */}
        <div className="flex justify-between items-center mt-3">
          <button
            onClick={onRemove}
            className="text-gray-600 hover:text-black flex items-center space-x-1 text-sm"
          >
            <FaTrash className="text-sm" />
            <span>Remove</span>
          </button>

          <button className="text-gray-700 text-sm underline hover:text-black">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
