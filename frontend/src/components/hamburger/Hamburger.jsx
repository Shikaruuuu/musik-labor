import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import LaunchIcon from "@mui/icons-material/Launch";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <div className="menu-text">メニュー</div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <ul className="hamburger-items">
          <Link
            to="/"
            className="humbergerLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="humbergerListItem">
              <span className="humbergerListItemText">ホーム</span>
            </li>
          </Link>
          <Link
            to="/musiclesson"
            className="humbergerLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="humbergerListItem">
              <span className="humbergerListItemText">チェロ教室</span>
            </li>
          </Link>
          <Link
            to="/vocalLesson"
            className="humbergerLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="humbergerListItem">
              <span className="humbergerListItemText">声楽教室</span>
            </li>
          </Link>
          <Link
            to="/concert"
            className="humbergerLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="humbergerListItem">
              <span className="humbergerListItemText">出張演奏</span>
            </li>
          </Link>
          <Link
            to="/priceList"
            className="humbergerLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="humbergerListItem">
              <span className="humbergerListItemText">料金表</span>
            </li>
          </Link>
          <Link
            to="/profile"
            className="humbergerLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="humbergerListItem">
              <span className="humbergerListItemText">プロフィール</span>
            </li>
          </Link>
          <Link
            to="/access"
            className="humbergerLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="humbergerListItem">
              <span className="humbergerListItemText">アクセス</span>
            </li>
          </Link>
          <Link
            to="/inquiry"
            className="humbergerLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="humbergerListItem">
              <span className="humbergerListItemText">お問い合わせ</span>
            </li>
          </Link>
          <Link
            to="https://musiklabor.hatenablog.com/"
            target="_blank"
            className="humbergerLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="humbergerListItem">
              <span className="humbergerListItemText">ブログ</span>
              <LaunchIcon />
            </li>
          </Link>
          <Link
            to="/shop"
            className="humbergerLink"
            style={{ textDecoration: "none", color: "black" }}>
            <li className="humbergerListItem">
              <span className="humbergerListItemText">提携工房</span>
            </li>
          </Link>
          <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
            <DisabledByDefaultIcon
              sx={{
                alignContent: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}>
              <li className="humbergerListItem"></li>
            </DisabledByDefaultIcon>
          </div>
        </ul>
      )}
    </div>
  );
}
