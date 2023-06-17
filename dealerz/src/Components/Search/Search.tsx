import react, { FC } from "react";
import "./Search.css";

const Search: FC = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search what you need" />
    </div>
  );
};

export default Search;
