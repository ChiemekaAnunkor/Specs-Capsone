import React, { useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Project from "./components/project/Project";
import Signup from "./components/signup/Signup";
import "./App.css"

export default function App() {

  const ifnotloggedin = useRef(null)

  const ifnotsignup = useRef(null)
  const ifnotlogout = useRef(null)
  const ifnoticon = useRef(null)


  useEffect(() => {

    const getid = sessionStorage.getItem("id")
    if (getid) {

      ifnotloggedin.current.classList.add("hidden-link")
      ifnotsignup.current.classList.add("hidden-link")


    } else {
      ifnotlogout.current.classList.add("hidden-link")
      ifnoticon.current.classList.add("hidden-link")

    }

    // if (!getid) {
    //   ifnotlogout.current.classList.add("hidden-login")

    // }

  }, []);

  const handleLogout = () => {

    sessionStorage.clear()

    window.location.reload()
  }



  return (
    <Router>
      <div>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <a className="navbar-brand mt-2 mt-lg-0" href="/">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/iconpark-vol-8/48/ticket-512.png"
                  height="40"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <a className="nav-link" href="project">Project</a>
                </li>
                <li className="nav-item " ref={ifnotloggedin}>
                  <a className="nav-link" href="/login">Login</a>
                </li>

                <li className="nav-item " ref={ifnotsignup}>
                  <a className="nav-link" href="/signup">Signup</a>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center">
              <a className="text-reset me-3" href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>

              <div className="dropdown" >

                <a className="nav-link logout" ref={ifnotlogout} onClick={handleLogout} href="/login">Logout</a>
              </div>
              <div className="" ref={ifnoticon}>
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"

                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img

                    src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />



        </Routes>
      </div>
    </Router>
  );
}