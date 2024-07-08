import React from "react";

const StarRating = ({ fullStars }) => {
  const totalStars = 5;

  const starElements = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      starElements.push(
        <span key={i} className="star filled">
          &#9733;
        </span>
      );
    } else {
      starElements.push(
        <span key={i} className="star">
          &#9734;
        </span>
      );
    }
  }

  return <div className="star-rating">{starElements}</div>;
};

export default StarRating;
