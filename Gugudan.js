import React, {useState} from "react";

function Gugudan(props){
    const [iList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]); 
    const [dan, setDan] = useState(0);
    const [show, setShow] = useState(false); //show가 true일 때만 화면에 구구단 출력

    const danChange = (e) =>{
        setShow(false); //shwo를 false로 해서 입력하지 않았을 때 화면에 출력을 막음
        setDan( e.target.value ); // 단 값 입력
    }

    const goConfirm=()=>{
        setShow(true); // 확인 버튼을 누르면 show -> true로 바뀌면서 화면에 출력
    }

    return(
        <div>
            단: <input type="text" onChange={danChange}/><br/>
            <button type="button" onClick={goConfirm}> 확인 </button> <br/> <br/>
            <ul>
            {
                show?
                iList.map( (item, index) =>{
                    return(
                        <li key={index}>
                            {dan} X {item} = {dan*item}
                        </li>
                    )
                })
                :""
            }
            </ul>
        </div>
    )

}

export default Gugudan;