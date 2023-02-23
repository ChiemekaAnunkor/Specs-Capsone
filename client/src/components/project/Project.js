import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import "./project.css"
import axios from 'axios'

function Project() {

    let [ticket, setTicket] = useState([])
    const navigate = useNavigate()
    let [user, setUser] = useState([])


    const getTickets = async () => {
        await axios.get("http://localhost:8080/api/ticket/getall").then((res) => {


            console.log(res.data)
            const reverse = [...res.data].reverse()

            setTicket(reverse)
            // ticket = res.data


        })
    }

    const addTicket = async (e) => {
        e.preventDefault()

        const form = document.getElementById("ticket-form")

        console.log(form.description.value)
        console.log(form.name.value)
        const userid = form.userid.value.trim()
        console.log(userid)
        const body = { name: form.name.value.trim(), description: form.description.value.trim(), progress: 1 }


        await axios.post(`http://localhost:8080/api/ticket/add/${userid}`, body).then((res) => {
            console.log(res)
            window.location.reload()
        })



    }

    const loadAllUsers = async () => {
        await axios.get("http://localhost:8080/api/user/getall").then((res) => {


            setUser(res.data)
            console.log(res.data)
            user = res.data


        })

    }



    useEffect(() => {
        let loggedOn = sessionStorage.getItem("id")
        if (!loggedOn) {
            navigate("/login")
        }
        getTickets();
        loadAllUsers()


    }, []);

    /// Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    return (
        <div>
            <h1> Project</h1>
            <header>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">


                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4">
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>My Project</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-area fa-fw me-3"></i><span>More Project</span>
                            </a>

                        </div>
                    </div>
                </nav>
            </header>

            <main style={{ margintop: "58px" }}>
                <div className="container">

                    <div className='todo'>
                        <div className='p-head'>

                            <h3>To-Do</h3>

                            <button id="myBtn" className='btn btn-primary' onClick={openModal}>Add a ticket</button>


                            {/* <!-- The Modal --> */}
                            <div id="myModal" className="modal">

                                {/* <!-- Modal content --> */}
                                <div className="modal-content">
                                    <form id='ticket-form'>

                                        <span className="close" onClick={closeModal}>&times;</span>
                                        <p>Create a new Ticket</p>


                                        <div className="form-outline">
                                            {/* <input type="password" id="role" name='role' className="form-control" placeholder='Role' /> */}
                                            {/* <label className="form-label" htmlFor="form3Example2"></label> */}
                                            <select id="userid" name='userid' className="form-select" placeholder='userid' htmlFor="userid">
                                                <option value="select">Choose a User to asign to</option>
                                                {user.map((el, i) => {
                                                    return (

                                                        <option key={i} value={el.id}>{el.username}</option>

                                                    )
                                                })}


                                            </select>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="text" id="name" className="form-control form-control-lg"
                                                name="name" placeholder="Enter name of of " />
                                            <label className="form-label" htmlFor="form3Example3">name</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="text" id="description" className="form-control form-control-lg"
                                                name="description" placeholder="Enter Description" />
                                            <label className="form-label" htmlFor="form3Example3">Description</label>
                                        </div>

                                        <div className="text-center text-lg-start mt-4 pt-2">
                                            <button type="submit" className="btn btn-primary btn-lg" onClick={addTicket}
                                                style={{ paddinglleft: "2.5rem", paddingright: "2.5rem" }}>Create Ticket</button>

                                        </div>





                                    </form>
                                </div>

                            </div>
                        </div>
                        <div>
                            {ticket.map((el, i) => {

                                function nextbtn() {
                                    el.progress = el.progress + 1
                                    console.log("clicked")

                                    axios.put("http://localhost:8080/api/ticket/update", el).then((res) => {
                                        console.log(res)
                                        window.location.reload()
                                    })

                                }

                                if (el.progress == 1) {

                                    return (

                                        < div key={i} className="card mt-2" style={{ width: "18rem" }} draggable="true">
                                            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                                            <div className="card-body">
                                                <h5 className="card-title">{el.name}</h5>
                                                <p className="card-text">{el.description}</p>

                                                <a onClick={nextbtn} className="btn btn-primary navbtn">Next</a>
                                            </div>
                                        </div>

                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className='inprogress'>

                        <div className='p-head h-spacing'>
                            <h3>In-Progress</h3>
                        </div>
                        <div>
                            {ticket.map((el, i) => {

                                function nextbtn() {
                                    el.progress = el.progress + 1
                                    console.log("clicked")

                                    axios.put("http://localhost:8080/api/ticket/update", el).then((res) => {
                                        console.log(res)
                                        window.location.reload()
                                    })

                                }

                                function backbtn() {
                                    el.progress = el.progress - 1
                                    console.log("clicked")

                                    axios.put("http://localhost:8080/api/ticket/update", el).then((res) => {
                                        console.log(res)
                                        window.location.reload()
                                    })

                                }

                                if (el.progress == 2) {
                                    console.log(el.progress)

                                    return (



                                        < div key={i} className="card mt-2" style={{ width: "18rem" }}>
                                            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                                            <div className="card-body">
                                                <h5 className="card-title">{el.name}</h5>
                                                <p className="card-text">{el.description}</p>

                                                <div className='ticket-card'>

                                                    <a onClick={backbtn} className="btn btn-primary navbtn">Back</a>

                                                    <a onClick={nextbtn} className="btn btn-primary navbtn">Next</a>

                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className='inprogress'>

                        <div className='p-head h-spacing'>
                            <h3>Completed</h3>
                        </div>

                        <div>
                            {ticket.map((el, i) => {

                                function backbtn() {
                                    el.progress = el.progress - 1
                                    console.log("clicked")

                                    axios.put("http://localhost:8080/api/ticket/update", el).then((res) => {
                                        console.log(res)
                                        window.location.reload()
                                    })

                                }

                                if (el.progress == 3) {
                                    console.log(el.progress)

                                    return (



                                        < div key={i} className="card mt-2" style={{ width: "18rem" }}>
                                            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                                            <div className="card-body">
                                                <h5 className="card-title">{el.name}</h5>
                                                <p className="card-text">{el.description}</p>

                                                <div className='ticket-card'>


                                                    <a onClick={backbtn} className="btn btn-primary navbtn">Back</a>

                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                            })}
                        </div>
                    </div>

                </div>

            </main >

        </div >

    )
}

export default Project