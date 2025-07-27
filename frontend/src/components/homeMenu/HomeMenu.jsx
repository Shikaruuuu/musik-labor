import React from "react";
import "./HomeMenu.css";
import { Link } from "react-router-dom";

export default function HomeMenu() {
  return (
    <div
      className="homeMenu"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <img src="/rena_piano.jpg" alt="rena piano" className="circleImage" />
      <div className="homeMenuWrapper">
        <ul className="homeMenuList">
          <Link
            to="/musiclesson"
            className="homeMenuListItem cello"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              flexDirection: "column",
            }}>
            <li className="homeMenuListLi">
              <span className="homeMenuListItemText">
                チェロ教室＆出張レッスン
              </span>
            </li>
          </Link>
          <Link
            to="/vocalLesson"
            className="homeMenuListItem vocal"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              flexDirection: "column",
            }}>
            <li className="homeMenuListLi">
              <span className="homeMenuListItemText">声楽教室</span>
            </li>
          </Link>
          <Link
            to="/concert"
            className="homeMenuListItem concert"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              flexDirection: "column",
            }}>
            <li className="homeMenuListLi">
              <span className="homeMenuListItemText">出張演奏</span>
            </li>
          </Link>
          <Link
            to="/priceList"
            className="homeMenuListItem priceLists"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              flexDirection: "column",
            }}>
            <li className="homeMenuListLi">
              <span className="homeMenuListItemText">料金表</span>
            </li>
          </Link>
        </ul>
      </div>
      <img src="/rena_sing.jpg" alt="rena sing" className="circleImage" />
    </div>
  );
}
