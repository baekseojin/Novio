const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// 임시 데이터베이스 대신 사용할 변수
let records = [];

// POST 요청을 처리하는 라우트
app.post("/api/record", (req, res) => {
  const record = req.body;

  if (record) {
    records.push(record);
    console.log("Record received:", record);
    res.status(201).json({ message: "Record received successfully" });
  } else {
    res.status(400).json({ error: "Invalid data format" });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
