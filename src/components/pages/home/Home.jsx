import React from "react";
import NewChart from "../../chart/NewChart";
import Info from "../../Info/Info";
import { userData } from "../../../data";
import "./Home.css";
import SmallWidget from "../../widgets/SmallWidget";
import LargeWidget from "../../widgets/LargeWidget";

const Home = () => {
  return (
    <div className="home">
      <Info />
      <NewChart data ={userData} title = "Sales Volume" grid dataKey ="Active user" />
      <div className="widgets">
        <SmallWidget/>
        <LargeWidget/>
      </div>
    </div>
  );
};

export default Home;
