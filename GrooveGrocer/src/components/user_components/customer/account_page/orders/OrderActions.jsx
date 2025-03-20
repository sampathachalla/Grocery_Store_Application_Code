import { useState } from "react";
import TrackingDetails from "./TrackingDetails";
import ReturnSection from "./ReturnSection";
import ProductReview from "./ProductReview";
import { FaDownload, FaFileAlt } from "react-icons/fa"; // New icon for View Invoice
import { useNavigate } from "react-router-dom";

const OrderActions = ({ order }) => {
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();

  const renderSection = () => {
    if (activeTab === "tracking") return <TrackingDetails />;
    if (activeTab === "return") return <ReturnSection />;
    if (activeTab === "review") return <ProductReview />;
    return null;
  };

  const handleViewProduct = () => {
    navigate(`/product/${order.id}`);
  };

  const handleViewInvoice = () => {
    window.open(`/view-invoice/${order.id}`, "_blank");
  };

  const handleDownloadInvoice = () => {
    const invoiceUrl = `/invoices/${order.id}.pdf`;
    const link = document.createElement("a");
    link.href = invoiceUrl;
    link.download = `Invoice_${order.id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const actionButtons = [
    {
      label: "Tracking Details",
      key: "tracking",
      style: "bg-green-600 text-white hover:bg-green-700",
    },
    {
      label: "Return",
      key: "return",
      style: "bg-gray-100 text-black hover:bg-gray-200",
    },
    {
      label: "Product Review",
      key: "review",
      style: "bg-gray-100 text-black hover:bg-gray-200",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Re-order + View Product + Invoice Icons */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <button className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-800">
            Re-order
          </button>

          <button
            onClick={handleViewProduct}
            className="bg-gray-100 text-black rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition"
          >
            View
          </button>
        </div>

        {/* Invoice Icons */}
        <div className="flex space-x-2">
          {/* View Invoice Icon */}
          <button
            onClick={handleViewInvoice}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            title="View Invoice"
          >
            <FaFileAlt className="text-black text-lg" />
          </button>

          {/* Download Invoice Icon */}
          <button
            onClick={handleDownloadInvoice}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            title="Download Invoice"
          >
            <FaDownload className="text-black text-lg" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-2">
        {actionButtons.map(({ label, key, style }) => (
          <button
            key={key}
            onClick={() => setActiveTab((prev) => (prev === key ? null : key))}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${style}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Slide Toggle Section */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          activeTab
            ? "max-h-[500px] opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {renderSection()}
      </div>
    </div>
  );
};

export default OrderActions;
