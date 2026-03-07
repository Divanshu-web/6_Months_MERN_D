import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function AdminHeader() {
  const nav = useNavigate()
    function logoutAdmin(){
     
        toast.success("Logout Successfully")
        
        setTimeout(() => {
          nav("/")
        }, 2000);
    }


    return (

       <>
       <ToastContainer></ToastContainer>
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
      <button onClick={logoutAdmin} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
        Login Out
        <i className="fa fa-arrow-right ms-3" />
      </button>
    </div>
  </nav>
  {/* Navbar End */}
</>

    )
}

