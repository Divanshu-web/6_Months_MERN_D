// import { useEffect, useState } from "react"
// import { addSkills, singleSkills, updateSkills } from "../../services/skillService";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate, useParams } from "react-router-dom";

// function Learnermentorupdateskills() {

//     let params = useParams()
//     const _id = params._id 


//     const [skillName, setskillName] = useState("")
//     const [thumbnail, setThumbnail] = useState("null")
//     const [status, setStatus] = useState(0)

//     const nav = useNavigate()

//     const getSingleSkill = async () => {
//         try {
//             let res = await singleSkills({ _id: _id })

//             if (res.data.success) {
//                 setskillName(res.data?.data?.skillName)
//                 setThumbnail(res.data?.data?.thumbnail)
//                 setStatus(res.data?.data?.status)


//                 console.log("Response: ", res.data.data)
//             } else {
//                 console.log("Response: ", res.data.data)
//             }

//         } catch (err) {
//             console.log(err.message)
//         }
//     }


//     useEffect(() => {
//         getSingleSkill();
//     }, [])


//     const submit = async (e) => {
//         try {
//             e.preventDefault();
//             let formData = {
//                 _id,
//                 skillName,
//                 thumbnail,
//                 status
//             }

//             let res = await addSkills(formData)

//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 nav('/learnermentor/manageskills')
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
//                         Update Skills
//                     </h3>
//                     <ol
//                         className="breadcrumb justify-content-center mb-0 wow fadeInDown"
//                         data-wow-delay="0.3s"
//                     >
//                         <li className="breadcrumb-item">
//                             <a href="index.html">Home</a>
//                         </li>
//                         <li className="breadcrumb-item">
//                             <a href="#">Learner Mentor</a>
//                         </li>
//                         <li className="breadcrumb-item active text-primary">Update Skills</li>
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
//                             <h4 className="sub-title text-white px-3 mb-0">Update Skills</h4>
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
//                             <h2 className="display-5 text-white mb-2 text-center ">Update Skills</h2>
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

//                                     <div className="col-12">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="text"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="skillname"
//                                                 placeholder="Skill Name"
//                                                  value={skillName}
//                                                 // onInput={(e) => {
//                                                 //     setEmail(e.target.value)
//                                                 // }
//                                                 // }
//                                                 onChange={((e) => setskillName(e.target.value))}
//                                             />
//                                             <label htmlFor="skillname" className="text-dark">Skill Name</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-12">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="file"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="thumbnail"
//                                                 placeholder="Thumbnail"
//                                                 // value={password}
//                                                 // onInput={(e) => {
//                                                 //     setPassword(e.target.value) }}
//                                                 onChange={((e) => setThumbnail(e.target.files[0]))}
//                                             />
//                                             {/* <label htmlFor="thumbnail" className="text-dark">Thumbnail</label> */}
//                                         </div>
//                                     </div>

//                                     <div className="col-12">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="number"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="status"
//                                                 placeholder="Status"
//                                                  value={status}
//                                                 // onInput={(e) => {
//                                                 //     setEmail(e.target.value)
//                                                 // }
//                                                 // }
//                                                 onChange={((e) => setStatus(e.target.value))}
//                                             />
//                                             <label htmlFor="status" className="text-dark">Status</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-12">
//                                         <button className="btn btn-light text-primary w-100 py-3" type="submit">
//                                             Update Skills
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

// export default Learnermentorupdateskills


