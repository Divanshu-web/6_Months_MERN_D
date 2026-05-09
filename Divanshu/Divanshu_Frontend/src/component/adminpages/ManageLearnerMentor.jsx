
// import { Link } from "react-router-dom";
// import { allLearnerMentor, deleteLearnerMentor } from "../../services/learnerMentorService";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";
// import { BASE_URL } from "../../endPoints";

// function ManageLearnerMentor() {

//     const [learnerMentor, setLearnerMentor] = useState([])
//     const getAllLearnerMentor = async () => {
//         try {
//             let res = await allLearnerMentor()
//             if (res.data.success) {
//                 setLearnerMentor(res.data.data)
//             }
//             else {
//                 toast.error(res.data.message)
//             }
//         } catch (err) {
//             console.log(err)
//         }
//     }


//     const deleteP = async (_id) => {
//         try {
//             let result = await Swal.fire({
//                 title: "Are you sure?",
//                 text: "You won't be able to revert this!",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Yes, delete it!"
//             });

//             // console.log(result.isConfirmed)
//             if (result.isConfirmed) {
//                 let res = await deleteLearnerMentor({ _id: _id })
//                 if (res.data.success) {
//                     toast.success(res.data.message);
//                     getAllLearnerMentor();
//                 } else {
//                     toast.error(res.data.message);
//                 }
//             }

//         } catch (err) {
//             console.log(err)
//         }
//     }


//     useEffect(() => {
//         getAllLearnerMentor();
//     }, [])




//     return (
//         <>
//             {/* Header Start */}
//             <div className="container-fluid bg-breadcrumb">
//                 <div className="container text-center py-5" style={{ maxWidth: 900 }}>
//                     <h3
//                         className="text-white display-3 mb-4 wow fadeInDown"
//                         data-wow-delay="0.1s"
//                     >
//                         Manage Learner-Mentor
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
//                         <li className="breadcrumb-item active text-primary">Manage Learner-Mentor</li>
//                     </ol>
//                 </div>
//             </div>
//             {/* Header End */}
//             {/* <ToastContainer></ToastContainer> */}
//             {/* Contact Start */}
//             <div className="container-fluid contact py-5">
//                 <div className="container py-5">
//                     <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
//                         <div className="sub-style mb-4">
//                             <h4 className="sub-title text-white px-3 mb-0">Manage Learner-Mentor</h4>
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
//                             className="col-lg-10 col-xl-10 contact-form wow fadeInLeft"
//                             data-wow-delay="0.1s"
//                         >
//                             <h2 className="display-5 text-white mb-2 text-center ">Manage Learner-Mentor</h2>
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
                        
//                             <div className="container-xxl py-5">
//                                 <div className="container">

//                                     <div className="row g-4 justify-content-center ">

//                                         <table className="table ">
//                                             <thead>
//                                                 <tr>
//                                                     <th scope="col">#</th>
//                                                     <th scope="col">Name</th>
//                                                     <th scope="col">Email</th>
//                                                     <th scope="col">Contact</th>
//                                                     <th scope="col">Profession</th>
//                                                     <th scope="col">Skills</th>
//                                                     <th scope="col">Experience</th>
//                                                     <th scope="col">ProfileImage</th>
//                                                     <th scope="col">CreatedAt</th>
//                                                     <th scope="col">UpdatedAt</th>
//                                                     <th scope="col">Action</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {
//                                                     learnerMentor.map((learnerMentor, index) =>
//                                                         <tr>
//                                                             <th scope="row">{index + 1}</th>
//                                                             <td>{learnerMentor.userId?.name}</td>
//                                                             <td>{learnerMentor.userId?.email}</td>
//                                                             <td>{learnerMentor.contact}</td>
//                                                             <td>{learnerMentor.profession}</td>
//                                                             <td>{learnerMentor.skills}</td>
//                                                             <td>{learnerMentor.experience}</td>

//                                                             <td>
//                                                                 <img src={BASE_URL + learnerMentor.profileImage} style={{ height: "70px", width: "70px", borderRadius: "50%" }} alt="thumbnail" /></td>
                                                            
