"use strict";

const app = require("../app");
const logger = require("../src/config/logger");
const port = process.env.port;

app.listen(port, () => { 
    logger.info(`${port} 포트에서 서버가 실행되었습니다.`); //서버의 진입이 성공하면 출력
  });
  