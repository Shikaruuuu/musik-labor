import React, { useState, useEffect } from 'react';
import "./HomeDescription.css"

export default function HomeDescription(){

    return(
      <>
        <div className="HomeDescription">
            <span className="homeDescriptionText">『ムジーク・らぼあ』では子供から大人、シニアまで全ての方に音楽の楽しさ、素晴らしさを感じて頂ける様、</span>
            <span className="homeDescriptionText">元神奈川フィルハーモニー管弦楽団チェリストと二期会オペラ歌手が音楽レッスンから</span>
            <span className="homeDescriptionText">高齢者施設をはじめとしたや各種会場への出張演奏、トレーナー、楽器購入のお手伝いまで幅広くご提案させて頂いております。</span>
        </div>
      </>
    )
}
