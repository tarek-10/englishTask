import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
const Header = () => {
  const { userdata } = useSelector((state) => state.counter);

  console.log(userdata.userdata.user.profile, "from here");
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <NavLink className="navbar-brand" to="/home">
            English Test
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {userdata.userdata.user.profile ? (
            <div className="containerUsername">
              <div className="usernameFromRedux">
                {userdata.userdata.user.username}
              </div>

              <div className="userImageCont">
                <img
                  src={userdata.userdata.user.profile}
                  className="userImage"
                />
              </div>
            </div>
          ) : (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
