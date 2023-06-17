import { FC } from "react";
import Footer from "../Components/Footer/Footer";
import MainProductDetail from "../Components/ProductDetail/MainProductDetail";
import { useLocation } from "react-router-dom";
import ProductDetailDescription from "../Components/ProductDetail/ProductDetailDescription";
import TopItems from "../Components/TopItems/TopItems";

const Home: FC = () => {
  let location = useLocation();
  let product = location.state;
  return (
    <div>
      <div className="product-detail-container">
        <MainProductDetail product={product} />
      </div>
      <ProductDetailDescription product={product} />
      <TopItems />
      <Footer />
    </div>
  );
};

export default Home;
