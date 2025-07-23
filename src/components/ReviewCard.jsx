// src/components/ReviewCard.jsx
import React from "react";
import { useInView } from "react-intersection-observer";

const ReviewCard = ({ review, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  // Meningkatkan delay
  const animationDelay = `${index * 0.15}s`; // Delay 150ms per ulasan

  return (
    <div
      ref={ref}
      className={`bg-cardbg rounded-lg p-6 shadow-md flex flex-col items-center text-center
                 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: inView ? animationDelay : "0s" }}
    >
      <img
        src={review.imageUrl}
        alt={review.reviewerName}
        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary"
      />
      <h4 className="text-xl font-semibold text-white mb-2">
        {review.reviewerName}
      </h4>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? "text-yellow-400" : "text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-300 text-base italic">"{review.reviewText}"</p>
    </div>
  );
};

export default ReviewCard;
