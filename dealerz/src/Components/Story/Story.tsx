import React, { FC } from "react";
import "./Story.css";
import storyImg from "../../images/imagePlaceholder.png";

const imgURL = storyImg;
const title = "Card Title";
const description =
  "Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company";

const Story: FC = () => {
  return (
    <div className="story">
      <img width={500} height={600} src={imgURL} alt="" />

      <div className="story-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a className="readmore-tag" href="#">
          Read full story
        </a>
      </div>
    </div>
  );
};

export default Story;
