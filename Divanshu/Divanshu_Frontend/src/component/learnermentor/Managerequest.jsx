
// import { Link } from "react-router-dom";
// // import { allSkills, deleteSkills } from "../../services/skillService";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";
// import { BASE_URL } from "../../endPoints";
// import ResponsivePagination from 'react-responsive-pagination';
// import 'react-responsive-pagination/themes/classic-light-dark.css';
// import { allRequest, deleteRequest } from "../../services/requestService";

// function Managerequest() {


//     const [request, setRequest] = useState([])
//     const [currentPage, setCurrentPage] = useState(1)
//     const [total, setTotal] = useState(0)
//     const [limit, setLimit] = useState(10)



//     const getAllRequest = async () => {
//         try {
//             let payload = {
//                 limit,
//                 startPoint: (currentPage - 1) * limit
//             }


//             let res = await allRequest(payload)
//             if (res.data.success) {
//                 setRequest(res.data.data)
//                 setTotal(res.data.total)

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
//                 console.log(_id)
//                 let res = await deleteRequest({ _id: _id })
//                 if (res.data.success) {
//                     toast.success(res.data.message);
//                     getAllRequest();
//                 } else {
//                     toast.error(res.data.message);
//                 }
//             }

//         } catch (err) {
//             console.log(err)
//         }
//     }


//     useEffect(() => {
//         getAllRequest();
//     }, [currentPage])


//     const acceptP = async (id) => {

//         Swal.fire({
//             title: "Are you sure?",
//             text: "You want to accept this request!",
//             icon: "question",
//             showCancelButton: true,
//             confirmButtonColor: "#198754",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, accept it!"
//         }).then(async (result) => {

//             if (result.isConfirmed) {

//                 // Your Accept API Call
//                 // await acceptRequest({ _id: id })

//                 Swal.fire({
//                     title: "Accepted!",
//                     text: "Request has been accepted.",
//                     icon: "success"
//                 });
//             }
//         });
//     };


//     const rejectP = async (id) => {

//         Swal.fire({
//             title: "Are you sure?",
//             text: "You want to reject this request!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#d33",
//             cancelButtonColor: "#6c757d",
//             confirmButtonText: "Yes, reject it!"
//         }).then(async (result) => {

//             if (result.isConfirmed) {

//                 // Your Reject API Call
//                 // await rejectRequest({ _id: id })

//                 Swal.fire({
//                     title: "Rejected!",
//                     text: "Request has been rejected.",
//                     icon: "success"
//                 });
//             }
//         });
//     };



//     return (
//         <>
//             {/* Header Start */}
//             <div className="container-fluid bg-breadcrumb">
//                 <div className="container text-center py-5" style={{ maxWidth: 900 }}>
//                     <h3
//                         className="text-white display-3 mb-4 wow fadeInDown"
//                         data-wow-delay="0.1s"
//                     >
//                         Manage Request
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
//                         <li className="breadcrumb-item active text-primary">Manage Request</li>
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
//                             <h4 className="sub-title text-white px-3 mb-0">Manage Request</h4>
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
//                             <h2 className="display-5 text-white mb-2 text-center ">Manage Request</h2>
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
//                             {/* <form>
//                                 <div className="row g-3">

//                                     <div className="col-12">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="email"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="email"
//                                                 placeholder="Your Email"
//                                                 //  value={email}
//                                                 // onInput={(e) => {
//                                                 //     setEmail(e.target.value)
//                                                 // }
//                                                 // }
//                                             />
//                                             <label htmlFor="email">Your Email</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-12">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="password"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="password"
//                                                 placeholder="Password"
//                                                 // value={password}
//                                                 // onInput={(e) => {
//                                                 //     setPassword(e.target.value) }}
//                                             />
//                                             <label htmlFor="password">Password</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-12">
//                                         <button className="btn btn-light text-primary w-100 py-3">
//                                             Add Category
//                                         </button>
//                                     </div>
//                                 </div>
//                             </form> */}

//                             <div className="container-xxl py-5">
//                                 <div className="container">

//                                     <div className="row g-4 justify-content-center ">

