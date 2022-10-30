import React from 'react'
import "./Result.css"
import Header from"../../components/Header/Header"
import { useLocation ,useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ResetCorrectAnswer } from '../../redux/counterSlice'
const Result = () => {
  const [rankResult , setRankResult] = useState(0);
  const location = useLocation(0);
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(ResetCorrectAnswer());
    history("/question")
  }

  const data = {
    correctAns:location.state.correctAns ||0
  }
  useEffect(()=>{
     const fetchData = async ()=>{
      
      const res = await axios.post("http://localhost:5000/rnak",data);

      setRankResult(res.data.rankResult);
     }
  fetchData();
  },[])
  return (
    <>
    <Header/>
    <div className='container mt-4 pt-4'>
        <div className="final">
          <h2 className="finalText">You Answerd All Questions ...!</h2>
            <div className="firstResultShow">
            <label htmlFor="sore" className='socreLabel'>#score</label>
           <input type="text" disabled  id='sore' className='scoreInuput' value={rankResult?(rankResult +10):0 ||0}/>
            </div>
          <div className="secondResultShow">
           <label htmlFor="correctAns" className='correctAnsLabel'>#correct Rank</label>
           <input type="text" disabled className='correctAnsInput' value={rankResult?rankResult:0||0} />
          </div>

          <button id="again" className='resultBtn' onClick={handleClick}> Try Again</button>   
          </div>  

    </div>
    
    </>


  )
}

export default Result