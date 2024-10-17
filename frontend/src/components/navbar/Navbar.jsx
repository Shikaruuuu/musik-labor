import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <ul className="navbarList">
          <li className="navbarListItem">
            <Link
              to="/"
              className="navbarLink"
              style={{ textDecoration: "none", color: "black" }}>
              <span className="navbarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="navbarListItem">
            <Link
              to="/musiclesson"
              className="navbarListItemText"
              style={{ textDecoration: "none", color: "black" }}>
              <span className="navbarListItemText">チェロ教室</span>
            </Link>
          </li>
          <li className="navbarListItem">
            <Link
              to="/vocalLesson"
              className="navbarListItemText"
              style={{ textDecoration: "none", color: "black" }}>
              <span className="navbarListItemText">声楽教室</span>
            </Link>
          </li>
          <li className="navbarListItem">
            <Link
              to="/concert"
              className="navbarListItemText"
              style={{ textDecoration: "none", color: "black" }}>
              <span className="navbarListItemText">出張演奏</span>
            </Link>
          </li>
          <li className="navbarListItem">
            <Link
              to="/priceList"
              className="navbarListItemText"
              style={{ textDecoration: "none", color: "black" }}>
              <span className="navbarListItemText">料金表</span>
            </Link>
          </li>
          <li className="navbarListItem">
            <Link
              to="/profile"
              className="navbarListItemText"
              style={{ textDecoration: "none", color: "black" }}>
              <span className="navbarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="navbarListItem">
            <Link
              to="/access"
              className="navbarListItemText"
              style={{ textDecoration: "none", color: "black" }}>
              <span className="navbarListItemText">アクセス</span>
            </Link>
          </li>
          <li className="navbarListItem">
            <Link
              to="/inquiry"
              target="_blank"
              className="navbarListItemText"
              style={{ textDecoration: "none", color: "black" }}>
              <span className="navbarListItemText">お問い合わせ</span>
            </Link>
          </li>
          <li className="navbarListItem">
            <Link
              to="https://musiklabor.hatenablog.com/"
              className="navbarListItemText"
              style={{ textDecoration: "none", color: "black" }}>
              <span className="navbarListItemText">ブログ</span>
              <LaunchIcon />
            </Link>
          </li>
          <li className="navbarListItem">
            <Link
              to="/shop"
              className="navbarListItemText"
              style={{ textDecoration: "none", color: "black" }}>
              <span className="navbarListItemText">提携工房</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
