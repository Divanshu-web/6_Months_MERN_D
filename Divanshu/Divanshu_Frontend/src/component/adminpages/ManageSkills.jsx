
// import { Link } from "react-router-dom";
// import { allSkills, deleteSkills } from "../../services/skillService";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";
// import { BASE_URL } from "../../endPoints";
// import ResponsivePagination from 'react-responsive-pagination';
// import 'react-responsive-pagination/themes/classic-light-dark.css';

// function ManageSkills() {


//     const [skills, setSkills] = useState([])
//     const [currentPage, setCurrentPage] = useState(1)
//     const [total, setTotal] = useState(0)
//     const [limit, setLimit] = useState(10)



//     const getAllSkill = async () => {
//         try {
//              let payload = {
//             limit,
//             startPoint: (currentPage - 1) * limit 
//         }


//             let res = await allSkills(payload)
//             if (res.data.success) {
//                 setSkills(res.data.data)
//                  setTotal(res.data.total)

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
//                 console.log( _id)
//                 let res = await deleteSkills({ _id: _id })
//                 if (res.data.success) {
//                     toast.success(res.data.message);
//                     getAllSkill();
//                 } else {
//                     toast.error(res.data.message);
//                 }
//             }

//         } catch (err) {
//             console.log(err)
//         }
//     }


//     useEffect(() => {
//         getAllSkill();
//     }, [currentPage])




//     return (
//         <>
//             {/* Header Start */}
//             <div className="container-fluid bg-breadcrumb">
//                 <div className="container text-center py-5" style={{ maxWidth: 900 }}>
//                     <h3
//                         className="text-white display-3 mb-4 wow fadeInDown"
//                         data-wow-delay="0.1s"
//                     >
//                         Manage Skills
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
//                         <li className="breadcrumb-item active text-primary">Manage Skills</li>
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
//                             <h4 className="sub-title text-white px-3 mb-0">Manage Skills</h4>
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
//                             <h2 className="display-5 text-white mb-2 text-center ">Manage Skills</h2>
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
//                                                     <th scope="col">Skills Name</th>
//                                                     <th scope="col">thumbnail</th>
//                                                     <th scope="col">Status</th>
//                                                     <th scope="col">CreatedAt</th>
//                                                     <th scope="col">UpdatedAt</th>
//                                                     <th scope="col">Action</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {
//                                                     skills.map((skill, index) =>
//                                                         <tr>
//                                                             <th scope="row">{index + 1}</th>
//                                                             <td>{skill.skillName}</td>
//                                                             <td>
//                                                                 <img src={BASE_URL + skill.thumbnail} style={{ height: "70px", width: "70px", borderRadius: "50%" }} alt="thumbnail" /></td>
//                                                             <td>
//                                                                {skill.status == 1 ? "Pending" : "Completed"}
//                                                                 </td>
//                                                             <td>{new Date(skill.createdAt).toLocaleString()}</td>
//                                                             <td>{skill.updatedAt ? new Date(skill.updatedAt).toLocaleString() : '----'}</td>
//                                                             <td>
//                                                                 <Link to={`/admin/updateskills/${skill._id}`}>
//                                                                     <button className="btn btn-sm">
//                                                                         <i className="bi bi-pencil-square"></i>
//                                                                     </button>
//                                                                 </Link>

//                                                                 <button className="btn btn-sm" onClick={() => deleteP(skill._id)}>
//                                                                     <i className="bi bi-trash2-fill"></i>
//                                                                 </button>

//                                                             </td>
//                                                         </tr>)
//                                                 }

//                                             </tbody>
//                                         </table>


//                                         <ResponsivePagination
//                             current={currentPage}
//                             total={Math.ceil(total / limit)}
//                             onPageChange={setCurrentPage}
//                         />




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

// export default ManageSkills


import { Link } from "react-router-dom";
import { allSkills, deleteSkills } from "../../services/skillService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { BASE_URL } from "../../endPoints";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */


