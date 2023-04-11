import React, {useState} from "react";

// props 사용하던 안하던 기본적으로 매개변수를 부여해주는것이 나음
function Inputtest(props){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    
    // 람다함수로 사용해야함(일반 함수의 경우 생성자에서 바인딩이라는 작업을 해야한다)
    const nameChange = (e) =>{
        // 인자가 - 발생한 이벤트의 모든 정보를 가지고 있다
        // 키를 누른 모든 값이 저장되어 있다
        // console.log( e.target.value );  // 확인하려고 넣은 것
        setName( e.target.value ); // name 변수의 값이 바뀐다
    }

    const ageChange = (e) =>{
        setAge( e.target.value ); 
    }

    const emailChange = (e) =>{
        setEmail( e.target.value ); 
    }
    
    let mystyle = {
        color: "white",
        backgroundColor:"blue",
        fontSize: "20pt",
        padding: "20px 10px 20px 10px"
    }


    return(
        <div>
            {/*태그를 꼭 닫아줘야 에러 발생 안함*/}
            이름: <input type="text" onChange={nameChange} 
                        style={{color:"red", backgroundColor:"lightblue"}}/><br/>
            나이: <input style={mystyle} type="text" onChange={ageChange}/><br/>
            이메일: <input type="text" onChange={emailChange}/><br/>
            
            <p> {name} {age} {email} </p>
        </div>
    )
}

export default Inputtest;