let http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end("<h1>Hello my first Webserver</h1>")
}).listen(3000, () => {
    console.log("server start http://127.0.0.1:3000");
})

// 터미널에서 ctrl + c 를 눌러서 끝내야한다