//                                                             <td>{new Date(learnerMentor.createdAt).toLocaleString()}</td>
//                                                             <td>{learnerMentor.updatedAt ? new Date(learnerMentor.updatedAt).toLocaleString() : '----'}</td>
//                                                             <td>
//                                                                 <Link to={`/admin/updatelearnermentor/${learnerMentor._id}`}>
//                                                                     <button className="btn btn-sm">
//                                                                         <i className="bi bi-pencil-square"></i>
//                                                                     </button>
//                                                                 </Link>

//                                                                 <button className="btn btn-sm" onClick={() => deleteP (learnerMentor._id)}>
//                                                                     <i className="bi bi-trash2-fill"></i>
//                                                                 </button>

//                                                             </td>
//                                                         </tr>)
//                                                 }

//                                             </tbody>
//                                         </table>



//                                     </div>
//                                 </div>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Contact End */}
//         </>

//     )
// }

// export default ManageLearnerMentor



import { Link } from "react-router-dom";
import { allLearnerMentor, deleteLearnerMentor } from "../../services/learnerMentorService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { BASE_URL } from "../../endPoints";

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  .mlm-root {
    font-family: 'DM Sans', sans-serif;
    background: #f5f6fa;
    min-height: 100vh;
  }

  /* ── Hero ── */
  .mlm-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2044 100%);
    padding: 52px 24px 44px;
    position: relative;
    overflow: hidden;
  }
  .mlm-hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 65% 75% at 88% 50%, rgba(99,102,241,.18) 0%, transparent 70%),
      radial-gradient(ellipse 35% 45% at 6%  80%, rgba(16,185,129,.10) 0%, transparent 60%);
    pointer-events: none;
  }
  .mlm-hero-inner {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  .mlm-breadcrumb {
    display: flex; align-items: center; gap: 6px;
    font-size: 11.5px; color: rgba(255,255,255,.45);
    margin-bottom: 16px; letter-spacing: .05em; text-transform: uppercase;
  }
  .mlm-breadcrumb a { color: rgba(255,255,255,.45); text-decoration: none; }
  .mlm-breadcrumb a:hover { color: rgba(255,255,255,.75); }
  .mlm-breadcrumb .sep { color: rgba(255,255,255,.22); }
  .mlm-breadcrumb .active { color: #818cf8; }
  .mlm-hero h1 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.7rem, 3.5vw, 2.4rem);
    font-weight: 700; color: #fff;
    margin: 0 0 6px; letter-spacing: -.02em;
  }
  .mlm-hero p { color: rgba(255,255,255,.48); font-size: 13.5px; margin: 0; font-weight: 300; }
  .mlm-hero-pills {
    display: flex; align-items: center; gap: 10px;
    margin-top: 22px; flex-wrap: wrap;
  }
  .mlm-pill {
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 100px; padding: 6px 14px 6px 8px;
    color: rgba(255,255,255,.7); font-size: 13px;
  }
  .mlm-pill .dot {
    width: 8px; height: 8px; border-radius: 50%;
  }
  .mlm-pill .dot.blue  { background: #818cf8; box-shadow: 0 0 6px #818cf8; }
  .mlm-pill .dot.green { background: #10b981; box-shadow: 0 0 6px #10b981; }

  /* ── Body ── */
  .mlm-body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 36px 20px 64px;
  }

  /* ── Toolbar ── */
  .mlm-toolbar {
    display: flex; align-items: center;
    justify-content: space-between; gap: 12px;
    margin-bottom: 24px; flex-wrap: wrap;
  }
  .mlm-search-wrap {
    position: relative; flex: 1;
    min-width: 200px; max-width: 340px;
  }
  .mlm-search-wrap svg {
    position: absolute; left: 13px; top: 50%;
    transform: translateY(-50%); color: #94a3b8;
  }
  .mlm-search {
    width: 100%;
    padding: 10px 14px 10px 38px;
    border: 1.5px solid #e2e8f0; border-radius: 10px;
    font-size: 13.5px; font-family: 'DM Sans', sans-serif;
    background: #fff; color: #1e293b;
    outline: none; transition: border-color .2s;
    box-sizing: border-box;
  }
  .mlm-search:focus { border-color: #818cf8; }
  .mlm-search::placeholder { color: #94a3b8; }

  .mlm-view-toggle {
    display: flex; gap: 4px;
    background: #e2e8f0; border-radius: 8px; padding: 3px;
  }
  .mlm-view-btn {
    width: 32px; height: 32px;
    border: none; background: transparent;
    border-radius: 6px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: #64748b; transition: all .15s;
  }
  .mlm-view-btn.active { background: #fff; color: #6366f1; box-shadow: 0 1px 4px rgba(0,0,0,.08); }

  /* ── Grid ── */
  .mlm-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 18px;
  }
  .mlm-grid.list-view { grid-template-columns: 1fr; }

  /* ── Mentor Card ── */
  .mlm-card {
    background: #fff;
    border-radius: 16px;
    border: 1.5px solid #e8eaf0;
    overflow: hidden;
    display: flex; flex-direction: column;
    transition: box-shadow .2s, transform .2s, border-color .2s;
  }
  .mlm-card:hover {
    box-shadow: 0 8px 32px rgba(99,102,241,.10);
    transform: translateY(-2px);
    border-color: #c7d2fe;
  }
  .mlm-grid.list-view .mlm-card { flex-direction: row; align-items: stretch; }

  /* Accent */
  .mlm-card-accent {
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #818cf8);
  }

  /* Card top / profile section */
  .mlm-card-top {
    padding: 20px 20px 0;
    display: flex; align-items: flex-start; gap: 14px;
  }
  .mlm-grid.list-view .mlm-card-top {
    padding: 20px; align-items: center; flex-shrink: 0;
  }

  /* Avatar */
  .mlm-avatar-wrap { position: relative; flex-shrink: 0; }
  .mlm-avatar {
    width: 60px; height: 60px; border-radius: 14px;
    object-fit: cover; border: 2px solid #e8eaf0;
    display: block; background: #f1f5f9;
  }
  .mlm-avatar-initials {
    width: 60px; height: 60px; border-radius: 14px;
    background: linear-gradient(135deg, #6366f1, #818cf8);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Sora', sans-serif;
    font-size: 20px; font-weight: 600; color: #fff;
    flex-shrink: 0;
  }
  .mlm-online-dot {
    position: absolute; bottom: -2px; right: -2px;
    width: 14px; height: 14px; border-radius: 50%;
    background: #10b981; border: 2.5px solid #fff;
  }

  /* Profile text */
  .mlm-profile-info { flex: 1; min-width: 0; }
  .mlm-name {
    font-family: 'Sora', sans-serif;
    font-size: 15px; font-weight: 600; color: #0f172a;
    margin: 0 0 2px;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .mlm-email {
    font-size: 12.5px; color: #64748b;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    display: flex; align-items: center; gap: 4px;
  }
  .mlm-email svg { color: #94a3b8; flex-shrink: 0; }
  .mlm-profession-badge {
    display: inline-flex; align-items: center; gap: 4px;
    background: #eef2ff; color: #6366f1;
    font-size: 11px; font-weight: 500; padding: 3px 8px;
    border-radius: 100px; margin-top: 5px;
  }

  /* Card body */
  .mlm-card-body {
    padding: 16px 20px;
    flex: 1; display: flex; flex-direction: column; gap: 10px;
  }
  .mlm-grid.list-view .mlm-card-body {
    flex-direction: row; align-items: center;
    padding: 16px; gap: 24px; flex-wrap: wrap;
  }

  /* Info items */
  .mlm-info-row { display: flex; gap: 14px; flex-wrap: wrap; }
  .mlm-info-item {
    display: flex; align-items: center; gap: 5px;
    font-size: 12.5px; color: #475569;
  }
  .mlm-info-item svg { color: #94a3b8; flex-shrink: 0; }
  .mlm-info-item strong { font-weight: 600; color: #1e293b; }

  /* Skills chips */
  .mlm-skills-row { display: flex; gap: 5px; flex-wrap: wrap; }
  .mlm-skill-chip {
    font-size: 11px; font-weight: 500;
    background: #f1f5f9; color: #475569;
    border-radius: 6px; padding: 3px 8px;
    border: 1px solid #e2e8f0;
  }

  /* Dates */
  .mlm-dates {
    font-size: 11px; color: #94a3b8;
    display: flex; gap: 12px; flex-wrap: wrap;
  }

  /* Card footer */
  .mlm-card-footer {
    padding: 12px 20px;
    border-top: 1px solid #f1f5f9;
    display: flex; align-items: center;
    justify-content: space-between; gap: 8px;
  }
  .mlm-grid.list-view .mlm-card-footer {
    border-top: none; border-left: 1px solid #f1f5f9;
    padding: 16px 20px; flex-direction: column;
    align-items: center; justify-content: center;
    min-width: 110px; flex-shrink: 0; gap: 8px;
  }
  .mlm-idx { font-size: 11px; font-weight: 600; color: #cbd5e1; letter-spacing: .04em; }
  .mlm-actions { display: flex; gap: 6px; }
  .mlm-btn-icon {
    width: 34px; height: 34px; border-radius: 8px;
    border: 1.5px solid #e2e8f0; background: #fff;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all .15s;
    color: #64748b; text-decoration: none;
  }
  .mlm-btn-icon:hover        { background: #f8fafc; border-color: #c7d2fe; color: #6366f1; }
  .mlm-btn-icon.danger:hover { background: #fff1f2; border-color: #fecdd3; color: #dc2626; }

  /* ── Empty ── */
  .mlm-empty {
    text-align: center; padding: 80px 20px; color: #94a3b8;
  }
  .mlm-empty svg { margin-bottom: 16px; color: #cbd5e1; }
  .mlm-empty h3 { font-family: 'Sora', sans-serif; color: #334155; font-size: 18px; margin: 0 0 6px; }
  .mlm-empty p { font-size: 13.5px; margin: 0; }

  /* ── Skeleton ── */
  @keyframes mlmShimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
  .mlm-skeleton { border-radius: 16px; border: 1.5px solid #e8eaf0; background: #fff; overflow: hidden; }
  .mlm-skel-bar {
    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
    background-size: 600px 100%;
    animation: mlmShimmer 1.4s infinite;
    border-radius: 6px;
  }

  /* ── Contact chip ── */
  .mlm-contact-chip {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 12px; color: #6366f1; background: #eef2ff;
    border-radius: 7px; padding: 4px 9px;
  }

  /* ── Responsive ── */
  @media (max-width: 600px) {
    .mlm-grid { grid-template-columns: 1fr; }
    .mlm-toolbar { flex-direction: column; align-items: stretch; }
    .mlm-search-wrap { max-width: 100%; }
    .mlm-grid.list-view .mlm-card { flex-direction: column; }
    .mlm-grid.list-view .mlm-card-footer { border-left: none; border-top: 1px solid #f1f5f9; flex-direction: row; min-width: unset; }
  }
`;

/* ── Icons ── */
const Icon = {
  grid:    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="1" width="6" height="6" rx="1.5"/><rect x="9" y="1" width="6" height="6" rx="1.5"/><rect x="1" y="9" width="6" height="6" rx="1.5"/><rect x="9" y="9" width="6" height="6" rx="1.5"/></svg>,
  list:    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="5" y1="4" x2="14" y2="4"/><line x1="5" y1="8" x2="14" y2="8"/><line x1="5" y1="12" x2="14" y2="12"/><circle cx="2" cy="4" r="1" fill="currentColor" stroke="none"/><circle cx="2" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="2" cy="12" r="1" fill="currentColor" stroke="none"/></svg>,
  search:  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="7" cy="7" r="5.5"/><line x1="11" y1="11" x2="14" y2="14"/></svg>,
  edit:    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M11.5 2.5a1.5 1.5 0 0 1 2.12 2.12L5 13l-3 1 1-3 8.5-8.5z"/></svg>,
  trash:   <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><polyline points="2 4 3.5 4 14 4"/><path d="M5.5 4V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1M6 7v5m4-5v5M3.5 4l1 9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1l1-9"/></svg>,
  mail:    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="3" width="12" height="8" rx="1.5"/><polyline points="1 3 7 8 13 3"/></svg>,
  phone:   <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 2h3l1.5 3.5-2 1.2a8 8 0 0 0 3.8 3.8l1.2-2L13 10v3a1 1 0 0 1-1 1A11 11 0 0 1 1 3a1 1 0 0 1 1-1z"/></svg>,
  brief:   <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="4" width="12" height="9" rx="1.5"/><path d="M4.5 4V3a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 9.5 3v1"/></svg>,
  star:    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><polygon points="7 1 8.8 5.2 13.5 5.6 10 8.7 11.1 13.3 7 10.8 2.9 13.3 4 8.7 .5 5.6 5.2 5.2"/></svg>,
  clock:   <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5"/><polyline points="7 4 7 7 9.5 9"/></svg>,
  empty:   <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="26" cy="20" r="10"/><path d="M8 46c0-9.94 8.06-18 18-18s18 8.06 18 18"/></svg>,
  tag:     <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M1 1h5.5l6.5 6.5-5.5 5.5L1 6.5V1z"/><circle cx="3.5" cy="3.5" r="1" fill="currentColor" stroke="none"/></svg>,
};

/* ── Initials helper ── */
function getInitials(name = "") {
  return name.trim().split(" ").slice(0, 2).map(w => w[0]?.toUpperCase() || "").join("");
}

/* ── Mentor Card ── */
function MentorCard({ mentor, globalIndex, onDelete }) {
  const [imgError, setImgError] = useState(false);
  const name       = mentor.userId?.name || "Unknown";
  const email      = mentor.userId?.email || "";
  const createdAt  = mentor.createdAt
    ? new Date(mentor.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "—";
  const updatedAt  = mentor.updatedAt
    ? new Date(mentor.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : null;

  // Split comma/space-separated skills into chips
  const skillChips = mentor.skills
    ? String(mentor.skills).split(/[,;]+/).map(s => s.trim()).filter(Boolean)
    : [];

  return (
    <div className="mlm-card">
      <div className="mlm-card-accent" />

      {/* Profile top */}
      <div className="mlm-card-top">
        <div className="mlm-avatar-wrap">
          {!imgError && mentor.profileImage ? (
            <img
              src={BASE_URL + mentor.profileImage}
              alt={name}
              className="mlm-avatar"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="mlm-avatar-initials">{getInitials(name)}</div>
          )}
          <div className="mlm-online-dot" />
        </div>

        <div className="mlm-profile-info">
          <div className="mlm-name">{name}</div>
          <div className="mlm-email">{Icon.mail} {email || "—"}</div>
          {mentor.profession && (
            <div className="mlm-profession-badge">{Icon.brief} {mentor.profession}</div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="mlm-card-body">

        {/* Contact & Experience */}
        <div className="mlm-info-row">
          {mentor.contact && (
            <div className="mlm-info-item">
              {Icon.phone}
              <span>{mentor.contact}</span>
            </div>
          )}
          {mentor.experience && (
            <div className="mlm-info-item">
              {Icon.star}
              <strong>{mentor.experience}</strong>
              <span style={{ color: "#94a3b8" }}>yrs exp</span>
            </div>
          )}
        </div>

        {/* Skills */}
        {skillChips.length > 0 && (
          <div className="mlm-skills-row">
            {skillChips.slice(0, 5).map((s, i) => (
              <span key={i} className="mlm-skill-chip">{s}</span>
            ))}
            {skillChips.length > 5 && (
              <span className="mlm-skill-chip" style={{ background: "#eef2ff", color: "#6366f1", borderColor: "#c7d2fe" }}>
                +{skillChips.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Dates */}
        <div className="mlm-dates">
          <span>{Icon.clock} Joined {createdAt}</span>
          {updatedAt && <span>{Icon.clock} Updated {updatedAt}</span>}
        </div>
      </div>

      {/* Footer */}
      <div className="mlm-card-footer">
        <span className="mlm-idx">#{String(globalIndex).padStart(2, "0")}</span>
        <div className="mlm-actions">
          <Link to={`/admin/updatelearnermentor/${mentor._id}`} className="mlm-btn-icon" title="Edit mentor">
            {Icon.edit}
          </Link>
          <button className="mlm-btn-icon danger" onClick={() => onDelete(mentor._id)} title="Delete mentor">
            {Icon.trash}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
function ManageLearnerMentor() {
  const [learnerMentors, setLearnerMentors] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const getAllLearnerMentor = async () => {
    try {
      setLoading(true);
      const res = await allLearnerMentor();
      if (res.data.success) setLearnerMentors(res.data.data);
      else toast.error(res.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const result = await Swal.fire({
        title: "Delete Mentor?",
        text: "This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6366f1",
        cancelButtonColor: "#e2e8f0",
        confirmButtonText: "Yes, delete",
        cancelButtonText: "Cancel",
      });
      if (result.isConfirmed) {
        const res = await deleteLearnerMentor({ _id });
        if (res.data.success) {
          toast.success(res.data.message);
          getAllLearnerMentor();
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { getAllLearnerMentor(); }, []);

  const filtered = learnerMentors.filter(m => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      (m.userId?.name  || "").toLowerCase().includes(q) ||
      (m.userId?.email || "").toLowerCase().includes(q) ||
      (m.profession    || "").toLowerCase().includes(q) ||
      (m.skills        || "").toLowerCase().includes(q)
    );
  });

  return (
    <div className="mlm-root">
      <style>{styles}</style>

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


<div className="mlm-hero-pills justify-content-center">
            <div className="mlm-pill text-dark"><span className="dot blue" />{learnerMentors.length} Total Mentors</div>
            <div className="mlm-pill text-dark"><span className="dot green" />{filtered.length} Showing</div>
          </div>
      {/* ── Body ── */}
      <div className="mlm-body">

        {/* Toolbar */}
        <div className="mlm-toolbar">
          <div className="mlm-search-wrap">
            {Icon.search}
            <input
              className="mlm-search"
              placeholder="Search by name, email, profession, skill…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="mlm-view-toggle">
            <button
              className={`mlm-view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Grid view"
            >{Icon.grid}</button>
            <button
              className={`mlm-view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              title="List view"
            >{Icon.list}</button>
          </div>
        </div>

        {/* Cards */}
        {loading ? (
          <div className={`mlm-grid ${viewMode === "list" ? "list-view" : ""}`}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="mlm-skeleton" style={{ height: 210 }}>
                <div className="mlm-skel-bar" style={{ height: 3 }} />
                <div style={{ padding: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div className="mlm-skel-bar" style={{ width: 60, height: 60, borderRadius: 14, flexShrink: 0 }} />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div className="mlm-skel-bar" style={{ height: 14, width: "55%" }} />
                    <div className="mlm-skel-bar" style={{ height: 11, width: "70%" }} />
                    <div className="mlm-skel-bar" style={{ height: 20, width: "38%", borderRadius: 100 }} />
                  </div>
                </div>
                <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                  <div className="mlm-skel-bar" style={{ height: 11, width: "50%" }} />
                  <div style={{ display: "flex", gap: 6 }}>
                    {[40, 55, 48].map((w, j) => (
                      <div key={j} className="mlm-skel-bar" style={{ height: 22, width: w, borderRadius: 6 }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="mlm-empty">
            {Icon.empty}
            <h3>{search ? "No mentors found" : "No mentors yet"}</h3>
            <p>{search ? `No results for "${search}". Try a different keyword.` : "Registered learner-mentors will appear here."}</p>
          </div>
        ) : (
          <div className={`mlm-grid ${viewMode === "list" ? "list-view" : ""}`}>
            {filtered.map((mentor, index) => (
              <MentorCard
                key={mentor._id}
                mentor={mentor}
                globalIndex={index + 1}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageLearnerMentor;