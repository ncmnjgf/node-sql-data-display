const mysql = require("mysql2");

// Create connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // Your MySQL username
  password: "dada@123",        // Your MySQL password
  database: "information"   // Database name
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.log("❌ Error connecting to MySQL:", err);
    return;
  }
  console.log("✅ Connected to MySQL database!");
});

module.exports = db;
