db.query("SELECT * FROM users", (err, results) => {
  if (err) {
    console.log("❌ Query error:", err);
  } else {
    console.log("✅ Data:", results);
  }
});
