import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";
import HomeDesCription from "../../components/homeDescription/HomeDescription";
import HomeMenu from "../../components/homeMenu/HomeMenu";
import Announcement from "../../components/announcement/Announcement";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";
import { Box } from "@mui/material";
import HomeDescriptionMobile from "../../components/homeDescriptionMobile/HomeDescriptionMobile";

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
      <div className="home">
        <div className="headerItems">
          {/* 1036px未満かどうかでヘッダーを切り替える */}
          {windowWidth >= 1036 ? <Header /> : <HeaderMobile />}
          {/* 1036px未満のときのみNavbar（ハンバーガーメニュー）を表示 */}
          {windowWidth >= 1036 ? <Navbar /> : <Hamburger />}
        </div>
        <div className="homeContents">
          {windowWidth >= 1036 ? (
            <div className="homeDecCriptionContents">
              <HomeDesCription />
            </div>
          ) : (
            <div className="homeDecCriptionContentsMobile">
              <HomeDescriptionMobile />
            </div>
          )}
          <Announcement />
          <HomeMenu />
        </div>
      </div>
    </>
  );
}
