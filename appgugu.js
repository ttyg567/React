var express = require("express")
var app = express();

// http://127.0.0.1:4000/gugu?dan=4
app.get("/gugu", (request, response) => {
    let dan = request.query.dan;  // 곱셈을 하므로 parseInt 없어도 자동형변환됨(문자는 곱셈 불가)
    let result = "";
    for (i = 1; i <= 9; i++) {
        result += `${dan} * ${i} = ${dan * i} <br/>`;
    }
    response.writeHead(200, { "Content-type": "text/html" });
    response.end(result);
    //response.end("hello"); -> 만약 이미 완료되었는데 또 보내면 화면에는 나오지만 콘솔에서 에러 발생

})

// http://127.0.0.1:4000/gugu/4
app.get("/gugu/:dan", (request, response) => {
    let dan = request.params.dan;  // url 따라서 :dan
    let result = "";
    for (i = 1; i <= 9; i++) {
        result += `${dan} * ${i} = ${dan * i} <br/>`;
    }
    response.writeHead(200, { "Content-type": "text/html" });
    response.end(result);
    //response.end("hello"); -> 만약 이미 완료되었는데 또 보내면 화면에는 나오지만 콘솔에서 에러 발생

})

app.use((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("<H1>Express</H1>")
});


app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
})



