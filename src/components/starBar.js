import React from "react";

const StarRating = ({ fullStars }) => {
  const starElements = [];
  for (let i = 0; i < fullStars; i++) {
    starElements.push(
      <span key={i} className="star filled">
        &#9733;
      </span>
    );
  }

  return <div className="star-rating">{starElements}</div>;
};

export default StarRating;
