import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import '../styles/login.css';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
       
        <div className="row my-4">
          <div className="col-md-6 offset-md-3">
            <div className="card3 login-card">
              <div className="card3-body">
                <h1 className="text-center mb-4">Login</h1>
                <hr />
                <form>
                  <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailInput"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="passwordInput"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="my-3">
                    <p>
                      New Here?{" "}
                      <Link to="/register" className="text-decoration-underline text-info">
                        Register
                      </Link>{" "}
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary login-button" type="submit" disabled>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
