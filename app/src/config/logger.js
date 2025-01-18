const {createLogger, transports, format} = require("winston"); //winston에서 createLogger, transports, format을 가져와 쓰겠다. 이러면 winston.createLogger같은 경우 creatLogger로 키워드 없이 사용 가능
const {combine, timestamp, label, printf, simple, colorize} = format;

const printFormat = printf(({timestamp, label, level , message}) => {
    return `${timestamp} [${label}] ${level} : ${message}`
});

const printLogFormat = {
    fiie: combine(
    label ({
        label: "백엔드 맛보기",
    }),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat
    ),
    console: combine(
        colorize(),
        simple()
    )
};

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: ".logs",
        level: "info",
        format: printLogFormat.file,
    }),

    console: new transports.Console({  //개발중에는 console로도 확인하는게 좋음. 따라서 console을 추가.
        level: "info",
        format: printLogFormat.console,
    }),
}

const logger = createLogger({
    transports: [opts.file],
});

if (process.env.NODE_ENV !=="production") { //개발중인지 서비스 중인지 에 따라서 console을 보여주냐 안보여주냐 동작하는 메서드 환경변수 맨 윗줄에서 dev면 개발용, production이면 배포중인 서버
    logger.add(opts.console);
}

logger.stream = {
    write : (message) => logger.info(message),
};


module.exports= logger;