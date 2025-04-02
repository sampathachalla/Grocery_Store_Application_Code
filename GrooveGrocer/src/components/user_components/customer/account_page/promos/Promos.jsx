import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Promos = ({ onClose }) => {
  const [promoCode, setPromoCode] = useState("");
  const [promos] = useState([
    { id: 1, name: "Offer-1", description: "Special offer available" },
    { id: 2, name: "Offer-2", description: "Special offer available" },
  ]);

  const handleAddPromo = () => {
    console.log("Promo Code Added:", promoCode);
    setPromoCode("");
  };

  return (
    <div className="relative h-full w-full p-4 bg-white text-black">
      {/* Close Icon in the top right corner (positioned slightly higher at top-2) */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-black focus:outline-none"
        >
          <FaTimes size={20} />
        </button>
      )}

      {/* Main Content Container with margin-top to clear the close button */}
      <div className="flex flex-col space-y-6 mt-8">
        {/* Promo Code Input */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500"
          />
          <button
            onClick={handleAddPromo}
            className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Add
          </button>
        </div>

        {/* Promotions List */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Promotions</h2>
          <div className="space-y-4">
            {promos.map((promo) => (
              <div
                key={promo.id}
                className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
              >
                {/* Promo Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-black font-semibold">
                    {/* Placeholder Logo */}
                    <span>🎁</span>
                  </div>
                  <div>
                    <p className="font-medium text-black">{promo.name}</p>
                    <p className="text-gray-500 text-sm">{promo.description}</p>
                  </div>
                </div>

                {/* Details Button */}
                <button className="bg-gray-100 text-black px-4 py-1 rounded-full hover:bg-gray-200 transition text-sm font-medium">
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promos;
