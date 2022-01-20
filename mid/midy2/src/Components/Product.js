import React, { useState } from "react";
import "../Styles/Product.css";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

function Product() {
  let { id } = useParams();
  let details = {};
  data.data.map((item) => {
    if (item.id == id) {
      details = item;
    }
  });

  const navigate = useNavigate();

  const save = () => {
    if (localStorage.getItem("saved") === null) {
      let saved = [id];
      localStorage.setItem("saved", JSON.stringify(saved));
    } else {
      let saved = JSON.parse(localStorage.getItem("saved"));
      let wasSaved = false;
      saved.map((e) => {
        if (e == id) {
          wasSaved = true;
        }
      });
      if (!wasSaved) {
        saved.push(id);
        localStorage.setItem("saved", JSON.stringify(saved));
      }
    }
  };

  const unsave = () => {
    if (localStorage.getItem("saved") != null) {
      let saved = JSON.parse(localStorage.getItem("saved"));
      let wasSaved = false;
      let i = 0;
      saved.map((e) => {
        if (e == id) {
          wasSaved = true;
          saved.splice(i, 1);
        }
        i++;
      });
      if (wasSaved) {
        localStorage.setItem("saved", JSON.stringify(saved));
      }
    }
    navigate(-1);
  };

  const back = () => {
    navigate(-1);
  };
  return (
    <div className="Product">
      <div className="ProductImgContainer">
        <img className="ProductImg" src={details.image} />
      </div>
      <div className="ProductDetails">
        <p className="ProductTitle">{details.title}</p>
        <p className="ProductDescription">&emsp;{details.description}</p>
        <p className="ProductPrice">Price: {details.price}$</p>
        <p className="ProductRate">Rate: {details.rating.rate}★</p>
        <p className="ProductCount">Left: {details.rating.count}</p>

        <button onClick={save} className="Btn">
          Save
        </button>
        <button onClick={unsave} className="Btn">
          Unsave
        </button>
        <button onClick={back} className="Btn">
          Back
        </button>
      </div>
    </div>
  );
}

export default Product;