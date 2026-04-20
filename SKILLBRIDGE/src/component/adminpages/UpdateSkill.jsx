import { useState } from "react"
import { addSkills, singleSkills, updateSkills } from "../../services/skillService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function UpdateSkills() {


    const [skillName, setskillName] = useState("")
    const [thumbnail, setThumbnail] = useState("null")
    const [status, setStatus] = useState(0)

    const nav = useNavigate()

    const getSingleSkill = async () => {
        try {
            let res = await singleSkills({ _id: _id })

            if (res.data.success) {
                setskillName(res.data?.data?.name)
                setThumbail(res.data?.data?.thumbnail)
                setStatus(res.data?.data?.status)
                w

                console.log("Response: ", res.data.data)
            } else {
                console.log("Response: ", res.data.data)
            }

        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() => {
        getSingleSkill();
    }, [])


    const submit = async (e) => {
        try {
            e.preventDefault();
            let formData = {
                skillName,
                thumbnail,
                status
            }

            let res = await addSkills(formData)

            if (res.data.success) {
                toast.success(res.data.message);
                nav('/admin/manageskills')
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
                        Update Skills
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
                        <li className="breadcrumb-item active text-primary">Update Skills</li>
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
                            <h4 className="sub-title text-white px-3 mb-0">Update Skills</h4>
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
                            <h2 className="display-5 text-white mb-2 text-center ">Update Skills</h2>
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
                                                id="skillname"
                                                placeholder="Skill Name"
                                                //  value={email}
                                                // onInput={(e) => {
                                                //     setEmail(e.target.value)
                                                // }
                                                // }
                                                onChange={((e) => setskillName(e.target.value))}
                                            />
                                            <label htmlFor="skillname" className="text-dark">Skill Name</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="file"
                                                className="form-control bg-transparent border border-white"
                                                id="thumbnail"
                                                placeholder="Thumbnail"
                                                // value={password}
                                                // onInput={(e) => {
                                                //     setPassword(e.target.value) }}
                                                onChange={((e) => setThumbnail(e.target.files[0]))}
                                            />
                                            {/* <label htmlFor="thumbnail" className="text-dark">Thumbnail</label> */}
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control bg-transparent border border-white"
                                                id="status"
                                                placeholder="Status"
                                                //  value={email}
                                                // onInput={(e) => {
                                                //     setEmail(e.target.value)
                                                // }
                                                // }
                                                onChange={((e) => setStatus(e.target.value))}
                                            />
                                            <label htmlFor="status" className="text-dark">Status</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-light text-primary w-100 py-3" type="submit">
                                            Update Skills
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

export default UpdateSkills
