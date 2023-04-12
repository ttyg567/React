import React, {useState} from "react";
import axios from 'axios';

function HeroWrite(prop){
    const [hero_name, setHeroName] = useState("");  
    //useState함수가 문자열 변수와 변수 값을 바꾸는 함수를 만들어서 배열 형태로 전달한다
    const [hero_desc, setHeroDesc] = useState("");

    // input 태그에 값이 바뀌면 이 함수가 호출
    const heroNameChange = (e) =>{
        setHeroName(e.target.value);
    }
    // input 태그에 값이 바뀌면 이 함수가 호출
    const heroDescChange = (e) =>{
        setHeroDesc(e.target.value);
    }

    // form 태그를 써서 서버로 전송할 때 <button> 태그에 type="button" 속성이 없으면
    // 버튼을 누를 때 submit() 함수가 호출된다
    // submit 함수가 호출되면 form 태그에 onSubmit 이벤트핸들러가 호출된다. 이때, 잡아채서 서버에 전송하는 처리를 한다
    // onSubmit 함수의 경우 무조건 서버로 전송을 한다. 이걸 막기 위해서 preventDefault()함수를 호출한다

    const onSubmit = (e) =>{
        e.preventDefault(); // form 태그를 통해 서버에 정보를 전송전에 호출된다.
                            // 버튼의 기본 기능을 정지시킨다. submit버튼의 submit 기능을 막고,
                            // 별도의 처리를 한다
        
        // spring 은 데이터를 문자열로 와야 받는다
        // Axios는 json으로 데이터를 주고 받는다
        axios.post("http://localhost:9090/hero/write",
            {hero_name:hero_name, hero_desc:hero_desc})
        .then( (res)=> {
            console.log(res.data.result);
            window.location.reload(); // 화면 다시 불러오기
            // location 객체는 원래 존재하는데 부모가 윈도우
            // 보통의 경우는 react가 아니면 location.reload() 만 호출해도 되는데
            // react는 window.location.reload()로 호출하도록 되어있다
        })
        .catch( (error) =>{
            console.log(error);
        })
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3> 영웅 </h3>
                이름: <input type="text" onChange={heroNameChange}></input> <br/>
                업적: <input type="text" onChange={heroDescChange}></input> <br/>

                <button> 추가 </button>

            </form>
            
        </div>
    )
}

export default HeroWrite;
