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

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarmenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarlistWrapper">
            <li className="sidebarlistitem active">
              <LineStyle className="sidebaricon" />
              Home
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <TrendingUp className="sidebaricon" />
              Sales
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
