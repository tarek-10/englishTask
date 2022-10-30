import React, { useEffect, useMemo } from "react";
import "./Questions.css";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRandomNum, IncrementCorrectAnswer } from "../../redux/counterSlice";
import {useNavigate} from "react-router-dom";

const Questions = () => {
  const [wordList, setWordList] = useState([]);
  const [count, setCount] = useState(0);
  const [ques, setQues] = useState(null);
  const [selectdAnswer, setSeclectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [className, setClassName] = useState("quizBtn");
  const {answerCounter} = useSelector((state)=>state.counter)||0;
  const [theScore ,setTheScore] = useState([]);
  const dispatch = useDispatch();
  const history = useNavigate();

    console.log(answerCounter);
  useEffect(() => {
    localStorage.setItem("ans", selectdAnswer);
  }, [selectdAnswer]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleAnswerClick = (a) => {
    setSeclectedAnswer(a);
    setClassName("quizBtn active");
    delay(3000, () =>
      setClassName(
        correctAnswer == localStorage.getItem("ans")
          ? "quizBtn correct"
          : "quizBtn wrong"
      )
      
    );

    delay(6000, () => {
      const answerSelected = localStorage.getItem("ans");

      if (correctAnswer == answerSelected) {
        dispatch(IncrementCorrectAnswer());

        setCount((prev) => prev + 1);
        
        setSeclectedAnswer(null);

      } else {
        setCount((prev) => prev + 1);

        setSeclectedAnswer(null);
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:5000/question")
        .then((res) => {
          setWordList(res.data.quizParsData.wordList);
          setQues(res.data.quizParsData.wordList[count].word);
          setCorrectAnswer(res.data.quizParsData.wordList[count].pos);
          
          setTheScore(res.data.quizParsData.scoresList);
          
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [ count, selectdAnswer]);

  // console.log("for ques ==>", ques);z
  return (
    <>
      <Header />
   {count<=10?(      <div className="container">
        <div className="quizItem">
          <div className="counter">
            <div className="counterNumber">
              <h4 className="counterTitle"> Question Num {count} /10</h4>
            </div>
            <div className="counterScore">
              <h4 className="counterScoreTitle">Score : {theScore[count]}</h4>
            </div>
          </div>
          <div className="questions">
            <h3 className="questionsTitle"> {wordList[count]?wordList[count].word:"There Is No Ques"} ?</h3>
          </div>

          <div className="answerQuiz">
            <div className="quizAnsCont">
              <button
                className={selectdAnswer === "adverb" ? className : "quizBtn"}
                onClick={() => handleAnswerClick("adverb")}
              >
                adverb
              </button>
              <button
                className={selectdAnswer === "noun" ? className : "quizBtn"}
                onClick={() => handleAnswerClick("noun")}
              >
                noun
              </button>
            </div>
            <div className="quizAnsCont">
              <button
                className={selectdAnswer === "verb" ? className : "quizBtn"}
                onClick={() => handleAnswerClick("verb")}
              >
                verb
              </button>
              <button
                className={
                  selectdAnswer === "adjective" ? className : "quizBtn"
                }
                onClick={() => handleAnswerClick("adjective")}
              >
                adjective
              </button>
            </div>
          </div>
        </div>
      </div>):(history("/result",{state:{
        correctAns:answerCounter?answerCounter:0||0
      }}))}
    </>
  );
};

export default Questions;