/* ─────────────────────────────────────────────
   Icon helpers
───────────────────────────────────────────── */
const Icon = {
    grid: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="1" width="6" height="6" rx="1.5" /><rect x="9" y="1" width="6" height="6" rx="1.5" /><rect x="1" y="9" width="6" height="6" rx="1.5" /><rect x="9" y="9" width="6" height="6" rx="1.5" /></svg>,
    list: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="5" y1="4" x2="14" y2="4" /><line x1="5" y1="8" x2="14" y2="8" /><line x1="5" y1="12" x2="14" y2="12" /><circle cx="2" cy="4" r="1" fill="currentColor" stroke="none" /><circle cx="2" cy="8" r="1" fill="currentColor" stroke="none" /><circle cx="2" cy="12" r="1" fill="currentColor" stroke="none" /></svg>,
    search: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="7" cy="7" r="5.5" /><line x1="11" y1="11" x2="14" y2="14" /></svg>,
    edit: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M11.5 2.5a1.5 1.5 0 0 1 2.12 2.12L5 13l-3 1 1-3 8.5-8.5z" /></svg>,
    trash: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><polyline points="2 4 3.5 4 14 4" /><path d="M5.5 4V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1M6 7v5m4-5v5M3.5 4l1 9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1l1-9" /></svg>,
    clock: <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="8" cy="8" r="6.5" /><polyline points="8 4.5 8 8 10.5 10.5" /></svg>,
    check: <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="2"><polyline points="1.5 5 4 7.5 8.5 2.5" /></svg>,
    pending: <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="2"><circle cx="5" cy="5" r="3" /></svg>,
    empty: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="26" cy="20" r="10" /><path d="M8 44c0-9.94 8.06-18 18-18s18 8.06 18 18" /></svg>,
};

