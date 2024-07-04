const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

console.log("MySQL 연결됨~");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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

app.get("/records", (req, res) => {
  const { date } = req.query;
  const query = `SELECT * FROM record WHERE DATE(time) = ?`;
  connection.query(query, [date], (error, results) => {
    if (error) throw error;

    console.log(results);

    res.json(results);
  });
});

// PUT 요청 처리 (특정 날짜의 일기 수정)
app.put("/api/record", (req, res) => {
  const { date } = req.body;
  const record = req.body;

  console.log(`Updating record for date: ${date}`, record);

  if (record && date) {
    const { observation, feeling, need, request } = record;
    const query =
      "UPDATE record SET record_observation = ?, record_feeling = ?, record_need = ?, record_request = ? WHERE DATE(time) = ?";
    const values = [observation, feeling, need, request, date];

    connection.query(query, values, (err, result) => {
      if (err) {
        console.error("Error updating record:", err);
        res.status(500).json({
          error: "레코드 데이터를 업데이트하는데 실패했습니다.",
        });
        return;
      }
      if (result.affectedRows === 0) {
        res
          .status(404)
          .json({ message: "해당 날짜를 가진 레코드를 찾을 수 없습니다." });
      } else {
        res.status(200).json({ message: "데이터 성공적으로 업데이트됨." });
      }
    });
  } else {
    res.status(400).json({ error: "Invalid data format" });
  }
});
// DELETE 요청 처리 (특정 날짜의 일기 삭제)
app.delete("/api/record", (req, res) => {
  const { date } = req.body;

  console.log(`Deleting record for date: ${date}`);

  if (date) {
    const query = "DELETE FROM record WHERE DATE(time) = ?";
    connection.query(query, [date], (err, result) => {
      if (err) {
        console.error("Error deleting record:", err);
        res.status(500).json({
          error: "레코드 데이터를 삭제하는데 실패했습니다.",
        });
        return;
      }
      if (result.affectedRows === 0) {
        res
          .status(404)
          .json({ message: "해당 날짜를 가진 레코드를 찾을 수 없습니다." });
      } else {
        res.status(200).json({ message: "데이터 성공적으로 삭제됨." });
      }
    });
  } else {
    res.status(400).json({ error: "Invalid data format" });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버 여기서 돌아간다 -> http://localhost:${port}`);
});
