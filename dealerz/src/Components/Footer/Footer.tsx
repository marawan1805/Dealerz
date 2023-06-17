import React, { FC } from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import placeholderImg from "../../images/imagePlaceholder.png";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={placeholderImg} alt="Logo"/>
      </div>
      <div className="footer-content">
        <h1 className="logo">Dealerz.</h1>
        <div className="footer-navlinks">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
        <p>©2023 by Tech Unicorn</p>
      </div>
      <div className="footer-icons">
        <IoLogoFacebook />
        <IoLogoTwitter />
        <IoLogoInstagram />
        <IoLogoLinkedin />
      </div>
    </div>
  );
};

export default Footer;
