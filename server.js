const express = require("express");
const db = require("./db");
const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  db.query("SELECT * FROM students1", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Query Failed" });
    }
    res.json(results);
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
