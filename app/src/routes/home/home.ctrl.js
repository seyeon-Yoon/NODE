"use strict";

const output = {
    home: (req, res) => {
        res.render('home/index'); //   /index.ejs를 불러와라
    },
    login: (req, res) => {
        res.render('home/login'); //   /login.ejs를 불러와라
    },
};

const users = {
    id: ["태그"],
    password: ["1234"],
}

const process = {
    login : (req, res) => {
        const id = req.body.id,
            password = req.body.password;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                return res.json ({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },   
};

module.exports = {  //모듈은 key : value 형태인데 아래와 같이 key만 입력해준다면 자체적으로 value에 key와 동일한 value를 넣어줌
    output,
    process,
};