import React from "react";
import "./Navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
          <Link to="/" className={classes.link}>
            <span className="logo">Boostar101</span>
          </Link>
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
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="topRightAvatar"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
