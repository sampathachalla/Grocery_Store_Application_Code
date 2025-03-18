import { useState } from "react";
import { FaPlus, FaTrash, FaMapMarkerAlt } from "react-icons/fa";
import AddressForm from "./AddressForm";
import AddressList from "./AddressList";

const Address = () => {
  const [addresses, setAddresses] = useState([
    "Address - 1",
    "Address - 2",
    "Address - 3",
  ]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm((prev) => !prev);

  const handleAddAddress = (name) => {
    setAddresses((prev) => [...prev, name]);
    setShowForm(false);
  };

  return (
    <div className="w-full h-full p-6 text-black">
      {/* Top Bar with Icons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Addresses</h2>
        <button
          onClick={toggleForm}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black transition"
          title={showForm ? "Cancel" : "Add"}
        >
          {showForm ? (
            <FaTrash className="text-sm" />
          ) : (
            <FaPlus className="text-sm" />
          )}
        </button>
      </div>

      {/* Dropdown Form with Transition */}
      <div
        className={`overflow-hidden transition-all duration-700 ${
          showForm ? "max-h-[500px] mb-6" : "max-h-0 mb-0"
        }`}
      >
        {showForm && <AddressForm onAdd={handleAddAddress} />}
      </div>

      {/* Address List */}
      <AddressList addresses={addresses} />
    </div>
  );
};

export default Address;
