// import React from 'react'

function Testimonial() {
  return (
    <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3
        className="text-white display-3 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >
        Testimonial
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
        <li className="breadcrumb-item active text-primary">Testimonial</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* Testimonial Start */}
  <div
    className="container-fluid testimonial py-5 wow zoomInDown"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="section-title mb-5">
        <div className="sub-style">
          <h4 className="sub-title text-white px-3 mb-0">Testimonial</h4>
        </div>
        <h1 className="display-3 mb-4">What Clients are Say</h1>
      </div>
      <div className="testimonial-carousel owl-carousel">
        <div className="testimonial-item">
          <div className="testimonial-inner p-5">
            <div className="testimonial-inner-img mb-4">
              <img
                src="./assets/img/testimonial-img.jpg"
                className="img-fluid rounded-circle"
                alt=""
              />
            </div>
            <p className="text-white fs-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores nemo facilis tempora esse explicabo sed! Dignissimos
              quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem
              laudantium tempora. Minima, saepe earum!
            </p>
            <div className="text-center">
              <h5 className="mb-2">John Abraham</h5>
              <p className="mb-2 text-white-50">New York, USA</p>
              <div className="d-flex justify-content-center">
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-inner p-5">
            <div className="testimonial-inner-img mb-4">
              <img
                src="./assets/img/testimonial-img.jpg"
                className="img-fluid rounded-circle"
                alt=""
              />
            </div>
            <p className="text-white fs-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores nemo facilis tempora esse explicabo sed! Dignissimos
              quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem
              laudantium tempora. Minima, saepe earum!
            </p>
            <div className="text-center">
              <h5 className="mb-2">John Abraham</h5>
              <p className="mb-2 text-white-50">New York, USA</p>
              <div className="d-flex justify-content-center">
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-inner p-5">
            <div className="testimonial-inner-img mb-4">
              <img
                src="./assets/img/testimonial-img.jpg"
                className="img-fluid rounded-circle"
                alt=""
              />
            </div>
            <p className="text-white fs-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores nemo facilis tempora esse explicabo sed! Dignissimos
              quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem
              laudantium tempora. Minima, saepe earum!
            </p>
            <div className="text-center">
              <h5 className="mb-2">John Abraham</h5>
              <p className="mb-2 text-white-50">New York, USA</p>
              <div className="d-flex justify-content-center">
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
                <i className="fas fa-star text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</>

  )
}

export default Testimonial
