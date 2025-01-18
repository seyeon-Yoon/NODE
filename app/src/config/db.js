const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DB_HOST, //rds상 DB의 엔드포인트
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect();  //위의 내용에 대해 db에 연결을 요청하는 메서드

module.exports =db;