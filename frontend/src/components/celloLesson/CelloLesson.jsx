import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./CelloLesson.css";
import { useEffect, useState } from "react";

const CelloLesson = () => {
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

  const pricingData1 = {
    celloLessons: [
      {
        service: "チェロレッスン（大人）",
        duration: "60 分",
        price: "¥10,000",
      },
      {
        service: "チェロレッスン（高校生以下）",
        duration: "45 分",
        price: "¥7,000",
      },
      {
        service: "*無料体験レッスン（大人・高校生以下）",
        duration: "30 分",
        price: "¥0",
      },
    ],
  };
  const pricingData2 = {
    visitLessons: [
      {
        service: "出張レッスン（大人）",
        duration: "60 分",
        price: "¥15,000",
      },
      {
        service: "出張レッスン　　　　（高校生以下）",
        duration: "45 分",
        price: "¥11,000",
      },
    ],
  };

  return (
    <>
      <div className="celloLesson">
        <div className="celloLessonTitle">
          <span className="celloTeacherName">チェロ教室：講師　横森徹</span>
          <img src="./toru_profile.jpg" className="toruImg"></img>
        </div>
        <div className="celloDescriptionUpper">
          <span className="celloDescriptionUpperText">
            人間の声に一番近い楽器と言われるチェロ。その豊かな響きをお子様からシニアまで、幅広い年齢層の方々に『チェロを奏でる歓び』を体験して頂ける様、初めて楽器を構える基礎から「白鳥」や「バッハ無伴奏チェロ組曲」等のチェロの名曲を奏でられる様になるまでの全てをお手伝いさせて頂きます。
          </span>
          <span className="celloDescriptionUpperText">
            またチェロは後ろから抱きかかえる様に構える事から、弦楽器の中で最も自然体で構える事が出来る楽器として、体に無理なく演奏出来る所がお勧めのポイントです。
          </span>
          {/* 1036px未満かどうかで写真の大きさを切り替える */}
          {windowWidth >= 1036 ? (
            <img src="./kitajima-san.jpg" className="celloLessonImgPC"></img>
          ) : (
            <img
              src="./kitajima-san.jpg"
              className="celloLessonImgMobile"></img>
          )}
          <span className="celloDescriptionUpperText">
            なお当教室では『サイレントチェロ』でのレッスンも行っております。
          </span>
          <span className="celloDescriptionUpperText">
            サイレントチェロでのレッスンは、基本的にはギターアンプを使い実際に音を出してのレッスンを行います。
          </span>
          {/* 1036px未満かどうかで写真の大きさを切り替える */}
          {windowWidth >= 1036 ? (
            <img src="./seyaHall.jpg" className="celloLessonImgPC"></img>
          ) : (
            <img src="./seyaHall.jpg" className="celloLessonImgMobile"></img>
          )}
        </div>
        <div className="celloDescriptionMiddle">
          <div className="priceTitle">
            <span className="priceTitleText">チェロレッスン料金</span>
            <span className="priceTitleText">
              １レッスン（サイレントチェロ含む）
            </span>
          </div>
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
                {Object.entries(pricingData1).map(([key, value], idx) => (
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
                {Object.entries(pricingData1).map(([key, value], idx) => (
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
          <div className="celloTrialLesson">
            <span className="celloTrialLessonDescription">
              レッスンを行う上で生徒さんと講師のコミュニケーションはとても重要と考えます。是非レッスンを体験してみて下さい
            </span>
          </div>
        </div>
        <div className="celloDescriptionMiddle">
          <div className="lessonDescriptionWrapper">
            <span className="lessonDescriptionTitle">出張チェロレッスン</span>
            <span className="lessonDescription">
              生徒さんのご自宅や、ご自宅近くのレンタルスペース・コミュニティセンター・貸しスタジオ等、生徒さんの希望される場合へ講師が出張してレッスンを行います。（レッスン場所は生徒さんご自身でご用意をお願い致します）
            </span>
          </div>
          <div className="priceTitle">
            <span className="priceTitleText">出張チェロレッスン料金</span>
            <span className="priceTitleText">
              １レッスン（サイレントチェロ含む）
            </span>
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
                  {Object.entries(pricingData2).map(([key, value], idx) => (
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
                  {Object.entries(pricingData2).map(([key, value], idx) => (
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
            <div className="visitLessonNote">
              <span className="visitLessonNoteDescription">
                上記は神奈川県内の出張料金です。県外は別途ご相談下さい。
              </span>
            </div>
          </div>
        </div>
        <div className="lessonContents">
          <div className="LessonConttentsTitle">
            <span className="LessonContentsTitleText">レッスン内容</span>
          </div>
          <div className="LessonContentsDesctiptionUpper">
            <span className="LessonContentsDesctiptionText">
              初めてチェロを習う方にはチェロの構え方や弓の持ち方、「ウェルナーチェロ教則本」や様々なメソッド等を使いながら小さな曲を少しずつ弾き進めて行き、基本的なボーイング、フィンガリングを覚えた比較的早い段階で講師との二重奏、アンサンブルを取り入れたレッスンを楽しんで頂きます。
            </span>
          </div>
          <div className="LessonContentsDesctiptionMiddle">
            <span className="LessonContentsDesctiptionText">
              過去にチェロを習っていたご経験のある方や、レッスンは未経験ながらも独学でチェロを弾いていらっしゃる方には、ご自身でお持ちの教則本や現在弾いている楽譜をお持ちになって頂き、レッスンを行いながら最適と思われる教材や楽曲、講師との二重奏曲のご提案をさせて頂きます。
            </span>
          </div>
          <div className="LessonContentsDesctiptionBottom">
            <span className="LessonContentsDesctiptionText">
              生徒さんご自身もチェロを演奏する上で弾きたい曲や挑戦してみたい曲等お有りになると思いますので、生徒さんとコミュニケーションを取りながら極力ご意向に沿える様お手伝いさせて頂きます。
            </span>
          </div>
        </div>
        <div className="lessonContents">
          <div className="LessonContentsDesctiptionUpper">
            <span className="LessonContentsDesctiptionText">
              また当教室では年2回ほど音楽ホールでのレッスンも行っております。普段ご自宅やコミュニティセンター等、本来クラシック音楽を奏でる為の環境では無い響きでの練習やレッスンを行うのに対し、お持ちの楽器の響きに音楽ホールの持つ独特の響き、音色、残響、空間をプラスし、生徒さん皆さんがコンサートホールでのチェロの響きを堪能する事が出来る、音楽ホール（旭区民文化センターサンハート音楽ホール）での合同レッスン練習会を開催しております。
            </span>
          </div>
        </div>
        <div className="celloDescriptionBottom">
          <span className="celloDescriptionBottomText">
            合同レッスン練習会では個人レッスンとチェロアンサンブルを行います。
          </span>
          {/* 1036px未満かどうかで写真の大きさを切り替える */}
          {windowWidth >= 1036 ? (
            <img src="./celloLesson.jpg" className="celloLessonImgPC"></img>
          ) : (
            <img src="./celloLesson.jpg" className="celloLessonImgMobile"></img>
          )}
          <span className="celloDescriptionBottomText">
            チェロを弾いてみたい、サイレントチェロでレッスンを受けたい、自宅や近所でレッスンを受けたい、その他ご希望やご要望がございましたらお気軽にお問い合わせ下さい。
          </span>
        </div>
      </div>
    </>
  );
};

export default CelloLesson;
