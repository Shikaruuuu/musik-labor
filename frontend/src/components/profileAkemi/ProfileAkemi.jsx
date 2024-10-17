import React, { useState, useEffect } from "react";
import "./ProfileAkemi.css";

export default function ProfileAkemi() {
  return (
    <>
      <div className="profileToru">
        <div className="basicInfo">
          <span className="name">横森明美 (AKEMI YOKOMORI)</span>
          <span className="profile2">二期会登録名 永田明美(AKEMI NAGATA)</span>
          <span className="profile2">講師／声楽家／ソプラノ</span>
          <img src="./akemi_profile.jpg" className="akemiImg"></img>
          <span className="basicProfile">
            『ムジーク・らぼあ』ソプラノ歌手及び声楽講師としてオペラ作品はもとより、ミュージカル、日本歌曲、童謡、叙情歌、歌謡曲等ジャンルを問わない活動をしております。
            また高齢者施設等では皆さんと一緒に歌い、一緒に音楽を感じて楽しんで頂ける様心掛けて歌っております。
          </span>
        </div>
        <div className="background">
          <ul>
            <li className="backgroundDesc">
              １９９１年日本で唯一のプロ・オペラ合唱団である二期会合唱団に入団。モーツァルトの作品を始めとして数多くのオペラやコンサートに出演し、プッチーニ『三部作』、モーツァルト『魔笛』等でソリストを務める。
            </li>
            <li className="backgroundDesc">
              １９９６年に主としてドイツのオペラ作品や声楽曲を中心に活動する『カンツィオナル』のメンバーとして、ヘンデル『メサイア』、フーパーディンク『ヘンゼルとグレーテル』では眠りの精、暁の精を歌った他、シューベルト生誕２００年、メンデルスゾーン没後１５０年、ブラームス没後１００年を記念するコンサートにおいてドイツ歌曲を歌う。
            </li>
            <li className="backgroundDesc">
              ２０１６年東京大田区アプリコホールにおいて自身初のリサイタルを開催し、各方面から好評を博す。
            </li>
            <img
              src="./akemi'sRecital.jpg"
              className="profileContentsImg"></img>
            <li className="backgroundDesc">
              洗足学園大学音楽学部声楽科卒業。
              二期会オペラスタジオ・マスタークラス終了。
            </li>
            <li className="backgroundDesc">
              麻野恵子、中沢桂、村田健二、中村邦夫、太田実、ヘルムート・クレッチマーの各氏に師事する。
              現在二期会正会員。
            </li>
          </ul>
          <span className="akemiMessage">
            レッスンは生徒さん一人ひとりに常に寄り添った無理のない指導を心掛けております。
          </span>
          <span className="akemiMessage">
            声楽を学んでみたい、声楽を通して心と身体の健康を得たい、趣味のカラオケをもっと上手く披露したい等、声楽に興味がございましたら是非お問い合わせフォームよりお問い合わせ下さいませ。折り返しメール、お電話でご連絡させて頂きます。
          </span>
        </div>
      </div>
    </>
  );
}
