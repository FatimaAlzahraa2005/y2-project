import React, { useState } from "react";
import "../Styles/ProductCard.css";
import { Link } from "react-router-dom";
function ProductCard({ data }) {
  return (
    <Link className="ProductCard" to={`/product/${data.id}`}>
      <div className="ProductCardImgContainer">
        <img className="ProductCardImg" src={data.image} />
      </div>
      <p className="ProductCardTitle">{data.title}</p>
    </Link>
  );
}

export default ProductCard;