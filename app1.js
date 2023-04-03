var express = require("express")
var app = express(); // 서버 만들었음

// express 모듈 자체가 use, get, post 함수 3개가 있음
// use - get, post 둘 다 가능
// get - get 방식으로 온 것만
// post - post 방식으로 온 것만

// app.use("/test", (request, response) => {
//     response.writeHead(200, { "Content-type": "text/html" });
//     response.end("<H1>Test</H1>")
// });

app.get("/get", (request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("<H1>GET</H1>")
});

app.get("/userinfo", (req, res) => {
    let userinfo = { name: "Tom", "phone": "010-0000-0000" };
    res.send(userinfo); //send 함수를 이용해서 JSON 데이터 송신
})

//http://127.0.0.1:4000/userinfo2?name=Jane&phone=01000000000
app.get("/userinfo2", (req, res) => {
    let userinfo = {
        name: req.query.name,
        phone: req.query.phone
    };
    res.send(userinfo); //send 함수를 이용해서 JSON 데이터 송신
});

// get 방식 - 새롭게 추가된 url 방식
//http://127.0.0.1:4000/userinfo3/Brown/user01
app.get("/userinfo3/:username/:userid", (req, res) => {
    let userinfo = {
        username: req.params.username,
        userid: req.params.userid
    };
    res.send(userinfo); //send 함수를 이용해서 JSON 데이터 송신
});



app.post("/post", (request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("<H1>POST</H1>")
});

// 다른 url 처리 없을 때 처리한다, 이 파일 처럼 순서 지켜야함 얘가 맨 밑에
app.use((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("<H1>Express</H1>")
});


app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
})
