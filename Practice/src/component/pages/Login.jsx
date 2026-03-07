// import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RingLoader } from "react-spinners"
import { toast, ToastContainer } from "react-toastify"
import Swal from "sweetalert2"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)

  const nav = useNavigate()

  function handleForm(e) {
    e.preventDefault()
    setLoader(true)

    if (email == "" || password == "") {
      console.log("All fields are required!")
      toast.error("All fields are required!")


    }
    else if (email == "admin@gmail.com" && password == "123") {
      console.log("Login Successfully")
      toast.success("Login Successfully")
      sessionStorage.setItem("email", email)

      setTimeout(() => {
        nav("/admin")
      }, 2000);

    }
    else {
      console.log("Invalid Credentials")
      toast.warning("Invalid Credentials")

    }
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
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
                      Pages
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Login
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
      <ToastContainer></ToastContainer>

      {loader == true ?

        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <RingLoader
              color="#06BBCC"
              cssOverride={{}}
              loading={loader}
              size={80}
            />
          </div>
        </div>

        :

        // {/* Contact Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Login
              </h6>
              <h1 className="mb-5">Login For Any Query</h1>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                <form onSubmit={handleForm}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={email}
                          onInput={(e) => {
                            setEmail(e.target.value)
                          }
                          }
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
                          placeholder="Subject"
                          value={password}
                          onInput={(e) => { setPassword(e.target.value) }
                          }
                        />
                        <label htmlFor="subject">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


        // {/* Contact End */}
      }

    <div className="d-flex justify-content-center">
      <button className="btn btn-primary fs-4" onClick={() => {
        Swal.fire({
          title: "Registration is Completed",
          icon: "success",
          draggable: true
        });
      }}>Registration</button>
      </div>
    </>
  )
}

export default Login
