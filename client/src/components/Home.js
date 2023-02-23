import React, { useState } from 'react'
import axios from "axios"
import "../index.css"
function Home() {

    return (
        <div>
            {/* <h1>Home page</h1>

            <button onClick={getTickets}>gettickets</button>

            <div>
                <p>{ticket}</p>
            </div> */}

            <section id='main-navbar' className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                {/* <!-- Jumbotron --> */}
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" stye={{ backgroundCcolor: "hsl(0, 0%, 96%)" }}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    The best support  <br />
                                    <span className="text-primary">Ticketing System</span>
                                </h1>
                                <p stye={{ color: "hsl(217, 10%, 50.8%)" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                    quibusdam tempora at cupiditate quis eum maiores libero
                                    veritatis? Dicta facilis sint aliquid ipsum atque?
                                </p>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <a href="project">

                                        <button type="button" className="btn btn-primary btn-lg"
                                            style={{ paddinglleft: "2.5rem", paddingright: "2.5rem" }}>Go To Project</button>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body">
                                        <img src='https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png' className='w-100' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Home