import React from "react";

const StarRating = ({ fullStars }) => {
  const starElements = [];
  for (let i = 0; i < fullStars; i++) {
    starElements.push(
      <span key={i} className="text-gold text-2xl">
        &#9733;
      </span>
    );
  }

  return <div className="flex gap-1">{starElements}</div>;
};

export default StarRating;
