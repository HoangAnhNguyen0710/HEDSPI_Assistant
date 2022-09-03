import React from "react";
import Review from "./Review";

const ReviewList = (props) => {
  const reviewList = props.reviewList;
  
  return (
    <div className="flex w-full flex-wrap p-3">
      {reviewList.map((review)=> 
      <div className="w-full flex items-center justify-center" key={review.id}>
        <Review review={review} />
      </div>
      )}
    </div>
  );
};

export default ReviewList;
