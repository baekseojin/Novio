const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

console.log("MySQL 연결됨~");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "novio",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// POST 요청 처리
app.post("/api/record", (req, res) => {
  const record = req.body;

  console.log(record);

  if (record) {
    const { observation, feeling, need, request } = record;
    const query =
      "INSERT INTO record (record_observation, record_feeling, record_need, record_request) VALUES (?, ?, ?, ?)";
    const values = [observation, feeling, need, request];

    connection.query(query, values, (err, result) => {
      if (err) {
        console.error("Error inserting record:", err);
        res.status(500).json({
          error: "레코드 데이터를 데이터베이스에 저장하는데 실패했습니다. ",
        });
        return;
      }
      res.status(201).json({ message: "데이터 성공적으로 저장됨." });
    });
  } else {
    res.status(400).json({ error: "Invalid data format" });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버 여기서 돌아간다 -> http://localhost:${port}`);
});
