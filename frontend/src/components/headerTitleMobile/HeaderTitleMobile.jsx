import React from "react";
import "./HeaderTitleMobile.css";
import { Link } from "react-router-dom";

export default function HeaderTitleMobile() {
  return (
    <Link
      to="/"
      className="headerLink"
      style={{
        textDecoration: "none",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "45px",
      }}>
      <div className="mobileTitle">ムジーク</div>
      <div className="mobileTitle">・</div>
      <div className="mobileTitle">らぼあ</div>
    </Link>
  );
}
