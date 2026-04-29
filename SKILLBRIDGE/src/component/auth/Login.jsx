// import React from 'react'

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { login } from "../../services/userService";
import { RingLoader } from "react-spinners";

// const override = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
// };

function Login() {

    let [color, setColor] = useState("#2BC5D4");
    let [loading, setLoading] = useState(false);

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
        setLoading(true)
        try {
            let payload = {
                email: email,
                password: password
            }


            // let res = await login(formData);

            login(payload).then((res) => {

            if (res.data.success) {
                setLoading(false)
                toast.success(res.data.message)
                localStorage.setItem("userType", res.data.data.userType)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("isLoggedIn", true)
                localStorage.setItem("email", res.data.data.email)

                if(res.data.data.userType == 1){
                    nav('/admin/home')
                }else if(res.data.data.userType == 2){
                    nav('/learnermentor/dashboard')
                }else{
                    toast.error("Invalid UserType")
                }
            } else {
                 setLoading(false);
                toast.error(res.data.message)
            }
        })
        }
         catch (err) {
           
            console.log(err);
            toast.error(err)
        } 
    
    }

    return (

        <>


            {loading && (
                 <div className="d-flex justify-content-center pt-3 align-item-center"
                 style={{
                    position:"fixed",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    backgroundColor:"rgba(0,0,0,0.5)",
                    height:"100%",
                    width:"100%",
                    zIndex:"9999",
                    top: 0,
                    left: 0,
                 }}>
                    <RingLoader
                        color={color}
                        // loading={loading}
                        // cssOverride={override}
                        size={100}
                    />
                    </div>
            )}
              
          

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
