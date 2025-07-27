import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";
import "./Announcement.css";

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

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    return `${date.getFullYear()}年${
      date.getMonth() + 1
    }月${date.getDate()}日 ${date.getHours()}時${date.getMinutes()}分`;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <img
        src="/hikaru_chello.jpg"
        alt="hikaru chello"
        className="circleImage"
      />
      <Box
        sx={{
          maxWidth: 600,
          width: "80%",
          maxHeight: 400,
          overflowY: "auto",
          overflowX: "hidden",
          p: 2,
          mx: "auto",
          my: 4,
          bgcolor: "#f7f7f7",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.1)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.1)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            outline: "1px solid slategrey",
          },
        }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ textAlign: "center", mt: 2, mb: 4 }}>
          お知らせ
        </Typography>
        {[...announcements].reverse().map((announce, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{ p: 2, my: 2, wordWrap: "break-word" }}>
            <Typography variant="h6" component="h2">
              {announce.title}
            </Typography>
            <Typography color="textSecondary">
              {formatDate(announce.datetime)}
            </Typography>
            <Typography variant="body1">{announce.content}</Typography>
          </Paper>
        ))}
      </Box>
      <img src="/rena_chello.jpg" alt="rena chello" className="circleImage" />
    </div>
  );
};

export default Announcement;
