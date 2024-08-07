const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 7000;

app.use(cors());
app.use(bodyParser.json());

let announcements = [
  { id: 1, title: "お知らせ", content: "7月分のレッスン予約受付中です" },
];

app.get("/api/announcements", (req, res) => {
  res.json(announcements);
});

app.post("/api/announcements", (req, res) => {
  const newAnnouncement = {
    id: announcements.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  announcements.push(newAnnouncement);
  res.status(201).json(newAnnouncement);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
