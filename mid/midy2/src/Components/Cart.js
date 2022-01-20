import React from "react";
import ViewProducts from "./ViewProducts";
import data from "../data.json";
function Cart() {
  let saved = JSON.parse(localStorage.getItem("saved"));
  let isSaved = {};
  saved.map((e) => {
    isSaved[parseInt(e)] = 1;
  });
  let savedData = [];
  data.data.map((item) => {
    if (isSaved[item.id] == 1) {
      savedData.push(item);
    }
  });
  return <ViewProducts data={savedData} />;
}

export default Cart;