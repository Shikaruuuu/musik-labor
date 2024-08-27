import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderTitle from "../headerTitle/HeaderTitle";
import HeaderTitleMobile from "../headerTitleMobile/HeaderTitleMobile";
import HeaderMessage from "../headerMessage/HeaderMessage";

export default function Header(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // ウィンドウサイズが変更された時にサイズを更新する
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // コンポーネントがアンマウントされた際にイベントリスナーを削除
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="header">
            {/* 1036px未満かどうかでタイトルのスタイルを切り替える */}
            {windowWidth >= 1036 ? <HeaderTitle /> : <HeaderTitleMobile />}
            {/* 1036px以上のときのみヘッダーメッセージを表示 */}
            {windowWidth >= 1036 && <HeaderMessage />}
        </div>
        )
}