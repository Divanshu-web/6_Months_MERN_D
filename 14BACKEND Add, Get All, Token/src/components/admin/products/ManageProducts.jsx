import { Link } from "react-router-dom";
import { allProducts } from "../../../services/productService";
import { useEffect, useState } from "react";

export default function ManageProducts() {

    const [products, setProducts] = useState([])
    const getAllProducts = async () => {
        try {
            let res = await allProducts()
            if (res.data.success) {
                setProducts(res.data.data)
            }
            else {
                toast.error(res.data.message)
            }
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <>
            {/* Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">
                                Product List
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
                                            products
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
            <div className="container-xxl">
                <div className="container">
                    <div className="row my-2">
                        <div className="col-md h4">
                            Manage Product
                        </div>
                        <div className="col-md text-end">
                            <Link to="/admin/product/add">
                                <button className="btn btn-sm btn-primary rounded rounded-pill">
                                    + Add New Product
                                </button>
                            </Link>

                        </div>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                                <th scope="col">CreatedAt</th>
                                <th scope="col">UpdatedAt</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                            products.map((product, index)  => 
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.createdAt}</td>
                                    <td>{product.updatedAt ? product.updatedAt : '----'}</td>
                                    <td>
                                        <button className="btn btn-sm text-primary">
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                    </td>
                                </tr>)
                                }

                        </tbody>
                    </table>


                </div>
            </div>

            {/* Team End */}
        </>
    )
}

