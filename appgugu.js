var express = require("express")
var app = express(); // 서버 만들었음

// http://127.0.0.1:4000/gugu?dan=4
app.get("/gugu", (req, res) => {
    dan = req.query.dan;
    var i;
    for (i = 1; i <= 9; i++) {
        z = parseInt(dan) * i;
    }
    res.send({ z: z });
})

app.use((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("<H1>Express</H1>")
});


app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
})
