import React, { FC } from "react";
import "./CarouselItem.css";
import saleTag from "../../images/saleTag.svg";

interface CarouselItemProps {
  title: string;
  imgURL: string;
  description: string;
  priceOrange: number;
  priceGray: number;
}

const CarouselItem: FC<CarouselItemProps> = ({
  title,
  imgURL,
  description,
  priceOrange,
  priceGray,
}) => {
  return (
    <div className="carousel-item">
      <img className="sale-tag" src={saleTag} alt="" />
      <img src={imgURL} alt="" />
      <div className="carousel-info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="prices">
          <span className="price-orange">${priceOrange}</span>
          <span className="price-gray">${priceGray}</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
