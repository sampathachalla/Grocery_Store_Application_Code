import { FaMapMarkerAlt } from "react-icons/fa";

const AddressList = ({ addresses }) => {
  return (
    <div className="space-y-4">
      {addresses.map((addr, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow transition"
        >
          <div className="bg-gray-100 rounded-full p-2">
            <FaMapMarkerAlt className="text-black text-sm" />
          </div>
          <span className="text-sm">{addr}</span>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
