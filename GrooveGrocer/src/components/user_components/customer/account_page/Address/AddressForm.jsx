import { useState } from "react";

const AddressForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.street) {
      onAdd(formData.name);
      setFormData({ name: "", street: "", city: "", zip: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4"
    >
      {["name", "street", "city", "zip"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={
            field === "name"
              ? "Address Name"
              : field === "street"
              ? "Street Address"
              : field === "city"
              ? "City"
              : "ZIP Code"
          }
          value={formData[field]}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black"
          required={field === "name" || field === "street"}
        />
      ))}
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
      >
        Save Address
      </button>
    </form>
  );
};

export default AddressForm;
