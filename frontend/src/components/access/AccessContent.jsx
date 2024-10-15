import "./AccessContent.css";

export default function AccessContent() {
  return (
    <>
      <div className="Access">
        <span className="AccessTitle">アクセス</span>
        <div className="classLocationWrapper">
          <span className="classLocation">金が谷教室</span>
          <span className="classLocation">横浜市旭区金が谷 2 丁目</span>
        </div>
        <div className="busStopWrapper">
          <span className="busDescriptionText">
            相鉄線二俣川駅北口バス乗り場より
          </span>
          <span className="busDescriptionText">
            相鉄バス ニュータウン第 7 下車 徒歩 3 分
          </span>
        </div>
        <div className="busStopWrapper">
          <span className="busDescriptionText">
            相鉄線三ツ境駅北口バス乗り場より
          </span>
          <span className="busDescriptionText">相鉄バス 岸本下車 徒歩3分 </span>
        </div>
        <span className="onFootText">徒歩:三ツ境駅南口徒歩 19 分 </span>
        <span className="parking">駐車場1台有り</span>
      </div>
    </>
  );
}
