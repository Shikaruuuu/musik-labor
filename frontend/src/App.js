import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import MusicLesson from "./pages/musicLesson/MusicLesson";
import Concert from "./pages/concert/Concert";

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
    </Router>
  );
}

export default App;
