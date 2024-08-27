import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Hamburger.css";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <ul className="hamburger-items">
          <li className="hamburger-item">
            <Link to="/" onClick={() => setIsOpen(false)}>ホーム</Link>
          </li>
          <li className="hamburger-item">
            <Link to="/profile" onClick={() => setIsOpen(false)}>プロフィール</Link>
          </li>
          <li className="hamburger-item">
            <Link to="/musiclesson" onClick={() => setIsOpen(false)}>音楽教室</Link>
          </li>
          <li className="hamburger-item">
            <Link to="/homelesson" onClick={() => setIsOpen(false)}>チェロ出張レッスン</Link>
          </li>
          <li className="hamburger-item">
            <Link to="/concert" onClick={() => setIsOpen(false)}>出張演奏</Link>
          </li>
          <li className="hamburger-item">
            <Link to="/faq" onClick={() => setIsOpen(false)}>お問い合わせ</Link>
          </li>
          <li className="hamburger-item">
            <Link to="/access" onClick={() => setIsOpen(false)}>アクセス</Link>
          </li>
          <li className="hamburger-item">
            <Link to="/shop" onClick={() => setIsOpen(false)}>提携工房</Link>
          </li>
          <li className="hamburger-item">
            <Link to="/blog" onClick={() => setIsOpen(false)}>ブログ</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
