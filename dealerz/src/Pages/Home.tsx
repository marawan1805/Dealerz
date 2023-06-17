import { FC } from "react";
import Hero from "../Components/Hero/Hero";
import Collection from "../Components/Collection/Collection";
import TopItems from "../Components/TopItems/TopItems";
import Story from "../Components/Story/Story";
import Achievement from "../Components/Achievement/Achievement";
import Testimonials from "../Components/Testimonials/Testimonials";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

const Home: FC = () => {
  return (
    <div>
      <Hero 
  heroTitleLineOne="Your Premium"
  heroTitleLineTwo="Sound, Unplugged!"
  heroParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  buttonText="Find out More"
/>

      <Collection />
      <TopItems />
      <Story />
      <Achievement />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
