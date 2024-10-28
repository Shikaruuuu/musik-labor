import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <ul className="navbarList">
          <Link
            to="/"
            className="navbarLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="navbarListItem">
              <span className="navbarListItemText">ホーム</span>
            </li>
          </Link>
          <Link
            to="/musiclesson"
            className="navbarLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="navbarListItem">
              <span className="navbarListItemText">チェロ教室</span>
            </li>
          </Link>
          <Link
            to="/vocalLesson"
            className="navbarLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="navbarListItem">
              <span className="navbarListItemText">声楽教室</span>
            </li>
          </Link>
          <Link
            to="/concert"
            className="navbarLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="navbarListItem">
              <span className="navbarListItemText">出張演奏</span>
            </li>
          </Link>
          <Link
            to="/priceList"
            className="navbarLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="navbarListItem">
              <span className="navbarListItemText">料金表</span>
            </li>
          </Link>
          <Link
            to="/profile"
            className="navbarLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="navbarListItem">
              <span className="navbarListItemText">プロフィール</span>
            </li>
          </Link>
          <Link
            to="/access"
            className="navbarLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="navbarListItem">
              <span className="navbarListItemText">アクセス</span>
            </li>
          </Link>
          <Link
            to="/inquiry"
            className="navbarLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="navbarListItem">
              <span className="navbarListItemText">お問い合わせ</span>
            </li>
          </Link>
          <Link
            to="https://musiklabor.hatenablog.com/"
            target="_blank"
            className="navbarLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="navbarListItem">
              <span className="navbarListItemText">ブログ</span>
              <LaunchIcon />
            </li>
          </Link>
          <Link
            to="/shop"
            className="navbarLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="navbarListItem">
              <span className="navbarListItemText">提携工房</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
