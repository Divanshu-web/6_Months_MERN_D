// import React from 'react'

function Blog() {
  return (
   <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3
        className="text-white display-3 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >
        Physiotherapy Blog
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
        <li className="breadcrumb-item active text-primary">Blog</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* Blog Start */}
  <div className="container-fluid blog py-5">
    <div className="container py-5">
      <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="sub-style">
          <h4 className="sub-title px-3 mb-0">Our Blog</h4>
        </div>
        <h1 className="display-3 mb-4">
          Excellent Facility and High Quality Therapy
        </h1>
        <p className="mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          deleniti amet at atque sequi quibusdam cumque itaque repudiandae
          temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
          saepe in ab? Repellat!
        </p>
      </div>
      <div className="row g-4 justify-content-center">
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="blog-item rounded">
            <div className="blog-img">
              <img
                src="./assets/img/blog-1.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="blog-centent p-4">
              <div className="d-flex justify-content-between mb-4">
                <p className="mb-0 text-muted">
                  <i className="fa fa-calendar-alt text-primary" /> 01 Jan 2045
                </p>
                <a href="#" className="text-muted">
                  <span className="fa fa-comments text-primary" /> 3 Comments
                </a>
              </div>
              <a href="#" className="h4">
                Remove back pain while working on a physio
              </a>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium hic consequatur beatae architecto,
              </p>
              <a
                href="#"
                className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="blog-item rounded">
            <div className="blog-img">
              <img
                src="./assets/img/blog-2.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="blog-centent p-4">
              <div className="d-flex justify-content-between mb-4">
                <p className="mb-0 text-muted">
                  <i className="fa fa-calendar-alt text-primary" /> 01 Jan 2045
                </p>
                <a href="#" className="text-muted">
                  <span className="fa fa-comments text-primary" /> 3 Comments
                </a>
              </div>
              <a href="#" className="h4">
                Benefits of a weekly physiotherapy session
              </a>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium hic consequatur beatae architecto,
              </p>
              <a
                href="#"
                className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="blog-item rounded">
            <div className="blog-img">
              <img
                src="./assets/img/blog-3.jpg"
                className="img-fluid w-100"
                alt="Image"
              />
            </div>
            <div className="blog-centent p-4">
              <div className="d-flex justify-content-between mb-4">
                <p className="mb-0 text-muted">
                  <i className="fa fa-calendar-alt text-primary" /> 01 Jan 2045
                </p>
                <a href="#" className="text-muted">
                  <span className="fa fa-comments text-primary" /> 3 Comments
                </a>
              </div>
              <a href="#" className="h4">
                Regular excercise can slow ageing process
              </a>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium hic consequatur beatae architecto,
              </p>
              <a
                href="#"
                className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
</>

  )
}

export default Blog
