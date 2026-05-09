import { useEffect, useState } from "react"
import { adminDashboard } from "../../services/userService"
import { toast } from "react-toastify"
import { RingLoader } from "react-spinners";

export default function Dashboard() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#2BC5D4");
    const [productsCount, setProductsCount] = useState('')
    const [categoriesCount, setCategoriesCount] = useState('')
    const [customersCount, setCustomersCount] = useState('')



    useEffect(() => {
        getDashboard()
    }, [])


    const getDashboard = () => {
        setLoading(true)
        adminDashboard({}).then((res) => {
            if (res.data.success) {
                setLoading(false)
                setProductsCount(res.data.totalProducts)
                setCategoriesCount(res.data.totalCategories)
                setCustomersCount(res.data.totalCustomers)
            }
            else {
                setLoading(false)
                toast.error("Something went wrong")
            }

        }).catch((err) => {
            setLoading(false)
            console.log(err);
            toast.error("Something went wrong")

        })

    }



    return (
        <>
            {/* Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">
                                DASHBOARD
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            Welcome Admin
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

            <div className="d-flex justify-content-center pt-3 align-item-center">
                <RingLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={100}
                />
            </div>

             <div className={loading ? "d-none" : ""}>
<div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                                    <h5 className="mb-3">Total Products</h5>
                                    <p>

                                        {productsCount}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                                    <h5 className="mb-3">Total Categories</h5>
                                    <p>
                                        {categoriesCount}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-home text-primary mb-4" />
                                    <h5 className="mb-3">Total Brands</h5>
                                    <p>
                                        4
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-book-open text-primary mb-4" />
                                    <h5 className="mb-3">Total Customers</h5>
                                    <p>
                                        {customersCount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             </div>
            
            {/* Service End */}


        </>
    )
}

