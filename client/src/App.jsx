import React from "react";
import {Routes , Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./Pages/Login/Login";
import Questions from "./Pages/Questions/Questions";
import Register from "./Pages/Register/Register";
import Result from "./Pages/Result/Result";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/question" element={<Questions/>}/>
        <Route path="/" element={<Home/>}/>

      </Routes>
    
    </>
  )

}
export default App;
