import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import MusicLesson from "./pages/musicLesson/MusicLesson";
import Concert from "./pages/concert/Concert";
import VocalLesson from "./pages/vocalLesson/VocalLesson";
import Access from "./pages/access/Access";
import PriceList from "./pages/priceList/PriceList";
import InquiryPage from "./pages/inquiryPage/InquiryPage";
import Shop from "./pages/shop/Shop";
import ScrollToTop from "./ScrollToTop"; // ScrollToTopをインポート

function App() {
  return (
    <Router>
      {/* ページ遷移時に最上部にスクロール */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/musiclesson" element={<MusicLesson />} />
        <Route path="/concert" element={<Concert />} />
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/vocallesson" element={<VocalLesson />} />
        <Route path="/access" element={<Access />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
