import React, { useEffect, useState } from "react";
import "./PriceList.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Hamburger from "../../components/hamburger/Hamburger";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import HeaderMobile from "../../components/headerMobile/HeaderMobile";
import PriceListContents from "../../components/priceListContents/PriceListContents";

const PriceList = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // ウィンドウサイズが変更された時にサイズを更新する
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // コンポーネントがアンマウントされた際にイベントリスナーを削除
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function formatService(service) {
    const parts = service.split("（");
    if (parts.length > 1) {
      // 「（」を前のテキストに含めて改行します。
      return (
        <>
          {parts[0]}
          <br />（{parts[1]}
        </>
      );
    }
    return service;
  }

  const pricingData1 = {
    celloLessons: [
      {
        service: "チェロレッスン（大人）",
        duration: "60 分",
        price: "¥10,000",
      },
      {
        service: "チェロレッスン（高校生以下）",
        duration: "45 分",
        price: "¥7,000",
      },
    ],
  };
  const pricingData2 = {
    visitLessons: [
      {
        service: "出張レッスン（大人）",
        duration: "60 分",
        price: "¥15,000",
      },
      {
        service: "出張レッスン（高校生以下）",
        duration: "45 分",
        price: "¥11,000",
      },
    ],
  };
  const pricingData3 = {
    vocalLessons: [
      {
        service: "声楽レッスン（初級・月謝）",
        duration: "30 分",
        price: "¥8,000",
      },
      {
        service: "声楽レッスン（中級・月謝）",
        duration: "40 分",
        price: "¥10,000",
      },
      {
        service: "声楽レッスン（上級・月謝）",
        duration: "50 分",
        price: "¥12,000",
      },
      {
        service: "声楽レッスン（初級・単発）",
        duration: "30 分",
        price: "¥5,000",
      },
      {
        service: "声楽レッスン（中級・単発）",
        duration: "40 分",
        price: "¥6,000",
      },
      {
        service: "声楽レッスン（上級・単発）",
        duration: "50 分",
        price: "¥7,000",
      },
    ],
  };
  const pricingData4 = {
    concerts: [
      { service: "出張演奏（神奈川県内）", duration: "-", price: "¥50,000～" },
      {
        service: "出張演奏（神奈川県外）",
        duration: "-",
        price: "¥50,000～＋交通費等",
      },
    ],
  };

  const categoryNames = {
    celloLessons: "チェロ教室",
    visitLessons: (
      <>
        出張レッスン（神奈川県内）
        <br />
        ※県外別途相談
      </>
    ),
    vocalLessons: "声楽レッスン",
    concerts: "出張演奏",
  };

  return (
    <>
      {/* 1036px未満かどうかでヘッダーを切り替える */}
      {windowWidth >= 1036 ? <Header /> : <HeaderMobile />}
      {/* 1036px未満のときのみNavbar（ハンバーガーメニュー）を表示 */}
      {windowWidth >= 1036 ? <Navbar /> : <Hamburger />}
      {/* 1036px未満のときのみ茶色のBoxを表示 */}
      {windowWidth >= 1036 ? (
        <div className="priceTableWrapper">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderColor: "black",
              backgroundColor: "#e4d6ce",
              width: "70%",
            }}>
            <PriceListContents />
          </Box>
        </div>
      ) : (
        <div className="priceTableWrapperMobile">
          <PriceListContents />
        </div>
      )}
    </>
  );
};

export default PriceList;
