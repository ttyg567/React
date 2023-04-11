import React, {useState} from "react";

function Inputscore(props){
    const [name, setName] = useState("");
    const [kor, setKor] = useState();
    const [eng, setEng] = useState();
    const [mat, setMat] = useState();
    const [z, setZ] = React.useState(0);
    const [d, setD] = React.useState(0);

    const nameChange = (e) => {
        setName( e.target.value );
    }

    const korChange = (e) => {
        setKor( e.target.value );
    }
    const engChange = (e) => {
        setEng( e.target.value );
    }
    const matChange = (e) => {
        setMat( e.target.value );
    }

    const add = () => {
        setZ(parseInt(kor)+parseInt(eng)+parseInt(mat));
        setD((parseInt(kor)+parseInt(eng)+parseInt(mat))/3);
    }

    let mystyle = {
        color: "white",
        backgroundColor:"skyblue",
        fontSize: "20pt",
        padding: "10px 5px 10px 5px"
    }



    return(
        <div>
            이름: <input style={mystyle} type="text" onChange={nameChange}/><br/>
            국어: <input style={mystyle} type="text" onChange={korChange}/><br/>
            영어: <input style={mystyle} type="text" onChange={engChange}/><br/>
            수학: <input style={mystyle} type="text" onChange={matChange}/><br/>
            <button type="button" onClick={add}>결과확인</button> <br/>
            <h1>{name}의 총점은 {z}점이고, 평균은 {d}점 입니다. </h1>


        </div>
    )

}

export default Inputscore;