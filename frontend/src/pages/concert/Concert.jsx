import React, { useEffect, useState } from "react";
import "./Concert.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";

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
      <Header />
      {/* 1036px未満のときのみNavbar（ハンバーガーメニュー）を表示 */}
      {windowWidth >= 1036 ? <Navbar /> : <Hamburger />}
      <div className="consertGuide">
        <div className="consertGuideTitle">出張演奏のご案内</div>
        <div className="consertGuideDescription">
          <span className="consertGuideDescriptionText">
            チェロの横森徹が神奈川フィルハーモニー管弦楽団在籍中に担当した、延べ数百公演に及ぶ高齢者施設や児童支援学校、各種パーティー等での演奏経験を活かし、普段なかなか演奏会場に足を運ぶ機会の少ない方々にも生のプロの演奏を十分に堪能して頂ける様、高齢者施設等の皆様の普段生活している場所への出張演奏（出張コンサート）を行っております。
            また結婚披露宴や各種パーティー等への出張演奏も行います。
          </span>
          <span className="consertGuideDescriptionText">
            また結婚披露宴や各種パーティー等への出張演奏も行います。
          </span>
        </div>
      </div>
      <div className="consertContent">
        <div className="consertContentDescription">
          <span className="consertContentDescriptionText">
            高齢者施設等での演奏ではソプラノの歌声とチェロの豊かな響きにピアノの伴奏で、ジャンルを問わずオペラアリアから日本歌曲、童謡、昭和歌謡曲、チェロの名曲等々、様々な耳なじみのある曲を取り上げお楽しみ頂きたいと思います。
          </span>
          <span className="consertContentDescriptionText">
            またお客様にも声で参加して頂く「一緒に歌う」コーナーや、一曲毎にその作品にまつわるお話や楽器の説明等を交えながら、開演から終演までを約４０分～６０分程度にまとめる事によって、長時間座っている事が困難な方々にも無理なく鑑賞して頂ける内容になっております。結婚披露宴や各種パーティー等では、その時節やその時々に相応しい曲やご依頼者様のご要望にお応え出来る様に選曲させて頂きます。
          </span>
          <span className="consertContentDescriptionText">
            また結婚披露宴や各種パーティー等への出張演奏も行います。
          </span>
        </div>
      </div>
      <div className="consertProgram">
        <div className="consertProgramTitle">プログラム</div>
        <div className="consertProgramDescription">
          <span className="consertProgramDescriptionText">
            過去に行ってきた公演の一例 開演
          </span>
          <span className="consertProgramDescriptionText">チェロ</span>
          <ul>
            <ul>
              <li className="priceList">
                サンサーンス：動物の謝肉祭より「白鳥」
              </li>
              <li className="priceList">
                エルガー：愛の挨拶 團伊玖磨：
                <br />
                花の街
              </li>
            </ul>
          </ul>
          <span className="consertProgramDescriptionText">
            ソプラノ＆チェロ
          </span>
          <ul>
            <ul>
              <li className="priceList">カッチーニ：アヴェマリア ソプラノ</li>
              <li className="priceList">昭和歌謡曲：見上げてごらん夜の星を</li>
              <li className="priceList">
                昭和歌謡曲：森のくまさん（一緒に歌いましょうコーナー）
              </li>
            </ul>
          </ul>
          <span className="consertProgramDescriptionText">ソプラノ</span>
          <ul>
            <ul>
              <li className="priceList">昭和歌謡曲：バラが咲いた</li>
              <li className="priceList">
                ミュージカル：サウンドオブミュージックより「エーデルワイス」
              </li>
              <li className="priceList">
                ミュージカル：マイフェアレディより「踊り明かそう」
              </li>
            </ul>
          </ul>
          <span className="consertProgramDescriptionText">アンコール</span>
          <ul>
            <ul>
              <li className="priceList">
                美空ひばり：川の流れのように 日本の名曲：ふるさと 終演
              </li>
            </ul>
          </ul>
          <span className="consertProgramDescriptionText">
            上記のプログラムで約５０分程になります。
          </span>
          <span className="consertProgramDescriptionText">
            プログラムで取り上げる曲は公演の行われる季節によって季節感のある曲を選び、お客様に四季折々の名曲を楽しんで頂いたり、また事前にお知らせ頂ければ可能な範囲でのリクエストも受け付けております。
          </span>
          <span className="consertProgramDescriptionText">
            上記の参考プログラムは春から初夏にかけて選曲したものです。
          </span>
          <span className="consertProgramDescriptionText">その他一例：</span>
          <ul>
            <ul>
              <li className="priceList">アルプス一万尺</li>
              <li className="priceList">小さい秋見つけた</li>
              <li className="priceList">リンゴの唄</li>
              <li className="priceList">われは海の子学生時代</li>
              <li className="priceList">夏の思い出</li>
              <li className="priceList">少年時代</li>
              <li className="priceList">瀬戸の花嫁</li>
              <li className="priceList">赤とんぼ</li>
              <li className="priceList">千の風になって</li>
              <li className="priceList">知床旅情</li>
              <li className="priceList">浜辺の歌</li>
              <li className="priceList">富士の山</li>
              <li className="priceList">夕焼け小焼け</li>
              <li className="priceList">旅愁</li>
            </ul>
          </ul>
          <span className="consertProgramDescriptionText">
            他多数クラシック・オペラ・チェロ名曲など上記以外の曲も多数ご用意しております。
            お気に入りの曲がございましたらリクエスト下さい。（上記はほんの一例です）
          </span>
          <span className="consertProgramDescriptionText">
            なおこれらの曲の編曲は、『ムジーク・らぼあ』で依頼致しました、東京音楽大学出身の新進気鋭の若手作曲家北島幸作氏によるオリジナルアレンジでお楽しみ頂けます。
          </span>
        </div>
        <div className="consertPrice">
          <div className="consertPriceTitle">料金（出演料）</div>
          <div className="consertPriceDescription">
            <span className="consertPriceDescriptionText">神奈川県内</span>
            <ul>
              <ul>
                <li className="priceList">
                  基本：５０，０００円（税込 55,000 円）～
                </li>
              </ul>
            </ul>
            <span className="consertPriceDescriptionText">神奈川県外</span>
            <ul>
              <ul>
                <li className="priceList">
                  基本：５０，０００円（税込 55,000
                  円）～＋機材運搬費＋交通費（宿泊を伴う場合別途ご相談）
                </li>
              </ul>
            </ul>

            <span className="consertPriceDescriptionText">
              基本的にはソプラノ・チェロ・ピアノの３名でお伺い致しますが、スケジュールの都合で２名でお伺いする場合もございます。
            </span>
            <span className="consertPriceDescriptionText">
              その場合は上記基本料金より１０，０００円引きの４０，０００円（税込44,000
              円）で賜りますのでご了承下さい。
            </span>
            <span className="consertPriceDescriptionText">
              ご依頼者様のご要望がございましたら弦楽四重奏等の演奏も行いますので、ご希望の編成等ございましたらお気軽にお問い合わせ下さい。
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concert;
