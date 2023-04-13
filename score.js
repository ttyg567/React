var express = require('express');
var router = express.Router();
let commonDB = require("./commonDB");

//http://localhost:9090/score/list
/* GET home page. */
router.get('/list', async function(req, res, next) {
    let sql = 
    `
        SELECT A.id, A.user_name, A.kor, A.eng, A.mat, date_format(A.wdate, '%Y-%m-%d') wdate
        FROM tb_score A
    
    `;

    let results = await commonDB.mysqlRead(sql, []);
    res.json(results);

    
});

module.exports = router;