/* ─────────────────────────────────────────────
   Skill Card
───────────────────────────────────────────── */
function SkillCard({ skill, globalIndex, onDelete }) {
    const isPending = skill.status == 1;
    const statusKey = isPending ? 'pending' : 'completed';
    const statusLabel = isPending ? 'Pending' : 'Completed';
    const createdAt = skill.createdAt
        ? new Date(skill.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : '—';
    const updatedAt = skill.updatedAt
        ? new Date(skill.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : null;

    return (
        <div className="msk-card">
            <div className={`msk-card-accent ${statusKey}`} />

            <div className="msk-card-main">
                {/* Thumbnail */}
                <div className="msk-thumb-wrap">
                    <img
                        src={BASE_URL + skill.thumbnail}
                        alt={skill.skillName}
                        className="msk-thumb"
                        onError={e => { e.target.src = ''; e.target.style.background = '#e2e8f0'; }}
                    />
                    {/* <div className={`msk-thumb-badge ${statusKey}`}>
                        {isPending ? Icon.pending : Icon.check}
                    </div> */}
                </div>

                {/* Info */}
                <div className="msk-card-info">
                    <div className="msk-card-name">{skill.skillName || '—'}</div>
                    {/* <span className={`msk-badge ${statusKey}`}>
                        {statusLabel}
                    </span> */}
                    <div className="msk-meta">
                        <span>{Icon.clock} Added {createdAt}</span>
                        {updatedAt && <span>{Icon.clock} Updated {updatedAt}</span>}
                    </div>
                </div>
            </div>

            <div className="msk-card-footer">
                <span className="msk-idx">#{String(globalIndex).padStart(2, '0')}</span>
                <div className="msk-actions">
                    <Link to={`/admin/updateskills/${skill._id}`} className="msk-btn" title="Edit skill">
                        {Icon.edit}
                    </Link>
                    <button className="msk-btn danger" onClick={() => onDelete(skill._id)} title="Delete skill">
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
function ManageSkills() {
    const [skills, setSkills] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [limit] = useState(10);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'pending' | 'completed'
    const [viewMode, setViewMode] = useState('grid');

    const getAllSkill = async () => {
        try {
            setLoading(true);
            const payload = { limit, startPoint: (currentPage - 1) * limit };
            const res = await allSkills(payload);
            if (res.data.success) {
                setSkills(res.data.data);
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
                title: 'Delete Skill?',
                text: 'This action cannot be undone.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6366f1',
                cancelButtonColor: '#e2e8f0',
                confirmButtonText: 'Yes, delete',
                cancelButtonText: 'Cancel',
            });
            if (result.isConfirmed) {
                const res = await deleteSkills({ _id });
                if (res.data.success) {
                    toast.success(res.data.message);
                    getAllSkill();
                } else {
                    toast.error(res.data.message);
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => { getAllSkill(); }, [currentPage]);

    // Client-side search + filter (on top of server pagination)
    const filtered = skills.filter(s => {
        const matchSearch = !search || (s.skillName || '').toLowerCase().includes(search.toLowerCase());
        const matchStatus =
            statusFilter === 'all' ||
            (statusFilter === 'pending' && s.status == 1) ||
            (statusFilter === 'completed' && s.status != 1);
        return matchSearch && matchStatus;
    });

    const pendingCount = skills.filter(s => s.status == 1).length;
    const completedCount = skills.length - pendingCount;
    const totalPages = Math.ceil(total / limit);

    return (
        <div className="msk-root">
            {/* <style>{styles}</style> */}

            {/* ── Hero ── */}
            {/* <div className="msk-hero">
        <div className="msk-hero-inner">
          <div className="msk-breadcrumb">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="#">Admin</a>
            <span className="sep">/</span>
            <span className="active">Manage Skills</span>
          </div>
          <h1>Manage Skills</h1>
          <p>Organise, update, and track all learner skills in one place.</p>
          
        </div>
      </div> */}


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
                        <li className="breadcrumb-item ">
                            <a href="#">Admin</a>
                        </li>
                        <li className="breadcrumb-item active text-primary">Manage Skills</li>
                    </ol>


                </div>

            </div>

            <div className="msk-hero-pills  justify-content-center">
                <div className="msk-pill text-dark"><span className="dot blue" />{total} Total</div>
                {/* <div className="msk-pill text-dark"><span className="dot amber" />{pendingCount} Pending</div>
                <div className="msk-pill text-dark"><span className="dot green" />{completedCount} Completed</div> */}
            </div>
            {/* ── Body ── */}
            <div className="msk-body">



                {/* Toolbar */}
                <div className="msk-toolbar">
                    <div className="msk-search-wrap">
                        {Icon.search}
                        <input
                            className="msk-search"
                            placeholder="Search skills…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="msk-toolbar-right">
                        <select
                            className="msk-filter-select"
                            value={statusFilter}
                            onChange={e => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All Statuses</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>

                        <div className="msk-view-toggle">
                            <button
                                className={`msk-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                                title="Grid view"
                            >{Icon.grid}</button>
                            <button
                                className={`msk-view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                onClick={() => setViewMode('list')}
                                title="List view"
                            >{Icon.list}</button>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                {loading ? (
                    <div className={`msk-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="msk-skeleton" style={{ height: 130 }}>
                                <div className="msk-skel-bar" style={{ height: 3 }} />
                                <div style={{ padding: 20, display: 'flex', gap: 16, alignItems: 'center' }}>
                                    <div className="msk-skel-bar" style={{ width: 62, height: 62, borderRadius: 14, flexShrink: 0 }} />
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <div className="msk-skel-bar" style={{ height: 14, width: '55%' }} />
                                        <div className="msk-skel-bar" style={{ height: 11, width: '30%' }} />
                                        <div className="msk-skel-bar" style={{ height: 10, width: '45%' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="msk-empty">
                        {Icon.empty}
                        <h3>{search || statusFilter !== 'all' ? 'No skills found' : 'No skills yet'}</h3>
                        <p>
                            {search
                                ? `No results for "${search}". Try a different keyword.`
                                : statusFilter !== 'all'
                                    ? `No ${statusFilter} skills found.`
                                    : 'Skills you create will appear here.'}
                        </p>
                    </div>
                ) : (
                    <div className={`msk-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                        {filtered.map((skill, index) => (
                            <SkillCard
                                key={skill._id}
                                skill={skill}
                                globalIndex={(currentPage - 1) * limit + index + 1}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="msk-pagination">
                        <ResponsivePagination
                            current={currentPage}
                            total={totalPages}
                            onPageChange={page => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ManageSkills;
