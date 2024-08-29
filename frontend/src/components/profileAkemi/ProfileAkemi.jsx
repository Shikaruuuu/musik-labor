import React, { useState, useEffect } from "react";
import "./ProfileAkemi.css";

export default function ProfileAkemi() {
  return (
    <>
      <div className="profileAkemi">
        <div className="basicInfo">
          <span className="name">横森明美 (AKEMI YOKOMORI)</span>
          <span className="profile1">二期会登録名 永田明美 (AKEMI NAGATA)</span>
          <span className="profile2">講師／声楽家／ソプラノ</span>
          <img src="./akemi_profile.jpg" className="akemiImg"></img>
        </div>
        <div className="background">
          <ul>
            <li className="backgroundDesc">
              １９９１年日本で唯一のプロ・オペラ合唱団である二期会合唱団に入団。モーツァルトの作品を始めとして数多くのオペラやコンサートに出演し、プッチーニ『三部作』、モーツァルト『魔笛』等でソリストを務める。１９９６年に主としてドイツのオペラ作品や声楽曲を中心に活動する『カンツィオナル』のメンバーとして、ヘンデル『メサイア』、フーパーディンク『ヘンゼルとグレーテル』では眠りの精、暁の精を歌った他、シューベルト生誕２００年、メンデルスゾーン没後１５０年、ブラームス没後１００年を記念するコンサートにおいてドイツ歌曲を歌う。２０１６年東京大田区アプリコホールにおいて自身初のリサイタルを開催し、各方面から好評を博す。
            </li>
            <li className="backgroundDesc">
              洗足学園大学音楽学部声楽科卒業。二期会オペラスタジオ・マスタークラス終了。麻野恵子、中沢桂、村田健二、中村邦夫、太田実、ヘルムート・クレッチマーの各氏に師事する。現在二期会正会員。
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
