import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Review = ({ review }) => {
  return (
    <div className="review">
      <h2>{review.name}</h2>
      {review.rate !== null ? (
        <div className="review__rate">
          <StarIcon sx={{ fontSize: 30, color: "yellow" }} />
          <h3>{review.rate}/5</h3>
        </div>
      ) : null}
      <p className="review__reviewText">{review.review}</p>
    </div>
  );
};

export default Review;
