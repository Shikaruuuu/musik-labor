import React, { useState, useEffect } from "react";
import "./Access.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";
import AccessContent from "../../components/access/AccessContent";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";
import { Box } from "@mui/material";

export default function Access() {
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
            <AccessContent />
          </Box>
        </div>
      ) : (
        <div className="celloLessonWrapperMobile">
          <AccessContent />
        </div>
      )}
    </>
  );
}
