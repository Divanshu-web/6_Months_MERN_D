import { useEffect, useState } from "react"
import { addProduct, singleProduct, updateProduct } from "../../../services/productService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateProducts() {

    let params = useParams()
    const _id = params._id

    const [name, setName] = useState("")
    const [stock, setStock] = useState(0)
    const [price, setPrice] = useState(0)

    const nav = useNavigate()

    const getSingleProduct = async () => {
        try {
            let res = await singleProduct({_id: _id})

            if (res.data.success) {
                setName(res.data?.data?.name)
                setPrice(res.data?.data?.price)
                setStock(res.data?.data?.stock)
                

                console.log("Response: ", res.data.data)
            } else {
                console.log("Response: ", res.data.data)
            }

        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() => {
        getSingleProduct();
    }, [])

    const submit = async (e) => {
        try {
            e.preventDefault();
            let formData = {
                _id,
                name,
                price,
                stock
            }

            let res = await updateProduct(formData)

            if (res.data.success) {
                toast.success(res.data.message);
                nav('/admin/product/manage')
            } else {
                toast.error(res.data.message);
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            {/* Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">
                                Update Product
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

                    <div className="col-lg-8 offset-lg-2 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                        <form onSubmit={submit}>

                            <div className="row my-2">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email" value={name}
                                            placeholder="Name"
                                            onChange={((e) => setName(e.target.value))}
                                        />
                                        <label htmlFor="email">Product Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="subject" value={price}
                                            placeholder=" Enter Price"
                                            onChange={((e) => setPrice(e.target.value))}
                                        />
                                        <label htmlFor="subject">Price</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="email" value={stock}
                                            placeholder="Enter Stock"
                                            onChange={((e) => setStock(e.target.value))}
                                        />
                                        <label htmlFor="email">Stock</label>
                                    </div>
                                </div>

                            </div>

                            <div className="row g-3">
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">
                                        Update Product
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>

            {/* Team End */}
        </>
    )
}

