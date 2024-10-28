import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "./PriceListContents.css";
import { useEffect, useState } from "react";

export default function PriceListContents() {
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
      {
        service: "*無料体験レッスン（大人・高校生以下）",
        duration: "30 分",
        price: "¥0",
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
        service: "出張レッスン　　　　（高校生以下）",
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
      {
        service: "*無料体験レッスン　　",
        duration: "30 分",
        price: "¥0",
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
      <div className="pricePageTitle">料金表</div>
      <div className="priceTableWrapper">
        <div className="celloPriceTableWrapper">
          {/* 1036px未満かどうかで料金表のサイズを切り替える */}
          {windowWidth >= 1036 ? (
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                width: "500%",
                maxWidth: 1000,
              }}>
              {Object.entries(pricingData1).map(([key, value], idx) => (
                <>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ marginY: 2, marginLeft: 2 }}>
                    {categoryNames[key]} {/* カテゴリー名を表示 */}
                  </Typography>
                  <Table key={idx} sx={{ width: "100%" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          サービス
                        </TableCell>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          時間
                        </TableCell>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          料金
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ fontSize: "20px" }}>
                            {formatService(row.service)}
                          </TableCell>
                          <TableCell align="left" sx={{ fontSize: "20px" }}>
                            {row.duration}
                          </TableCell>
                          <TableCell align="left" sx={{ fontSize: "20px" }}>
                            {row.price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ))}
            </TableContainer>
          ) : (
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                width: "100%",
                maxWidth: 350,
              }}>
              {Object.entries(pricingData1).map(([key, value], idx) => (
                <>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ marginY: 2, marginLeft: 2 }}>
                    {categoryNames[key]} {/* カテゴリー名を表示 */}
                  </Typography>
                  <Table key={idx}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">サービス</TableCell>
                        <TableCell align="left">時間</TableCell>
                        <TableCell align="left">料金</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {formatService(row.service)}
                          </TableCell>
                          <TableCell align="left">{row.duration}</TableCell>
                          <TableCell align="left">{row.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ))}
            </TableContainer>
          )}
        </div>
        <div className="celloPriceTableWrapper">
          {/* 1036px未満かどうかで料金表のサイズを切り替える */}
          {windowWidth >= 1036 ? (
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                width: "500%",
                maxWidth: 1000,
              }}>
              {Object.entries(pricingData2).map(([key, value], idx) => (
                <>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ marginY: 2, marginLeft: 2 }}>
                    {categoryNames[key]} {/* カテゴリー名を表示 */}
                  </Typography>
                  <Table key={idx} sx={{ width: "100%" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          サービス
                        </TableCell>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          時間
                        </TableCell>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          料金
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ fontSize: "20px" }}>
                            {formatService(row.service)}
                          </TableCell>
                          <TableCell align="left" sx={{ fontSize: "20px" }}>
                            {row.duration}
                          </TableCell>
                          <TableCell align="left" sx={{ fontSize: "20px" }}>
                            {row.price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ))}
            </TableContainer>
          ) : (
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                width: "100%",
                maxWidth: 350,
              }}>
              {Object.entries(pricingData2).map(([key, value], idx) => (
                <>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ marginY: 2, marginLeft: 2 }}>
                    {categoryNames[key]} {/* カテゴリー名を表示 */}
                  </Typography>
                  <Table key={idx}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">サービス</TableCell>
                        <TableCell align="left">時間</TableCell>
                        <TableCell align="left">料金</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {formatService(row.service)}
                          </TableCell>
                          <TableCell align="left">{row.duration}</TableCell>
                          <TableCell align="left">{row.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ))}
            </TableContainer>
          )}
        </div>
        <div className="celloPriceTableWrapper">
          {/* 1036px未満かどうかで料金表のサイズを切り替える */}
          {windowWidth >= 1036 ? (
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                width: "500%",
                maxWidth: 1000,
              }}>
              {Object.entries(pricingData3).map(([key, value], idx) => (
                <>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ marginY: 2, marginLeft: 2 }}>
                    {categoryNames[key]} {/* カテゴリー名を表示 */}
                  </Typography>
                  <Table key={idx} sx={{ width: "100%" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          サービス
                        </TableCell>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          時間
                        </TableCell>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          料金
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ fontSize: "20px" }}>
                            {formatService(row.service)}
                          </TableCell>
                          <TableCell align="left" sx={{ fontSize: "20px" }}>
                            {row.duration}
                          </TableCell>
                          <TableCell align="left" sx={{ fontSize: "20px" }}>
                            {row.price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ))}
            </TableContainer>
          ) : (
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                width: "100%",
                maxWidth: 350,
              }}>
              {Object.entries(pricingData3).map(([key, value], idx) => (
                <>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ marginY: 2, marginLeft: 2 }}>
                    {categoryNames[key]} {/* カテゴリー名を表示 */}
                  </Typography>
                  <Table key={idx}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">サービス</TableCell>
                        <TableCell align="left">時間</TableCell>
                        <TableCell align="left">料金</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {formatService(row.service)}
                          </TableCell>
                          <TableCell align="left">{row.duration}</TableCell>
                          <TableCell align="left">{row.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ))}
            </TableContainer>
          )}
        </div>
        <div className="concertPriceTableWrapper">
          {/* 1036px未満かどうかで料金表のサイズを切り替える */}
          {windowWidth >= 1036 ? (
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                width: "500%",
                maxWidth: 1000,
              }}>
              {Object.entries(pricingData4).map(([key, value], idx) => (
                <>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ marginY: 2, marginLeft: 2 }}>
                    {categoryNames[key]} {/* カテゴリー名を表示 */}
                  </Typography>
                  <Table key={idx} sx={{ width: "100%" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          サービス
                        </TableCell>
                        <TableCell align="left" sx={{ fontSize: "20px" }}>
                          料金
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ fontSize: "20px" }}>
                            {formatService(row.service)}
                          </TableCell>
                          <TableCell align="left" sx={{ fontSize: "20px" }}>
                            {row.price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ))}
            </TableContainer>
          ) : (
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                width: "110%",
                maxWidth: 350,
              }}>
              {Object.entries(pricingData4).map(([key, value], idx) => (
                <>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ marginY: 2, marginLeft: 2 }}>
                    {categoryNames[key]} {/* カテゴリー名を表示 */}
                  </Typography>
                  <Table key={idx}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">サービス</TableCell>
                        <TableCell align="left">料金</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {value.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {formatService(row.service)}
                          </TableCell>
                          <TableCell align="left">{row.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ))}
            </TableContainer>
          )}
        </div>
      </div>
    </>
  );
}
