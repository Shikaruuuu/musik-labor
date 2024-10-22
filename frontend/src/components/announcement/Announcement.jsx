import React, { useState, useEffect } from "react";
import axios from "axios";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzl5vIWgKTYVFsIbSTeO_SlXq8SvoGf1MeOf9H8CVPWoOC5M9Bvd-0lct0J6lbh_ZeMgQ/exec"
      );
      const data = await response.json();
      setAnnouncements(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {announcements.map((announce, index) => (
        <div key={index}>
          <h2>{announce.title}</h2>
          <p>{announce.datetime}</p>
          <p>{announce.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcement;
