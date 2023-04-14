import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout.js'   // src 폴더 부터 시작하는 경로를 적어준다
import Home from './componenet/Home.js'
import BoardList from './componenet/board/BoardList.js';
import BoardWrite from './componenet/board/BoardWrite.js';
import ScoreList from './componenet/score/ScoreList.js';
import HeroList from './componenet/hero/HeroList.js';
import HeroWrite from './componenet/hero/HeroWrite.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/board/list" element={<BoardList/>} />
          <Route path="/board/list/:id" element={<BoardList/>} />
          <Route path="/board/write" element={<BoardWrite/>} />
          <Route path="/board/view/:id" element={<BoardWrite/>} />
          <Route path="/score/list" element={<ScoreList/>} />

          <Route path="/hero/list" element={<HeroList/>} />
          <Route path="/hero/write" element={<HeroWrite/>} />
          <Route path="/hero/view/:id" element={<HeroWrite/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;

// 혹시라도 폴더명이나 파일명의 대소문자가 바뀌면, 이름변경으로 하면 안되고 삭제했다가 다시 만들어야 인식한다