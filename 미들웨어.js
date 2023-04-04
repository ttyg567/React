var express = require("express")
var app = express(); // 서버 만들었음

// 첫번째 미들웨어
app.use((request, response, next) => {
    // request 는 브라우저 -> 서버 로 정보를 보낼 때 정보를 가지고 있는 객체
    // response는 서버 -> 브라우저
    // next 는 다음 함수를 호출한다
    request.name = "홍길동";
    response.name = "john";
    console.log("a");
    next();
});

// 두번째 미들웨어
app.use((request, response, next) => {
    console.log("b");
    request.phone = "010-0000-0000";
    response.address = "서울시 영등포구";
    next();
});

app.use((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    console.log(request.name);
    console.log(response.name);
    console.log(request.phone);
    console.log(response.address);
    response.end("<H1>Express</H1>")
});


app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
})
