import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import binIcon from "../../images/icons/binIcon.svg";
import heartIcon from "../../images/icons/Heart.svg";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const cartTotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const incrementQuantity = (itemId: number) => {
    dispatch({ type: "INCREMENT", id: itemId });
  };

  const decrementQuantity = (itemId: number) => {
    dispatch({ type: "DECREMENT", id: itemId });
  };

  return (
    <div className="cart-container">
      <h1>My Cart</h1>
      <div className="cart-content">
        <div className="cart-product-cards">
          {state.items.map((item) => (
            <div className="cart-product-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-product-details">
                <h3>{item.title}</h3>
                <div className="item-size">
                  <p>Size: </p>M
                </div>
                <div className="item-quantity">
                  <p>Quantity: </p>
                  <div className="quantity-cart">
                    <button onClick={() => decrementQuantity(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-item-price-buttons">
                <div className="cart-item-price-lg">
                    ${item.price.toFixed(2)}
                </div>
                <div className="cart-item-buttons">
                  <div
                    className="cart-item-button-1"
                    onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                  >
                    <img width={30} height={30} src={binIcon} alt="delete" />
                  </div>
                  <div className="add-to-wishlist-btn-cart">
                    Wishlist
                    <img src={heartIcon} alt="heart" />
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-sidebar">
          <div className="coupon-card">
            <h3>Have a coupon?</h3>
            <input type="text" placeholder="Enter coupon code" />
            <button>Apply</button>
          </div>
          <div className="cart-totals">
            <h1>Cart Totals</h1>
            <div className="totals-line">
                <p>Subtotal:</p>
            <h3>${cartTotal.toFixed(2)}</h3>
            </div>
            <div className="totals-line">
            <p>Shipping:</p>
            <h3>$5.00</h3>
            </div>
            <div className="totals-line">
            <p>Total:</p>
            <p>${(cartTotal + 5).toFixed(2)}</p>
            </div>
            <div className="cart-checkout-card">
            <button>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
