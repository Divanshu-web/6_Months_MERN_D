// import { useEffect, useState } from "react"
// // import { singleLearnerMentor, updateLearnerMentor } from "../../services/learnerMentorService";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate, useParams } from "react-router-dom";
// import { addSession, singleSession , updateSession } from "../../services/sessionService";
// // import AddLearnerMentor from "./AddLearnerMentor";

// function UpdateSession() {

//     let params = useParams()
//     const _id = params._id


//     const [sessionName, setSessionName] = useState("")
//     const [date, setDate] = useState(Date.now())
//     // const [time, setTime] = useState("")
//     const [descryption, setDescryption] = useState("")
//     const [price, setPrice] = useState("")
//     const [duration, setDuration] = useState("")
//     const [sessionType, setSessionType] = useState("")
//     const [meetingLink, setMeetingLink] = useState("")
//     const [youtubeLink, setYoutubeLink] = useState("")
//     const [isPaid, setIsPaid] = useState("")
//     const [profileImage, setProfileImage] = useState("null")

//     const nav = useNavigate()

//     const getSingleSession = async () => {
//         try {
//             let res = await singleSession({ _id: _id })

//             if (res.data.success) {
//                 setSessionName(res.data?.data?.sessionName)
//                 setDate(res.data?.data?.date)
//                 setDescryption(res.data?.data?.descryption)
//                 setPrice(res.data?.data?.price)
//                 setDuration(res.data?.data?.duration)
//                 setSessionType(res.data?.data?.sessionType)
//                 setMeetingLink(res.data?.data?.meetingLink)
//                 setYoutubeLink(res.data?.data?.youtubeLink)
//                 setIsPaid(res.data?.data?.isPaid)
//                 setProfileImage(res.data?.data?.profileImage)



//                 console.log("Response: ", res.data.data)
//             } else {
//                 console.log("Response: ", res.data.data)
//             }

//         } catch (err) {
//             console.log(err.message)
//         }
//     }


//     useEffect(() => {
//         getSingleSession();
//     }, [])


//     const submit = async (e) => {
//         try {
//             e.preventDefault();
//             let formData = {
//                 _id,
//                 sessionName,
//                 date,
//                 descryption,
//                 price,
//                 duration,
//                 sessionType,
//                 meetingLink,
//                 youtubeLink,
//                 isPaid,
//                 profileImage
//             }

//             let res = await addSession(formData)

//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 nav('/learnermentor/managesession')
//             } else {
//                 toast.error(res.data.message);
//             }
//         }
//         catch (err) {
//             console.log(err)
//         }

//     }


//     return (
//         <>
//             {/* Header Start */}
//             <div className="container-fluid bg-breadcrumb">
//                 <div className="container text-center py-5" style={{ maxWidth: 900 }}>
//                     <h3
//                         className="text-white display-3 mb-4 wow fadeInDown"
//                         data-wow-delay="0.1s"
//                     >
//                         Update Session
//                     </h3>
//                     <ol
//                         className="breadcrumb justify-content-center mb-0 wow fadeInDown"
//                         data-wow-delay="0.3s"
//                     >
//                         <li className="breadcrumb-item">
//                             <a href="index.html">Home</a>
//                         </li>
//                         <li className="breadcrumb-item">
//                             <a href="#">Admin</a>
//                         </li>
//                         <li className="breadcrumb-item active text-primary">Update Session</li>
//                     </ol>
//                 </div>
//             </div>
//             {/* Header End */}
//             <ToastContainer></ToastContainer>
//             {/* Contact Start */}
//             <div className="container-fluid contact py-5">
//                 <div className="container py-5">
//                     <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
//                         <div className="sub-style mb-4">
//                             <h4 className="sub-title text-white px-3 mb-0">Update Session</h4>
//                         </div>
//                         <p className="mb-0 text-black-50">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
//                             deleniti amet at atque sequi quibusdam cumque itaque repudiandae
//                             temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
//                             saepe in ab? Repellat!
//                         </p>
//                     </div>
//                     <div className="row g-4 align-items-center d-flex justify-content-center">
//                         <div
//                             className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
//                             data-wow-delay="0.1s"
//                         >
//                             <h2 className="display-5 text-white mb-2 text-center ">Update Session</h2>
//                             <p className="mb-4 text-white">
//                                 The contact form is currently inactive. Get a functional and working
//                                 contact form with Ajax &amp; PHP in a few minutes. Just copy and
//                                 paste the files, add a little code and you're done.{" "}
//                                 <a
//                                     className="text-dark fw-bold"
//                                     href="https://htmlcodex.com/contact-form"
//                                 >
//                                     Download Now
//                                 </a>
//                                 .
//                             </p>
//                             <form onSubmit={submit}>
//                                 <div className="row g-3">

