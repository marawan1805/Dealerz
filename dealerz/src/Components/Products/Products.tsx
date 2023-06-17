import React, { FC, useState, useEffect } from 'react';
import ProductFilter from './ProductFilter';
import ProductsGrid from './ProductsGrid';
import { Product } from './Product';

const Products: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const handleFilter = (filtered: Product[]) => {
    setFilteredProducts(filtered);
  };

  return (
    <div className="products-page">
      <ProductFilter products={products} onFilter={handleFilter} />
      <div className="products-container">
        {isLoading ? (
          <div className="skeleton-loading">
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
          </div>
        ) : (
          <ProductsGrid products={filteredProducts} />
        )}
      </div>
    </div>
  );
};

export default Products;
