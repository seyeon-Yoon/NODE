"use strict";

const app = require("../app");
const port = process.env.port;

app.listen(port, () => { 
    console.log(`서버가 실행되었습니다. ${port}`); //서버의 진입이 성공하면 출력
  });
  