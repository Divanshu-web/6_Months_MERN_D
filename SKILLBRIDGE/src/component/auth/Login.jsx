// import React from 'react'

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { login } from "../../services/userService";


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const nav = useNavigate()

    // function handleForm(e) {
    //     e.preventDefault()

    //     if (email == "" || password == "") {
    //         console.log("All fields are required!")
    //         toast.error("All fields are required!")
    //     }
    //     else if (email == "admin@gmail.com" && password == "123") {
    //         console.log("Login Successfully")
    //         toast.success("Login Successfully")

    //         sessionStorage.setItem("email", email)

    //         setTimeout(() => {
    //             nav("/admin/home")
    //         }, 2000);


    //     }
    //     else {
    //         console.log("Invalid Credentials")
    //         toast.warning("Invalid Credentials")
    //     }
    // }

    const submit = async (e) => {
        e.preventDefault()
        try {
            let formData = {
                email: email,
                password: password
            }

            let res = await login(formData);

            if (res.data.success) {
                toast.success(res.data.message)
                localStorage.setItem("userType", res.data.data.userType)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("isLoggedIn", true)
                localStorage.setItem("email", res.data.data.email)

                if(res.data.data.userType == 1){
                    nav('/admin/home')
                }else if(res.data.data.userType == 2){
                    nav('/')
                }else{
                    toast.error("Invalid UserType")
                }
            } else {
                toast.error(res.data.message)
            }

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3
                        className="text-white display-3 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Login
                    </h3>
                    <ol
                        className="breadcrumb justify-content-center mb-0 wow fadeInDown"
                        data-wow-delay="0.3s"
                    >
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">Login</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            <ToastContainer></ToastContainer>
            {/* Contact Start */}
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style mb-4">
                            <h4 className="sub-title text-white px-3 mb-0">Login Here</h4>
                        </div>

                    </div>
                    <div className="row g-4 align-items-center d-flex justify-content-center">
                        <div
                            className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
                            data-wow-delay="0.1s"
                        >
                            <h2 className="display-5 text-white mb-2 text-center ">Login</h2>

                            <form onSubmit={submit}>
                                <div className="row g-3">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control bg-transparent border border-white"
                                                id="email"
                                                placeholder="Your Email"
                                                value={email}
                                                // onInput={(e) => {
                                                //     setEmail(e.target.value)
                                                // }
                                                // }
                                                onChange={getEmail}
                                            />
                                            <label htmlFor="email" className="text-dark">Your Email</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control bg-transparent border border-white"
                                                id="password"
                                                placeholder="Password"
                                                value={password}
                                                // onInput={(e) => {
                                                //     setPassword(e.target.value)
                                                // }}
                                                onChange={getPassword}
                                            />
                                            <label htmlFor="password" className="text-dark">Password</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-light text-primary w-100 py-3" type="submit">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>

    )
}

export default Login
