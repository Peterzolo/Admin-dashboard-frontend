import React from "react";
import "./SideBar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Assessment,
  Payment,
  People,
  BusinessCenterOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
});

const SideBar = () => {
  const classes = useStyles();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarlistWrapper">
            <Link to="/" className = {classes.link}>
              <li className="sidebarlistitem active">
                <LineStyle className="sidebaricon" />
                Home
              </li>
            </Link>
            <li className="sidebarlistitem">
              <Timeline className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className="sidebaricon" />
              Sales
            </li>
          </ul>
          <ul className="sidebarlistWrapper">
            <Link to="/users" className = {classes.link}>
              <li className="sidebarlistitem active">
                <LineStyle className="sidebaricon" />
                Users
              </li>
            </Link>
            <Link to="/products" className = {classes.link}>
              <li className="sidebarlistitem">
                <Timeline className="sidebaricon" />
                Products
              </li>
            </Link>
            <li className="sidebarlistitem">
              <TrendingUp className="sidebaricon" />
              Transaction
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Production</h3>
          <ul className="sidebarlistWrapper">
            <li className="sidebarlistitem active">
              <People className="sidebaricon" />
              Staff
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebaricon" />
              Product
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className="sidebaricon" />
              Audit
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Internation</h3>
          <ul className="sidebarlistWrapper">
            <li className="sidebarlistitem active">
              <LineStyle className="sidebaricon" />
              Money
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebaricon" />
              Taxes
            </li>
            <li className="sidebarlistitem">
              <Payment className="sidebaricon" />
              Exchange
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Management</h3>
          <ul className="sidebarlistWrapper">
            <li className="sidebarlistitem active">
              <BusinessCenterOutlined className="sidebaricon" />
              Board
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebaricon" />
              services
            </li>
            <li className="sidebarlistitem">
              <Assessment className="sidebaricon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
