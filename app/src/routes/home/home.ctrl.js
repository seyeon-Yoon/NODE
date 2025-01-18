"use strict";

const { response } = require("express");
const logger = require("../../config/logger");
const User = require("../../models/User");


const output = { //output은 http에서 get 메서드에 해당함
    home: (req, res) => {
        logger.info(`GET / 200 "홈 화면으로 이동"`);
        res.render('home/index'); //   /index.ejs를 불러와라
    },
    login: (req, res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동"`);
        res.render('home/login'); //   /login.ejs를 불러와라
    },
    register: (req, res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
        res.render("home/register");
    },
};

const process = { //procee는 http에서 post 메서드에 해당함
    login : async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if (response.err)
            logger.error(
        `POST /login 200 Response: "success: ${response.success}, ${response.err}"`
        );
        else
        logger.info(
            `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
    },   
    register : async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err)
            logger.error(
        `POST /login 200 Response: "success: ${response.success}, ${response.err}"`
        );
        else
            logger.info(
                `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
            );
        return res.json(response);
    }

};

module.exports = {  //모듈은 key : value 형태인데 아래와 같이 key만 입력해준다면 자체적으로 value에 key와 동일한 value를 넣어줌
    output,
    process,
};

