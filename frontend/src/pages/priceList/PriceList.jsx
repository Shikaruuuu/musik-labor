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
} from "@mui/material";

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

  const pricingData = [
    { service: "チェロレッスン（大人）", duration: "60 分", price: "¥10,000" },
    {
      service: "チェロレッスン（高校生以下）",
      duration: "45 分",
      price: "¥7,000",
    },
    {
      service: "出張レッスン（大人、神奈川県内）",
      duration: "60 分",
      price: "¥15,000",
    },
    {
      service: "出張レッスン（高校生以下、神奈川県内）",
      duration: "45 分",
      price: "¥11,000",
    },
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
    { service: "出張演奏（神奈川県内）", duration: "-", price: "¥50,000～" },
    {
      service: "出張演奏（神奈川県外）",
      duration: "-",
      price: "¥50,000～＋交通費等",
    },
  ];

  return (
    <>
      <Header />
      {/* 1036px未満のときのみNavbar（ハンバーガーメニュー）を表示 */}
      {windowWidth >= 1036 ? <Navbar /> : <Hamburger />}
      <div className="consertGuide">
        <div className="consertGuideTitle">料金表</div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>サービス</TableCell>
              <TableCell align="right">時間</TableCell>
              <TableCell align="right">料金</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pricingData.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.service}
                </TableCell>
                <TableCell align="right">{row.duration}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PriceList;
