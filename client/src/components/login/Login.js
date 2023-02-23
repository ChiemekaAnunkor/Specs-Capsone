import React from 'react'
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate()

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const form = document.getElementById("login-form")
        const username = form.username.value.trim()
        const password = form.password.value.trim()

        const login = { username: username, password: password }

        axios.post("http://localhost:8080/api/user/login", login).then((res) => {
            console.log(res.data)

            if (res.data) {
                sessionStorage.setItem("id", res.data[2])
                sessionStorage.setItem("username", res.data[1])
                sessionStorage.setItem("role", res.data[0])


                navigate("/project")
                window.location.reload()

            }
        })


    }



    return (
        <div>

            <div className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form id='login-form'>


                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Login</p>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="text" id="username" className="form-control form-control-lg"
                                        name="username" placeholder="Enter a valid username" />
                                    <label className="form-label" htmlFor="form3Example3">Username</label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-3">
                                    <input type="password" id="password" className="form-control form-control-lg"
                                        name="password" placeholder="Enter password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg" onClick={handleLoginSubmit}
                                        style={{ paddinglleft: "2.5rem", paddingright: "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="signup"
                                        className="link-danger">Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                {/* <!-- Copyright --> */}
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>
                {/* <!-- Copyright --> */}

                {/* <!-- Right --> */}
                <div>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#!" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Login