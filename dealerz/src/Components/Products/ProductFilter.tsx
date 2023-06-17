import React, { FC, useState, useEffect } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Product } from "./Product";
import "./ProductFilter.css";
import filterIcon from "../../images/icons/Filter.svg";
import rightChevronIcon from "../../images/icons/arrowChevronRight.svg";
interface Props {
  products: Product[];
  onFilter: (filtered: Product[]) => void;
}

const ProductFilter: FC<Props> = ({ products, onFilter }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 1000,
  });

  useEffect(() => {
    let filteredProducts = products;

    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    onFilter(filteredProducts);
  }, [search, category, priceRange, products]);

  const getUniqueCategories = (products: Product[]) => {
    const categories = products.map((product) => product.category);
    return ["All", ...Array.from(new Set(categories))];
  };

  const categories = getUniqueCategories(products);

  return (
    <div className="filter-section">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <hr />
      <div className="filter-header">
        <span>Price</span>
        <span className="filter-icon">
          <img src={filterIcon} alt="Filter" />
        </span>
      </div>

      <InputRange
        minValue={0}
        maxValue={1000}
        value={priceRange}
        onChange={(value) =>
          setPriceRange(value as { min: number; max: number })
        }
      />

      <div className="price-range">
        <span>Range: </span>
        <span>
          ${priceRange.min} - ${priceRange.max}
        </span>
      </div>

      <div className="categories-title">
        <span>Product Categories</span>
      </div>
      <div className="categories-column">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`category-button ${cat === category ? "active" : ""}`}
          >
            <span className="category-name">{cat}</span>
            <img
              className="category-icon"
              src={rightChevronIcon}
              alt="right chevron"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
