import React, { FC } from "react";
import "./ReviewCard.css";
import starIcon from "../../images/icons/starIcon.svg";

interface Review {
  reviewerImg: string;
  reviewerName: string;
  rating: number;
  date: string;
  images: string[];
  review: string;
}

interface Props {
  review: Review;
}

const ReviewCard: FC<Props> = ({ review }) => {
  const { reviewerImg, reviewerName, rating, date, images, review: reviewText } = review;
  
  return (
    <div className="review-card">
      <div className="reviewer-info">
        <img src={reviewerImg} alt="reviewer"/>
        <div className="reviewer-img-overlay">
        <div className="name-rating">
          <div className="name">{reviewerName}</div>
          <div className="rating">
            {Array(Math.round(rating)).fill(
              <img width={10} height={10} src={starIcon} alt="star" />
            )}
          </div>
        </div>
        <div className="date">{date}</div>
      </div>
      </div>
      <div className="review-card-bottom-section">
      <div className="review-images">
        {images.map((image: string, index: number) => (
          <img key={index} src={image} alt="review" />
        ))}
      </div>
      <div className="review-text">
        {reviewText}
      </div>
      </div>
    </div>
  );
};

export default ReviewCard;
