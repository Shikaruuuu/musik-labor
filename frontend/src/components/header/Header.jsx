import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderTitle from "../headerTitle/HeaderTitle";
import HeaderMessage from "../headerMessage/HeaderMessage";

export default function Header() {
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
    <div className="header">
      <HeaderTitle />
      <HeaderMessage />
    </div>
  );
}
