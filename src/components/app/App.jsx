import React from "react";
import Navbar from "../navbar/Navbar";
import Home from "../pages/home/Home";
import SideBar from "../sidebar/SideBar";
import "./app.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
};

export default App;
