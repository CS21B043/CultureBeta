import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createContext, useState } from 'react'
import Home from "./web/pages/home/Home";
import Login from "./web/pages/login/Login";
import Signin from "./web/pages/login/Signin";
import Userpost from "./web/pages/Userpost/Userpost";
import Short from "./web/components/dhana&machi/short/short"
import Quiz from "./web/pages/quiz/Quiz";
import ChatBot from "./web/pages/chatBot/ChatBot";
import Model from "./Novelty/Model";
import TN from "./Novelty/TN";
import AP from "./Novelty/AP";
import Punjab from "./Novelty/Punjab";
import WB from "./Novelty/WB";
import Assam from "./Novelty/Assam";
import Maharashtra from "./Novelty/Maharashtra";
import Telangana from "./Novelty/Telangana";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ReactSwitch from "react-switch";


export let ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = ()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"));
  }
  return (
    <ThemeContext.Provider
    value = {{theme, toggleTheme}}>

      <div id={theme}>
        <div style={{position:"fixed",
        bottom:"0%",
        right:"0%"}}>
          <ReactSwitch  onChange={toggleTheme} checked = {theme==="dark"}/>
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signin />} />
        <Route path="/userpost" element={<Userpost />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/model" element={<Model />} />
        <Route path="/TN" element={<TN />} />
        <Route path="/AP" element={<AP />} />
        <Route path="/WB" element={<WB />} />
        <Route path="/Telangana" element={<Telangana />} />
        <Route path="/Assam" element={<Assam />} />
        <Route path="/Maharashtra" element={<Maharashtra />} />
        <Route path="/Punjab" element={<Punjab />} />
        <Route path="/shorts" element = {<Short/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
