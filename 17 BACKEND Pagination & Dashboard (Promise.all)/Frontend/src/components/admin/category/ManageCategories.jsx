import { Link } from "react-router-dom";
import { AllCategories, deleteCategory } from "../../../services/categoryService";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { RingLoader } from "react-spinners";
import Swal from 'sweetalert2'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
// 👆 classic theme, see below for other theme / css options

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function ManageCategories() {
    const imageStyle = {
        height: "80px",
        width: "80px",
        borderRadius: "999px"
    }

    let [color, setColor] = useState("#2BC5D4");
    let [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])


    const [currentPage, setCurrentPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [limit, setLimit] = useState(10)



    useEffect(() => {
        getAllcategories()
    }, [currentPage])

    const getAllcategories = () => {
        setLoading(true)

        let payload = {
            limit,
            startPoint: (currentPage - 1) * limit 
        }

        AllCategories(payload).then((res) => {
            if (res.data.success) {
                setLoading(false)
                setCategories(res.data.data)
                setTotal(res.data.total)


            }
            else {
                setLoading(false)
                toast.error(res.data.message)
            }
        }).catch((err) => {
            setLoading(false)
            console.log(err);
        })
    }

    const deleteCategoryFun = (_id) => {
        setLoading(true)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCategory({ _id: _id }).then((res) => {
                    if (res.data.success) {
                        setLoading(false)
                        toast.success(res.data.message)
                        getAllcategories()
                    }
                    else {
                        setLoading(false)
                        toast.error(res.data.message)
                    }
                }).catch((err) => {
                    setLoading(false)
                    console.log(err);
                })
            }
            else {
                setLoading(false)
            }
        });
    }

    return (
        <>
            {/* Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">
                                Categories List
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            users
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Service Start */}

            <div>
                <RingLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={100}
                />
            </div>
            <div className={loading ? "d-none" : ""}>
                <div className="container-xxl ">
                    <div className="container">
                        <div className="row my-2">
                            <div className="col-md h4">
                                Manage Category
                            </div>
                            <div className="col-md text-end">
                                <Link to="/admin/category/add">
                                    <button className="btn btn-sm btn-primary rounded rounded-pill">
                                        + Add New Category
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories.map((category, index) => (
                                        <tr>
                                            <th scope="row">
                                                {index + 1}
                                            </th>
                                            <td scope="row">
                                                {category.name}
                                            </td>
                                            <td>
                                                <a href={category.image} target="_blank">
                                                    <img src={category.image} alt="unable to load" style={imageStyle} />
                                                </a>
                                            </td>
                                            <td>
                                                <Link to={`/admin/category/update/${category._id}`} className="btn btn-sm text-primary">
                                                    <i className="bi bi-pencil-square"></i>
                                                </Link>

                                                <button className="btn text-danger" onClick={() => {
                                                    deleteCategoryFun(category._id)
                                                }}>

                                                    <i class="bi bi-trash-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>


                        <ResponsivePagination
                            current={currentPage}
                            total={Math.ceil(total / limit)}
                            onPageChange={setCurrentPage}
                        />


                    </div>
                </div>
            </div>
            {/* Team End */}
        </>
    )
}

