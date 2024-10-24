import React, { useState, useEffect } from "react";
import "./InquiryPage.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";
import InquiryForm from "../../components/inquiryForm/InquiryForm";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";

export default function InquiryPage() {
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
      <InquiryForm />
    </>
  );
}