//                                         <table className="table ">
//                                             <thead>
//                                                 <tr>
//                                                     <th scope="col">#</th>
//                                                     <th scope="col">Mentor</th>
//                                                     <th scope="col">Session</th>
//                                                     <th scope="col">Learner</th>
//                                                     <th scope="col">Date</th>
//                                                     <th scope="col">Payment Status</th>
//                                                     <th scope="col">Request Status</th>
//                                                     {/* <th scope="col">CreatedAt</th>
//                                                     <th scope="col">UpdatedAt</th> */}
//                                                     <th scope="col">Action</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {
//                                                     request.map((request, index) =>
//                                                         <tr>
//                                                             <th scope="row">{index + 1}</th>
//                                                             <td>Mentor</td>
//                                                             <td>{request.sessionId.sessionName}</td>
//                                                             <td>abc</td>
//                                                             <td>{new Date(request.createdAt).toLocaleString()}</td>
//                                                             <td>{request.paymentStatus == 1 ? "Pending" : "Completed"}</td>
//                                                             <td>{request.requestStatus == 1 ? "Pending" : "Completed"}</td>
//                                                             {/* <td>{request.date}</td>
//                                                             */}

//                                                             {/* <td>
//                                                                 <img src={BASE_URL + skill.thumbnail} style={{ height: "70px", width: "70px", borderRadius: "50%" }} alt="thumbnail" /></td>
//                                                             <td>
//                                                                {skill.status == 1 ? "Pending" : "Completed"}
//                                                                 </td> */}

//                                                             {/* <td>{request.updatedAt ? new Date(request.updatedAt).toLocaleString() : '----'}</td> */}
//                                                             <td>
//                                                                 {/* <Link to={`/learnermentor/updateRequest/${request._id}`}>
//                                                                     <button className="btn btn-sm">
//                                                                         <i className="bi bi-pencil-square"></i>
//                                                                     </button>
//                                                                 </Link> */}

//                                                                 {/* <button className="btn btn-sm" onClick={() => deleteP(request._id)}>
//                                                                     <i className="bi bi-trash2-fill"></i>
//                                                                 </button> */}



//                                                                 <div className="d-flex gap-2">

//                                                                     {/* Accept Button */}
//                                                                     <button
//                                                                         className="btn btn-sm btn-success"
//                                                                         onClick={() => acceptP(request._id)}
//                                                                     >
//                                                                         <i className="bi bi-check-circle-fill"></i> Accept
//                                                                     </button>

//                                                                     {/* Reject Button */}
//                                                                     <button
//                                                                         className="btn btn-sm btn-danger"
//                                                                         onClick={() => rejectP(request._id)}
//                                                                     >
//                                                                         <i className="bi bi-x-circle-fill"></i> Reject
//                                                                     </button>

//                                                                 </div>

//                                                             </td>
//                                                         </tr>)
//                                                 }

//                                             </tbody>
//                                         </table>


//                                         <ResponsivePagination
//                                             current={currentPage}
//                                             total={Math.ceil(total / limit)}
//                                             onPageChange={setCurrentPage}
//                                         />




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

// export default Managerequest



