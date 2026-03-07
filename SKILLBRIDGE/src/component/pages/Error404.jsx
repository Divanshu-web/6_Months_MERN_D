// import React from 'react'

function Error404() {
  return (
    <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3
        className="text-white display-3 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >
        404 Pages
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
        <li className="breadcrumb-item active text-primary">404 Page</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* 404 Start */}
  <div className="container-fluid py-5">
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <i className="bi bi-exclamation-triangle display-1 text-secondary" />
          <h1 className="display-1">404</h1>
          <h1 className="mb-4">Page Not Found</h1>
          <p className="mb-4">
            We’re sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
          <a
            className="btn btn-primary rounded-pill py-3 px-5"
            href="index.html"
          >
            Go Back To Home
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* 404 End */}
</>

  )
}

export default Error404
