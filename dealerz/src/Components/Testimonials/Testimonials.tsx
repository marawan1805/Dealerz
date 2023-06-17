import React, { FC, useState } from "react";
import "./Testimonials.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import placeHolderImg from "../../images/imagePlaceholder.png";

interface Testimonial {
  imgURL: string;
  title: string;
  subtext: string;
  name: string;
  job: string;
}

const testimonials: Testimonial[] = [
  { imgURL: placeHolderImg, title: "Good Seller", subtext: "I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better", name: "Anna Saraspova", job: "Your Beloved Buyer" },
  { imgURL: placeHolderImg, title: "Amazing Vendor", subtext: "I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better", name: "Anna Saraspova", job: "Your Beloved Buyer" },
  { imgURL: placeHolderImg, title: "Trusted Store", subtext: "I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better", name: "Anna Saraspova", job: "Your Beloved Buyer" },
];

const Testimonials: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="testimonials">
      <div className="icon-button-left">
      <IoIosArrowBack onClick={handlePrev} />
      </div>
      <div className="testimonial">
        <img src={testimonial.imgURL} alt={testimonial.title} />
        <div className="testimonial-info">
          <h2>{testimonial.title}</h2>
          <p>{testimonial.subtext}</p>
          <p className="name">{testimonial.name}</p>
          <p className="job">{testimonial.job}</p>
        </div>
      </div>
      <div className="icon-button-right">
      <IoIosArrowForward onClick={handleNext} />
      </div>
    </div>
  );
};

export default Testimonials;
