import React from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { loginCalling } from "../../redux/counterSlice";
const Login = () => {
  const history = useNavigate();
  const dispatch =useDispatch();

  const data ={
    email:"",
    password:""
  }

  const getData = (e)=>{
    data[e.target.name] = e.target.value
  }

   const handleSubmit = async(e)=>{
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/user/signin" , data);
    dispatch(loginCalling(res.data));
    if(res.data.message ==="success"){
      history("/question");
    }
   }
  return (
    <>
      <Header />
      <div className="container">
        <div className="login">
          <form className="loginContainer" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              required
              type="email"
              name="email"
              className="inputLogin"
              onChange={getData}
            />
            <input
              placeholder="Password"
              required
              name="password"
              minLength={6}
              type={"password"}
              className="inputLogin"
              onChange={getData}
            />
            <button className="loginBtn" type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
