import 'bootstrap/dist/css/bootstrap.min.css' //  부트스트랩 라이브러리 
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {SERVERIP} from '../../CommonUtil';
import {Link, useNavigate, useParams} from "react-router-dom";


function BoardWrite(props){
    let {id} = useParams(); // 보내는 쪽에서 json객체로 보냄 
    let history = useNavigate();

    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [contents, setContents] = useState("");

    useEffect(()=>{
        console.log("id", id)
        async function loadData(id){
            let results = await axios.get(SERVERIP+"/board/view/"+id);
            console.log(results.data.board.title);
            console.log(results.data.board.writer);
            console.log(results.data.board.contents);

            setTitle(results.data.title);
            setWriter(results.data.writer);
            setContents(results.data.contents);
        }
        if( id!=undefined) // write가 아니고 view로 호출할 때
            loadData(id);
        // window.onload의 역할
        // BoardWrite 컴포넌트가 /board/write 일 때는 id에는 undefined가 오고
        // /board/view/1 id에는 파라미터 값이 저장된다
    },[]);

    const titleChange=(e)=>{
        setTitle(e.target.value);
    }
    const writerChange=(e)=>{
        setWriter(e.target.value);
    }
    const contentsChange=(e)=>{
        setContents(e.target.value);
    }


    // 서버로 전송하기
    const postData=()=>{
        // 데이터를 json 으로 묶어서 보내야한다
        let data={"title":title, "writer":writer, "contents":contents};
        axios.post(SERVERIP+"/rest_board/write", data)
        .then( (res)=>{
            console.log(res.data);
            history("/board/list"); //redirect에 대응
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div className="container">
            <h1> 게시판 글쓰기 </h1>
                <table className="table table-hover " style={{marginTop: "30px"}}>
                    <colgroup>
                        <col width="25%"/>
                        <col width="*"/>
                    </colgroup>
            
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td>
                                <div className="mb-3" style={{marginTop: "13px"}}>
                                    <input type="text" className="form-control" 
                                    value={title}
                                    placeholder="제목을 입력하세요" onChange={titleChange} />
                                </div>
                            </td>
                        </tr>       
                        <tr>
                            <td>작성자</td>
                            <td>
                                <div className="mb-3" style={{marginTop: "13px"}}>
                                    <input type="text" className="form-control" 
                                    value={writer}
                                    placeholder="작성자를 입력하세요" onChange={writerChange}/>
                                </div>
                            </td>
                        </tr>      
                        <tr>
                            <td>내용</td>
                            <td>
                                <div className="mb-3" style={{marginTop: "13px"}}>
                                    <input type="text" className="form-control" 
                                    value={contents}
                                    placeholder="내용을 입력하세요" onChange={contentsChange}/>
                                </div>
                            </td>
                        </tr> 
                    </tbody>
                </table>
        
                <div className="container mt-3" style={{textAlign:"right"}}>
                    <Link className="btn btn-secondary" onClick={postData}>등록</Link>&nbsp;&nbsp;
                    <Link className="btn btn-secondary">취소</Link>
                </div>
        </div>
    )
}


export default BoardWrite;