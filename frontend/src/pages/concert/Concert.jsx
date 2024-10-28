import React, { useEffect, useState } from "react";
import "./Concert.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";
import ConcertContents from "../../components/concertContents/ConcertContents";
import { Box } from "@mui/material";

const Concert = () => {
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
      {/* 1036px未満のときのみ茶色のBoxを表示 */}
      {windowWidth >= 1036 ? (
        <div className="celloLessonWrapper">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderColor: "black",
              backgroundColor: "#e4d6ce",
              width: "70%",
            }}>
            <ConcertContents />
          </Box>
        </div>
      ) : (
        <div className="celloLessonWrapperMobile">
          <ConcertContents />
        </div>
      )}
    </>
  );
};

export default Concert;
