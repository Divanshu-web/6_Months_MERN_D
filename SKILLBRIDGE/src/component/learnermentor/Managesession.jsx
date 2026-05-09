import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { BASE_URL } from "../../endPoints";
import { allSession, deleteSession } from "../../services/sessionService";
import { sendRequest } from "../../services/requestService";

// ── Small icon helpers ──────────────────────────────────────────────────
const Icon = {
    grid: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="1" width="6" height="6" rx="1.5" /><rect x="9" y="1" width="6" height="6" rx="1.5" /><rect x="1" y="9" width="6" height="6" rx="1.5" /><rect x="9" y="9" width="6" height="6" rx="1.5" /></svg>,
    list: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="5" y1="4" x2="14" y2="4" /><line x1="5" y1="8" x2="14" y2="8" /><line x1="5" y1="12" x2="14" y2="12" /><circle cx="2" cy="4" r="1" fill="currentColor" stroke="none" /><circle cx="2" cy="8" r="1" fill="currentColor" stroke="none" /><circle cx="2" cy="12" r="1" fill="currentColor" stroke="none" /></svg>,
    search: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="7" cy="7" r="5.5" /><line x1="11" y1="11" x2="14" y2="14" /></svg>,
    edit: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M11.5 2.5a1.5 1.5 0 0 1 2.12 2.12L5 13l-3 1 1-3 8.5-8.5z" /></svg>,
    trash: <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><polyline points="2 4 3.5 4 14 4" /><path d="M5.5 4V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1M6 7v5m4-5v5M3.5 4l1 9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1l1-9" /></svg>,
    clock: <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="8" cy="8" r="6.5" /><polyline points="8 4.5 8 8 10.5 10.5" /></svg>,
    dollar: <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><line x1="8" y1="1" x2="8" y2="15" /><path d="M11.5 4H6.5A2.5 2.5 0 0 0 6.5 9h3A2.5 2.5 0 0 1 9.5 14H4" /></svg>,
    calendar: <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="1.5" y="2.5" width="13" height="12" rx="2" /><line x1="1.5" y1="6.5" x2="14.5" y2="6.5" /><line x1="5" y1="1" x2="5" y2="4" /><line x1="11" y1="1" x2="11" y2="4" /></svg>,
    link: <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6.5 9.5a3.54 3.54 0 0 0 5 0l2-2a3.54 3.54 0 0 0-5-5L7.5 3.5" /><path d="M9.5 6.5a3.54 3.54 0 0 0-5 0l-2 2a3.54 3.54 0 0 0 5 5l1-1" /></svg>,
    youtube: <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="1" y="3" width="14" height="10" rx="2.5" /><polygon points="6.5 5.5 10.5 8 6.5 10.5" fill="currentColor" stroke="none" /></svg>,
    empty: <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="10" width="40" height="32" rx="4" /><line x1="6" y1="18" x2="46" y2="18" /><line x1="16" y1="26" x2="36" y2="26" /><line x1="16" y1="32" x2="28" y2="32" /></svg>,
};

function SessionCard({ session, index, viewMode, onDelete, onRequest }) {
    const isPaid = session.isPaid === true || session.isPaid === "true" || session.isPaid === 1;
    const accentClass = isPaid ? "paid" : "free";
    const date = session.date ? new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';
    const createdAt = session.createdAt ? new Date(session.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';

    return (
        <div className="ms-card">
            <div className={`ms-card-accent ${accentClass}`} />
            <div className="ms-card-thumb-wrap">
                <img
                    src={BASE_URL + session.thumbnail}
                    alt={session.sessionName}
                    className="ms-card-thumb"
                    onError={e => { e.target.style.background = '#e2e8f0'; e.target.src = ''; }}
                />
                <div className="ms-card-meta">
                    <div className="ms-card-title">{session.sessionName || '—'}</div>
                    <div className="ms-card-type-row">
                        {session.sessionType && <span className="ms-badge type">{session.sessionType}</span>}
                        <span className={`ms-badge ${isPaid ? 'paid' : 'free'}`}>{isPaid ? '● Paid' : '● Free'}</span>
                    </div>
                </div>
            </div>

            <div className="ms-card-body">
                {session.descryption && (
                    <div className="ms-card-desc">{session.descryption}</div>
                )}

                <div className="ms-info-row">
                    <div className="ms-info-item">
                        {Icon.calendar}
                        <span>{date}</span>
                    </div>
                    {session.duration && (
                        <div className="ms-info-item">
                            {Icon.clock}
                            <span><strong>{session.duration}</strong> min</span>
                        </div>
                    )}
                    {session.price !== undefined && session.price !== null && (
                        <div className="ms-info-item">
                            {Icon.dollar}
                            <strong>₹{session.price}</strong>
                        </div>
                    )}
                </div>

                {(session.meetingLink || session.youtubeLink) && (
                    <div className="ms-links-row">
                        {session.meetingLink && (
                            <a href={session.meetingLink} target="_blank" rel="noreferrer" className="ms-link-chip">
                                {Icon.link} Meet Link
                            </a>
                        )}
                        {session.youtubeLink && (
                            <a href={session.youtubeLink} target="_blank" rel="noreferrer" className="ms-link-chip yt">
                                {Icon.youtube} YouTube
                            </a>
                        )}
                    </div>
                )}
            </div>

            <div className="ms-card-footer">
                <span className="ms-timestamp">Added {createdAt}</span>
                <div className="ms-actions">
                    <Link to={`/learnermentor/updataesession/${session._id}`} className="ms-btn-icon" title="Edit">
                        {Icon.edit}
                    </Link>
                    <button className="ms-btn-icon danger" onClick={() => onDelete(session._id)} title="Delete">
                        {Icon.trash}
                    </button>
                </div>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => onRequest(session)}
                    disabled={session.requested}
                >
                    Send Request
                </button>
            </div>
        </div>
    );
}

