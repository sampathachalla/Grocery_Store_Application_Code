import { useState } from "react";

const NotificationToggle = ({ label, description, defaultEnabled = false }) => {
  const [enabled, setEnabled] = useState(defaultEnabled);

  return (
    <div className="flex justify-between items-center py-2">
      <div>
        <p className="text-sm font-medium text-black">{label}</p>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <div
          className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${
            enabled ? "bg-black" : "bg-gray-300"
          }`}
          onClick={() => setEnabled(!enabled)}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
              enabled ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </div>
      </label>
    </div>
  );
};

export default NotificationToggle;
