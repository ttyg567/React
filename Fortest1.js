// Fortest1.js
import React, {useState} from "react";
function Fortest1(props){
    const [fruitList] = useState(["사과", "배", "포도", "수박", "머루"]);
    const goSelect=(index)=>{
        alert(fruitList[index]);
    }

    return(
        <div>
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


export default Fortest1;
