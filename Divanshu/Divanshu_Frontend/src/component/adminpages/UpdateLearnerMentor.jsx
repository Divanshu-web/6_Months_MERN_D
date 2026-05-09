import { useEffect, useState } from "react"
import { singleLearnerMentor, updateLearnerMentor } from "../../services/learnerMentorService";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
// import AddLearnerMentor from "./AddLearnerMentor";

function UpdateLearnerMentor() {

    let params = useParams()
    const _id = params._id


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [profession, setProfession] = useState("")
    const [skills, setSkills] = useState("")
    const [experience, setExperience] = useState("")
    const [profileImage, setProfileImage] = useState("null")

    const nav = useNavigate()

    const getSingleLearnerMentor = async () => {
        try {
            let res = await singleLearnerMentor({ _id: _id })

            if (res.data.success) {
                setName(res.data?.data?.userId?.name)
                setEmail(res.data?.data?.userId?.email)
                setPassword(res.data?.data?.password)
                setContact(res.data?.data?.contact)
                setProfession(res.data?.data?.profession)
                setSkills(res.data?.data?.skills)
                setExperience(res.data?.data?.experience)
                setProfileImage(res.data?.data?.profileImage)



                console.log("Response: ", res.data.data)
            } else {
                console.log("Response: ", res.data.data)
            }

        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() => {
        getSingleLearnerMentor();
    }, [])


    const submit = async (e) => {
        try {
            e.preventDefault();
            let formData = {
                _id,
                name,
                email,
                password,
                contact,
                profession,
                skills,
                experience,
                profileImage
            }

            let res = await AddLearnerMentor(formData)

            if (res.data.success) {
                toast.success(res.data.message);
                nav('/admin/managelearnermentor')
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
                        Update Learner-Mentor
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
                        <li className="breadcrumb-item active text-primary">Update Learner-Mentor</li>
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
                            <h4 className="sub-title text-white px-3 mb-0">Update Learner-Mentor</h4>
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
                            <h2 className="display-5 text-white mb-2 text-center ">Update Learner-Mentor</h2>
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

                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="Name"
                                                placeholder="Name"
                                                value={name}
                                                onChange={((e) => setName(e.target.value))}
                                            />
                                            <label htmlFor="Name" className="text-dark">Name</label>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control bg-transparent border border-white"
                                                id="Email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={((e) => setEmail(e.target.value))}
                                            />
                                            <label htmlFor="Email" className="text-dark">Email</label>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control bg-transparent border border-white"
                                                id="Contact"
                                                placeholder="Contact"
                                                value={contact}
                                                onChange={((e) => setContact(e.target.value))}
                                            />
                                            <label htmlFor="Contact" className="text-dark">Contact</label>
                                        </div>
                                    </div>


                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="Profession"
                                                placeholder="Profession"
                                                value={profession}
                                                onChange={((e) => setProfession(e.target.value))}
                                            />
                                            <label htmlFor="Profession" className="text-dark">Profession</label>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="Skills"
                                                placeholder="Skills"
                                                value={skills}
                                                onChange={((e) => setSkills(e.target.value))}
                                            />
                                            <label htmlFor="Skills" className="text-dark">Skills</label>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="Experience"
                                                placeholder="Experience"
                                                value={experience}
                                                onChange={((e) => setExperience(e.target.value))}
                                            />
                                            <label htmlFor="Experience" className="text-dark">Experience</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="file"
                                                className="form-control bg-transparent border border-white"
                                                id="Profile Image"
                                                placeholder="Profile Image"
                                                onChange={((e) => setProfileImage(e.target.files[0]))}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-light text-primary w-100 py-3" type="submit">
                                            Update Learner-Mentor
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

export default UpdateLearnerMentor
