import React from "react";
import "./HomeMenu.css";
import { Link } from "react-router-dom";

export default function HomeMenu() {
  return (
    <div className="homeMenu">
      <div className="homeMenuWrapper">
        <ul className="homeMenuList">
          <Link
            to="/musiclesson"
            className="homeMenuListItem cello"
            style={{ textDecoration: "none", color: "black" }}>
            <li>
              <span className="homeMenuListItemText">チェロ教室</span>
            </li>
          </Link>
          <Link
            to="/vocalLesson"
            className="homeMenuListItem vocal"
            style={{ textDecoration: "none", color: "black" }}>
            <li>
              <span className="homeMenuListItemText">声楽教室</span>
            </li>
          </Link>
          <Link
            to="/concert"
            className="homeMenuListItem concert"
            style={{ textDecoration: "none", color: "black" }}>
            <li>
              <span className="homeMenuListItemText">出張演奏</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
