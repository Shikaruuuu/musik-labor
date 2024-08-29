import React, { useEffect, useState } from "react";
import "./CelloLesson.css";

const CelloLesson = () => {
  return (
    <>
      <div className="celloLesson">
        <div className="celloLessonTitle">
          <span className="celloTeacherName">チェロ教室：講師　横森徹</span>
          <img src="./toru_profile.jpg" className="toruImg"></img>
        </div>
        <div className="celloDescriptionUpper">
          <span className="celloDescriptionUpperText">
            人間の声に一番近い楽器と言われるチェロ。その豊かな響きをお子様からシニアまで、幅広い年齢層の方々に『チェロを奏でる歓び』を体験して頂ける様、初めて楽器を構える基礎の基礎から「白鳥」や「バッハ無伴奏チェロ組曲」等のチェロの名曲を奏でられる様になるまでの全てをお手伝いさせて頂きます。またチェロは弦楽器の中で最も自然体で構える事が出来る楽器としても、体に無理なく演奏出来る所がお勧めのポイントです。
          </span>
          <span className="celloDescriptionUpperText">
            またチェロ教室の特徴の一つとして『チェロアンサンブル』を取り入れております。
          </span>
          <span className="celloDescriptionUpperText">
            『チェロアンサンブル』とは通常のレッスンでは生徒さんと講師の二重奏で行い、生徒さんは講師の音を聴きながら音程やリズムを合わせたり、生徒さんのソロに講師が伴奏を付けると言った合奏を行います。
          </span>
          <span className="celloDescriptionUpperText">
            その他、年に1回～2回程度音楽ホールにおいて合同ホールレッスン及び、チェロ四重奏等のアンサンブルレッスンも行っております。
          </span>
          <span className="celloDescriptionUpperText">
            この『チェロアンサンブル』がとても好評でみなさん大変喜ばれております。
          </span>
        </div>
        <div className="celloDescriptionMiddle">
          <div className="priceTitle">
            <span className="priceTitleText">
              チェロ・サイレントチェロ　レッスン料金
            </span>
          </div>
          <ul>
            <li>通常レッスン：1レッスン（生徒さんにお越し頂く場合）</li>
            <ul>
              <li>大人：75分　 11,000円（税込）</li>
              <li>高校生以下：45分　 7,000円（税込）</li>
            </ul>
            <li>出張レッスン：1レッスン神奈川県内（県外は別途ご相談下さい）</li>
            <ul>
              <li>大人：80分　 15,000円～（税・出張費込）</li>
              <li>高校生以下：50分　 11,000円～（税・出張費込）</li>
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

export default CelloLesson;
