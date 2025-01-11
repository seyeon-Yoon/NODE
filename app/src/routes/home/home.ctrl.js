"use strict";

const UserStorage = require("../../models/UserStorage");
const output = {
    home: (req, res) => {
        res.render('home/index'); //   /index.ejs를 불러와라
    },
    login: (req, res) => {
        res.render('home/login'); //   /login.ejs를 불러와라
    },
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
            password = req.body.password;

        const users = UserStorage.getUsers("id", "password");

        const response ={};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },   
};

module.exports = {  //모듈은 key : value 형태인데 아래와 같이 key만 입력해준다면 자체적으로 value에 key와 동일한 value를 넣어줌
    output,
    process,
};