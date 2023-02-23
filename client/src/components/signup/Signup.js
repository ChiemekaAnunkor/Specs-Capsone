import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'



function Signup() {
    const navigate = useNavigate()


    const handleSignup = async (e) => {
        e.preventDefault()

        const form = document.getElementById("singup-form")

        const body = { username: form.username.value.trim(), password: form.password.value.trim(), role: form.role.value.trim(), progress: 1 }




        await axios.post(`http://localhost:8080/api/user/add`, body).then((res) => {

            console.log(res)
            navigate("/login")

        })


    }

    return (
        <div>
            {/* <!-- Section: Design Block --> */}
            <section className="">
                {/* <!-- Jumbotron --> */}
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" stye={{ backgroundCcolor: "hsl(0, 0%, 96%)" }}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    The best <br />
                                    <span className="text-primary">business solutionb </span>
                                </h1>
                                <p stye={{ color: "hsl(217, 10%, 50.8%)" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                    quibusdam tempora at cupiditate quis eum maiores libero
                                    veritatis? Dicta facilis sint aliquid ipsum atque?
                                </p>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <form id='singup-form'>
                                            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="username" name='username' className="form-control" placeholder='Username' />
                                                        <label className="form-label" htmlFor="form3Example1" >Username</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        {/* <input type="password" id="role" name='role' className="form-control" placeholder='Role' /> */}
                                                        {/* <label className="form-label" htmlFor="form3Example2"></label> */}
                                                        <select id="role" name='role' className="form-select" placeholder='Role' htmlFor="roles">

                                                            <option value="select">Choose a role</option>
                                                            <option value="admin">admin</option>
                                                            <option value="employee">employee</option>


                                                        </select>
                                                    </div>
                                                </div>
                                            </div>



                                            {/* <!-- Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" name='password' className="form-control" placeholder='Password' />
                                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                            </div>

                                            {/* <!-- Checkbox --> */}


                                            {/* <!-- Submit button --> */}
                                            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleSignup}>
                                                Sign up
                                            </button>

                                            {/* <!-- Register buttons --> */}
                                            <div className="text-center">
                                                <p >Or if you already have an account <a href=''> Login</a></p>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-google"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-github"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup