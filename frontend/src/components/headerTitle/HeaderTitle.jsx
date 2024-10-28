import React from "react";
import "./HeaderTitle.css";
import { Link } from "react-router-dom";

export default function HeaderTitle() {
  return (
    <Link
      to="/"
      className="headerLink"
      style={{
        textDecoration: "none",
        color: "black",
        display: "flex",
        alignItems: "center",
      }}>
      <div className="siteTitleText">ムジーク・らぼあ</div>
    </Link>
  );
}
