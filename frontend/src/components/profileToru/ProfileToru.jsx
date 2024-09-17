import React, { useState, useEffect } from "react";
import "./ProfileToru.css";

export default function ProfileToru() {
  return (
    <>
      <div className="profileToru">
        <div className="basicInfo">
          <span className="name">横森　徹（TORU YOKOMORI）</span>
          <span className="profile1">
            元神奈川フィルハーモニー管弦楽団チェロ奏者
          </span>
          <span className="profile2">
            ムジーク・らぼあ代表／講師／チェロ奏者
          </span>
          <img src="./toru_profile.jpg" className="toruImg"></img>
          <span className="basicProfile">
            ２０２３年３月に３３年間在籍した（公財）神奈川フィルハーモニー管弦楽団を退団後、フリーランスのチェリストとして演奏活動を行う傍ら、老若男女問わずもっと多くの方に音楽を身近に感じて頂きたいと言う思いから、学生時代から延べ３５年以上に亘って携わって来たチェロの指導やチェリストとしての経験を活かして音楽事業所『ムジーク・らぼあ』を設立。
          </span>
          <span className="basicProfile">
            代表及びチェリストとして音楽教室、チェロ教室、出張チェロレッスン、オーケストラトレーナー、高齢者施設への出張コンサートや企画、編曲等多岐に渡り活動を行っております。
          </span>
        </div>
        <div className="background">
          <ul>
            <li className="backgroundDesc">
              ９歳より大村卯七氏にチェロの手ほどきを受ける。
            </li>
            <li className="backgroundDesc">
              洗足学園付属高等学校音楽科において伊東毅氏に師事する。
            </li>
            <li className="backgroundDesc">
              東京藝術大学音楽学部において堀江泰氏・松下修也・ニッフェンエッガーの各氏に師事する。
            </li>
            <li className="backgroundDesc">
              １９９０年（公財）神奈川フィルハーモニー管弦楽団にチェロ奏者として入団。
              神奈川フィルメンバーによる弦楽六重奏団『レグルス弦楽六重奏団』を結成し、後にベルリン弦楽六重奏団と親交を持ち、ベルリン留学においてベルリ
              ン国立歌劇場管弦楽団コンサートマスターであるアクセル・ビルチョック氏に室内楽を師事する。
              また熊川哲也氏率いる K
              バレエカンパニーのバレエ公演にもチェロ奏者として多数出演。
            </li>
            <li className="backgroundDesc">
              ２０２３年には日本テレビドラマ『リバーサルオーケストラ』で児玉交響楽団チェロ奏者として全話に出演する等、多岐にわたり幅広く活動を繰り広げている。
            </li>
          </ul>
          <span className="instrumentsInfo">使用楽器：弦楽器工房かわばた</span>
          <span className="instrumentsInfo">
            代表川幡宏氏制作２０００年モデル他
          </span>
        </div>
      </div>
    </>
  );
}
