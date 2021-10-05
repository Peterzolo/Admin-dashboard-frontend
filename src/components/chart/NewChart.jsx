import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./NewChart.css";

const NewChart = ({title, data, dataKey, grid}) => {
 
  return (
    <div className="chart">
      {/*<h3 className="chartTitle">Sales Volume</h3>*/}
      <div className="chartTitle">
        <span className="subheading">
          <h3>{title}</h3>
        </span>
        <span className="subheading">
          <h6>For the year :2021</h6>
        </span>
      </div>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#002766" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
          { grid && <CartesianGrid stroke="#e6f7ff" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewChart;
