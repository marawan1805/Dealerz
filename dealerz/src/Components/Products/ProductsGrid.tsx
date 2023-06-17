import React, { FC, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "./Product";

interface Props {
  products: Product[];
}

const ProductsGrid: FC<Props> = ({ products }) => {
  const [limit, setLimit] = useState(8);

  const handleShowMore = () => {
    setLimit((currentLimit) => currentLimit + 8);
  };

  return (
    <>
      <div className="products-grid">
        {products.slice(0, limit).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="show-more-btn-container">
        {limit < products.length && (
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </>
  );
};

export default ProductsGrid;
