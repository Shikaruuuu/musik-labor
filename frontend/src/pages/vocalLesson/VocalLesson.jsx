import React, { useEffect, useState } from 'react';
import "./VocalLesson.css";
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Hamburger from '../../components/hamburger/Hamburger';

const VocalLesson = () => {
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
        <div className="music-lesson">

    <h2>声楽教室：講師　横森明美</h2>
    <p>
      小学生からシニアまで『楽しく歌う』をモットーに基本的な発声を学び、イタリア歌曲から日本歌曲、叙情歌や童謡等幅広いジャンルの曲を楽しく歌える様お手伝いさせて頂きます。
      また「カラオケは好きだけど歌曲はちょっと」と言う方にはカラオケにも役に立つ『ヴォイストレーニング』をお勧め致します。
    </p>
    <p>
      レッスンは基本的には月謝制月2回、若しくは生徒さんのご都合に合わせたレッスン毎に次回レッスン日を決める、１レッスン制で行います。
    </p>
    <h3>声楽レッスン料金（税込）</h3>
    <ul>
      <li>月謝制月２回</li>
      <ul>
        <li>初級：30分　2回　 9,000円</li>
        <li>中級：40分　2回　11,000円</li>
        <li>上級：50分　2回　13,000円</li>
      </ul>
      <li>１レッスン制</li>
      <ul>
        <li>初級：30分　1回　 5,000円</li>
        <li>中級：40分　1回　 6,000円</li>
        <li>上級：50分　1回　 7,000円</li>
      </ul>
    </ul>
    <p>
      歌を歌う・声を出す、と言った行動は日頃のストレス発散や健康増進にもとても役に立つと共に、歌う事により『幸せホルモン』が分泌され『幸福感』や『満足感』を感じやすくなると言われております。お気軽にお問い合わせフォームよりお問い合わせ下さい。
    </p>
  </div>
  </>
    )
}

export default VocalLesson;
