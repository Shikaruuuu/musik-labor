import React, { useEffect, useState } from "react";
import "./VocalMusicLesson.css";

const VocalMusicLesson = () => {
  return (
    <>
      <div className="celloLesson">
        <div className="celloLessonTitle">
          <span className="celloTeacherName">声楽教室：講師　横森明美</span>
          <img src="./akemi_profile.jpg" className="akemiImg"></img>
        </div>
        <div className="celloDescriptionUpper">
          <span className="celloDescriptionUpperText">
            小学生からシニアまで『楽しく歌う』をモットーに基本的な発声を学び、イタリア歌曲から日本歌曲、叙情歌や童謡等幅広いジャンルの曲を楽しく歌える様お手伝いさせて頂きます。
          </span>
          <span className="celloDescriptionUpperText">
            また「カラオケは好きだけど歌曲はちょっと」と言う方にはカラオケにも役に立つ『ヴォイストレーニング』をお勧め致します。
          </span>
          <span className="celloDescriptionUpperText">
            レッスンは基本的には月謝制月2回、若しくは生徒さんのご都合に合わせたレッスン毎に次回レッスン日を決める、１レッスン制で行います。
          </span>
        </div>
        <div className="celloDescriptionMiddle">
          <div className="priceTitle">
            <span className="priceTitleText">
              声楽レッスン料金　レッスン料金
            </span>
          </div>
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
        </div>
        <div className="celloDescriptionBottom">
          <span className="celloDescriptionBottomText">
            ご興味ございましたらお気軽にお問い合わせフォームよりお問い合わせ下さい。
          </span>
        </div>
      </div>
    </>
  );
};

export default VocalMusicLesson;
