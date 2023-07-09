import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import '../styles/register.css'

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                
               
                <div className="row my-4 h-100">
                    <div className="col-md-6 offset-md-3">
                        <div className="card4 register-card">
                            <div className="card4-body">
                                <h1 className="text-center">Register</h1>
                                <hr />
                                <form>
                                    <div className="form-group my-3">
                                        <label htmlFor="Name">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Name"
                                            placeholder="Enter Your Name"
                                        />
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="Email">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="Email"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="Password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="Password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="my-3">
                                        <p>
                                            Already have an account?{' '}
                                            <Link
                                                to="/login"
                                                className="text-decoration-underline text-info"
                                            >
                                                Login
                                            </Link>{' '}
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-primary register-button"
                                            type="submit"
                                            disabled
                                        >
                                            Register
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

export default Register;
