import 'bootstrap/dist/css/bootstrap.min.css' //  부트스트랩 라이브러리 
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {SERVERIP} from '../../CommonUtil';
import {Link} from "react-router-dom";


function ScoreList(props){
    const [scoreList, setScoreList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        async function loadData (){
            const url = SERVERIP+"/score/list";
            await axios.get(url)
            .then((res)=>{
                setScoreList(res.data);
                setLoading(true);
                console.log(res)
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        loadData();
    }, [])

    return(
        <div className="container">
            <h1>성적 목록</h1>
            <div className="input-group mb-3" style={{marginTop:"20px"}}>
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                    선택하세요
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">제목</a></li>
                    <li><a className="dropdown-item" href="#">내용</a></li>
                    <li><a className="dropdown-item" href="#">제목+내용</a></li>
                </ul>
                <input type="text" className="form-control" placeholder="Search"/>
                <button className="btn btn-secondary" type="submit">Go</button>
            </div>

            <table className="table table-hover ">
                <thead className="table-secondary">
                    <tr>
                        <th>Id</th>
                        <th>이름</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            loading === true?
                            scoreList.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.user_name}</td>
                                        <td>{item.kor}</td>
                                        <td>{item.eng}</td>
                                        <td>{item.mat}</td>
                                    </tr>
                                )
                            })
                            :""
                        }
                                
                </tbody>

            </table>
        </div>
    )

}

export default ScoreList;