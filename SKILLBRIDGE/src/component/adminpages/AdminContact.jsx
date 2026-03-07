// import React from 'react'

function AdminContact() {
  return (
    <>
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3
        className="text-white display-3 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >
        Contact Us
      </h3>
      <ol
        className="breadcrumb justify-content-center mb-0 wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Admin</a>
        </li>
        <li className="breadcrumb-item active text-primary">Contact</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* Contact Start */}
  <div className="container-fluid contact py-5">
    <div className="container py-5">
      <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="sub-style mb-4">
          <h4 className="sub-title text-white px-3 mb-0">Contact Us</h4>
        </div>
        <p className="mb-0 text-black-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          deleniti amet at atque sequi quibusdam cumque itaque repudiandae
          temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
          saepe in ab? Repellat!
        </p>
      </div>
      <div className="row g-4 align-items-center">
        <div
          className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
          data-wow-delay="0.1s"
        >
          <h2 className="display-5 text-white mb-2">Get in Touch</h2>
          <p className="mb-4 text-white">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax &amp; PHP in a few minutes. Just copy and
            paste the files, add a little code and you're done.{" "}
            <a
              className="text-dark fw-bold"
              href="https://htmlcodex.com/contact-form"
            >
              Download Now
            </a>
            .
          </p>
          <form>
            <div className="row g-3">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control bg-transparent border border-white"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
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
                  <label htmlFor="email">Your Email</label>
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
                  <label htmlFor="phone">Your Phone</label>
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
                  <label htmlFor="project">Your Project</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control bg-transparent border border-white"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control bg-transparent border border-white"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 160 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-light text-primary w-100 py-3">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-2 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
          <div className="bg-transparent rounded">
            <div className="d-flex flex-column align-items-center text-center mb-4">
              <div
                className="bg-white d-flex align-items-center justify-content-center mb-3"
                style={{ width: 90, height: 90, borderRadius: 50 }}
              >
                <i className="fa fa-map-marker-alt fa-2x text-primary" />
              </div>
              <h4 className="text-dark">Addresses</h4>
              <p className="mb-0 text-white">
                123 ranking Street, New York, USA
              </p>
            </div>
            <div className="d-flex flex-column align-items-center text-center mb-4">
              <div
                className="bg-white d-flex align-items-center justify-content-center mb-3"
                style={{ width: 90, height: 90, borderRadius: 50 }}
              >
                <i className="fa fa-phone-alt fa-2x text-primary" />
              </div>
              <h4 className="text-dark">Mobile</h4>
              <p className="mb-0 text-white">+012 345 67890</p>
              <p className="mb-0 text-white">+012 345 67890</p>
            </div>
            <div className="d-flex flex-column align-items-center text-center">
              <div
                className="bg-white d-flex align-items-center justify-content-center mb-3"
                style={{ width: 90, height: 90, borderRadius: 50 }}
              >
                <i className="fa fa-envelope-open fa-2x text-primary" />
              </div>
              <h4 className="text-dark">Email</h4>
              <p className="mb-0 text-white">info@example.com</p>
              <p className="mb-0 text-white">info@example.com</p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-xl-5 wow fadeInRight"
          data-wow-delay="0.3s"
        >
          <div className="d-flex justify-content-center mb-4">
            <a
              className="btn btn-lg-square btn-light rounded-circle mx-2"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-lg-square btn-light rounded-circle mx-2"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-lg-square btn-light rounded-circle mx-2"
              href=""
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="btn btn-lg-square btn-light rounded-circle mx-2"
              href=""
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <div className="rounded h-100">
            <iframe
              className="rounded w-100"
              style={{ height: 500 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</>

  )
}

export default AdminContact
