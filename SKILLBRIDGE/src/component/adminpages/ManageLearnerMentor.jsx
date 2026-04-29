
import { Link } from "react-router-dom";
import { allLearnerMentor, deleteLearnerMentor } from "../../services/learnerMentorService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { BASE_URL } from "../../endPoints";

function ManageLearnerMentor() {

    const [learnerMentor, setLearnerMentor] = useState([])
    const getAllLearnerMentor = async () => {
        try {
            let res = await allLearnerMentor()
            if (res.data.success) {
                setLearnerMentor(res.data.data)
            }
            else {
                toast.error(res.data.message)
            }
        } catch (err) {
            console.log(err)
        }
    }


    const deleteP = async (_id) => {
        try {
            let result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });

            // console.log(result.isConfirmed)
            if (result.isConfirmed) {
                let res = await deleteLearnerMentor({ _id: _id })
                if (res.data.success) {
                    toast.success(res.data.message);
                    getAllLearnerMentor();
                } else {
                    toast.error(res.data.message);
                }
            }

        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getAllLearnerMentor();
    }, [])




    return (
        <>
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3
                        className="text-white display-3 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Manage Learner-Mentor
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
                        <li className="breadcrumb-item active text-primary">Manage Learner-Mentor</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
            {/* <ToastContainer></ToastContainer> */}
            {/* Contact Start */}
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style mb-4">
                            <h4 className="sub-title text-white px-3 mb-0">Manage Learner-Mentor</h4>
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
                            className="col-lg-10 col-xl-10 contact-form wow fadeInLeft"
                            data-wow-delay="0.1s"
                        >
                            <h2 className="display-5 text-white mb-2 text-center ">Manage Learner-Mentor</h2>
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
                        
                            <div className="container-xxl py-5">
                                <div className="container">

                                    <div className="row g-4 justify-content-center ">

                                        <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Contact</th>
                                                    <th scope="col">Profession</th>
                                                    <th scope="col">Skills</th>
                                                    <th scope="col">Experience</th>
                                                    <th scope="col">ProfileImage</th>
                                                    <th scope="col">CreatedAt</th>
                                                    <th scope="col">UpdatedAt</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    learnerMentor.map((learnerMentor, index) =>
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{learnerMentor.userId?.name}</td>
                                                            <td>{learnerMentor.userId?.email}</td>
                                                            <td>{learnerMentor.contact}</td>
                                                            <td>{learnerMentor.profession}</td>
                                                            <td>{learnerMentor.skills}</td>
                                                            <td>{learnerMentor.experience}</td>

                                                            <td>
                                                                <img src={BASE_URL + learnerMentor.profileImage} style={{ height: "70px", width: "70px", borderRadius: "50%" }} alt="thumbnail" /></td>
                                                            
                                                            <td>{new Date(learnerMentor.createdAt).toLocaleString()}</td>
                                                            <td>{learnerMentor.updatedAt ? new Date(learnerMentor.updatedAt).toLocaleString() : '----'}</td>
                                                            <td>
                                                                <Link to={`/admin/updatelearnermentor/${learnerMentor._id}`}>
                                                                    <button className="btn btn-sm">
                                                                        <i className="bi bi-pencil-square"></i>
                                                                    </button>
                                                                </Link>

                                                                <button className="btn btn-sm" onClick={() => deleteP (learnerMentor._id)}>
                                                                    <i className="bi bi-trash2-fill"></i>
                                                                </button>

                                                            </td>
                                                        </tr>)
                                                }

                                            </tbody>
                                        </table>



                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>

    )
}

export default ManageLearnerMentor
