import React, { FC, useState } from 'react';
import './Collection.css';
import CollectionCard from './CollectionCard';

type Category = {
  id: number;
  name: string;
};

const categories: Category[] = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
];

const Collection: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="collection-content">
      <h1 className='collection-title'>Our Premium Collection</h1>
      <div className="categories">
        {categories.map((category) => (
          <h1
            key={category.id}
            className={`category-btn ${selectedCategory === category ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </h1>
        ))}
      </div>
      {selectedCategory && (
        <div className="collection-cards">
          {[...Array(6)].map((_, index) => (
            <CollectionCard key={index} />
          ))}
        </div>
      )}
      {selectedCategory && <button className="more-btn">Find Out More</button>}
    </div>
  );
};

export default Collection;
