import { FC } from "react";
import Hero from "../Components/Hero/Hero";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import Products from "../Components/Products/Products";

const Home: FC = () => {
  return (
    <div>
      <Hero
        heroTitleLineOne="Home Shopping,"
        heroTitleLineTwo="Your Choice!"
        heroParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
