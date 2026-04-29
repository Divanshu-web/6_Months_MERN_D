import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { login } from "../../services/userService";
import { RingLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function Login() {
    let [color, setColor] = useState("#2BC5D4");
    let [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nav = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        setLoading(true)

        let payload = {
            email: email,
            password: password
        }
        login(payload).then((res) => {
            if (res.data.success) {
                // console.log(res.data);
                // console.log(res.data.data);
                // console.log(res.data.data.userType);
                setLoading(false)

                toast.success(res.data.message)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("email", res.data.data.email)
                localStorage.setItem("name", res.data.data.name)
                localStorage.setItem("_id", res.data.data._id)
                localStorage.setItem("userType", res.data.data.userType)
                if (res.data.data.userType == 1) {
                    nav("/admin/dashboard")
                }
                else if (res.data.data.userType == 2) {
                    nav("/")
                }
                else {
                    toast.error("Invalid User Type")
                }
            }
            else {
                setLoading(false)
                toast.error(res.data.message)
            }
        }).catch((err) => {
            setLoading(false)
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

                <div className="d-flex justify-content-center pt-3 align-item-center">
                    <RingLoader
                        color={color}
                        loading={loading}
                        cssOverride={override}
                        size={100}
                    />
                </div>
                <div className={loading ? "d-none" : ""}>
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
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />


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
                                                        onChange={(e) => setPassword(e.target.value)}

                                                    />


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
                </div>



                {/* Contact End */}
            </>


        </>
    )
}