import React from "react";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom"
import "./Home.css";
const Home = () => {
  const history = useNavigate();

  const handleClick = ()=>{
    history("/question");
  }
  return (
    <>
      <Header />
      <div className="homeInfo">
        <h4 className="homeText"> are you ready to practice </h4>
        <p className="homedesc">You will have aquestion appear </p>
        <p className="homedesc">and there are four answers options </p>
        <p className="homedesc">
          you should select correct answer to get a good rank
        </p>
        <button className="btn-info homeBtn" onClick={handleClick}> start practice</button>
      </div>
    </>
  );
};

export default Home;
