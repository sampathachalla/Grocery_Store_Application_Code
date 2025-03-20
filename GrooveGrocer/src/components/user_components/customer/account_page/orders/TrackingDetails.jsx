import { useState } from "react";
import { FaShoppingCart, FaBox, FaCheckCircle } from "react-icons/fa";

const TrackingDetails = () => {
  const [showLogs, setShowLogs] = useState(false);

  const status = "Out for Delivery"; // Example dynamic status
  const trackingId = "TRACK123456789";

  const steps = [
    { label: "Order Placed", icon: <FaShoppingCart /> },
    { label: "Shipped", icon: <FaBox /> },
    { label: "Out for Delivery", icon: <FaBox /> },
    { label: "Delivered", icon: <FaCheckCircle /> },
  ];

  const logs = [
    { time: "2025-03-18 10:00", update: "Order placed successfully" },
    { time: "2025-03-19 08:00", update: "Order shipped via carrier" },
    { time: "2025-03-20 14:00", update: "Package is out for delivery" },
    { time: "Pending", update: "Delivery expected today" },
  ];

  const isActiveStep = (stepLabel) => {
    const stepIndex = steps.findIndex((s) => s.label === stepLabel);
    const statusIndex = steps.findIndex((s) => s.label === status);
    return stepIndex <= statusIndex;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 text-black space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Tracking Details</h3>
        <button
          onClick={() => setShowLogs(!showLogs)}
          className="text-sm text-yellow-600 hover:underline font-medium"
        >
          {showLogs ? "Hide Updates" : "All Updates"}
        </button>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-full border ${
                isActiveStep(step.label)
                  ? "bg-black text-white border-black"
                  : "bg-gray-100 text-gray-500 border-gray-300"
              }`}
            >
              {step.icon}
            </div>
            <span
              className={`text-sm ${
                isActiveStep(step.label) ? "font-semibold" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Tracking ID (Plain Text) */}
      <div className="mt-4">
        <span className="text-sm text-gray-600 font-medium">Tracking ID:</span>
        <span className="ml-2 text-sm text-black">{trackingId}</span>
      </div>

      {/* Tracking Logs Dropdown */}
      {showLogs && (
        <div className="mt-4 border border-gray-200 rounded-md bg-gray-50 p-3 max-h-60 overflow-y-auto">
          <h4 className="text-sm font-medium mb-2">Tracking History</h4>
          <ul className="space-y-2 text-sm">
            {logs.map((log, i) => (
              <li key={i} className="text-gray-700">
                <span className="font-medium">{log.time}:</span>{" "}
                <span>{log.update}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrackingDetails;
