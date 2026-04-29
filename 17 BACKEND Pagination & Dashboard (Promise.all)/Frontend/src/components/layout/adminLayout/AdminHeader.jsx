import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function AdminHeader() {

    const nav = useNavigate()
    const logout = (e) => {
        e.preventDefault()
        toast.success("Logout Successfully")
        localStorage.clear()
        nav('/login')
    }


    return (
        <>
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
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/admin/dashboard" className="nav-item nav-link active">
                            Dashboard
                        </Link>
                        <Link to="/admin/users/manage" className="nav-item nav-link">
                            Users
                        </Link>
                        <Link to="/admin/categories/manage" className="nav-item nav-link">
                            Categories
                        </Link>
                        
                    </div>
                    <a onClick={logout} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                        Logout
                        <i className="fa fa-arrow-right ms-3" />
                    </a>
                </div>
            </nav>

        </>
    )

}