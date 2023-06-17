import React, { FC, useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./Products.css";
import { Product } from "./Product";
import { Link } from "react-router-dom";
import starIcon from "../../images/icons/starIcon.svg";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <Link
        to={`/shop/${product.id}`}
        state={product}
        style={{
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          color: "inherit",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card-header">
          <AiOutlineHeart className="fav-icon" />
        </div>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <div className="filter-rating">
          {Array(Math.round(parseFloat(product.rating.rate))).fill(
            <img src={starIcon} width={25} alt="star" />
          )}
        </div>
        <p className="seller-name">Seller Name</p>
        <p className="price">${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
