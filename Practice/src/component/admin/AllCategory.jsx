export default function AllCategory() {
    return (
        <>

            {/* Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">All Category</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">
                                            Admin
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-white active"
                                        aria-current="page"
                                    >
                                        All Category
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}


            {/* table */}

            <div className="container-xxl py-5">
                <div className="container">
                   
                    <div className="row g-4 justify-content-center">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Category Desc</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Electricity</td>
                                    <td>Probelm in Electricity</td>
                                    <td>pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Plumber</td>
                                    <td>Problem in tabs</td>
                                    <td>Working</td>
                                </tr>
                               
                            </tbody>
                        </table>



                    </div>
                </div>
            </div>


        </>
    )
}