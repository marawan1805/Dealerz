import { FC } from "react";
import Hero from "../Components/Hero/Hero";
import TopItems from "../Components/TopItems/TopItems";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import Cart from "../Components/Cart/Cart";

const MyCart: FC = () => {
  return (
    <div>
      <Hero
        heroTitleLineOne="Our Gallery,"
        heroTitleLineTwo="Your Dreams!"
        heroParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <Cart />
      <TopItems />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default MyCart;
