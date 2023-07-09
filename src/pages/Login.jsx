import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import '../styles/login.css';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="body-demo">
        <div className="login-div">
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + '/assets/user.jpg'}
              alt="Logo"
              height={100}
            />
          </div>
          <div className="title">Login </div>
          <div className="fields">
            <div className="username">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <input type="username" className="user-input" placeholder="Username" />
            </div>
            <div className="password">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input type="password" class="pass-input" placeholder="Password" />
            </div>
          </div>
          <button className="signin-button">Login</button>
          <div className="link">
            <a href="#">Forget password?</a> or <Link to="/register" className="text-info">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
