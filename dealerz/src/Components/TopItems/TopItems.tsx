import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import CarouselItem from "./CarouselItem";
import "react-multi-carousel/lib/styles.css";
import "./TopItems.css";

type Item = {
  id: number;
  title: string;
  imgURL: string;
  description: string;
  priceOrange: number;
  priceGray: number;
};

const items: Item[] = [
  {
    id: 1,
    title: "Item 1",
    description: "lorem ipsum",
    priceGray: 203,
    priceOrange: 103,
    imgURL: "path_to_image1",
  },
  {
    id: 2,
    title: "Item 2",
    description: "lorem ipsum",
    priceGray: 203,
    priceOrange: 103,
    imgURL: "path_to_image2",
  },
  {
    id: 3,
    title: "Item 3",
    description: "lorem ipsum",
    priceGray: 203,
    priceOrange: 103,
    imgURL: "path_to_image3",
  },
  {
    id: 4,
    title: "Item 4",
    description: "lorem ipsum",
    priceGray: 203,
    priceOrange: 103,
    imgURL: "path_to_image1",
  },
  {
    id: 5,
    title: "Item 5",
    description: "lorem ipsum",
    priceGray: 203,
    priceOrange: 103,
    imgURL: "path_to_image2",
  },
  {
    id: 6,
    title: "Item 6",
    description: "lorem ipsum",
    priceGray: 203,
    priceOrange: 103,
    imgURL: "path_to_image3",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const TopItems: FC = () => {
  return (
    <div className="carousel-container-main">
      <div className="carousel-text">
        <h1 className="carousel-title">Top Items</h1>
        <p className="carousel-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Labore et
          dolore magna aliqua.
        </p>
      </div>
      <div className="top-items">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          partialVisible
          className="carousel"
        >
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              title={item.title}
              imgURL={item.imgURL}
              description={item.description}
              priceOrange={item.priceOrange}
              priceGray={item.priceGray}

            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopItems;
