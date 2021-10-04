import React from "react";
import "./Navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
//import boostarImage from '../../images/boostar-logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
          <span className="logo">Boostar101</span>
        </div>
        <div className="topRight">
          <div className="topBarRighticonCon">
            <NotificationsNone />
            <span className="rightIconBadge">2</span>
          </div>
          <div className="topBarRighticonCon">
            <Language />
            <span className="rightIconBadge">3</span>
          </div>
          <div className="topBarRighticonCon">
            <Settings />
          </div>
          <img src="https://source.unsplash.com/random" alt="" className ="topRightAvatar" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
