import React from 'react';
import './app.less'
import {HashRouter, Route, Routes} from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/Card";
import Error from "./main/Error";

const App = () => {
  
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/card/:username/:reponame" element={<Card />}/>
          <Route path="/error" element={<Error />}/>
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
