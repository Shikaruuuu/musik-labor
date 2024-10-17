import React, { useState, useEffect } from "react";
import "./Shop.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";

export default function Shop() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // ウィンドウサイズが変更された時にサイズを更新する
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // コンポーネントがアンマウントされた際にイベントリスナーを削除
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      {/* 1036px未満のときのみNavbar（ハンバーガーメニュー）を表示 */}
      {windowWidth >= 1036 ? <Navbar /> : <Hamburger />}
      <div className="inPreparing">工事中</div>
    </>
  );
}
