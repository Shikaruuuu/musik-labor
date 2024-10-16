import React, { useEffect, useState } from "react";
import "./VocalMusicLesson.css";

const VocalMusicLesson = () => {
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
            <ul className="priceList">初級：30分　8,000 円</ul>
            <ul className="priceList">中級：40分 10,000 円</ul>
            <ul className="priceList">上級：50分 12,000 円</ul>
            <span className="priceTitleText">１レッスン制</span>
            <ul className="priceList">初級：30分 5,000 円</ul>
            <ul className="priceList">中級：40分 6,000 円</ul>
            <ul className="priceList">上級：50分 7,000 円</ul>
            <ul className="priceList">*無料体験レッスン:30 分</ul>
          </div>
          <div className="trialLesson">
            <span className="trialLessonDescription">
              レッスンを行う上で生徒さんと
            </span>
            <span className="trialLessonDescription">
              講師のコミュニケーションは
            </span>
            <span className="trialLessonDescription">
              とても重要と考えます。
            </span>
            <span className="trialLessonDescription">
              是非レッスンを体験してみて下さい
            </span>
          </div>
        </div>

        <div className="vocalAttractive">
          <div className="vocalAttractiveTitle">
            <span className="vocalAttractiveTitleText">声楽を学ぶ魅力</span>
          </div>
          <ul>
            <li className="priceList">
              歌を歌う上で必要とされる「呼吸法」「発声法」を学ぶ事によって、発音のスキルを身に付けられます。
            </li>
            <li className="priceList">
              声楽は身体全体を使いますので、血行が良くなり健康維持に役立つと言われております。
            </li>
            <li className="priceList">
              思い出の曲や懐かしい曲を歌う事により、その当時の記憶や回想をする事が脳に良い刺激を与え、認知症予防に効果が有ると考えられています。
            </li>
            <li className="priceList">
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
