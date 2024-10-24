import React, { useEffect, useState } from "react";
import "./MusicLesson.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";
import CelloLesson from "../../components/celloLesson/CelloLesson";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";
import { Box } from "@mui/material";

const MusicLesson = () => {
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
      <div className="musicLesson">
        <div className="headerItems">
          {/* 1036px未満かどうかでヘッダーを切り替える */}
          {windowWidth >= 1036 ? <Header /> : <HeaderMobile />}
          {/* 1036px未満のときのみNavbar（ハンバーガーメニュー）を表示 */}
          {windowWidth >= 1036 ? <Navbar /> : <Hamburger />}
        </div>
        {/* 1036px未満のときのみNavbar（ハンバーガーメニュー）を表示 */}
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
              <CelloLesson />
            </Box>
          </div>
        ) : (
          <div className="celloLessonWrapperMobile">
            <CelloLesson />
          </div>
        )}
      </div>
    </>
  );
};

export default MusicLesson;
