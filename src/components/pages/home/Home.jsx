import React from "react";
import NewChart from "../../chart/NewChart";
import Info from "../../Info/Info";
import { userData } from "../../../data";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Info />
      <NewChart data ={userData} title = "Sales Volume" grid dataKey ="Active user" />
      <div className="widgets"></div>
    </div>
  );
};

export default Home;
