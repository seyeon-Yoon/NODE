"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (password.value !== confirmPassword.value) 
        return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: name.value,
        password : password.value,
    };
    
    fetch("/register", {
        method: "POST", //restAPI와 관련되어있음.
        headers: {  //데이터타입을 명시적으로 알려줌
            
            "Content-Type" : "application/json" //내가보내는 데이터타입
        },
        body: JSON.stringify(req),  // 해당데이터를 문자열로 바꿔주는 메서드
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = '/login';
            } else {
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
}