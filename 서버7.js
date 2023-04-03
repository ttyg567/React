let http = require("http");
let fs = require("fs");
let ejs = require("ejs"); // npm install ejs


let server = http.createServer
    ((request, response) => {
        fs.readFile("./html/test.html", "utf-8", (error, data) => {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
                response.end("error");  //오류상황
                return;
            }

            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            response.end(ejs.render(data, {
                name: "홍길동",  // html파일에 <%=%> 에 썼던 위치에 이 값을 바꿔치기해서 보여준다
                age: 23,
                address: "서울시 양천구",
                limit: 10
            }));

            // ejs 템플릿 엔진을 통해서 html과 nodejs의 데이터를 결합한다

        })
    })

server.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
})



