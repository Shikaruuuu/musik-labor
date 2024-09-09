import React, { useState, useEffect } from "react";
import "./HomeDescription.css";

export default function HomeDescription() {
  return (
    <>
      <div className="HomeDescription">
        <span className="homeDescriptionText">
          『ムジーク・らぼあ』では子供から大人、
        </span>
        <span className="homeDescriptionText">
          シニアまで全ての方に音楽の 楽しさ、素晴らしさを感じて頂ける様、
        </span>
        <span className="homeDescriptionText">
          元神奈川フィルハーモニー管弦楽団チェロ奏者横森徹と二期会オペラ歌手横森明美が、
        </span>
        <span className="homeDescriptionText">
          チェロ教室・声楽教室をはじめ、高齢者施設や各種パーティー会場等への出張演奏・
        </span>
        <span className="homeDescriptionText">
          トレーナー・楽器購入のお手伝いまで幅広くご提案させて頂いております。
        </span>
      </div>
    </>
  );
}
