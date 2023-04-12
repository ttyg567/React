//HeroList.js - 백엔드서버로부터 데이터를 가져온다
// axios 설치 필요 - npm install axios 
import React, {useState, useEffect} from "react"
import axios from 'axios';


function HeroList(props){
    const [heroList, setHeroList] = useState([]);
    const [loading, setLoading] = useState(false); // 데이터를 수신하면 true로 바뀐다
    // useState함수가 값을 초기화를 해주면 해당 값을 저장할 변수와 해당값을 변경하는 함수를 반환함
    // [] -> 배열을 저장할 변수 반환, 배열값을 변환할 함수주소

    // useEffect(()=>{}, []);
    // 첫번째 매개변수 - mount 될 때, update 될 때, unmount 될 때 호출 되어진다
    // [] - 변수: 변수들이 바뀔 때 호출
    useEffect(()=>{
        // 서버에서 데이터를 불러온다
        /*console.log("나 호출된다.")
        setHeroList( heroList.concat([
            {id:1, name:"이순신", desc:"임진왜란으로부터 나라를 구함"},
            {id:2, name:"세종대왕", desc:"한글 창제"},
            {id:3, name:"강감찬", desc:"귀주대첩"}
        ]))*/
        // promise 기반 컴포넌트
        axios.get("http://localhost:9090/hero/list")
        .then( 
            (res)=>{
            console.log("*************")   
            console.log(res);
            setHeroList(res.data);
            setLoading(true);
        })
        .catch((res, status, error)=>{
            console.log(status);
        })

    }, []);

    return (
        <div>
            <h1>히어로 리스트</h1>
            <table>
                {
                    loading === true?
                        heroList.map((item, index) => {
                            return (
                                <tr key={index}><td>{item.id}</td>
                                <td>{item.hero_name}</td>
                                <td>{item.hero_desc}</td></tr>
                            );
                        })
                    :""
                }
            </table>
        </div>
    )
}

export default HeroList;