import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { BASE_URL } from "../../endPoints";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import { getLearnerBookings, deleteRequest } from "../../services/requestService";

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  .myb-root {
    font-family: 'DM Sans', sans-serif;
    background: #f5f6fa;
    min-height: 100vh;
  }

  /* ── Hero ── */
  .myb-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2044 100%);
    padding: 52px 24px 44px;
    position: relative;
    overflow: hidden;
  }
  .myb-hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 65% 75% at 88% 50%, rgba(99,102,241,.18) 0%, transparent 70%),
      radial-gradient(ellipse 35% 45% at 6%  80%, rgba(16,185,129,.10) 0%, transparent 60%);
    pointer-events: none;
  }
  .myb-hero-inner {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  .myb-hero h1 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.7rem, 3.5vw, 2.4rem);
    font-weight: 700; color: #fff;
    margin: 0 0 6px; letter-spacing: -.02em;
  }
  
  /* ── Body ── */
  .myb-body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 36px 20px 64px;
  }

  /* ── Grid ── */
  .myb-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 18px;
  }

  /* ── Card ── */
  .myb-card {
    background: #fff;
    border-radius: 16px;
    border: 1.5px solid #e8eaf0;
    overflow: hidden;
    display: flex; flex-direction: column;
    transition: box-shadow .2s, transform .2s, border-color .2s;
  }
  .myb-card:hover {
    box-shadow: 0 8px 32px rgba(99,102,241,.10);
    transform: translateY(-2px);
    border-color: #c7d2fe;
  }

  /* Accent bar */
  .myb-card-accent { height: 4px; }
  .myb-card-accent.pending  { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
  .myb-card-accent.accepted { background: linear-gradient(90deg, #10b981, #34d399); }
  .myb-card-accent.rejected { background: linear-gradient(90deg, #f87171, #fca5a5); }

  /* Main Info */
  .myb-card-main { padding: 20px; flex: 1; }

  .myb-title-row {
    display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 12px;
  }
  .myb-session-name {
    font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 600; color: #0f172a; margin: 0; line-height: 1.3;
  }
  
  /* Badges */
  .myb-badge {
    display: inline-flex; align-items: center; gap: 4px; font-size: 11.5px; font-weight: 600; padding: 4px 10px; border-radius: 100px;
  }
  .myb-badge.req-pending   { background: #e0e7ff; color: #4f46e5; }
  .myb-badge.req-accepted  { background: #d1fae5; color: #059669; }
  .myb-badge.req-rejected  { background: #fee2e2; color: #dc2626; }

  /* Info Grid */
  .myb-info-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; margin-bottom: 16px;
    background: #f8fafc; border-radius: 12px; padding: 12px; border: 1px solid #f1f5f9;
  }
  .myb-info-item { display: flex; flex-direction: column; gap: 2px; }
  .myb-info-label { font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: #64748b; }
  .myb-info-value { font-size: 13.5px; color: #0f172a; font-weight: 500; }

  /* Date */
  .myb-date { font-size: 12px; color: #94a3b8; display: flex; align-items: center; gap: 6px; }

  /* Footer / Action Buttons */
  .myb-card-footer {
    padding: 16px 20px; border-top: 1px solid #f1f5f9; display: flex; flex-direction: column; gap: 8px; background: #fafafa;
  }
  
  .myb-btn {
    display: flex; align-items: center; justify-content: center; gap: 6px; padding: 8px 16px; border-radius: 10px;
    font-size: 13.5px; font-weight: 600; cursor: pointer; text-decoration: none; transition: all .2s; border: none; width: 100%;
  }
  .myb-btn-primary { background: #2563eb; color: white; }
  .myb-btn-primary:hover { background: #1d4ed8; transform: translateY(-1px); }
  .myb-btn-youtube { background: #ef4444; color: white; }
  .myb-btn-youtube:hover { background: #dc2626; transform: translateY(-1px); }
  .myb-btn-delete { background: #fee2e2; color: #b91c1c; }
  .myb-btn-delete:hover { background: #fca5a5; }

  /* ── Empty State ── */
  .myb-empty { text-align: center; padding: 60px 20px; color: #64748b; grid-column: 1 / -1; }
  .myb-empty h3 { font-family: 'Sora', sans-serif; color: #1e293b; font-size: 20px; margin-bottom: 8px; }
`;

function BookingCard({ booking, onDelete }) {
  const reqPending = booking.requestStatus == 1;
  const reqAccepted = booking.requestStatus == 2;
  const reqRejected = booking.requestStatus == 3;

  const accentClass = reqPending ? "pending" : reqAccepted ? "accepted" : "rejected";
  const date = booking.createdAt ? new Date(booking.createdAt).toLocaleDateString() : "—";
  
  const session = booking.sessionId || {};
  const mentor = booking.mentorId?.userId?.name || "—";

  return (
    <div className="myb-card">
      <div className={`myb-card-accent ${accentClass}`} />
      <div className="myb-card-main">
        <div className="myb-title-row">
          <h3 className="myb-session-name">{session.sessionName || "Session"}</h3>
          <span className={`myb-badge ${reqPending ? "req-pending" : reqAccepted ? "req-accepted" : "req-rejected"}`}>
            {reqPending ? "⏳ Pending" : reqAccepted ? "✅ Accepted" : "❌ Rejected"}
          </span>
        </div>

        <div className="myb-info-grid">
          <div className="myb-info-item">
            <span className="myb-info-label">Mentor</span>
            <span className="myb-info-value">{mentor}</span>
          </div>
          <div className="myb-info-item">
            <span className="myb-info-label">Price</span>
            <span className="myb-info-value">{session.isPaid ? `$${session.price}` : "Free"}</span>
          </div>
          <div className="myb-info-item">
            <span className="myb-info-label">Duration</span>
            <span className="myb-info-value">{session.duration || "—"}</span>
          </div>
          <div className="myb-info-item">
            <span className="myb-info-label">Session Date</span>
            <span className="myb-info-value">{session.date ? new Date(session.date).toLocaleDateString() : "TBD"}</span>
          </div>
        </div>

        <div className="myb-date">
          <i className="bi bi-calendar"></i> Requested on: {date}
        </div>
      </div>

      <div className="myb-card-footer">
        {reqAccepted ? (
          <>
            {session.meetingLink && (
              <a href={session.meetingLink} target="_blank" rel="noreferrer" className="myb-btn myb-btn-primary">
                <i className="bi bi-camera-video-fill"></i> Join Meeting
              </a>
            )}
            {session.youtubeLink && (
              <a href={session.youtubeLink} target="_blank" rel="noreferrer" className="myb-btn myb-btn-youtube">
                <i className="bi bi-youtube"></i> Watch on YouTube
              </a>
            )}
            {!session.meetingLink && !session.youtubeLink && (
              <div style={{ textAlign: 'center', fontSize: '13px', color: '#64748b', padding: '8px 0' }}>
                No links provided for this session yet.
              </div>
            )}
          </>
        ) : (
          <button className="myb-btn myb-btn-delete" onClick={() => onDelete(booking._id)}>
            <i className="bi bi-trash-fill"></i> Cancel Request
          </button>
        )}
      </div>
    </div>
  );
}

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const payload = {
        limit,
        startPoint: (currentPage - 1) * limit,
        learnerId: localStorage.getItem("learnerMentorId")
      };
      const res = await getLearnerBookings(payload);
      if (res.data.success) {
        setBookings(res.data.data);
        setTotal(res.data.total);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: "Cancel Request?",
      text: "Are you sure you want to cancel your session request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#e2e8f0",
      confirmButtonText: "Yes, cancel it"
    });

    if (result.isConfirmed) {
      const res = await deleteRequest({ _id });
      if (res.data.success) {
        toast.success("Request cancelled successfully");
        fetchBookings();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [currentPage]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="myb-root">
      <style>{styles}</style>
      
      {/* Header */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h3 className="text-white display-3 mb-4 wow fadeInDown">My Bookings</h3>
            <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/learnermentor/dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active text-primary">My Bookings</li>
            </ol>
        </div>
      </div>

      <div className="myb-body">
        {loading ? (
          <div className="myb-grid">
            <p className="text-center w-100">Loading bookings...</p>
          </div>
        ) : bookings.length === 0 ? (
          <div className="myb-empty">
            <i className="bi bi-calendar-x display-1 mb-3"></i>
            <h3>No Bookings Found</h3>
            <p>You haven't requested any sessions yet. Browse available sessions and book one!</p>
          </div>
        ) : (
          <div className="myb-grid">
            {bookings.map((booking) => (
              <BookingCard key={booking._id} booking={booking} onDelete={handleDelete} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-5 d-flex justify-content-center">
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBookings;
