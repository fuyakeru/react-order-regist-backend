const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "react_app_practice",
});

// 商品区分管理テーブル取得
app.get("/getDivName", (req, res) => {
  connection.query("SELECT * FROM `mcnd_div`", function (err, results, fields) {
    if (err) {
      console.log("接続終了(異常)");
      throw err;
    }
    let mcndDivResData = [];
    results.forEach((result) => {
      mcndDivResData.push(result);
    });
    res.json({ results });
  });
  console.log("接続終了(正常)");
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
