import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../Styles/Products.css";

function ViewProducts({ data }) {
  const [filtered, setFilterd] = useState(data);
  const search = (e) => {
    const currData = data.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilterd(currData);
  };
  return (
    <div className="mainProducts">
      <input
        type="search"
        className="SearchBar"
        placeholder="looking for something?"
        name="gsearch"
        onChange={search}
      ></input>
      <div className="Products">
        {filtered.map((product) => (
          <ProductCard data={product} />
        ))}
      </div>
    </div>
  );
}

export default ViewProducts;