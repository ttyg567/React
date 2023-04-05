var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var guestRouter = require("./routes/guestbook");  // 모듈을 메모리로 가져온다
var ajaxRouter = require("./routes/ajaxtest"); 
var scoreRouter = require("./routes/score");

var app = express();

// view engine setup (내부 환경변수 설정)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 미들웨어들 사용
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// static - image, css, js
// nodejs가 __(언더바 두개)로 시작하는 변수나 함수는 내장변수나 함수이다
// __dirname : 내장변수, 현재 디렉토리 경로를 갖고 있다
// path.join : path - 전체 디렉토리 경로에 대한 관리를 도와준다
// join은 합친다는 의미, 
// path.join(__dirname, 'public') -> c:/temp/public 형태로 전체 경로를 만들어준다 c:\\temp\\public

console.log(__dirname);
console.log(path.join(__dirname, 'public'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// url이 /guestbook 으로 시작할 경우 guestRouter가 처리한다
app.use('/guestbook', guestRouter);
app.use('/ajax', ajaxRouter);
app.use('/score', scoreRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// npm install nodemon
// npm install -g nodemon 둘 다 해주기
//터미널에서 아래 화살표 눌러서 command prompt로 바꿔준다

// nodemon start
// npx nodemon start (위에꺼 안되면 이렇게 실행)