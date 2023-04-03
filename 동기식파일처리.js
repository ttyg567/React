// 동기식 파일 처리
// 파일을 모두 읽고 나서 리턴한다
var fs = require("fs");
// require - 외부모듈을 프로그램 안으로 불러온다
/* 주의사항 - java 의 import 가 아님
            java의 import는 라이브러리를 메모리로 불러들이는게 아니고 
            라이브러리 이름을 짧게 썼을 때, 본래의 긴 이름을 제시해주는 역할
            import java.util.List
             
            List<String> list; 라고 쓰면 List의 풀네임을 써야 맞는다
            java.util.List<String> list 그런데 너무 기니까 앞에처럼 짧게 쓰고
            전체 풀네임은 위의 import구문으로 확인하라는 의미,
            라이브러리 자체는 이미 불러와있는 상태이다

*/

var data = fs.readFileSync("./hello.js", "utf-8");
console.log(data);
console.log("프로그램 종료");


