import React, { FC } from "react";
import "./Hero.css";
import heroBackground from "../../images/heroBackround.svg";

export interface HeroProps {
  heroTitleLineOne: string;
  heroTitleLineTwo: string;
  heroParagraph: string;
  buttonText?: string;
}

const Hero: FC<HeroProps> = ({
  heroTitleLineOne,
  heroTitleLineTwo,
  heroParagraph,
  buttonText,
}) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero-content">
        <h1>{heroTitleLineOne}</h1>
        <h1>{heroTitleLineTwo}</h1>
        <p>{heroParagraph}</p>
        {buttonText && <button className="hero-btn">{buttonText}</button>}
      </div>
    </div>
  );
};

export default Hero;
