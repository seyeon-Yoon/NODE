"use strict";

// 모듈 및 포트설정
const express = require('express') //express import
const app = express() //express import

//라우팅
const home = require("./src/routes/home");


//앱 세팅
app.set("views", "./src/views"); //뷰엔진에 대한 세팅
app.set("view engine", "ejs"); //뷰엔진을 ejs로 쓰겠다

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;