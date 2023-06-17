import React, { FC, useState } from "react";
import "./ProductDetail.css";
import productImg from "../../images/imagePlaceholder.png";
import starIcon from "../../images/icons/starIcon.svg";
import { Product } from "../Products/Product";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

interface Props {
  product: Product;
}

const MainProductDetail: FC<Props> = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD", item: product, quantity });
  };

  const [quantity, setQuantity] = useState(1);
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

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-detail">
      <div className="product-images">
        <img className="main-image" src={image} alt={title} />
        {/* <div className="other-images">
            {images.slice(1).map((image: string, index: number) => (
                <img key={index} className="other-image" src={image} alt={title} />
            ))}
        </div> */}
      </div>

      <div className="product-info">
        <h2>{title}</h2>
        <div className="rating">
          {Array(Math.round(parseFloat(rating.rate))).fill(
            <img className="star-img" src={starIcon} width={25} alt="star" />
          )}
        </div>
        <span className="price-orange-lg">${price}</span>
        <h4>Product Details</h4>
        <p>{description}</p>

        <div className="quantity">
          <span className="left">Quantity:</span>
          <div className="quantity-buttons">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <span className="right">Add note</span>
        </div>

        <div className="subtotal">
          <span>Sub Total:</span>
          <span>${price * quantity}</span>
        </div>

        <button className="add-to-wishlist-btn">Add to wishlist</button>
        <button className="add-to-cart-btn" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MainProductDetail;
