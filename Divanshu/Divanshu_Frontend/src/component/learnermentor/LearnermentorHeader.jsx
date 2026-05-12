// import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

function LearnermentorHeader() {
  const nav = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"));

  function logoutAdmin(){
    toast.success("Logout Successfully")

     setTimeout(() => {
        nav("/")
     }, 2000);
  }
  return (
    <>
  {/* Topbar Start */}
  <div className="container-fluid bg-dark px-5 d-none d-lg-block">
    <div className="row gx-0 align-items-center" style={{ height: 45 }}>
      <div className="col-lg-8 text-center text-lg-start mb-lg-0">
        <div className="d-flex flex-wrap">
          <a href="#" className="text-light me-4">
            <i className="fas fa-map-marker-alt text-primary me-2" />
            Find A Location
          </a>
          <a href="#" className="text-light me-4">
            <i className="fas fa-phone-alt text-primary me-2" />
            +01234567890
          </a>
          <a href="#" className="text-light me-0">
            <i className="fas fa-envelope text-primary me-2" />
            Example@gmail.com
          </a>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div className="d-flex align-items-center justify-content-end">
          <a
            href="#"
            className="btn btn-light btn-square border rounded-circle nav-fill me-3"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            className="btn btn-light btn-square border rounded-circle nav-fill me-3"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="#"
            className="btn btn-light btn-square border rounded-circle nav-fill me-3"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="#"
            className="btn btn-light btn-square border rounded-circle nav-fill me-0"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  <ToastContainer></ToastContainer>
  {/* Navbar & Hero Start */}
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
      <a href="index.html" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fas fa-star-of-life me-3" />
         LEARNER MENTOR
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to={"/learnermentor/dashboard"} className="nav-item nav-link ">
            Dashboard
          </Link>
            <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Session
            </a>
            <div className="dropdown-menu m-0">
              <Link to={"/learnermentor/addsession"} className="dropdown-item">
               Add Session
              </Link>
              <Link to={"/learnermentor/managesession"} className="dropdown-item">
               Manage Session
              </Link>
              
            </div>
          </div>
              <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Skills
            </a>
            <div className="dropdown-menu m-0">
              <Link to={"/learnermentor/addskills"} className="dropdown-item">
                Add Skills
              </Link>
              <Link to={"/learnermentor/manageskills"} className="dropdown-item">
               Manage Skills
              </Link>
            </div>
          </div>


          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Request
            </a>
            <div className="dropdown-menu m-0">
              {/* <Link to={"/learnermentor/addrequest"} className="dropdown-item">
                Add Request
              </Link> */}
              <Link to={"/learnermentor/managerequest"} className="dropdown-item">
               Manage Request
              </Link>
              <Link to={"/learnermentor/mybookings"} className="dropdown-item">
               My Bookings
              </Link>
            </div>
          </div>


         
          <Link to={"/learnermentor/contact"} className="nav-item nav-link">
            Contact Us
          </Link>
        </div>
     


      
     {
  localStorage.getItem("isLoggedIn") ? (

    <div className="d-flex align-items-center gap-3">

      <h6 className="m-0 text-primary">
        Welcome, {user?.name}
      </h6>

      <Link
        to={"/login"}
        className="btn btn-primary rounded-pill text-white py-2 px-4"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Logout
      </Link>

    </div>

  ) : (

    <Link
      to={"/login"}
      className="btn btn-primary rounded-pill text-white py-2 px-4"
    >
      Login
    </Link>

  )
}

      </div>
    </nav>
    {/* Carousel Start */}
    <div className="header-carousel owl-carousel">
      <div className="header-carousel-item">
        <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5
              className="text-white text-uppercase fw-bold mb-4"
              style={{ letterSpacing: 3 }}
            >
              Physiotherapy Center
            </h5>
            <h1 className="display-1 text-capitalize text-white mb-4">
              Best Solution For Painful Life
            </h1>
            <p className="mb-5 fs-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="#"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      <div className="header-carousel-item">
        <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5
              className="text-white text-uppercase fw-bold mb-4"
              style={{ letterSpacing: 3 }}
            >
              Physiotherapy Center
            </h5>
            <h1 className="display-1 text-capitalize text-white mb-4">
              Best Solution For Painful Life
            </h1>
            <p className="mb-5 fs-5 animated slideInDown">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="#"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Carousel End */}
  </div>
  {/* Navbar & Hero End */}
</>

  )
}

export default LearnermentorHeader
