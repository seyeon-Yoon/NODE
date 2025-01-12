"use strict";

const { response } = require("express");
const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render('home/index'); //   /index.ejs를 불러와라
    },
    login: (req, res) => {
        res.render('home/login'); //   /login.ejs를 불러와라
    },
    register: (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },   

};

module.exports = {  //모듈은 key : value 형태인데 아래와 같이 key만 입력해준다면 자체적으로 value에 key와 동일한 value를 넣어줌
    output,
    process,
};

