// import React from 'react'

function Register() {
  return (
    <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3
        className="text-white display-3 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >
        Register
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
        <li className="breadcrumb-item active text-primary">Register</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* Contact Start */}
  <div className="container-fluid contact py-5">
    <div className="container py-5">
      <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="sub-style mb-4 ">
          <h4 className="sub-title text-white px-3 mb-0">Register</h4>
        </div>
       
      </div>
      <div className="row g-4 align-items-center justify-content-center">
        <div
          className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
          data-wow-delay="0.1s"
        >
          <form>
            <div className="row g-3 ">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control bg-transparent border border-white"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Name</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control bg-transparent border border-white"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="phone"
                    className="form-control bg-transparent border border-white"
                    id="phone"
                    placeholder="Phone"
                  />
                  <label htmlFor="phone">Password</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control bg-transparent border border-white"
                    id="project"
                    placeholder="Project"
                  />
                  <label htmlFor="project">Contact</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control bg-transparent border border-white"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Profession</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control bg-transparent border border-white"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Skills</label>
                </div>
              </div>
               <div className="col-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control bg-transparent border border-white"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Experience</label>
                </div>
              </div>
               <div className="col-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control bg-transparent border border-white"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Profile Image</label>
                </div>
              </div>
             
              <div className="col-12">
                <button className="btn btn-light text-primary w-100 py-3">
                 Register
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

export default Register
