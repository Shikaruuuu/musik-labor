import React, { useState, useEffect } from 'react';
import "./Home.css"
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Hamburger from '../../components/hamburger/Hamburger';

export default function Home(){
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

    return(
      <>
        <Header />
        {/* 768px未満のときのみNavbar（ハンバーガーメニュー）を表示 */}
        {windowWidth > 768 ? <Navbar /> : <Hamburger />}
        <div className="message">
            <h1>
              音楽を愛するすべての人々へ
              <br />
              音楽の楽しさ、美しさ、可能性
              <br />
              その全てを届けたい
            </h1>
        </div>
        <div className="subMessage">
            <h2>
              『ムジーク・らぼあ』では子供から大人、シニアまで全ての方に音楽の楽しさ、素晴らしさを感じて頂ける様、
              <br />
              元神奈川フィルハーモニー管弦楽団チェリストと二期会オペラ歌手が音楽レッスンから
              <br />
              高齢者施設や各種会場への出張演奏、トレーナー、楽器購入のお手伝いまで幅広くご提案させて頂いております。
            </h2>
        </div>
      </>
    )
}
