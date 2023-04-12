// Fortest1.js
import React, {useState} from "react";
function Fortest2(props){
    const [fruitList, setFruitList] = useState(["사과", "배", "포도", "수박", "머루"]);
    const [fruit, setFruit] = useState("");

    // input 태그에서 값을 입력하면 fruit 변수에 값을 저장
    const onChange=(e)=>{
        setFruit(e.target.value);
    }

    // 추가 버튼을 누르면 fruit 변수의 값을 fruitList에 추가한다
    const goAppend=()=>{
        // 배열의 push 함수 사용 못함, 원래 배열에 데이터 추가
        // 배열 자체를 새로 만들어 바꿔치기를 해야한다
        // push - 원래 배열 메모리에 추가
        // concat - 새로운 배열을 만들어서 기존 배열의 내용을 복사하고 하나에 추가
        setFruitList( fruitList.concat(fruit));
        setFruit(""); // input 태그 공백 채우기

    }

    const goSelect=(index)=>{
        alert(fruitList[index]);
    }

    return(
        <div>
            <input type="text" onChange={onChange} value={fruit}/>
            <button type="button" onClick={goAppend}>추가하기</button>
            <br/>
            <ul>
            {
                fruitList.map( (item, index) => {
                    return(
                        <li key={index}>
                            <a href="#none" onClick={()=>{goSelect(index)}}> {item} </a>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    )
}

// #none 앵커태그 입력할 때 화면을 고정시킴 (뭔가 입력할 때 칸 누르면 화면 맨 위로 올라가거나 하지 않게함)


export default Fortest2;
