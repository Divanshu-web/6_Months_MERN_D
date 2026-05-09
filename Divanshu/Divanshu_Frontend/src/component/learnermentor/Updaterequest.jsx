import { useEffect, useState } from "react"
// import { addSkills, singleSkills, updateSkills } from "../../services/skillService";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { addRequest, singleRequest } from "../../services/requestService";

function UpdateRequest() {

    let params = useParams()
    const _id = params._id 


    const [date, setDate] = useState("")
    const [paymentStatus, setPaymentStatus] = useState(0)
    const [requestStatus, setRequestStatus] = useState(0)

    const nav = useNavigate()

    const getSingleRequest = async () => {
        try {
            let res = await singleRequest({ _id: _id })

            if (res.data.success) {
                setDate(res.data?.data?.date)
                setPaymentStatus(res.data?.data?.paymentStatus)
                setRequestStatus(res.data?.data?.requestStatus)
                

                console.log("Response: ", res.data.data)
            } else {
                console.log("Response: ", res.data.data)
            }

        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() => {
        getSingleRequest();
    }, [])


    const submit = async (e) => {
        try {
            e.preventDefault();
            let formData = {
                _id,
                date,
                paymentStatus,
                requestStatus,
            }

            let res = await addRequest(formData)

            if (res.data.success) {
                toast.success(res.data.message);
                nav('/learnermentor/managerequest')
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
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3
                        className="text-white display-3 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Update Request
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
                        <li className="breadcrumb-item active text-primary">Update Request</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            <ToastContainer></ToastContainer>
            {/* Contact Start */}
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style mb-4">
                            <h4 className="sub-title text-white px-3 mb-0">Update Request</h4>
                        </div>
                        <p className="mb-0 text-black-50">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
                            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
                            saepe in ab? Repellat!
                        </p>
                    </div>
                    <div className="row g-4 align-items-center d-flex justify-content-center">
                        <div
                            className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
                            data-wow-delay="0.1s"
                        >
                            <h2 className="display-5 text-white mb-2 text-center ">Update Request</h2>
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
                            <form onSubmit={submit}>
                                <div className="row g-3">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="Date"
                                                placeholder="Skill Name"
                                                 value={date}
                                               
                                                onChange={((e) => setDate(e.target.value))}
                                            />
                                            <label htmlFor="Date" className="text-dark">Date</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control bg-transparent border border-white"
                                                id="Payment Status"
                                                placeholder="Payment Status"
                                                 value={paymentStatus}
                                                onChange={((e) => setPaymentStatus(e.target.value))}
                                            />
                                            <label htmlFor="Payment Status" className="text-dark">Payment Status</label>
                                        </div>
                                    </div>


                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control bg-transparen`nt border border-white"
                                                id="Request Status"
                                                placeholder="Request Status"
                                                 value={requestStatus}
                                                onChange={((e) => setRequestStatus(e.target.value))}
                                            />
                                            <label htmlFor="Request Status" className="text-dark">Request Status</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-light text-primary w-100 py-3" type="submit">
                                            Update Request
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>

    )
}

export default UpdateRequest
