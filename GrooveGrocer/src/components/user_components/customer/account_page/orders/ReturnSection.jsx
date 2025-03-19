import { useState } from "react";

const ReturnSection = () => {
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Return Reason:", reason, "Comment:", comment);
    setReason("");
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4 transition-all duration-500"
    >
      <h3 className="text-base font-semibold text-black">Return Request</h3>

      <select
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black bg-white focus:outline-none focus:ring-1 focus:ring-black"
        required
      >
        <option value="">Select Return Reason</option>
        <option value="damaged">Item was damaged</option>
        <option value="wrong">Wrong item sent</option>
        <option value="unsatisfied">Not satisfied with the product</option>
      </select>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Additional comments (optional)"
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black bg-white focus:outline-none focus:ring-1 focus:ring-black"
        rows={3}
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
      >
        Submit Return
      </button>
    </form>
  );
};

export default ReturnSection;
