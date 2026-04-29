import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { register } from "../../services/userService";

export default function Register() {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [profile, setProfile] = useState(null)


    const getPhone = (e) => {
        setPhone(e.target.value)
    }
    const getGender = (e) => {
        setGender(e.target.value)
    }
    const getAddress = (e) => {
        setAddress(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const nav = useNavigate()
    const submit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("phone", phone)
        formData.append("gender", gender)
        formData.append("address", address)
        formData.append("profile", profile)
        register(formData).then((res) => {
            if (res.data.success) {
                toast.success(res.data.message)
                nav("/login")
            }
            else {
                toast.error(res.data.message)
            }
        }).catch((err) => {
            console.log(err);
            toast.error(err)
        })
    }

    return (
        <>
            <>
                {/* Header Start */}
                <div className="container-fluid bg-primary  page-header">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h1 className="display-3 text-white animated slideInDown">Register</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="#">
                                                Register
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
                                Register
                            </h6>

                        </div>
                        <div className="row g-4">


                            <div className="col-lg-6 offset-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                                <form onSubmit={submit}>

                                    <div className="row my-2">
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="email" value={name}
                                                    placeholder="Your Name"
                                                    onChange={(e) => setName(e.target.value)}
                                                />


                                                <label htmlFor="email">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="email" value={phone}
                                                    placeholder="Your Phone Number"
                                                    onChange={getPhone}
                                                />


                                                <label htmlFor="email">Your Phone Number</label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row my-2">
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email" value={email}
                                                    placeholder="Your Email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />


                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Password" value={password}
                                                    onChange={getPassword}

                                                />

                                                <label htmlFor="subject">Password</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row g-3">
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <select className="form-control" id="subject" value={gender} onChange={getGender}
                                                >
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <label htmlFor="subject">Gender</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row my-3">
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input type="file" className="form-control" onChange={(e) => setProfile(e.target.files[0])} />
                                                <label htmlFor="subject">Profile</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md">
                                            <div className="col-md">
                                                <div className="form-floating">
                                                    <textarea
                                                        type="password"
                                                        className="form-control"
                                                        id="subject"
                                                        placeholder="address" value={address}
                                                        onChange={getAddress}

                                                    > </textarea>


                                                    <label htmlFor="subject">Address</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row my-3">
                                        <div className="col-md">
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit" >
                                                    Register
                                                </button>
                                            </div>
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