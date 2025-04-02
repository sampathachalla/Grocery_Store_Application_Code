import { useState } from "react";
import {
  FaCreditCard,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
} from "react-icons/fa";
import { SiVenmo, SiPaypal } from "react-icons/si";
import CardForm from "./CardForm";
import VenmoForm from "./VenmoForm";
import PayPalForm from "./PayPalForm";

const Payments = ({ onClose }) => {
  const [openMethod, setOpenMethod] = useState(null);

  const toggleMethod = (method) => {
    setOpenMethod((prev) => (prev === method ? null : method));
  };

  const paymentOptions = [
    {
      key: "card",
      icon: <FaCreditCard className="text-black" />,
      label: "Debit Card",
      form: <CardForm />,
    },
    {
      key: "venmo",
      icon: <SiVenmo className="text-black" />,
      label: "Venmo",
      form: <VenmoForm />,
    },
    {
      key: "paypal",
      icon: <SiPaypal className="text-black" />,
      label: "PayPal",
      form: <PayPalForm />,
    },
  ];

  return (
    <div className="relative p-4 space-y-4">
      {/* Close Icon in the top right corner */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black focus:outline-none"
        >
          <FaTimes size={20} />
        </button>
      )}

      <h2 className="text-lg font-semibold text-black text-center">
        Add Payment Method
      </h2>

      {paymentOptions.map(({ key, icon, label, form }) => (
        <div
          key={key}
          onClick={() => toggleMethod(key)}
          className="border rounded-lg bg-white shadow-sm transition duration-300 cursor-pointer"
        >
          <div className="flex justify-between items-center p-3">
            <div className="flex items-center space-x-2">
              {icon}
              <span className="text-black font-medium">{label}</span>
            </div>
            {openMethod === key ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>

          {/* Smooth Dropdown Transition */}
          <div
            className={`transition-all overflow-hidden duration-700 ease-in-out ${
              openMethod === key ? "max-h-96 p-3 pt-0" : "max-h-0 p-0"
            }`}
          >
            {openMethod === key && <div className="mt-2">{form}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payments;
