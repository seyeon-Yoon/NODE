"use strict";

const db=require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {  //Promise 안에 있는 구문이 성공하면 resolve를 실행, 실패할경우 reject를 실행
            const query ="SELECT * FROM user WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`{err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {  //Promise 안에 있는 구문이 성공하면 resolve를 실행, 실패할경우 reject를 실행
            const query ="INSERT INTO user(id, name, passwrod) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.password], (err) => {
                if (err) reject(`${err}`);
                resolve({success : true});
            });
        });
        }
}

module.exports = UserStorage;