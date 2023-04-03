let http = require("http");
let fs = require("fs");
let ejs = require("ejs"); // npm install ejs


let scoreData = [
    { name: "홍길동", kor: 90, eng: 90, mat: 100 },
    { name: "임꺽정", kor: 90, eng: 90, mat: 100 },
    { name: "장길산", kor: 40, eng: 70, mat: 85 },
    { name: "강감찬", kor: 60, eng: 85, mat: 95 },
    { name: "이순신", kor: 70, eng: 66, mat: 100 }
]



let server = http.createServer
    ((request, response) => {
        fs.readFile("./html/score.html", "utf-8", (error, data) => {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
                response.end("error");  //오류상황
                return;
            }

            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            response.end(ejs.render(data, {
                scoreData: scoreData
            }));

            // ejs 템플릿 엔진을 통해서 html과 nodejs의 데이터를 결합한다
        })
    })

server.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
})



