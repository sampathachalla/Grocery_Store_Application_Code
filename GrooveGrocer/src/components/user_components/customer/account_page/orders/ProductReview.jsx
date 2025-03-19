import { useState } from "react";

const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating, "Review:", review);
    setRating(0);
    setReview("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4 transition-all duration-500"
    >
      <h3 className="text-base font-semibold text-black">Product Review</h3>

      {/* Rating Selector */}
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`text-xl ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black bg-white focus:outline-none focus:ring-1 focus:ring-black"
        rows={4}
        required
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ProductReview;
