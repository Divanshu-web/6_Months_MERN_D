// import React from 'react'
import { Link } from "react-router-dom"

function AdminHeader() {
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
  {/* Navbar & Hero Start */}
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
      <a href="index.html" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fas fa-star-of-life me-3" />
         SKILLBRIDGE
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
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
          <Link to={"/admin/home"} className="nav-item nav-link active">
            Home
          </Link>
          {/* <Link to={"/about"} className="nav-item nav-link">
            About
          </Link>
          <Link to={"/service"} className="nav-item nav-link">
            Services
          </Link> */}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Skills Category
            </a>
            <div className="dropdown-menu m-0">
              <Link to={"/admin/beauty"} className="dropdown-item">
                Beauty_and_Makeup
              </Link>
              <Link to={"/admin/animation"} className="dropdown-item">
                Animation
              </Link>
              <Link to={"/admin/digitalmarketing"} className="dropdown-item">
                Digital Marketing
              </Link>
              <Link to={"/admin/fashiondesigning"} className="dropdown-item">
               FashionDesigning
              </Link>
              <Link to={"/admin/videoediting"} className="dropdown-item">
                Video Editing
              </Link>
              {/* <a href="404.html" className="dropdown-item">
                404 Page
              </a> */}
            </div>
          </div>
          <Link to={"/admin/contact"} className="nav-item nav-link">
            Contact Us
          </Link>
        </div>
        <a
          href="#"
          className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
        >
         Logout
        </a>
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

export default AdminHeader
