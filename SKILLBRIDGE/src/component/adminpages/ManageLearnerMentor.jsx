
import { Link } from "react-router-dom";
import { allSkills, deleteSkills } from "../../services/skillService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { BASE_URL } from "../../endPoints";

function ManageSkills() {

    const [skills, setSkills] = useState([])
    const getAllSkill = async () => {
        try {
            let res = await allSkills()
            if (res.data.success) {
                setSkills(res.data.data)
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
                let res = await deleteSkills({ _id: _id })
                if (res.data.success) {
                    toast.success(res.data.message);
                    getAllSkills();
                } else {
                    toast.error(res.data.message);
                }
            }

        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getAllSkill();
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
                        Manage Skills
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
                        <li className="breadcrumb-item active text-primary">Manage Skills</li>
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
                            <h4 className="sub-title text-white px-3 mb-0">Manage Skills</h4>
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
                            <h2 className="display-5 text-white mb-2 text-center ">Manage Skills</h2>
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
                                                    <th scope="col">Skills Name</th>
                                                    <th scope="col">thumbnail</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">CreatedAt</th>
                                                    <th scope="col">UpdatedAt</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    skills.map((skill, index) =>
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{skill.skillName}</td>
                                                            <td>
                                                                <img src={BASE_URL + skill.thumbnail} style={{ height: "70px", width: "70px", borderRadius: "50%" }} alt="thumbnail" /></td>
                                                            <td>{skill.status}</td>
                                                            <td>{new Date(skill.createdAt).toLocaleString()}</td>
                                                            <td>{skill.updatedAt ? new Date(skill.updatedAt).toLocaleString() : '----'}</td>
                                                            <td>
                                                                <Link to={`/admin/updateskills/${skill._id}`}>
                                                                    <button className="btn btn-sm">
                                                                        <i className="bi bi-pencil-square"></i>
                                                                    </button>
                                                                </Link>

                                                                <button className="btn btn-sm" onClick={() => delete (skill._id)}>
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

export default ManageSkills
