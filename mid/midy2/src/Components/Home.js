import React from "react";
import ViewProducts from "./ViewProducts";
import data from "../data.json";
function Home() {
  //   console.log(data);
  return <ViewProducts data={data.data} />;
}

export default Home;