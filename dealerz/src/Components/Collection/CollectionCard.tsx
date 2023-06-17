import React, { FC } from "react";
import "./Collection.css";
import collectionButton from "../../images/collectionButton.svg";

const CollectionCard: FC = () => {
  return (
    <div className="collection-card">
      <div className="collection-card-img"></div>
      <div className="collection-card-text">
        <p>Card Content</p>
        <h2>Card Title</h2>
      </div>
      <img
        className="collection-btn"
        width={30}
        height={30}
        src={collectionButton}
        alt=""
      />
    </div>
  );
};

export default CollectionCard;
