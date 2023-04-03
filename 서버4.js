let http = require("http");
let fs = require("fs"); //파일 읽기
let url = require("url"); //url 분석을 위한 라이브러리

//http:127.0.0.1:4000/add?x=48&y=5
//http:127.0.0.1:4000/sub?x=48&y=5
//http:127.0.0.1:4000/userinfo?userid=test&username=Tom

let server = http.createServer((request, response) => {
    //console.log(request);
    //console.log(request.url); //전송url
    console.log(request.method); //전송방식

    let rurl = request.url;
    let pathname = url.parse(rurl, true).pathname; // add
    let query = url.parse(rurl, true).query; //{ x: '48', y: '5' }
    // string분석 -> json 객체로 변환 : 파싱한다
    console.log(query);
    console.log(pathname);
    console.log(typeof (query));

    if (pathname == "/add") {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        let x = parseInt(query.x);
        let y = parseInt(query.y);
        let z = x + y;
        response.end(`${query.x} + ${query.y} = ${z}`);
    }
    else if (pathname == "/sub") {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        let x = parseInt(query.x);
        let y = parseInt(query.y);
        let z = x - y;
        response.end(`${query.x} - ${query.y} = ${z}`);
    }
    else if (pathname == "/userinfo") {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(`userid: ${query.userid} username: ${query.username}`);
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end("<h1> 존재하지 않는 url 입니다.</h1>");
    }


})

server.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
})

// 터미널에서 ctrl + c 를 눌러서 끝내야한다

