import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import MusicLesson from "./pages/musicLesson/MusicLesson";
import Concert from "./pages/concert/Concert";
import VocalLesson from "./pages/vocalLesson/VocalLesson";
import Blog from "./pages/blog/Blog";
import Access from "./pages/access/Access";
import PriceList from "./pages/priceList/PriceList";
import InquiryPage from "./pages/inquiryPage/InquiryPage";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/musiclesson" element={<MusicLesson />} />
      </Routes>
      <Routes>
        <Route path="/concert" element={<Concert />} />
      </Routes>
      <Routes>
        <Route path="/priceList" element={<PriceList />} />
      </Routes>
      <Routes>
        <Route path="/vocalLesson" element={<VocalLesson />} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Routes>
        <Route path="/access" element={<Access />} />
      </Routes>
      <Routes>
        <Route path="/inquiry" element={<InquiryPage />} />
      </Routes>
      <Routes>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
