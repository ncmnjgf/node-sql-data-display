# 📌 Node.js + MySQL CRUD API

This project demonstrates how to connect **Node.js (Express.js)** with **MySQL**, perform basic CRUD operations, and manage environment variables securely using `.env` and `.gitignore`.

---

## 🚀 Features

- Connect Node.js to MySQL database
- REST API endpoints for CRUD operations
- Environment variable protection using `.env`
- MySQL queries using `mysql2` library

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| Node.js    | Backend runtime |
| Express.js | Web framework for API |
| MySQL      | Database |
| mysql2     | MySQL driver for Node.js |
| dotenv     | Loads environment variables |

---

## 📂 Project Structure

project-folder/
│── node_modules/   -> ignored by git
│── app.js          -> Main server file
│── db.js           -> DB connection file
│── package.json
│── .env            -> Environment variables (ignored by git)
│── .gitignore
└── README.md

---

## ⚙️ Install Dependencies

Run this command:

```sh
npm install express mysql2 dotenv


🗄️ Setup MySQL Database


Install MySQL (XAMPP/MAMP/Workbench)


Create a database:


CREATE DATABASE testdb;



Create a table (example):


CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255),
   email VARCHAR(255)
);


🔐 Create .env File
Create a .env file in the root folder:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=testdb
PORT=5000


🛑 Add .gitignore
node_modules/
.env


▶️ Run the Project
node app.js

Server will run on:
👉 http://localhost:5000

✅ Sample API Endpoints
MethodEndpointDescriptionGET/usersGet all usersPOST/usersInsert a userPUT/users/:idUpdate userDELETE/users/:idDelete user

📄 License
This project is open-source and available under the MIT License.

⭐ If you like this project, give it a star on GitHub!
