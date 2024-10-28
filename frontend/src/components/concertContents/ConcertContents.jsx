import { useEffect, useState } from "react";
import "./ConcertContents.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function ConcertContents() {
  function formatService(service) {
    const parts = service.split("（");
    if (parts.length > 1) {
      // 「（」を前のテキストに含めて改行します。
      return (
        <>
          {parts[0]}
          <br />（{parts[1]}
        </>
      );
    }
    return service;
  }
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

  const pricingData4 = {
    concerts: [
      { service: "出張演奏（神奈川県内）", duration: "-", price: "¥50,000～" },
      {
        service: "出張演奏（神奈川県外）",
        duration: "-",
        price: "¥50,000～＋交通費等",
      },
    ],
  };

  return (
    <>
      <div className="consertGuide">
        <div className="consertGuideTitle">出張演奏のご案内</div>
        <div className="consertGuideDescription">
          <span className="consertGuideDescriptionText">
            高齢者施設や児童支援学校等、普段なかなか演奏会場に足を運ぶ機会の少ない方々にも生のプロの演奏を十分に堪能して頂ける様、皆様の普段生活している場所への出張演奏（出張コンサート）を行っております。
          </span>
          <span className="consertGuideDescriptionText">
            また結婚披露宴や各種パーティー等への出張演奏も行います。
          </span>
        </div>
      </div>
      <div className="consertContent">
        <div className="consertContentTitle">演奏内容</div>
        <div className="consertContentDescription">
          <span className="consertContentDescriptionText">
            ソプラノの歌声とチェロの豊かな響きにピアノの伴奏で、ジャンルを問わずオペラアリアから日本歌曲、童謡、昭和歌謡曲、チェロの名曲等々、様々な耳なじみのある曲を取り上げお楽しみ頂きたいと思います。
          </span>
          <span className="consertContentDescriptionText">
            またお客様にも声で参加して頂く「一緒に歌う」コーナーや、一曲毎にその作品にまつわるお話や楽器の説明等を交えながら、開演から終演までを約４０分～６０分程度にまとめる事によって、長時間座っている事が困難な方々にも無理なく鑑賞して頂ける内容になっております。
          </span>
          <span className="consertContentDescriptionText">
            結婚披露宴や各種パーティー等では、その時節やその時々に相応しい曲やご依頼者様のご要望にお応え出来る様に選曲させて頂きます。
          </span>
        </div>
        {/* 1036px未満かどうかで写真の大きさを切り替える */}
        {windowWidth >= 1036 ? (
          <img src="./visitConcert.jpg" className="concertImgPC"></img>
        ) : (
          <img src="./visitConcert.jpg" className="concertImgMobile"></img>
        )}
      </div>
      <div className="consertProgram">
        <div className="consertProgramTitle">プログラム（例）</div>
        <div className="consertProgramDescription">
          <span className="consertProgramDescriptionText">開演</span>
          <span className="consertProgramDescriptionText">チェロ</span>
          <ul>
            <ul>
              <li className="programList">
                サンサーンス：動物の謝肉祭より「白鳥」
              </li>
              <li className="programList">
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
              <li className="programList">カッチーニ：アヴェマリア ソプラノ</li>
              <li className="programList">
                昭和歌謡曲：見上げてごらん夜の星を
              </li>
              <li className="programList">
                昭和歌謡曲：森のくまさん（一緒に歌いましょうコーナー）
              </li>
            </ul>
          </ul>
          <span className="consertProgramDescriptionText">ソプラノ</span>
          <ul>
            <ul>
              <li className="programList">昭和歌謡曲：バラが咲いた</li>
              <li className="programList">
                ミュージカル：サウンドオブミュージックより「エーデルワイス」
              </li>
              <li className="programList">
                ミュージカル：マイフェアレディより「踊り明かそう」
              </li>
            </ul>
          </ul>
          <span className="consertProgramDescriptionText">アンコール</span>
          <ul>
            <ul>
              <li className="programList">
                美空ひばり：川の流れのように 日本の名曲：ふるさと 終演
              </li>
            </ul>
          </ul>
          <span className="consertProgramDescriptionText">
            上記のプログラムで約５０分程になります。
          </span>
          {/* 1036px未満かどうかで写真の大きさを切り替える */}
          {windowWidth >= 1036 ? (
            <img src="./visitCelloConcert.jpg" className="concertImgPC"></img>
          ) : (
            <img
              src="./visitCelloConcert.jpg"
              className="concertImgMobile"></img>
          )}
          <span className="consertProgramDescriptionText">
            プログラムで取り上げる曲は公演の行われる季節によって季節感のある曲を選び、お客様に四季折々の名曲を楽しんで頂いたり、また事前にお知らせ頂ければ可能な範囲でのリクエストも受け付けております。
          </span>
          <span className="consertProgramDescriptionText">
            上記の参考プログラムは春から初夏にかけて選曲したものです。
          </span>
          <span className="consertProgramDescriptionText">その他一例：</span>
          <ul>
            <ul>
              <li className="programList">アルプス一万尺</li>
              <li className="programList">小さい秋見つけた</li>
              <li className="programList">リンゴの唄</li>
              <li className="programList">われは海の子</li>
              <li className="programList">学生時代</li>
              <li className="programList">夏の思い出</li>
              <li className="programList">少年時代</li>
              <li className="programList">瀬戸の花嫁</li>
              <li className="programList">赤とんぼ</li>
              <li className="programList">千の風になって</li>
              <li className="programList">知床旅情</li>
              <li className="programList">浜辺の歌</li>
              <li className="programList">富士の山</li>
              <li className="programList">夕焼け小焼け</li>
              <li className="programList">旅愁</li>
            </ul>
          </ul>
          <span className="consertProgramDescriptionText">
            他多数クラシック・オペラ・チェロ名曲など上記以外の曲も多数ご用意しております。
            お気に入りの曲がございましたらリクエスト下さい。
          </span>
          <span className="consertProgramDescriptionText">
            これらの曲の編曲は、『ムジーク・らぼあ』で依頼致しました、東京音楽大学出身の新進気鋭の若手作曲家北島幸作氏によるオリジナルアレンジでお楽しみ頂けます。
          </span>
        </div>
      </div>
      <div className="consertPrice">
        <div className="consertPriceTitle">料金（出演料）</div>
        <div className="concertPriceTableWrapper">
          {/* 1036px未満かどうかで料金表のサイズを切り替える */}
          {windowWidth >= 1036 ? (
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                width: "500%",
                maxWidth: 1000,
              }}>
              {Object.entries(pricingData4).map(([key, value], idx) => (
                <>
                  <Table key={idx} sx={{ width: "100%" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="left"
                          sx={{ fontSize: "20px" }}></TableCell>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          料金
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ fontSize: "20px" }}>
                            {formatService(row.service)}
                          </TableCell>
                          <TableCell align="left" sx={{ fontSize: "20px" }}>
                            {row.price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ))}
            </TableContainer>
          ) : (
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                width: "100%",
                maxWidth: 350,
              }}>
              {Object.entries(pricingData4).map(([key, value], idx) => (
                <>
                  <Table key={idx}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left">料金</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {formatService(row.service)}
                          </TableCell>
                          <TableCell align="left">{row.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ))}
            </TableContainer>
          )}
        </div>
      </div>
      <div className="concertDescriptionBottom">
        <span className="concertDescriptionBottomText">
          基本的にはソプラノ・チェロ・ピアノの３名でお伺い致しますが、スケジュールの都合で２名でお伺いする場合もございます。
        </span>
        <span className="concertDescriptionBottomText">
          その場合は上記基本料金より１０，０００円引きの４０，０００円で賜りますのでご了承下さい。
        </span>
        <span className="concertDescriptionBottomText">
          ご依頼者様のご要望がございましたら弦楽四重奏等の演奏も行いますので、ご希望の編成等ございましたらお気軽にお問い合わせ下さい。
        </span>
      </div>
    </>
  );
}