import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { BASE_URL } from "../../endPoints";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import { allRequest, deleteRequest, updateRequest } from "../../services/requestService";

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  .mrq-root {
    font-family: 'DM Sans', sans-serif;
    background: #f5f6fa;
    min-height: 100vh;
  }

  /* ── Hero ── */
  .mrq-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2044 100%);
    padding: 52px 24px 44px;
    position: relative;
    overflow: hidden;
  }
  .mrq-hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 65% 75% at 88% 50%, rgba(99,102,241,.18) 0%, transparent 70%),
      radial-gradient(ellipse 35% 45% at 6%  80%, rgba(16,185,129,.10) 0%, transparent 60%);
    pointer-events: none;
  }
  .mrq-hero-inner {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  .mrq-breadcrumb {
    display: flex; align-items: center; gap: 6px;
    font-size: 11.5px; color: rgba(255,255,255,.45);
    margin-bottom: 16px; letter-spacing: .05em; text-transform: uppercase;
  }
  .mrq-breadcrumb a { color: rgba(255,255,255,.45); text-decoration: none; }
  .mrq-breadcrumb a:hover { color: rgba(255,255,255,.75); }
  .mrq-breadcrumb .sep { color: rgba(255,255,255,.22); }
  .mrq-breadcrumb .active { color: #818cf8; }
  .mrq-hero h1 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.7rem, 3.5vw, 2.4rem);
    font-weight: 700; color: #fff;
    margin: 0 0 6px; letter-spacing: -.02em;
  }
  .mrq-hero p { color: rgba(255,255,255,.48); font-size: 13.5px; margin: 0; font-weight: 300; }
  .mrq-hero-pills {
    display: flex; align-items: center; gap: 10px;
    margin-top: 22px; flex-wrap: wrap;
  }
  .mrq-pill {
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 100px; padding: 6px 14px 6px 8px;
    color: rgba(255,255,255,.7); font-size: 13px;
  }
  .mrq-pill .dot {
    width: 8px; height: 8px; border-radius: 50%;
  }
  .mrq-pill .dot.blue   { background: #818cf8; box-shadow: 0 0 6px #818cf8; }
  .mrq-pill .dot.amber  { background: #f59e0b; box-shadow: 0 0 6px #f59e0b; }
  .mrq-pill .dot.green  { background: #10b981; box-shadow: 0 0 6px #10b981; }
  .mrq-pill .dot.red    { background: #f87171; box-shadow: 0 0 6px #f87171; }

  /* ── Body ── */
  .mrq-body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 36px 20px 64px;
  }

  /* ── Toolbar ── */
  .mrq-toolbar {
    display: flex; align-items: center;
    justify-content: space-between; gap: 12px;
    margin-bottom: 24px; flex-wrap: wrap;
  }
  .mrq-search-wrap {
    position: relative; flex: 1;
    min-width: 200px; max-width: 340px;
  }
  .mrq-search-wrap svg {
    position: absolute; left: 13px; top: 50%;
    transform: translateY(-50%); color: #94a3b8;
  }
  .mrq-search {
    width: 100%;
    padding: 10px 14px 10px 38px;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px; font-size: 13.5px;
    font-family: 'DM Sans', sans-serif;
    background: #fff; color: #1e293b;
    outline: none; transition: border-color .2s;
    box-sizing: border-box;
  }
  .mrq-search:focus { border-color: #818cf8; }
  .mrq-search::placeholder { color: #94a3b8; }

  .mrq-filter-select {
    padding: 9px 12px;
    border: 1.5px solid #e2e8f0; border-radius: 10px;
    font-size: 13px; font-family: 'DM Sans', sans-serif;
    background: #fff; color: #475569;
    outline: none; cursor: pointer; transition: border-color .2s;
  }
  .mrq-filter-select:focus { border-color: #818cf8; }

  /* ── Grid ── */
  .mrq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 18px;
  }

  /* ── Request Card ── */
  .mrq-card {
    background: #fff;
    border-radius: 16px;
    border: 1.5px solid #e8eaf0;
    overflow: hidden;
    display: flex; flex-direction: column;
    transition: box-shadow .2s, transform .2s, border-color .2s;
  }
  .mrq-card:hover {
    box-shadow: 0 8px 32px rgba(99,102,241,.10);
    transform: translateY(-2px);
    border-color: #c7d2fe;
  }

  /* Accent bar */
  .mrq-card-accent { height: 3px; }
  .mrq-card-accent.pending  { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
  .mrq-card-accent.completed{ background: linear-gradient(90deg, #10b981, #34d399); }
  .mrq-card-accent.rejected { background: linear-gradient(90deg, #f87171, #fca5a5); }

  /* Card main */
  .mrq-card-main { padding: 18px 20px 14px; flex: 1; }

  /* Session title row */
  .mrq-session-row {
    display: flex; align-items: flex-start;
    justify-content: space-between; gap: 10px;
    margin-bottom: 12px;
  }
  .mrq-session-name {
    font-family: 'Sora', sans-serif;
    font-size: 15px; font-weight: 600;
    color: #0f172a; margin: 0;
    line-height: 1.3;
  }
  .mrq-idx {
    font-size: 11px; font-weight: 600;
    color: #cbd5e1; letter-spacing: .04em;
    flex-shrink: 0; padding-top: 2px;
  }

  /* Info rows */
  .mrq-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 12px;
    margin-bottom: 14px;
  }
  .mrq-info-item {
    display: flex; flex-direction: column; gap: 1px;
  }
  .mrq-info-label {
    font-size: 10.5px; font-weight: 600;
    text-transform: uppercase; letter-spacing: .05em;
    color: #94a3b8;
  }
  .mrq-info-value {
    font-size: 13px; color: #334155; font-weight: 500;
  }

  /* Status badges */
  .mrq-badge-row { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 4px; }
  .mrq-badge {
    display: inline-flex; align-items: center; gap: 4px;
    font-size: 11.5px; font-weight: 500;
    padding: 3px 9px; border-radius: 100px;
  }
  .mrq-badge.pay-pending   { background: #fef3c7; color: #d97706; }
  .mrq-badge.pay-completed { background: #d1fae5; color: #059669; }
  .mrq-badge.req-pending   { background: #e0e7ff; color: #6366f1; }
  .mrq-badge.req-completed { background: #d1fae5; color: #059669; }
  .mrq-badge.req-rejected  { background: #fee2e2; color: #dc2626; }

  /* Date */
  .mrq-date {
    font-size: 11.5px; color: #94a3b8;
    display: flex; align-items: center; gap: 5px;
  }

  /* Card footer */
  .mrq-card-footer {
    padding: 12px 20px;
    border-top: 1px solid #f1f5f9;
    display: flex; align-items: center;
    justify-content: flex-end; gap: 8px;
  }

  /* Action buttons */
  .mrq-btn {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 7px 14px;
    border-radius: 8px; border: 1.5px solid transparent;
    font-family: 'DM Sans', sans-serif;
    font-size: 12.5px; font-weight: 500;
    cursor: pointer; transition: all .18s;
    white-space: nowrap;
  }
  .mrq-btn.accept {
    background: #d1fae5; border-color: #6ee7b7; color: #065f46;
  }
  .mrq-btn.accept:hover {
    background: #10b981; border-color: #10b981; color: #fff;
  }
  .mrq-btn.reject {
    background: #fee2e2; border-color: #fca5a5; color: #991b1b;
  }
  .mrq-btn.reject:hover {
    background: #ef4444; border-color: #ef4444; color: #fff;
  }
  .mrq-btn.delete {
    background: #f8fafc; border-color: #e2e8f0; color: #64748b;
  }
  .mrq-btn.delete:hover {
    background: #fff1f2; border-color: #fecdd3; color: #dc2626;
  }

  /* ── Pagination ── */
  .mrq-pagination {
    margin-top: 36px;
    display: flex; justify-content: center;
  }

  /* ── Empty ── */
  .mrq-empty {
    text-align: center; padding: 80px 20px; color: #94a3b8;
    grid-column: 1 / -1;
  }
  .mrq-empty svg { margin-bottom: 16px; color: #cbd5e1; }
  .mrq-empty h3 {
    font-family: 'Sora', sans-serif; color: #334155;
    font-size: 18px; margin: 0 0 6px;
  }
  .mrq-empty p { font-size: 13.5px; margin: 0; }

  /* ── Skeleton ── */
  @keyframes mrqShimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
  .mrq-skeleton {
    border-radius: 16px; border: 1.5px solid #e8eaf0;
    background: #fff; overflow: hidden;
  }
  .mrq-skel-bar {
    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
    background-size: 600px 100%;
    animation: mrqShimmer 1.4s infinite;
    border-radius: 6px;
  }

  /* ── Responsive ── */
  @media (max-width: 600px) {
    .mrq-grid { grid-template-columns: 1fr; }
    .mrq-toolbar { flex-direction: column; align-items: stretch; }
    .mrq-search-wrap { max-width: 100%; }
    .mrq-info-grid { grid-template-columns: 1fr; }
  }
`;

/* ── Icons ── */
const Icon = {
  search:  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="7" cy="7" r="5.5"/><line x1="11" y1="11" x2="14" y2="14"/></svg>,
  check:   <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2 7 5.5 10.5 12 4"/></svg>,
  cross:   <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg>,
  trash:   <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7"><polyline points="2 3.5 3 3.5 12 3.5"/><path d="M4.5 3.5V2.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1M5 6v4m4-4v4M3 3.5l.9 8a1 1 0 0 0 1 .9h4.2a1 1 0 0 0 1-.9l.9-8"/></svg>,
  clock:   <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5"/><polyline points="7 4 7 7 9.5 9"/></svg>,
  user:    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="5" r="2.5"/><path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5"/></svg>,
  session: <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="2" width="12" height="10" rx="2"/><line x1="1" y1="6" x2="13" y2="6"/></svg>,
  empty:   <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="6" y="10" width="40" height="32" rx="4"/><line x1="6" y1="20" x2="46" y2="20"/><line x1="16" y1="30" x2="24" y2="30"/><line x1="16" y1="36" x2="28" y2="36"/></svg>,
};

/* ── Request Card ── */
function RequestCard({ request, globalIndex, onDelete, onAccept, onReject }) {
  const payPending = request.paymentStatus == 1;
  const reqPending = request.requestStatus == 1;

  // Accent colour driven by request status
  const accentClass = reqPending ? "pending" : "completed";

  const date = request.createdAt
    ? new Date(request.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "—";
  const time = request.createdAt
    ? new Date(request.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    : "";

  return (
    <div className="mrq-card">
      <div className={`mrq-card-accent ${accentClass}`} />

      <div className="mrq-card-main">
        {/* Title row */}
        <div className="mrq-session-row">
          <div className="mrq-session-name">
            {request.sessionId?.sessionName || "—"}
          </div>
          <span className="mrq-idx">#{String(globalIndex).padStart(2, "0")}</span>
        </div>

        {/* Status badges */}
        <div className="mrq-badge-row">
        <span
  className={`mrq-badge ${
    request.requestStatus == 1
      ? "req-pending"
      : request.requestStatus == 2
      ? "req-completed"
      : "req-rejected"
  }`}
>
  {request.requestStatus == 1
    ? "⏳ Pending"
    : request.requestStatus == 2
    ? "✅ Accepted"
    : "❌ Rejected"}
</span>
        </div>

        {/* Info grid */}
        <div className="mrq-info-grid" style={{ marginTop: 14 }}>
          <div className="mrq-info-item">
            <span className="mrq-info-label">Mentor</span>
            <span className="mrq-info-value">
              {request.mentorId?.userId?.name || request.mentorId?.name || "—"}
            </span>
          </div>
          <div className="mrq-info-item">
            <span className="mrq-info-label">Learner</span>
            <span className="mrq-info-value">
              {request.learnerId?.userId?.name || request.learnerId?.name || "—"}
            </span>
          </div>
        </div>

        {/* Date */}
        <div className="mrq-date">
          {Icon.clock} {date}{time ? ` · ${time}` : ""}
        </div>
      </div>

      {/* Footer actions */}
      <div className="mrq-card-footer">
        <button className="mrq-btn delete" onClick={() => onDelete(request._id)} title="Delete request">
          {Icon.trash} Delete
        </button>
        <button className="mrq-btn reject" onClick={() => onReject(request._id)} title="Reject request">
          {Icon.cross} Reject
        </button>

       <button
  className="mrq-btn accept"
  onClick={() => onAccept(request._id)}
  title="Accept request"
  disabled={request.requestStatus == 2}
  style={{
    opacity: request.requestStatus == 2 ? 0.5 : 1,
    cursor: request.requestStatus == 2 ? "not-allowed" : "pointer"
  }}
>
  {Icon.check}
  {request.requestStatus == 2 ? " Accepted" : " Accept"}
</button>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Componentmrq-btn accept
───────────────────────────────────────────── */
function ManageRequest() {
  const [requests, setRequests]       = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal]             = useState(0);
  const [limit]                       = useState(10);
  const [loading, setLoading]         = useState(true);
  const [search, setSearch]           = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getAllRequest = async () => {
    try {
      setLoading(true);
      const payload = { limit, startPoint: (currentPage - 1) * limit,
           mentorId: localStorage.getItem("learnerMentorId")
      };
      const res = await allRequest(payload);
      if (res.data.success) {
        setRequests(res.data.data);
        setTotal(res.data.total);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const result = await Swal.fire({
        title: "Delete Request?",
        text: "This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6366f1",
        cancelButtonColor: "#e2e8f0",
        confirmButtonText: "Yes, delete",
        cancelButtonText: "Cancel",
      });
      if (result.isConfirmed) {
        const res = await deleteRequest({ _id });
        if (res.data.success) {
          toast.success(res.data.message);
          getAllRequest();
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

 const handleAccept = (id) => {

  Swal.fire({
    title: "Accept Request?",
    text: "This learner will be enrolled in the session.",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#10b981",
    cancelButtonColor: "#e2e8f0",
    confirmButtonText: "Yes, accept",
    cancelButtonText: "Cancel",
  }).then(async (result) => {

    if (result.isConfirmed) {

      const res = await updateRequest({
        _id: id,
        requestStatus: 2
      });

      if (res.data.success) {

        Swal.fire({
          title: "Accepted!",
          text: "Request has been accepted.",
          icon: "success",
          confirmButtonColor: "#10b981"
        });

        getAllRequest();

      } else {
        toast.error(res.data.message);
      }
    }
  });
};

const handleReject = (id) => {

  Swal.fire({
    title: "Reject Request?",
    text: "The learner will be notified of the rejection.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#e2e8f0",
    confirmButtonText: "Yes, reject",
    cancelButtonText: "Cancel",
  }).then(async (result) => {

    if (result.isConfirmed) {

      const res = await updateRequest({
        _id: id,
        requestStatus: 0
      });

      if (res.data.success) {

        Swal.fire({
          title: "Rejected!",
          text: "Request has been rejected.",
          icon: "success",
          confirmButtonColor: "#6366f1"
        });

        getAllRequest();

      } else {
        toast.error(res.data.message);
      }
    }
  });
};


  useEffect(() => { getAllRequest(); }, [currentPage]);

  /* Client-side filter */
  const filtered = requests.filter((r) => {
    const sessionName = r.sessionId?.sessionName || "";
    const matchSearch = !search || sessionName.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "all" ||
      (statusFilter === "pending"   && r.requestStatus == 1) ||
      (statusFilter === "processed" && r.requestStatus != 1);
    return matchSearch && matchStatus;
  });

  const pendingCount   = requests.filter(r => r.requestStatus == 1).length;
  const processedCount = requests.length - pendingCount;
  const payPendingCount = requests.filter(r => r.paymentStatus == 1).length;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="mrq-root">
      <style>{styles}</style>

      {/* Header Start */}
             <div className="container-fluid bg-breadcrumb">
                 <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                     <h3
                         className="text-white display-3 mb-4 wow fadeInDown"
                         data-wow-delay="0.1s"
                     >
                         Manage Request
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
                         <li className="breadcrumb-item active text-primary">Manage Request</li>
                     </ol>
                 </div>
             </div>
            {/* Header End */}
<div className="mrq-hero-pills justify-content-center">
            <div className="mrq-pill text-dark"><span className="dot blue"/>  {total} Total</div>
            <div className="mrq-pill text-dark"><span className="dot amber"/> {pendingCount} Pending</div>
            <div className="mrq-pill text-dark"><span className="dot green"/> {processedCount} Processed</div>
            <div className="mrq-pill text-dark"><span className="dot red"/>   {payPendingCount} Payment Due</div>
          </div>
      {/* ── Body ── */}
      <div className="mrq-body">

        {/* Toolbar */}
        <div className="mrq-toolbar">
          <div className="mrq-search-wrap">
            {Icon.search}
            <input
              className="mrq-search"
              placeholder="Search by session name…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <select
            className="mrq-filter-select"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="processed">Processed</option>
          </select>
        </div>

        {/* Cards */}
        {loading ? (
          <div className="mrq-grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="mrq-skeleton" style={{ height: 200 }}>
                <div className="mrq-skel-bar" style={{ height: 3 }} />
                <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div className="mrq-skel-bar" style={{ height: 16, width: "65%" }} />
                  <div style={{ display: "flex", gap: 8 }}>
                    <div className="mrq-skel-bar" style={{ height: 22, width: 110, borderRadius: 100 }} />
                    <div className="mrq-skel-bar" style={{ height: 22, width: 90, borderRadius: 100 }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 4 }}>
                    <div className="mrq-skel-bar" style={{ height: 32 }} />
                    <div className="mrq-skel-bar" style={{ height: 32 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="mrq-grid">
            <div className="mrq-empty">
              {Icon.empty}
              <h3>{search || statusFilter !== "all" ? "No requests found" : "No requests yet"}</h3>
              <p>
                {search
                  ? `No results for "${search}". Try a different keyword.`
                  : statusFilter !== "all"
                  ? `No ${statusFilter} requests.`
                  : "Learner requests will appear here once submitted."}
              </p>
            </div>
          </div>
        ) : (
          <div className="mrq-grid">
            {filtered.map((req, index) => (
              <RequestCard
                key={req._id}
                request={req}
                globalIndex={(currentPage - 1) * limit + index + 1}
                onDelete={handleDelete}
                onAccept={handleAccept}
                onReject={handleReject}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mrq-pagination">
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageRequest;

