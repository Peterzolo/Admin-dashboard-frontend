import React from "react";
import "./SmallWidget.css";
import { Visibility } from "@material-ui/icons";

const SmallWidget = () => {
  return (
    <div className="smallWidget">
      <span className="widgetSmallTitle">New members</span>
      <ul className="widgetSmalllist">
        <li className="widgetSmallListItem">
          <img
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt=""
            className="widgetSmalImage"
          />
          <div className="widgetSmallUser">
            <span className="userNameSmallWidget">Jame E. Steve</span>
            <span className="smallWidgetWorkTitle">Frontebd Engineer</span>
          </div>
          <button className="smallWidgetBtn">
            <Visibility className="visibilitySmall" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmalllist">
        <li className="widgetSmallListItem">
          <img
            src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
            alt=""
            className="widgetSmalImage"
          />
          <div className="widgetSmallUser">
            <span className="userNameSmallWidget">Jame E. Steve</span>
            <span className="smallWidgetWorkTitle">Frontebd Engineer</span>
          </div>
          <button className="smallWidgetBtn">
            <Visibility className="visibilitySmall" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmalllist">
        <li className="widgetSmallListItem">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="widgetSmalImage"
          />
          <div className="widgetSmallUser">
            <span className="userNameSmallWidget">Jame E. Steve</span>
            <span className="smallWidgetWorkTitle">Frontebd Engineer</span>
          </div>
          <button className="smallWidgetBtn">
            <Visibility className="visibilitySmall" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmalllist">
        <li className="widgetSmallListItem">
          <img
            src="https://source.unsplash.com/user/c_v_r"
            alt=""
            className="widgetSmalImage"
          />
          <div className="widgetSmallUser">
            <span className="userNameSmallWidget">Jame E. Steve</span>
            <span className="smallWidgetWorkTitle">Frontebd Engineer</span>
          </div>
          <button className="smallWidgetBtn">
            <Visibility className="visibilitySmall" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmalllist">
        <li className="widgetSmallListItem">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="widgetSmalImage"
          />
          <div className="widgetSmallUser">
            <span className="userNameSmallWidget">Jame E. Steve</span>
            <span className="smallWidgetWorkTitle">Frontebd Engineer</span>
          </div>
          <button className="smallWidgetBtn">
            <Visibility className="visibilitySmall" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SmallWidget;
