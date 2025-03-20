import { useState } from "react";

const PersonalInfo = () => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("+123 456 7890");

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold text-black">
        Personal Information
      </h3>

      {/* Name */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-700">Name</p>
          {isEditingName ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full mt-1"
            />
          ) : (
            <p className="text-sm text-black-700">{name}</p>
          )}
        </div>
        {isEditingName ? (
          <div className="space-x-2 ml-4">
            <button
              onClick={() => setIsEditingName(false)}
              className="text-sm px-3 py-1 rounded-full bg-black text-white hover:bg-gray-800"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditingName(false)}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditingName(true)}
            className="bg-gray-100 text-sm rounded-full px-3 py-1 hover:bg-gray-200 transition"
          >
            Change
          </button>
        )}
      </div>

      {/* Phone */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-700">Phone Number</p>
          {isEditingPhone ? (
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full mt-1"
            />
          ) : (
            <p className="text-sm text-black-700">{phone}</p>
          )}
        </div>
        {isEditingPhone ? (
          <div className="space-x-2 ml-4">
            <button
              onClick={() => setIsEditingPhone(false)}
              className="text-sm px-3 py-1 rounded-full bg-black text-white hover:bg-gray-800"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditingPhone(false)}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditingPhone(true)}
            className="bg-gray-100 text-sm rounded-full px-3 py-1 hover:bg-gray-200 transition"
          >
            Change
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
