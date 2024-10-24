import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";
import HomeDesCription from "../../components/homeDescription/HomeDescription";
import HomeMenu from "../../components/homeMenu/HomeMenu";
import Announcement from "../../components/announcement/Announcement";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";

export default function Home() {
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
      {/* 1036px未満かどうかでヘッダーを切り替える */}
      {windowWidth >= 1036 ? <Header /> : <HeaderMobile />}
      {/* 1036px未満のときのみNavbar（ハンバーガーメニュー）を表示 */}
      {windowWidth >= 1036 ? <Navbar /> : <Hamburger />}
      <HomeDesCription />
      <Announcement />
      <HomeMenu />
    </>
  );
}
