import React, { useEffect, useState } from "react";
import "./VocalMusicLesson.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const VocalMusicLesson = () => {
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

  const pricingData3 = {
    vocalLessons: [
      {
        service: "声楽レッスン（初級・月謝）",
        duration: "30 分",
        price: "¥8,000",
      },
      {
        service: "声楽レッスン（中級・月謝）",
        duration: "40 分",
        price: "¥10,000",
      },
      {
        service: "声楽レッスン（上級・月謝）",
        duration: "50 分",
        price: "¥12,000",
      },
      {
        service: "声楽レッスン（初級・単発）",
        duration: "30 分",
        price: "¥5,000",
      },
      {
        service: "声楽レッスン（中級・単発）",
        duration: "40 分",
        price: "¥6,000",
      },
      {
        service: "声楽レッスン（上級・単発）",
        duration: "50 分",
        price: "¥7,000",
      },
    ],
  };

  return (
    <>
      <div className="vocalLesson">
        <div className="vocalLessonTitle">
          <span className="vocalTeacherName">声楽教室：講師 横森明美</span>
          <img src="./akemi_profile.jpg" className="akemiImg"></img>
        </div>
        <div className="vocalDescriptionUpper">
          <span className="vocalDescriptionUpperText">
            『ムジーク・らぼあ』声楽教室では初めて声楽を学ぶ方から、本格的にオペラアリアを歌ってみたい方、気軽に歌を歌いたい方、健康増進の為に歌いたい方、もっとカラオケを上手に歌う為のヴォイストレーニング等、老若男女問わずお子様からシニアまで様々なご要望にお応え致します。
          </span>
        </div>
        <div className="vocalDescriptionMiddle">
          <div className="lessonDescriptionWrapper">
            {/* 1036px未満かどうかで写真の大きさを切り替える */}
            {windowWidth >= 1036 ? (
              <img src="./lesson1.jpg" className="vocalLessonImgPC"></img>
            ) : (
              <img src="./lesson1.jpg" className="vocalLessonImgMobile"></img>
            )}
            <span className="lessonDescriptionTitle">レッスン内容</span>
            <span className="lessonDescription">
              老若男女問わず小学生からシニアまで『楽しく歌う』を基本にクラシックの発声を学び、幅広いジャンルの曲を楽しく歌える様お手伝いさせて頂きます。
            </span>
            <span className="lessonDescription">
              楽譜が読めない方や初めて声楽を習う方でも安心して学べる様に、声楽の基礎の基礎から丁寧に講師とコミュニケーションを取りながら、その都度最適と思われる教材や歌曲等をご提案させて頂きます。
            </span>
            <span className="lessonDescription">
              また、生徒さんご自身でも歌いたい曲や挑戦してみたい曲等ある場合も、その都度生徒さんのご意向も取り入れて、楽しくレッスンを進めて参ります。
            </span>
            <span className="lessonDescription">
              カラオケをもっと上手に歌える様になりたいと思われる方には『ヴォイストレーニング』をお勧め致しております。
            </span>
            <span className="lessonDescription">
              ヴォイストレーニングは歌を歌う時に必要な体の使い方や姿勢、低い音から高い音までまんべんなく出せる事を学ぶトレーニングです。カラオケで低い声や高い声が難しいと感じる方や、正しい音程やリズムで歌える様になりたい方にはとてもお勧めです。
            </span>
          </div>
          <div className="priceTitle">
            <span className="priceTitleText">声楽レッスン料金</span>
            <span className="priceTitleText">月謝制月２回</span>
            <div className="celloPriceTableWrapper">
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
                  {Object.entries(pricingData3).map(([key, value], idx) => (
                    <>
                      <Table key={idx} sx={{ width: "100%" }}>
                        <TableHead>
                          <TableRow>
                            <TableCell
                              align="left"
                              sx={{ fontSize: "20px" }}></TableCell>
                            <TableCell align="left" sx={{ fontSize: "20px" }}>
                              時間
                            </TableCell>
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
                                {row.duration}
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
                  {Object.entries(pricingData3).map(([key, value], idx) => (
                    <>
                      <Table key={idx}>
                        <TableHead>
                          <TableRow>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left">時間</TableCell>
                            <TableCell align="left">料金</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {value.map((row, index) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">
                                {formatService(row.service)}
                              </TableCell>
                              <TableCell align="left">{row.duration}</TableCell>
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
          <div className="vocalTrialLesson">
            <span className="vocalTrialLessonDescription">
              レッスンを行う上で生徒さんと講師のコミュニケーションはとても重要と考えます。是非レッスンを体験してみて下さい。
            </span>
            <span className="trialLessonDescription"></span>
            <span className="trialLessonDescription"></span>
            <span className="trialLessonDescription"></span>
            {/* 1036px未満かどうかで写真の大きさを切り替える */}
            {windowWidth >= 1036 ? (
              <img src="./recital.jpg" className="vocalLessonImgPC"></img>
            ) : (
              <img src="./recital.jpg" className="vocalLessonImgMobile"></img>
            )}
          </div>
        </div>

        <div className="vocalAttractive">
          <div className="vocalAttractiveTitle">
            <span className="vocalAttractiveTitleText">声楽を学ぶ魅力</span>
          </div>
          <ul>
            <li className="attractivePointList">
              歌を歌う上で必要とされる「呼吸法」「発声法」「発音のスキル」を身につけられます。
            </li>
            <li className="attractivePointList">
              声楽は身体全体を使いますので、血行が良くなり健康維持に役立つと言われております。
            </li>
            <li className="attractivePointList">
              思い出の曲や懐かしい曲を歌う事により、その当時の記憶や回想をする事が脳に良い刺激を与え、認知症予防に効果が有ると考えられています。
            </li>
            <li className="attractivePointList">
              歌うと言う行為によって「幸せホルモン」が分泌され、幸福感や満足感・達成感を感じ易くなると言われております。
            </li>
          </ul>
        </div>
        <div className="vocalDescriptionBottom">
          <span className="vocalDescriptionBottomText">
            この様に歌う事によって心や身体に様々なプラス要素が得られる声楽をこの機会に体験してみませんか！
          </span>
          <span className="vocalDescriptionBottomText">
            声楽を学んでみたい、声楽を通して心と身体の健康を得たい、趣味のカラオケをもっと上手く披露したい等、声楽に興味がございましたら是非お問い合わせフォームよりお問い合わせ下さいませ。折り返しメール、お電話でご連絡させて頂きます。
          </span>
        </div>
      </div>
    </>
  );
};

export default VocalMusicLesson;
