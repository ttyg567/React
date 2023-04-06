let express = require('express');
let router = express.Router();
let commonDB = require("./commonDB");
var app = express();
var fs = require("fs");
var ejs = require("ejs");

// ejs엔진은 views폴더 아래서 파일을 검색한다
app.set("view engine", ejs);
app.use(express.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', async function(req, res, next) {
  let sql=`
    select id, title, writer, 
    contents, date_format(wdate, '%Y-%m-%d') wdate
    from tb_board
  `;
  
  let results = await commonDB.mysqlRead(sql, []);
  res.render('board/board_list', { boardList: results });
});

router.get('/view/:id', async function(req, res, next) {
  
  let id = req.params.id;
  let sql = `select id, title, writer, 
            contents, date_format(wdate, '%Y-%m-%d') wdate 
            from tb_board 
            where id=${id}`;
  let results = await commonDB.mysqlRead(sql, []);

  res.render('board/board_view.ejs', { item: results[0] });
});

module.exports = router;
