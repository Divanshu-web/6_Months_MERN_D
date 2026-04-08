import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { login } from "../../services/userService";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const nav = useNavigate()

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
                    nav('/admin/dashboard')
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
            <>
                {/* Header Start */}
                <div className="container-fluid bg-primary  page-header">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h1 className="display-3 text-white animated slideInDown">Login</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="#">
                                                Login
                                            </a>
                                        </li>

                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
                {/* Contact Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">
                                Login
                            </h6>

                        </div>
                        <div className="row g-4">


                            <div className="col-lg-6 offset-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                                <form onSubmit={submit}>
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email" value={email}
                                                    placeholder="Your Email"
                                                    onChange={getEmail}
                                                />

                                                {email}
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Password" value={password}
                                                    onChange={getPassword}

                                                />

                                                {password}
                                                <label htmlFor="subject">Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit" >
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


        </>
    )
}