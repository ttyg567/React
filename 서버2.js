let http = require("http");

let server = http.createServer
    ((request, response) => {
        // 브라우저에서 http://127.0.0.1:3000 서버로 엑세스 요청이 들어오면 
        // request 객체는 브라우저에서 요청한 정보를 담아오는 객체
        // response 객체는 서버에서 클라이언트로 정보를 보낼 때 여기에 담아서 보낸다
        // 
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end("<h1>두번째 서버입니다</h1>")
    })

server.listen(3000, () => {
    console.log("server start http://127.0.0.1:3000");
})

// 터미널에서 ctrl + c 를 눌러서 끝내야한다

