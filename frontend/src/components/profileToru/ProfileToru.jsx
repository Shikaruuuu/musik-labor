import React, { useState, useEffect } from 'react';
import "./ProfileToru.css"

export default function ProfileToru(){

    return(
      <>
        <div className="profileToru">
            <div className='basicInfo'>
                <span className='name'>横森　徹（TORU YOKOMORI）</span>
                <span className='profile1'>元神奈川フィルハーモニー管弦楽団チェロ奏者</span>
                <span className='profile2'>ムジーク・らぼあ代表／講師／チェロ奏者</span>
            </div>
            <div className='background'>
                <span className='backgroundDesc'>『ムジーク・らぼあ』は神奈川県横浜市で声楽教室、チェロ教室、高齢者施設への出張演奏やその他各種施設での演奏、アマチュアオーケストラのトレーナー、楽器購入のアドバイスや選定等、音楽を楽しむ為の様々なお手伝いをさせて頂いております。</span>
                <span className='backgroundDesc'>２０２３年３月に３３年間在籍した（公財）神奈川フィルハーモニー管弦楽団を退団後、フリーランスのチェリストとして演奏活動を行う傍ら、老若男女問わずもっと多くの方に音楽を身近に感じて頂きたいと言う思いから、学生時代から延べ３５年以上に亘って携わって来たチェロの指導やチェリストとしての経験を活かして音楽事業所『ムジーク・らぼあ』を設立。代表及びチェリストとして音楽教室、チェロ教室、出張チェロレッスン、オーケストラトレーナー、高齢者施設への出張コンサートや企画、編曲等多岐に渡り活動を行っております。</span>
                <span className='backgroundDesc'>高齢者施設での出張コンサート</span>
                <span className='backgroundDesc'>９歳より大村卯七氏にチェロの手ほどきを受ける。</span>
                <span className='backgroundDesc'>洗足学園付属高等学校音楽科において伊東毅氏に師事する。</span>
                <span className='backgroundDesc'>東京藝術大学音楽学部において堀江泰氏・松下修也・ニッフェンエッガーの各氏に師事する。</span>
                <span className='backgroundDesc'>１９９０年（公財）神奈川フィルハーモニー管弦楽団にチェロ奏者として入団。神奈川フィルメンバーによる弦楽六重奏団『レグルス弦楽六重奏団』を結成し、後にベルリン弦楽六重奏団と親交を持ち、ベルリン留学においてベルリン国立歌劇場管弦楽団コンサートマスターであるアクセル・ビルチョック氏に室内楽を師事する。また熊川哲也氏率いるKバレエカンパニーのバレエ公演にもチェロ奏者として多数出演。２０２３年には日本テレビドラマ『リバーサルオーケストラ』で児玉交響楽団チェロ奏者として全話に出演する等、多岐にわたり幅広く活動を繰り広げている。</span>
                <span className='backgroundDesc'>使用楽器：弦楽器工房かわばた　代表川幡宏氏制作２０００年モデル他</span>
            </div>
            <div className='hobbyDesc'>
                <span className='hobbyDesc'>自己紹介＆プライベート（突然ですが・・・ちょっと軽い感じでお読み頂ければ）</span>
                <span className='hobbyDesc'>音楽教室やレッスンでは極力言葉でコミュニケーションを取る事を心掛けております。何事も基本的にはポジティブに捉える様にしており、何か困った事や嫌な事があっても次への良い経験になったと思う様にして、わりとすぐに忘れてしまいます。</span>
                <span className='hobbyDesc'>趣味はプロ野球観戦。　特に応援しているのは『東京ヤクルトスワローズ』ですが、基本的には全チーム好きです！</span>
                <span className='hobbyDesc'>もう一つ大好きなのが温泉！　特に好きな温泉は秋田県の『玉川温泉』です。年に２回ほど愛車『スバルクロストレック』で１週間程度の玉川温泉旅行が最大の楽しみになっております。</span>
                <span className='hobbyDesc'>チェロを弾いてみたい、サイレントチェロでレッスンを受けたい、自宅や近所でレッスンを受けたい、その他ご希望やご要望がございましたら『お問い合わせフォーム』よりお問い合わせ下さい。折り返しメール、若しくはお電話でご連絡させて頂きます。</span>
                <span className='hobbyDesc'>『ムジーク・らぼあ』音楽教室では２０２５年に横浜市旭区民文化センターサンハート音楽ホールでの発表会を開催予定です。　歌とチェロを学び音楽ホールでその成果を発表してみませんか。</span>
            </div>
        </div>
      </>
    )
}
