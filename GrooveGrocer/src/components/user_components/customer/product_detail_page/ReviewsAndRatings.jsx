// src/components/user_components/customer/product_detail_page/ReviewsAndRatings.jsx
import { useState } from "react";
import { FaStar, FaChevronDown } from "react-icons/fa";

const ReviewsAndRatings = () => {
  const [open, setOpen] = useState(false);

  const reviews = [
    { id: 1, user: "Alice", rating: 5, text: "Great product!" },
    { id: 2, user: "Bob", rating: 4, text: "Good value for money." },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-black font-semibold text-xl mb-2"
      >
        Reviews and Ratings
        <FaChevronDown
          className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id}>
              <p className="font-medium text-black">{review.user}</p>
              <div className="flex items-center text-yellow-500 text-sm mb-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 text-sm">{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsAndRatings;