//                                     <div className="col-6">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="text"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="SessionName"
//                                                 placeholder="SessionName"
//                                                 value={sessionName}
//                                                 onChange={((e) => setSessionName(e.target.value))}
//                                             />
//                                             <label htmlFor="SessionName" className="text-dark">Session Name</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-6">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="date"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="Date"
//                                                 placeholder="Date"
//                                                 value={date}
//                                                 onChange={((e) => setDate(e.target.value))}
//                                             />
//                                             <label htmlFor="Date" className="text-dark">Date</label>
//                                         </div>
//                                     </div>

//                                      <div className="col-6">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="date"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="Date"
//                                                 placeholder="Date"
//                                                 value={date}
//                                                 onChange={((e) => setDate(e.target.value))}
//                                             />
//                                             <label htmlFor="Date" className="text-dark">Date</label>
//                                         </div>
//                                     </div>


//                                     <div className="col-6">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="text"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="Descryption"
//                                                 placeholder="Descryption"
//                                                 value={descryption}
//                                                 onChange={((e) => setDescryption(e.target.value))}
//                                             />
//                                             <label htmlFor="Descryption" className="text-dark">Descryption</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-6">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="number"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="Price"
//                                                 placeholder="Price"
//                                                 value={price}
//                                                 onChange={((e) => setPrice(e.target.value))}
//                                             />
//                                             <label htmlFor="Price" className="text-dark">Price</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-6">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="text"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="Duration"
//                                                 placeholder="Duration"
//                                                 value={duration}
//                                                 onChange={((e) => setDuration(e.target.value))}
//                                             />
//                                             <label htmlFor="Duration" className="text-dark">Duration</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-6">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="text"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="SessionType"
//                                                 placeholder="SessionType"
//                                                 value={sessionType}
//                                                 onChange={((e) => setSessionType(e.target.value))}
//                                             />
//                                             <label htmlFor="SessionType" className="text-dark">Session Type</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-6">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="text"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="MeetingLink"
//                                                 placeholder="MeetingLink"
//                                                 value={meetingLink}
//                                                 onChange={((e) => setMeetingLink(e.target.value))}
//                                             />
//                                             <label htmlFor="MeetingLink" className="text-dark">Meeting Link</label>
//                                         </div>
//                                     </div>

//                                         <div className="col-6">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="text"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="YoutubeLink"
//                                                 placeholder="YoutubeLink"
//                                                 value={youtubeLink}
//                                                 onChange={((e) => setYoutubeLink(e.target.value))}
//                                             />
//                                             <label htmlFor="YoutubeLink" className="text-dark">Youtube Link</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-6">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="text"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="IsPaid"
//                                                 placeholder="IsPaid"
//                                                 value={isPaid}
//                                                 onChange={((e) => setIsPaid(e.target.value))}
//                                             />
//                                             <label htmlFor="IsPaid" className="text-dark">Is Paid</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-12">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="file"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="Profile Image"
//                                                 placeholder="Profile Image"
//                                                 onChange={((e) => setProfileImage(e.target.files[0]))}
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="col-12">
//                                         <button className="btn btn-light text-primary w-100 py-3" type="submit">
//                                             Update Session
//                                         </button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Contact End */}
//         </>

//     )
// }

// export default UpdateSession

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { addSession, singleSession, updateSession } from "../../services/sessionService";

