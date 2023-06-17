import React, { FC, useState } from "react";
import "./ProductDetail.css";
import productImg from "../../images/imagePlaceholder.png";
import starIcon from "../../images/icons/starIcon.svg";
import { Product } from "../Products/Product";
import ReviewCard from "./ReviewCard";

interface Props {
  product: Product;
}

const dummyReviews = [
  {
    reviewerImg: productImg,
    reviewerName: "Alex Iwobi",
    rating: 4,
    date: "2 March 2021 at 06.30 pm",
    images: [productImg, productImg, productImg, productImg],
    review: "Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.",
  },
  {
    reviewerImg: productImg,
    reviewerName: "Alex Iwobi",
    rating: 4,
    date: "2 March 2021 at 06.30 pm",
    images: [productImg, productImg, productImg, productImg],
    review: "Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.",
  },
];

const dummmyDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.`;

const ProductDetailDescription: FC<Props> = ({ product }) => {
  const {
    id,
    title,
    description,
    image,
    images,
    price,
    rating,
    category,
    seller,
  } = product;

  return (
    <div className="product-detail">
      <div className="product-detail-description">
        <h2>Description</h2>
        {/* <div className="rating">
          {Array(Math.round(parseFloat(rating.rate))).fill(
            <img className='star-img' src={starIcon} width={25} alt="star" />
          )}
        </div>
        <span className="price-orange-lg">${price}</span> */}
        <p>{dummmyDescription}</p>

        <h2>Reviews ({rating.count})</h2>
        {dummyReviews.map((review, index: number) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <div className="product-description-image">
        <img className="main-image" src={image} alt={title} />
        {/* <div className="other-images">
            {images.slice(1).map((image: string, index: number) => (
                <img key={index} className="other-image" src={image} alt={title} />
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetailDescription;
