import React, { useEffect, useState } from "react";
import "./MusicLesson.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";
import CelloLesson from "../../components/celloLesson/CelloLesson";

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
      <Header />
      {/* 1036px未満のときのみNavbar（ハンバーガーメニュー）を表示 */}
      {windowWidth >= 1036 ? <Navbar /> : <Hamburger />}
      <CelloLesson />
    </>
  );
};

export default MusicLesson;