/* ─────────────────────────────────────────────
   Styles — identical design token set as AddSession
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  .us-root {
    font-family: 'DM Sans', sans-serif;
    background: #f5f6fa;
    min-height: 100vh;
  }

  /* ── Hero ── */
  .us-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2044 100%);
    padding: 52px 24px 44px;
    position: relative; overflow: hidden;
  }
  .us-hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 90% 50%, rgba(99,102,241,.18) 0%, transparent 70%),
      radial-gradient(ellipse 35% 45% at 5%  80%, rgba(16,185,129,.10) 0%, transparent 60%);
    pointer-events: none;
  }
  .us-hero-inner { position: relative; max-width: 860px; margin: 0 auto; }

  .us-breadcrumb {
    display: flex; align-items: center; gap: 6px;
    font-size: 11.5px; color: rgba(255,255,255,.45);
    margin-bottom: 16px; letter-spacing: .05em; text-transform: uppercase;
  }
  .us-breadcrumb a { color: rgba(255,255,255,.45); text-decoration: none; }
  .us-breadcrumb a:hover { color: rgba(255,255,255,.75); }
  .us-breadcrumb .sep { color: rgba(255,255,255,.22); }
  .us-breadcrumb .active { color: #818cf8; }

  .us-hero h1 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.7rem, 3.5vw, 2.4rem);
    font-weight: 700; color: #fff;
    margin: 0 0 6px; letter-spacing: -.02em;
  }
  .us-hero p { color: rgba(255,255,255,.48); font-size: 13.5px; margin: 0; font-weight: 300; }

  /* ── Body ── */
  .us-body { max-width: 860px; margin: 0 auto; padding: 36px 20px 64px; }

  /* ── Card ── */
  .us-card {
    background: #fff;
    border-radius: 20px;
    border: 1.5px solid #e8eaf0;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(15,23,42,.06);
  }
  .us-card-header {
    padding: 22px 28px 20px;
    border-bottom: 1px solid #f1f5f9;
    display: flex; align-items: center; gap: 14px;
  }
  .us-card-icon {
    width: 42px; height: 42px; border-radius: 11px;
    background: linear-gradient(135deg, #f59e0b, #fbbf24);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .us-card-header h2 {
    font-family: 'Sora', sans-serif;
    font-size: 17px; font-weight: 600; color: #0f172a; margin: 0 0 2px;
  }
  .us-card-header p { font-size: 12.5px; color: #94a3b8; margin: 0; }
  .us-card-body { padding: 28px; }

  /* ── Section labels ── */
  .us-section { margin-bottom: 28px; }
  .us-section:last-of-type { margin-bottom: 0; }
  .us-section-label {
    font-family: 'Sora', sans-serif;
    font-size: 11px; font-weight: 600;
    letter-spacing: .08em; text-transform: uppercase;
    color: #94a3b8; margin: 0 0 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f1f5f9;
  }

  /* ── Fields ── */
  .us-field { display: flex; flex-direction: column; gap: 5px; }
  .us-label {
    font-size: 12.5px; font-weight: 500; color: #475569;
    display: flex; align-items: center; gap: 5px;
  }
  .us-label svg { color: #94a3b8; }
  .us-required { color: #f87171; margin-left: 1px; }

  .us-input, .us-textarea, .us-select-native {
    width: 100%;
    padding: 10px 13px;
    border: 1.5px solid #e2e8f0; border-radius: 10px;
    font-size: 13.5px; font-family: 'DM Sans', sans-serif;
    background: #fafbfc; color: #1e293b;
    outline: none;
    transition: border-color .18s, box-shadow .18s;
    box-sizing: border-box; appearance: none;
  }
  .us-input:focus, .us-textarea:focus, .us-select-native:focus {
    border-color: #818cf8;
    box-shadow: 0 0 0 3px rgba(129,140,248,.12);
    background: #fff;
  }
  .us-input::placeholder, .us-textarea::placeholder { color: #cbd5e1; }
  .us-textarea { resize: vertical; min-height: 80px; }

  /* File input */
  .us-input[type="file"] { padding: 8px 13px; cursor: pointer; }
  .us-input[type="file"]::-webkit-file-upload-button {
    background: #fef3c7; color: #d97706;
    border: none; border-radius: 6px;
    padding: 5px 12px; font-size: 12px;
    font-family: 'DM Sans', sans-serif; font-weight: 500;
    cursor: pointer; margin-right: 10px;
  }

  /* ── Toggle (Free / Paid) ── */
  .us-toggle-group { display: flex; gap: 8px; }
  .us-toggle-btn {
    flex: 1; padding: 10px 0;
    border-radius: 10px; border: 1.5px solid #e2e8f0;
    background: #fafbfc;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px; font-weight: 500; color: #64748b;
    cursor: pointer; transition: all .18s;
    display: flex; align-items: center; justify-content: center; gap: 6px;
  }
  .us-toggle-btn:hover { border-color: #c7d2fe; color: #6366f1; }
  .us-toggle-btn.active-free  { background: #fef3c7; border-color: #fbbf24; color: #d97706; }
  .us-toggle-btn.active-paid  { background: #d1fae5; border-color: #34d399; color: #059669; }

  /* ── Thumbnail preview ── */
  .us-thumb-row { display: flex; align-items: center; gap: 14px; }
  .us-thumb-preview {
    width: 70px; height: 70px; border-radius: 12px;
    object-fit: cover; border: 2px solid #e2e8f0;
    display: block; flex-shrink: 0; background: #f1f5f9;
  }
  .us-thumb-placeholder {
    width: 70px; height: 70px; border-radius: 12px;
    border: 2px dashed #e2e8f0; background: #f8fafc;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; color: #cbd5e1;
  }
  .us-helper { font-size: 11.5px; color: #94a3b8; margin-top: 3px; }

  /* ── Divider ── */
  .us-divider { border: none; border-top: 1px solid #f1f5f9; margin: 24px 0; }

  /* ── Change indicator badge ── */
  .us-update-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: #fef3c7; color: #d97706;
    font-size: 11.5px; font-weight: 600;
    padding: 4px 10px; border-radius: 100px;
    letter-spacing: .03em;
  }
  .us-update-badge .dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #f59e0b; box-shadow: 0 0 6px #f59e0b;
  }

  /* ── Submit button ── */
  .us-submit {
    width: 100%; padding: 13px;
    border-radius: 12px; border: none;
    background: linear-gradient(135deg, #f59e0b, #fbbf24);
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 15px; font-weight: 600;
    cursor: pointer; transition: opacity .18s, transform .15s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    margin-top: 28px;
    box-shadow: 0 4px 16px rgba(245,158,11,.30);
  }
  .us-submit:hover:not(:disabled) { opacity: .92; transform: translateY(-1px); }
  .us-submit:disabled { opacity: .6; cursor: not-allowed; }
`;

/* ── Icons ── */
const Icon = {
    session: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.7"><rect x="2" y="3" width="16" height="14" rx="3" /><line x1="2" y1="7" x2="18" y2="7" /><line x1="6" y1="11" x2="8" y2="11" /><line x1="6" y1="14" x2="10" y2="14" /></svg>,
    text: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="1" y1="3" x2="13" y2="3" /><line x1="1" y1="7" x2="10" y2="7" /><line x1="1" y1="11" x2="8" y2="11" /></svg>,
    calendar: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="2" width="12" height="11" rx="2" /><line x1="1" y1="6" x2="13" y2="6" /><line x1="4" y1="1" x2="4" y2="3" /><line x1="10" y1="1" x2="10" y2="3" /></svg>,
    clock: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><polyline points="7 4 7 7 9.5 9.5" /></svg>,
    dollar: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="7" y1="1" x2="7" y2="13" /><path d="M10 3.5H5.5A2 2 0 0 0 5.5 7.5h3A2 2 0 0 1 8.5 11.5H4" /></svg>,
    link: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5.5 8.5a3 3 0 0 0 4.24 0l1.5-1.5a3 3 0 0 0-4.24-4.24L6 3.76" /><path d="M8.5 5.5a3 3 0 0 0-4.24 0L2.76 7a3 3 0 0 0 4.24 4.24L8 10.24" /></svg>,
    youtube: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="3" width="12" height="8" rx="2.5" /><polygon points="5.5 5 9.5 7 5.5 9" fill="currentColor" stroke="none" /></svg>,
    image: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="2" width="12" height="10" rx="2" /><circle cx="4.5" cy="5.5" r="1" /><polyline points="1 10 4.5 6.5 7 9 9.5 7 13 10" /></svg>,
    free: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><polyline points="4.5 7 6.5 9 9.5 5" /></svg>,
    paid: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="7" y1="1" x2="7" y2="13" /><path d="M10 3.5H5.5A2 2 0 0 0 5.5 7.5h3A2 2 0 0 1 8.5 11.5H4" /></svg>,
    save: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#fff" strokeWidth="2"><path d="M2 13V4.5L4.5 2H13v11H2z" /><rect x="4.5" y="8.5" width="6" height="4.5" /><rect x="4.5" y="2" width="5" height="3" /></svg>,
    placeholder: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="4" width="24" height="20" rx="4" /><circle cx="9" cy="11" r="2" /><polyline points="2 20 9 13 13 17 18 12 26 20" /></svg>,
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
function UpdateSession() {
    const { _id } = useParams();
    const nav = useNavigate();

    const [sessionName, setSessionName] = useState("");
    const [date, setDate] = useState("");
    const [descryption, setDescryption] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("");
    const [sessionType, setSessionType] = useState("1");
    const [meetingLink, setMeetingLink] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [isPaid, setIsPaid] = useState(0);
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbPreview, setThumbPreview] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [fetching, setFetching] = useState(true);

    /* ── Fetch existing session ── */
    const getSingleSession = async () => {
        try {
            setFetching(true);
            const res = await singleSession({ _id });
            if (res.data.success) {
                const d = res.data.data;
                setSessionName(d.sessionName || "");
                setDate(d.date || "");
                setDescryption(d.descryption || "");
                setPrice(d.price || "");
                setDuration(d.duration || "");
                setSessionType(d.sessionType || "1");
                setMeetingLink(d.meetingLink || "");
                setYoutubeLink(d.youtubeLink || "");
                setIsPaid(d.isPaid ?? 0);
                if (d.thumbnail) setThumbPreview(d.thumbnail); // show existing image if available
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err.message);
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => { getSingleSession(); }, []);

    const handleThumb = (e) => {
        const file = e.target.files[0];
        if (file) {
            setThumbnail(file);
            setThumbPreview(URL.createObjectURL(file));
        }
    };

    /* ── Submit ── */
    const submit = async (e) => {
        e.preventDefault();
        try {
            setSubmitting(true);
            const formData = new FormData();
            formData.append("_id", _id);
            formData.append("sessionName", sessionName);
            formData.append("date", date);
            formData.append("descryption", descryption);
            formData.append("price", price);
            formData.append("duration", duration);
            formData.append("sessionType", sessionType);
            formData.append("meetingLink", meetingLink);
            formData.append("youtubeLink", youtubeLink);
            formData.append("isPaid", isPaid);
            if (thumbnail) formData.append("thumbnail", thumbnail);

            const res = await updateSession(formData);
            if (res.data.success) {
                toast.success(res.data.message);
                nav("/learnermentor/managesession");
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="us-root">
            <style>{styles}</style>
            <ToastContainer position="top-right" />

            {/* ── Hero ── */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3
                        className="text-white display-3 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Update Session
                    </h3>
                    <ol
                        className="breadcrumb justify-content-center mb-0 wow fadeInDown"
                        data-wow-delay="0.3s"
                    >
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Learner Mentor</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">Update Session</li>
                    </ol>
                </div>
            </div>

            {/* ── Body ── */}
            <div className="us-body">
                <div className="us-card">

                    {/* Card header */}
                    <div className="us-card-header">
                        <div className="us-card-icon">{Icon.session}</div>
                        <div>
                            <h2>Edit Session Details</h2>
                            <p>Changes will take effect immediately after saving</p>
                        </div>
                        <div style={{ marginLeft: "auto" }}>
                            <span className="us-update-badge">
                                <span className="dot" /> Editing mode
                            </span>
                        </div>
                    </div>

                    <div className="us-card-body">
                        {fetching ? (
                            /* Loading skeleton */
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} style={{
                                        height: 42, borderRadius: 10,
                                        background: "linear-gradient(90deg,#f1f5f9 25%,#e2e8f0 50%,#f1f5f9 75%)",
                                        backgroundSize: "600px 100%",
                                        animation: "shimmer 1.4s infinite"
                                    }} />
                                ))}
                                <style>{`@keyframes shimmer{0%{background-position:-600px 0}100%{background-position:600px 0}}`}</style>
                            </div>
                        ) : (
                            <form onSubmit={submit}>

                                {/* ── Section 1: Basic Info ── */}
                                <div className="us-section">
                                    <div className="us-section-label">Basic Information</div>
                                    <div className="row g-3">

                                        <div className="col-md-6">
                                            <div className="us-field">
                                                <label className="us-label">{Icon.text} Session Name <span className="us-required">*</span></label>
                                                <input
                                                    className="us-input"
                                                    type="text"
                                                    placeholder="e.g. Introduction to React"
                                                    value={sessionName}
                                                    onChange={e => setSessionName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="us-field">
                                                <label className="us-label">{Icon.calendar} Date <span className="us-required">*</span></label>
                                                <input
                                                    className="us-input"
                                                    type="date"
                                                    value={date}
                                                    onChange={e => setDate(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="us-field">
                                                <label className="us-label">{Icon.text} Description</label>
                                                <textarea
                                                    className="us-textarea"
                                                    placeholder="Brief overview of what this session covers…"
                                                    value={descryption}
                                                    onChange={e => setDescryption(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="us-field">
                                                <label className="us-label">{Icon.clock} Duration (minutes) <span className="us-required">*</span></label>
                                                <input
                                                    className="us-input"
                                                    type="number"
                                                    placeholder="e.g. 60"
                                                    value={duration}
                                                    onChange={e => setDuration(e.target.value)}
                                                    min={1}
                                                    required
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <hr className="us-divider" />

                                {/* ── Section 2: Pricing ── */}
                                <div className="us-section">
                                    <div className="us-section-label">Pricing &amp; Type</div>
                                    <div className="row g-3">

                                        <div className="col-12">
                                            <div className="us-field">
                                                <label className="us-label">Session Type <span className="us-required">*</span></label>
                                                <div className="us-toggle-group">
                                                    <button
                                                        type="button"
                                                        className={`us-toggle-btn ${sessionType === "1" ? "active-free" : ""}`}
                                                        onClick={() => { setSessionType("1"); setIsPaid(0); }}
                                                    >
                                                        {Icon.free} Free
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className={`us-toggle-btn ${sessionType === "2" ? "active-paid" : ""}`}
                                                        onClick={() => { setSessionType("2"); setIsPaid(1); }}
                                                    >
                                                        {Icon.paid} Paid
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {sessionType === "2" && (
                                            <div className="col-md-6">
                                                <div className="us-field">
                                                    <label className="us-label">{Icon.dollar} Price (₹) <span className="us-required">*</span></label>
                                                    <input
                                                        className="us-input"
                                                        type="number"
                                                        placeholder="e.g. 499"
                                                        value={price}
                                                        onChange={e => setPrice(e.target.value)}
                                                        min={0}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>

                                <hr className="us-divider" />

                                {/* ── Section 3: Links ── */}
                                <div className="us-section">
                                    <div className="us-section-label">Session Links</div>
                                    <div className="row g-3">

                                        <div className="col-md-6">
                                            <div className="us-field">
                                                <label className="us-label">{Icon.link} Meeting Link</label>
                                                <input
                                                    className="us-input"
                                                    type="url"
                                                    placeholder="https://meet.google.com/…"
                                                    value={meetingLink}
                                                    onChange={e => setMeetingLink(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="us-field">
                                                <label className="us-label">{Icon.youtube} YouTube Link</label>
                                                <input
                                                    className="us-input"
                                                    type="url"
                                                    placeholder="https://youtube.com/watch?v=…"
                                                    value={youtubeLink}
                                                    onChange={e => setYoutubeLink(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <hr className="us-divider" />

                                {/* ── Section 4: Thumbnail ── */}
                                <div className="us-section">
                                    <div className="us-section-label">Thumbnail</div>
                                    <div className="us-field">
                                        <label className="us-label">{Icon.image} Upload New Image</label>
                                        <div className="us-thumb-row">
                                            {thumbPreview ? (
                                                <img src={thumbPreview} alt="Preview" className="us-thumb-preview" />
                                            ) : (
                                                <div className="us-thumb-placeholder">{Icon.placeholder}</div>
                                            )}
                                            <div style={{ flex: 1 }}>
                                                <input
                                                    className="us-input"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleThumb}
                                                />
                                                <div className="us-helper">
                                                    {thumbPreview
                                                        ? "A thumbnail is already set — upload a new one to replace it."
                                                        : "Recommended: 400×400 px · JPG or PNG · max 2 MB"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Submit ── */}
                                <button className="us-submit" type="submit" disabled={submitting}>
                                    {submitting ? "Saving changes…" : <>{Icon.save} Save Changes</>}
                                </button>

                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateSession;