function ManageSession() {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

    const getAllSession = async () => {
        try {
            setLoading(true);
            const res = await allSession();
            if (res.data.success) setSessions(res.data.data);
            else toast.error(res.data.message);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };


    const handleRequest = async (session) => {
        try {
            console.log("Session: ", session)
            const learnerId = localStorage.getItem("learnerMentorId"); // adjust as per your auth

            const payload = {
                mentorId: session.mentorId?._id,   // must exist in session
                sessionId: session._id,
                learnerId: learnerId,
                date: Date.now(), // you can replace with date picker later
                paymentStatus: 1, // pending
                requestStatus: 1 //pending
            };

            console.log("Pay", payload)

            const res = await sendRequest(payload);

            if (res.data.success) {
                toast.success("Request sent successfully");
            } else {
                toast.error(res.data.message);
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    };




    const handleDelete = async (_id) => {
        try {
            const result = await Swal.fire({
                title: "Delete Session?",
                text: "This action cannot be undone.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#6366f1",
                cancelButtonColor: "#e2e8f0",
                confirmButtonText: "Yes, delete",
                cancelButtonText: "Cancel",
                customClass: { cancelButton: 'swal-cancel-dark' },
            });
            if (result.isConfirmed) {
                const res = await deleteSession({ _id });
                if (res.data.success) {
                    toast.success(res.data.message);
                    getAllSession();
                } else {
                    toast.error(res.data.message);
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => { getAllSession(); }, []);

    const filtered = sessions.filter(s =>
        !search ||
        (s.sessionName || '').toLowerCase().includes(search.toLowerCase()) ||
        (s.sessionType || '').toLowerCase().includes(search.toLowerCase()) ||
        (s.descryption || '').toLowerCase().includes(search.toLowerCase())
    );

    const paidCount = sessions.filter(s => s.isPaid === true || s.isPaid === "true" || s.isPaid === 1).length;

    return (
        <div className="ms-root">

            {/* Hero / Header */}
            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3
                        className="text-white display-3 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Manage Session
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
                        <li className="breadcrumb-item active text-primary">Manage Session</li>
                    </ol>
                </div>

            </div>








            {/* Body */}
<div className="ms-hero-actions  justify-content-center">
                    <div className="ms-stat-pill text-dark ">
                        <span className="dot blue" />
                        {sessions.length} Total sessions
                    </div>
                    <div className="ms-stat-pill text-dark">
                        <span className="dot" />
                        {paidCount} Paid &nbsp;·&nbsp; {sessions.length - paidCount} Free
                    </div>
                </div>



            <div className="ms-body">
                {/* Toolbar */}
                <div className="ms-toolbar">   
                    <div className="ms-search-wrap">
                        {Icon.search}
                        <input
                            className="ms-search"
                            placeholder="Search sessions…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="ms-view-toggle">
                        <button
                            className={`ms-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            onClick={() => setViewMode('grid')}
                            title="Grid view"
                        >{Icon.grid}</button>
                        <button
                            className={`ms-view-btn ${viewMode === 'list' ? 'active' : ''}`}
                            onClick={() => setViewMode('list')}
                            title="List view"
                        >{Icon.list}</button>
                    </div>
                </div>

                

                {/* Cards */}
                {loading ? (
                    <div className={`ms-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="ms-skeleton" style={{ height: 220 }}>
                                <div className="ms-skel-bar" style={{ height: 3 }} />
                                <div style={{ padding: 20, display: 'flex', gap: 14 }}>
                                    <div className="ms-skel-bar" style={{ width: 56, height: 56, borderRadius: 12, flexShrink: 0 }} />
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <div className="ms-skel-bar" style={{ height: 16, width: '60%' }} />
                                        <div className="ms-skel-bar" style={{ height: 12, width: '35%' }} />
                                    </div>
                                </div>
                                <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    <div className="ms-skel-bar" style={{ height: 12 }} />
                                    <div className="ms-skel-bar" style={{ height: 12, width: '80%' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="ms-empty">
                        {Icon.empty}
                        <h3>{search ? 'No sessions found' : 'No sessions yet'}</h3>
                        <p>{search ? `No results for "${search}". Try a different keyword.` : 'Sessions you create will appear here.'}</p>
                    </div>
                ) : (
                    <div className={`ms-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                        {filtered.map((session, index) => (
                            <SessionCard
                                key={session._id}
                                session={session}
                                index={index}
                                viewMode={viewMode}
                                onDelete={handleDelete}
                                onRequest={() => handleRequest(session)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ManageSession;
