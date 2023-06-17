import React, { FC } from "react";
import { IoMdSend } from "react-icons/io";
import "./Newsletter.css";

const Newsletter: FC = () => {
  return (
    <div className="newsletter">
      <h2>Join Our Newsletter</h2>
      <p>Stay updated with the latest news and special offers.</p>
      <div className="newsletter-input">
        <input type="text" placeholder="Enter your email" />
        <button>
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
