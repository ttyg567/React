var express = require("express")
var app = express(); // 서버 만들었음

//http://127.0.0.1:4000/add?x=45&y=7
app.get("/add", (req, res) => {
    x = req.query.x;
    y = req.query.y;
    z = parseInt(x) + parseInt(y);
    res.send({ x: x, y: y, z: z });
})

//http://127.0.0.1:4000/add1/45/7
app.get("/add1/:x/:y", (req, res) => {
    x = req.params.x;
    y = req.params.y;
    z = parseInt(x) + parseInt(y);
    res.send({ x: x, y: y, z: z });
})


app.use((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("<H1>Express</H1>")
});


app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
})
