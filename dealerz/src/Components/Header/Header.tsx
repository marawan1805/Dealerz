import React, { FC } from "react";
import "./Header.css";
import phoneIcon from "../../images/icons/phoneIcon.svg";
import truckIcon from "../../images/icons/truckIcon.svg";
import favoriteIcon from "../../images/icons/favoriteIcon.svg";
import cartIcon from "../../images/icons/cartIcon.svg";
import accountIcon from "../../images/icons/accountIcon.svg";
import bellIcon from "../../images/icons/bellIcon.svg";
import Search from "../Search/Search";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type NavLink = {
  id: number;
  text: string;
  url: string;
  logo?: string;
};

const leftNavLinks: NavLink[] = [
  { id: 1, text: "Shop", url: "/shop" },
  { id: 2, text: "Promo", url: "/promo" },
  { id: 3, text: "About", url: "/about" },
  { id: 4, text: "Blog", url: "/blog" },
];

const rightNavLinks: NavLink[] = [
  { id: 1, text: "Favorites", url: "/favorites", logo: favoriteIcon },
  { id: 2, text: "Cart", url: "/cart", logo: cartIcon },
  { id: 3, text: "Account", url: "/account", logo: accountIcon },
  { id: 4, text: "Notifications", url: "/notifications", logo: bellIcon },
];

const appbarLinks: NavLink[] = [
  { id: 1, text: "Call Center", url: "/callcenter", logo: phoneIcon },
  { id: 2, text: "Shipping & Returns", url: "/shipping", logo: truckIcon },
];

const Header: FC = () => {
  const { state } = useContext(CartContext);
  const navigate = useNavigate();
  
  const cartItemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header>
      <div className="header">
        <div className="appbar">
          <div className="logo" onClick={()=>{navigate("/")}}>Dealerz.</div>
          <div className="menu-links">
            {appbarLinks.map((link) => (
              <div className="menu">
                <img src={link.logo} alt={link.text} />
                <h3>{link.text}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="navbar">
          <div className="left-navlinks">
            <nav>
              <ul>
                {leftNavLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Search />
          </div>
          <div className="right-navlinks">
            <nav>
              <ul>
                <div className="icons">
                  {rightNavLinks.map((link) => (
                    <Link to={link.url}>
                      <img src={link.logo} alt={link.text} />
                      {link.text === "Cart" && (
                        <span className="cart-item-count">{cartItemCount}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
