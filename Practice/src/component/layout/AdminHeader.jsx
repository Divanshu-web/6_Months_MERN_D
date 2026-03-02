import { Link } from "react-router-dom";

export default function AdminHeader() {
    return (
       <>
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a
      href="index.html"
      className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h2 className="m-0 text-primary">
        <i className="fa fa-book me-3" />
        eLEARNING
      </h2>
    </a>
    <button
      type="button"
      className="navbar-toggler me-4"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <Link to={"/admin/home"} className="nav-item nav-link active">
          Dashboard
        </Link>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
  
          >
            Category
          </a>
          <div className="dropdown-menu fade-down m-0">
            <Link to={"/admin/addcategory"} className="dropdown-item">
              Add Category
            </Link>
            <Link to={"/admin/allcategory"} className="dropdown-item">
              All Category
            </Link>
          </div>
        </div>
        <Link to={"/admin/contact"} className="nav-item nav-link">
          Contact
        </Link>
      </div>
      <Link to={"/admin/login"} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
        Login
        <i className="fa fa-arrow-right ms-3" />
      </Link>
    </div>
  </nav>
  {/* Navbar End */}
</>

    )
}

