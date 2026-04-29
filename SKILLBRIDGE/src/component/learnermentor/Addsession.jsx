import { useState } from "react"
import { addSession } from "../../services/sessionService";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Addsession() {


    const [sessionName, setSessionName] = useState("")
    const [date, setDate] = useState(Date.now())
    const [descryption, setDescryption] = useState("")
    const [price, setPrice] = useState(0)
    const [thumbnail, setThumbnail] = useState("")
    const [duration, setDuration] = useState("")
    const [sessionType, setSessionType] = useState("")
    const [meetingLink, setMeetingLink] = useState("")
    const [youtubeLink, setYoutubeLink] = useState("")
    const [isPaid, setIsPaid] = useState("")

    const nav = useNavigate()
    const submit = async (e) => {
        try {
            e.preventDefault();
            // let formData = {
            //     skillName,
            //     thumbnail,
            //     status
            // }

            let formData = new FormData;
            formData.append("name", name)
            formData.append("date", date)
            formData.append("descryption", descryption)
            formData.append("price", price)
            formData.append("thumbnail", thumbnail)
            formData.append("duration", duration)
            formData.append("sessionType", sessionType)
            formData.append("meetingLink", meetingLink)
            formData.append("youtubeLink", youtubeLink)
            formData.append("isPaid", isPaid)

            console.log("Formdata: ", formData)

            let res = await addSession(formData)

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
                        Add Session
                    </h3>
                    <ol
                        className="breadcrumb justify-content-center mb-0 wow fadeInDown"
                        data-wow-delay="0.3s"
                    >
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Learner-Mentor</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">Add Session</li>
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
                            <h4 className="sub-title text-white px-3 mb-0">Add Session</h4>
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
                            <h2 className="display-5 text-white mb-2 text-center ">Add Session</h2>
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
                                                id="Session Name"
                                                placeholder="Session Name"
                                                value={sessionName}
                                                onChange={((e) => setName(e.target.value))}
                                            />
                                            <label htmlFor="Session Name" className="text-dark">Session Name</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="date"
                                                className="form-control bg-transparent border border-white"
                                                id="Date"
                                                placeholder="Date"
                                                value={date}
                                                onChange={((e) => setEmail(e.target.value))}
                                            />
                                            <label htmlFor="Date" className="text-dark">Date</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="Descryption"
                                                placeholder="Descryption"
                                                value={descryption}
                                                onChange={((e) => setDescryption(e.target.value))}
                                            />
                                            <label htmlFor="Descryption" className="text-dark">Descryption</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="Price"
                                                placeholder="Price"
                                                value={price}
                                                onChange={((e) => setPrice(e.target.value))}
                                            />
                                            <label htmlFor="Price" className="text-dark">Price</label>
                                        </div>
                                    </div>

                                   



                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="Duration"
                                                placeholder="Duration"
                                                value={duration}
                                                onChange={((e) => setDuration(e.target.value))}
                                            />
                                            <label htmlFor="Duration" className="text-dark">Duration</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="SessionType"
                                                placeholder="SessionType"
                                                value={sessionType}
                                                onChange={((e) => setSessionType(e.target.value))}
                                            />
                                            <label htmlFor="SessionType" className="text-dark">Session Type</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="MeetingLink"
                                                placeholder="MeetingLink"
                                                value={meetingLink}
                                                onChange={((e) => setMeetingLink(e.target.value))}
                                            />
                                            <label htmlFor="MeetingLink" className="text-dark">Meeting Link</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="YoutubeLink"
                                                placeholder="YoutubeLink"
                                                value={youtubeLink}
                                                onChange={((e) => setYoutubeLink(e.target.value))}
                                            />
                                            <label htmlFor="YoutubeLink" className="text-dark">Youtube Link</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border border-white"
                                                id="IsPaid"
                                                placeholder="IsPaid"
                                                value={isPaid}
                                                onChange={((e) => setIsPaid(e.target.value))}
                                            />
                                            <label htmlFor="IsPaid" className="text-dark">Is Paid</label>
                                        </div>
                                    </div>

                                     <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="file"
                                                className="form-control bg-transparent border border-white"
                                                id="Thumbnail"
                                                placeholder="Thumbnail"
                                                // value={profileImage}
                                                onChange={((e) => setThumbnail(e.target.files[0]))}
                                            />
                                            <label htmlFor="Thumbnail" className="text-dark">Thumbnail</label>
                                        </div>
                                    </div>






                                    <div className="col-12">
                                        <button className="btn btn-light text-primary w-100 py-3" type="submit">
                                            Add Session
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

export default Addsession