import { useEffect, useState } from "react";
import { addSkills, singleSkills, updateSkills } from "../../services/skillService";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../endPoints";

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  .usk-root {
    font-family: 'DM Sans', sans-serif;
    background: #f5f6fa;
    min-height: 100vh;
  }

  /* ── Hero ── */
  .usk-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2044 100%);
    padding: 52px 24px 44px;
    position: relative; overflow: hidden;
  }
  .usk-hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 90% 50%, rgba(245,158,11,.15) 0%, transparent 70%),
      radial-gradient(ellipse 35% 45% at 5%  80%, rgba(16,185,129,.10) 0%, transparent 60%);
    pointer-events: none;
  }
  .usk-hero-inner { position: relative; max-width: 560px; margin: 0 auto; }

  .usk-breadcrumb {
    display: flex; align-items: center; gap: 6px;
    font-size: 11.5px; color: rgba(255,255,255,.45);
    margin-bottom: 16px; letter-spacing: .05em; text-transform: uppercase;
  }
  .usk-breadcrumb a { color: rgba(255,255,255,.45); text-decoration: none; }
  .usk-breadcrumb a:hover { color: rgba(255,255,255,.75); }
  .usk-breadcrumb .sep { color: rgba(255,255,255,.22); }
  .usk-breadcrumb .active { color: #fbbf24; }

  .usk-hero h1 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.7rem, 3.5vw, 2.4rem);
    font-weight: 700; color: #fff;
    margin: 0 0 6px; letter-spacing: -.02em;
  }
  .usk-hero p { color: rgba(255,255,255,.48); font-size: 13.5px; margin: 0; font-weight: 300; }

  /* ── Body ── */
  .usk-body { max-width: 560px; margin: 0 auto; padding: 36px 20px 64px; }

  /* ── Card ── */
  .usk-card {
    background: #fff;
    border-radius: 20px;
    border: 1.5px solid #e8eaf0;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(15,23,42,.06);
  }
  .usk-card-header {
    padding: 22px 28px 20px;
    border-bottom: 1px solid #f1f5f9;
    display: flex; align-items: center; gap: 14px;
  }
  .usk-card-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: linear-gradient(135deg, #f59e0b, #fbbf24);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(245,158,11,.25);
  }
  .usk-card-header-text { flex: 1; }
  .usk-card-header h2 {
    font-family: 'Sora', sans-serif;
    font-size: 17px; font-weight: 600; color: #0f172a; margin: 0 0 2px;
  }
  .usk-card-header p { font-size: 12.5px; color: #94a3b8; margin: 0; }

  /* Editing badge */
  .usk-edit-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: #fef3c7; color: #d97706;
    font-size: 11px; font-weight: 600;
    padding: 4px 10px; border-radius: 100px;
    letter-spacing: .04em; text-transform: uppercase;
    white-space: nowrap;
  }
  .usk-edit-badge .dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #f59e0b;
    box-shadow: 0 0 6px #f59e0b;
    animation: usk-glow 2s ease-in-out infinite alternate;
  }
  @keyframes usk-glow {
    from { box-shadow: 0 0 3px #f59e0b; }
    to   { box-shadow: 0 0 10px #f59e0b, 0 0 20px rgba(245,158,11,.3); }
  }

  .usk-card-body { padding: 28px; }

  /* ── Section label ── */
  .usk-section-label {
    font-family: 'Sora', sans-serif;
    font-size: 11px; font-weight: 600;
    letter-spacing: .08em; text-transform: uppercase;
    color: #94a3b8; margin: 0 0 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f1f5f9;
  }

  /* ── Fields ── */
  .usk-field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 20px; }
  .usk-field:last-of-type { margin-bottom: 0; }
  .usk-label {
    font-size: 12.5px; font-weight: 500; color: #475569;
    display: flex; align-items: center; gap: 6px;
  }
  .usk-label svg { color: #94a3b8; flex-shrink: 0; }
  .usk-required { color: #f87171; }

  .usk-input {
    width: 100%;
    padding: 11px 13px;
    border: 1.5px solid #e2e8f0; border-radius: 10px;
    font-size: 13.5px; font-family: 'DM Sans', sans-serif;
    background: #fafbfc; color: #1e293b;
    outline: none; transition: border-color .18s, box-shadow .18s;
    box-sizing: border-box; appearance: none;
  }
  .usk-input:focus {
    border-color: #f59e0b;
    box-shadow: 0 0 0 3px rgba(245,158,11,.12);
    background: #fff;
  }
  .usk-input::placeholder { color: #cbd5e1; }
  .usk-input[type="file"] { padding: 8px 13px; cursor: pointer; }
  .usk-input[type="file"]::-webkit-file-upload-button {
    background: #fef3c7; color: #d97706;
    border: none; border-radius: 6px;
    padding: 5px 12px; font-size: 12px;
    font-family: 'DM Sans', sans-serif; font-weight: 500;
    cursor: pointer; margin-right: 10px; transition: background .15s;
  }
  .usk-input[type="file"]::-webkit-file-upload-button:hover { background: #fde68a; }

  /* ── Status toggle ── */
  .usk-status-group { display: flex; gap: 8px; }
  .usk-status-btn {
    flex: 1; padding: 10px 0;
    border-radius: 10px; border: 1.5px solid #e2e8f0;
    background: #fafbfc;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px; font-weight: 500; color: #64748b;
    cursor: pointer; transition: all .18s;
    display: flex; align-items: center; justify-content: center; gap: 6px;
  }
  .usk-status-btn:hover { border-color: #fcd34d; color: #d97706; }
  .usk-status-btn.active-pending   { background: #fef3c7; border-color: #fbbf24; color: #d97706; }
  .usk-status-btn.active-completed { background: #d1fae5; border-color: #34d399; color: #059669; }

  /* ── Thumbnail preview ── */
  .usk-preview-wrap {
    display: flex; align-items: center; gap: 14px; margin-top: 10px;
  }
  .usk-preview-img {
    width: 72px; height: 72px; border-radius: 14px;
    object-fit: cover; border: 2px solid #e2e8f0;
    display: block; flex-shrink: 0; background: #f1f5f9;
  }
  .usk-preview-placeholder {
    width: 72px; height: 72px; border-radius: 14px;
    border: 2px dashed #e2e8f0;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; background: #f8fafc; color: #cbd5e1;
  }
  .usk-preview-meta { font-size: 12px; color: #94a3b8; line-height: 1.5; }
  .usk-preview-name { font-size: 12.5px; font-weight: 500; color: #475569; margin-bottom: 2px; }

  /* ── Divider ── */
  .usk-divider { border: none; border-top: 1px solid #f1f5f9; margin: 22px 0; }

  /* ── Info banner ── */
  .usk-info-banner {
    display: flex; align-items: flex-start; gap: 10px;
    background: #fef3c7; border: 1px solid #fde68a;
    border-radius: 10px; padding: 12px 14px;
    margin-bottom: 22px;
    font-size: 12.5px; color: #92400e; line-height: 1.5;
  }
  .usk-info-banner svg { flex-shrink: 0; margin-top: 1px; color: #d97706; }

  /* ── Submit ── */
  .usk-submit {
    width: 100%; padding: 13px;
    border-radius: 12px; border: none;
    background: linear-gradient(135deg, #f59e0b, #fbbf24);
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 15px; font-weight: 600;
    cursor: pointer; transition: opacity .18s, transform .15s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    margin-top: 24px;
    box-shadow: 0 4px 16px rgba(245,158,11,.28);
  }
  .usk-submit:hover:not(:disabled) { opacity: .92; transform: translateY(-1px); }
  .usk-submit:disabled { opacity: .6; cursor: not-allowed; transform: none; }

  /* ── Skeleton ── */
  @keyframes usk-shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
  .usk-skel {
    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
    background-size: 600px 100%;
    animation: usk-shimmer 1.4s infinite;
    border-radius: 10px;
  }
`;

/* ── Icons ── */
const Icon = {
    skill: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.7"><circle cx="10" cy="7" r="4" /><path d="M3 18c0-3.87 3.13-7 7-7s7 3.13 7 7" /></svg>,
    text: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="1" y1="3" x2="13" y2="3" /><line x1="1" y1="7" x2="10" y2="7" /><line x1="1" y1="11" x2="8" y2="11" /></svg>,
    image: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="2" width="12" height="10" rx="2" /><circle cx="4.5" cy="5.5" r="1" /><polyline points="1 10 4.5 6.5 7 9 9.5 7 13 10" /></svg>,
    status: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><polyline points="4.5 7 6.5 9 9.5 5" /></svg>,
    save: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#fff" strokeWidth="2"><path d="M2 13V4.5L4.5 2H13v11H2z" /><rect x="4.5" y="8.5" width="6" height="4.5" /><rect x="4.5" y="2" width="5" height="3" /></svg>,
    info: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><line x1="7" y1="5" x2="7" y2="5.01" /><line x1="7" y1="7" x2="7" y2="10" /></svg>,
    pending: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><polyline points="7 4 7 7 9.5 9" /></svg>,
    complete: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><polyline points="4.5 7 6.5 9 9.5 5" /></svg>,
    placeholder: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="4" width="24" height="20" rx="4" /><circle cx="9" cy="11" r="2" /><polyline points="2 20 9 13 13 17 18 12 26 20" /></svg>,
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
function UpdateSkills() {
    const { _id } = useParams();
    const nav = useNavigate();

    const [skillName, setSkillName] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbPreview, setThumbPreview] = useState(null);
    const [existingThumb, setExistingThumb] = useState(null);
    const [status, setStatus] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    /* ── Fetch existing skill ── */
    const getSingleSkill = async () => {
        try {
            setFetching(true);
            const res = await singleSkills({ _id });
            if (res.data.success) {
                const d = res.data.data;
                setSkillName(d.skillName || "");
                setStatus(d.status ?? 1);
                if (d.thumbnail) {
                    setExistingThumb(BASE_URL + d.thumbnail);
                    setThumbPreview(BASE_URL + d.thumbnail);
                }
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err.message);
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => { getSingleSkill(); }, []);

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
            formData.append("skillName", skillName);
            formData.append("status", status);
            if (thumbnail) formData.append("thumbnail", thumbnail);

            const res = await updateSkills(formData);
            if (res.data.success) {
                toast.success(res.data.message);
                nav("/admin/manageskills");
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
        <div className="usk-root">
            <style>{styles}</style>
            <ToastContainer position="top-right" />

            {/* ── Hero ── */}
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
                            <a href="#">Learner Mentor</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">Update Skills</li>
                    </ol>
                </div>
            </div>

            {/* ── Body ── */}
            <div className="usk-body">
                <div className="usk-card">

                    {/* Card header */}
                    <div className="usk-card-header">
                        <div className="usk-card-icon">{Icon.skill}</div>
                        <div className="usk-card-header-text">
                            <h2>Edit Skill</h2>
                            <p>Changes are saved immediately after submitting</p>
                        </div>
                        <span className="usk-edit-badge">
                            <span className="dot" /> Editing
                        </span>
                    </div>

                    <div className="usk-card-body">

                        {fetching ? (
                            /* Loading skeleton */
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="usk-skel" style={{ height: i === 1 ? 80 : 44 }} />
                                ))}
                            </div>
                        ) : (
                            <>
                                {/* Info banner */}
                                {/* <div className="usk-info-banner">
                                    {Icon.info}
                                    <span>You are editing an existing skill. Only upload a new thumbnail if you want to replace the current one.</span>
                                </div> */}

                                <form onSubmit={submit}>

                                    {/* ── Skill Name ── */}
                                    <div className="usk-section-label">Skill Information</div>

                                    <div className="usk-field">
                                        <label className="usk-label">
                                            {Icon.text} Skill Name <span className="usk-required">*</span>
                                        </label>
                                        <input
                                            className="usk-input"
                                            type="text"
                                            placeholder="e.g. Web Development, Data Science…"
                                            value={skillName}
                                            onChange={e => setSkillName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <hr className="usk-divider" />

                                    {/* ── Thumbnail ── */}
                                    <div className="usk-section-label">Thumbnail</div>

                                    <div className="usk-field">
                                        <label className="usk-label">{Icon.image} Upload New Image</label>
                                        <input
                                            className="usk-input"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleThumb}
                                        />
                                        <div className="usk-preview-wrap">
                                            {thumbPreview ? (
                                                <img src={thumbPreview} alt="Preview" className="usk-preview-img" />
                                            ) : (
                                                <div className="usk-preview-placeholder">{Icon.placeholder}</div>
                                            )}
                                            <div>
                                                {thumbnail && (
                                                    <div className="usk-preview-name">{thumbnail.name}</div>
                                                )}
                                                <div className="usk-preview-meta">
                                                    {existingThumb && !thumbnail
                                                        ? "Current thumbnail shown · upload to replace"
                                                        : thumbnail
                                                            ? "New thumbnail selected"
                                                            : "Recommended: 400×400 px · JPG or PNG · max 2 MB"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="usk-divider" />

                                    {/* ── Status ── */}
                                    <div className="usk-section-label">Status</div>

                                    <div className="usk-field">
                                        <label className="usk-label">{Icon.status} Current Status <span className="usk-required">*</span></label>
                                        <div className="usk-status-group">
                                            <button
                                                type="button"
                                                className={`usk-status-btn ${status == 1 ? "active-pending" : ""}`}
                                                onClick={() => setStatus(1)}
                                            >
                                                {Icon.pending} Pending
                                            </button>
                                            <button
                                                type="button"
                                                className={`usk-status-btn ${status == 0 ? "active-completed" : ""}`}
                                                onClick={() => setStatus(0)}
                                            >
                                                {Icon.complete} Completed
                                            </button>
                                        </div>
                                    </div>

                                    {/* ── Submit ── */}
                                    <button className="usk-submit" type="submit" disabled={submitting}>
                                        {submitting ? "Saving changes…" : <>{Icon.save} Save Changes</>}
                                    </button>

                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateSkills;
